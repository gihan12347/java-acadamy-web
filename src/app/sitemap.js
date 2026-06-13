import { sections } from "./component/constant.js";

const siteUrl = "https://javaacademyhub.com";

const staticRoutes = [
  { route: "", priority: 1, changeFrequency: "weekly" },
  { route: "/complete-java-guide", priority: 0.9, changeFrequency: "monthly" },
  { route: "/module", priority: 0.6, changeFrequency: "monthly" },
  {
    route: "/java-collections-framework/list",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    route: "/java-collections-framework/set",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    route: "/java-collections-framework/map",
    priority: 0.75,
    changeFrequency: "monthly",
  },
  {
    route: "/java-collections-framework/queue",
    priority: 0.75,
    changeFrequency: "monthly",
  },
];

export default function sitemap() {
  const now = new Date();

  const sectionRoutes = sections.map((section) => ({
    route: section.url,
    priority: 0.85,
    changeFrequency: "monthly",
  }));

  const topicRoutes = sections.flatMap((section) =>
    section.topics.map((topic) => ({
      route: topic.url,
      priority: 0.8,
      changeFrequency: "monthly",
    }))
  );

  const seen = new Set();
  const allRoutes = [...staticRoutes, ...sectionRoutes, ...topicRoutes].filter(
    ({ route }) => {
      if (seen.has(route)) return false;
      seen.add(route);
      return true;
    }
  );

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
