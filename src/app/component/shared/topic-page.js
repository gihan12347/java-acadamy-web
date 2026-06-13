"use client";

import { sections } from "../constant.js";
import Header from "../header.js";
import LeftPanel from "../left-pannel.js";
import TopicArticle from "./topic-article.js";
import { getTopicIndex } from "./topic-utils.js";

export default function TopicPage({ sectionId, topic }) {
  const section = sections.find((s) => s.id === sectionId);
  const selectedTopicId = getTopicIndex(section, topic.slug);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <LeftPanel section={section} selectedTopicId={selectedTopicId} />
        </div>

        <main
          id="scrollArea"
          className="flex-1 p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-y-auto"
        >
          <TopicArticle topic={topic} />
        </main>
      </div>
    </div>
  );
}
