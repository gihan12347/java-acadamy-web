"use client";

import Header from "../../component/header.js";
import { sections } from "../../component/constant.js";
import LeftPanel from "../../component/left-pannel.js";

export default function QueuePage() {
  const section = sections.find((s) => s.id === "core-java");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:block">
          <LeftPanel section={section} selectedTopicId="10" />
        </div>

        <main id="scrollArea" className="flex-1 p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10 overflow-y-auto">
          <article className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 text-center">
                Java Queue Interface
              </h1>

              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
                The Queue interface in Java is used to hold elements before processing. It
                follows the FIFO (First In, First Out) principle and is useful for tasks like
                scheduling, buffering, and asynchronous processing.
              </p>

              <section className="mb-6 rounded-xl border border-red-100 bg-red-50/40 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3">
                  Common Implementations
                </h2>
                <ul className="list-disc pl-6 text-gray-800 space-y-2 text-sm sm:text-base">
                  <li>LinkedList</li>
                  <li>PriorityQueue</li>
                  <li>ArrayDeque</li>
                </ul>
              </section>

              <section className="rounded-xl border border-red-100 bg-white p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-3">
                  Basic Example
                </h2>
                <pre className="bg-gray-900 text-red-50 p-4 rounded-lg overflow-x-auto text-sm sm:text-base">
{`Queue<String> queue = new LinkedList<>();
queue.add("A");
queue.add("B");
queue.add("C");

System.out.println(queue.poll()); // A`}
                </pre>
              </section>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
