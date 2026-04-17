"use client";

import { sections } from "../component/constant.js";
import LeftPanel from "../component/left-pannel.js";
import Header from "../component/header.js";
import GradleJarWarGuide from "../component/build-tools/war-file-and-jar-file.js";

export default function GradleLifecyclePage() {
  const section = sections.find((s) => s.id === "build-tools");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <LeftPanel
            section={section}
            selectedTopicId='5'
          />
        </div>

        <main
          id="scrollArea"
          className="flex-1 p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-y-auto"
        >
          <GradleJarWarGuide/>
        </main>
      </div>
    </div>
  );
}
