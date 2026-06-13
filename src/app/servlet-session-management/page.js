import TopicPage from "../component/shared/topic-page.js";
import { buildTopicMetadata } from "../component/shared/topic-utils.js";
import { getServletTopic } from "../component/content/servlets-topics.js";

const topic = getServletTopic("/servlet-session-management");
export const metadata = buildTopicMetadata(topic);

export default function Page() {
  return <TopicPage sectionId="servlets" topic={topic} />;
}
