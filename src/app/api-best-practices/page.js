import TopicPage from "../component/shared/topic-page.js";
import { buildTopicMetadata } from "../component/shared/topic-utils.js";
import { getApiTopic } from "../component/content/apis-topics.js";

const topic = getApiTopic("/api-best-practices");
export const metadata = buildTopicMetadata(topic);

export default function Page() {
  return <TopicPage sectionId="apis" topic={topic} />;
}
