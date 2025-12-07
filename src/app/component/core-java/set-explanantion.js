"use client";

import React, { useState } from "react";
import {
  Code,
  Hash,
  Link2,
  TrendingUp,
  Copy,
  Check,
  Lightbulb,
  TableProperties,
} from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function SetImplementationsGuide() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    hashSet: `Set<String> set = new HashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Cherry");

System.out.println(set); 
// Output might be: [Banana, Cherry, Apple] (order is random)`,
    linkedHashSet: `Set<String> set = new LinkedHashSet<>();
set.add("Apple");
set.add("Banana");
set.add("Cherry");

System.out.println(set);
// Output: [Apple, Banana, Cherry] (same order as inserted)`,
    treeSet: `Set<String> set = new TreeSet<>();
set.add("Cherry");
set.add("Apple");
set.add("Banana");

System.out.println(set);
// Output: [Apple, Banana, Cherry] (sorted alphabetically)`,
  };

  const setTypes = [
    {
      id: "hashSet",
      number: "1",
      icon: Hash,
      title: "HashSet",
      explanations: [
        "Stores items using hashing",
        "No specific order (elements appear randomly)",
      ],
      code: codeExamples.hashSet,
      filename: "HashSetExample.java",
    },
    {
      id: "linkedHashSet",
      number: "2",
      icon: Link2,
      title: "LinkedHashSet",
      explanations: [
        "Stores items in the order you add them",
        "Maintains insertion order",
      ],
      code: codeExamples.linkedHashSet,
      filename: "LinkedHashSetExample.java",
    },
    {
      id: "treeSet",
      number: "3",
      icon: TrendingUp,
      title: "TreeSet",
      explanations: [
        "Stores items in sorted (ascending) order",
        "Uses a Red-Black Tree under the hood",
        "Sorting happens automatically",
      ],
      code: codeExamples.treeSet,
      filename: "TreeSetExample.java",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
            <Code className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-3 sm:mb-4 px-4">
            Set Implementations in Java
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
            Understanding HashSet, LinkedHashSet, and TreeSet
          </p>
        </div>

        {/* INTRO */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600  flex items-center justify-center">
              <TableProperties className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3">
                What are Set Implementations?
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Set implementations in Java are collections that store unique elements with no duplicates. 
                Each implementation differs in how it orders elements—some maintain no order, others preserve 
                insertion order, and some automatically sort elements. Understanding these differences helps 
                you choose the right Set for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* SET IMPLEMENTATIONS */}
        {setTypes.map((setType) => (
          <section key={setType.id} className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                {setType.number}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
                {setType.title}
              </h2>
            </div>

            {/* SIMPLE EXPLANATION */}
            <div className="mb-4 sm:mb-6 p-4 sm:p-6 border-l-4 border-red-600 bg-gray-50 rounded-r-xl">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 font-bold text-base sm:text-lg">Simple explanation</p>
              </div>
              <ul className="space-y-2">
                {setType.explanations.map((explanation, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 text-lg mt-0.5 flex-shrink-0">•</span>
                    <span className="text-sm sm:text-base text-gray-800 leading-relaxed">
                      {explanation}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CODE EXAMPLE */}
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                Example
              </h3>

              <div className="relative bg-black  p-3 sm:p-4 lg:p-6 overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 pb-3 border-b border-red-600">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-600"></div>
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                      {setType.filename}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(setType.code, setType.id)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
                  >
                    {copiedCode === setType.id ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-xs sm:text-sm">Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="text-xs sm:text-sm overflow-x-auto">
                  <code className="text-white font-mono leading-relaxed">
                    {setType.code}
                  </code>
                </pre>
              </div>
            </div>
          </section>
        ))}

        {/* SUMMARY TABLE */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-2xl mb-3 sm:mb-4 shadow-lg">
              <TableProperties className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
              Quick Summary
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Set Type
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Order of Elements
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        How It Works
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        HashSet
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        ❌ No order
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Hashing
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        LinkedHashSet
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        ✔ Keeps insertion order
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Linked list + Hashing
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        TreeSet
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        ✔ Sorted order
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Red-Black Tree
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* KEY DIFFERENCES */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
              Key Differences at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Hash className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">HashSet</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Fastest performance</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Random order</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Best for lookup</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Link2 className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">LinkedHashSet</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Predictable order</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Insertion order preserved</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Good for iteration</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">TreeSet</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Automatically sorted</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Ascending order</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Slower than HashSet</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}