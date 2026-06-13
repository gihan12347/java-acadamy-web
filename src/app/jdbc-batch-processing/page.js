import TopicPage from "../component/shared/topic-page.js";
import { buildTopicMetadata } from "../component/shared/topic-utils.js";
import { getJdbcTopic } from "../component/content/jdbc-topics.js";

const topic = getJdbcTopic("/jdbc-batch-processing");
export const metadata = buildTopicMetadata(topic);

export default function Page() {
  return <TopicPage sectionId="jdbc" topic={topic} />;
}
