"use client";

import { sections } from "../../component/constant.js";
import LeftPanel from "../../component/left-pannel.js";
import Header from "../../component/header.js";
import SetImplementationsGuide from "../../component/core-java/set-explanantion.js"

export default function SetImplementationsPage() {
  const section = sections.find((s) => s.id === "core-java");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <LeftPanel
            section={section}
            selectedTopicId='10'
          />
        </div>

        <main
          id="scrollArea"
          className="flex-1 p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-y-auto"
        >
          <SetImplementationsGuide/>
        </main>
      </div>
    </div>
  );
}
