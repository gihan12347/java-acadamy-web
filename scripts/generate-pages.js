const fs = require("fs");
const path = require("path");

const pages = [
  { slug: "servlets-introduction", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlets-introduction" },
  { slug: "servlet-lifecycle", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-lifecycle" },
  { slug: "servlet-httpservlet", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-httpservlet" },
  { slug: "servlet-request-response", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-request-response" },
  { slug: "servlet-session-management", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-session-management" },
  { slug: "servlet-cookies", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-cookies" },
  { slug: "servlet-filters", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-filters" },
  { slug: "servlet-request-dispatcher", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-request-dispatcher" },
  { slug: "servlet-config-context", sectionId: "servlets", getter: "getServletTopic", import: "servlets-topics.js", url: "/servlet-config-context" },
  { slug: "jdbc-introduction", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-introduction" },
  { slug: "jdbc-drivers", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-drivers" },
  { slug: "jdbc-database-connection", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-database-connection" },
  { slug: "jdbc-statement", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-statement" },
  { slug: "jdbc-preparedstatement", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-preparedstatement" },
  { slug: "jdbc-callablestatement", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-callablestatement" },
  { slug: "jdbc-resultset", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-resultset" },
  { slug: "jdbc-transaction-management", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-transaction-management" },
  { slug: "jdbc-connection-pooling", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-connection-pooling" },
  { slug: "jdbc-batch-processing", sectionId: "jdbc", getter: "getJdbcTopic", import: "jdbc-topics.js", url: "/jdbc-batch-processing" },
  { slug: "api-introduction", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/api-introduction" },
  { slug: "rest-principles", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/rest-principles" },
  { slug: "rest-http-methods", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/rest-http-methods" },
  { slug: "rest-create-services", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/rest-create-services" },
  { slug: "json-processing", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/json-processing" },
  { slug: "jax-rs", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/jax-rs" },
  { slug: "spring-boot-rest", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/spring-boot-rest" },
  { slug: "api-documentation", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/api-documentation" },
  { slug: "api-testing", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/api-testing" },
  { slug: "api-best-practices", sectionId: "apis", getter: "getApiTopic", import: "apis-topics.js", url: "/api-best-practices" },
  { slug: "microservices-docker-kubernetes", sectionId: "java-microservices", getter: "getMicroservicesExtraTopic", import: "microservices-extra.js", url: "/microservices-docker-kubernetes" },
  { slug: "microservices-security", sectionId: "java-microservices", getter: "getMicroservicesExtraTopic", import: "microservices-extra.js", url: "/microservices-security" },
];

function template(p) {
  return `import TopicPage from "../component/shared/topic-page.js";
import { buildTopicMetadata } from "../component/shared/topic-utils.js";
import { ${p.getter} } from "../component/content/${p.import}";

const topic = ${p.getter}("${p.url}");
export const metadata = buildTopicMetadata(topic);

export default function Page() {
  return <TopicPage sectionId="${p.sectionId}" topic={topic} />;
}
`;
}

pages.forEach((p) => {
  const dir = path.join("src/app", p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.js"), template(p));
});

console.log("Created", pages.length, "pages");
