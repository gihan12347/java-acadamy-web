import TopicPage from "../component/shared/topic-page.js";
import { buildTopicMetadata } from "../component/shared/topic-utils.js";
import { getMicroservicesExtraTopic } from "../component/content/microservices-extra.js";

const topic = getMicroservicesExtraTopic("/microservices-security");
export const metadata = buildTopicMetadata(topic);

export default function Page() {
  return <TopicPage sectionId="java-microservices" topic={topic} />;
}
