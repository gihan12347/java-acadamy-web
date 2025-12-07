"use client";

import { sections } from "../component/constant.js";
import LeftPanel from "../component/left-pannel.js";
import Header from "../component/header.js";
import JavaAccessModifiers from "../component/core-java/access-modifiers.js";

export default function JavaAccessModifiersPage() {
  const section = sections.find((s) => s.id === "core-java");

  return (
    <div className="flex flex-col h-screen bg-white">
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
          className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 overflow-y-auto"
        >
          <JavaAccessModifiers/>
        </main>
      </div>
    </div>
  );
}
