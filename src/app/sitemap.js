import { sections } from "./component/constant.js";

const siteUrl = "https://javaacademyhub.com";

const extraRoutes = [
  "",
  "/complete-java-guide",
  "/module",
  "/java-collections-framework/list",
  "/java-collections-framework/set",
  "/java-collections-framework/map",
  "/java-collections-framework/queue",
];

export default function sitemap() {
  const now = new Date();

  const topicRoutes = sections.flatMap((section) => [
    section.url,
    ...section.topics.map((t) => t.url),
  ]);

  const routes = [...new Set([...extraRoutes, ...topicRoutes])];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/module") ? 0.7 : 0.8,
  }));
}
