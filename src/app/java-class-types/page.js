"use client";

import { sections } from "../component/constant.js";
import LeftPanel from "../component/left-pannel.js";
import Header from "../component/header.js";
import JavaClassTypes from "../component/core-java/java-class-types.js";

export default function IntroJavaPage() {
  const section = sections.find((s) => s.id === "core-java");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <LeftPanel
            section={section}
            selectedTopicId='6'
          />
        </div>

        <main
          id="scrollArea"
          className="flex-1 p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-y-auto"
        >
          <JavaClassTypes/>
        </main>
      </div>
    </div>
  );
}
