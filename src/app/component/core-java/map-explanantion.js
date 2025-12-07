"use client";

import React, { useState } from "react";
import {
  Code,
  Database,
  Link2,
  TrendingUp,
  Shield,
  Copy,
  Check,
  Lightbulb,
  TableProperties,
} from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function MapImplementationsGuide() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    hashMap: `Map<Integer, String> map = new HashMap<>();
map.put(1, "Apple");
map.put(2, "Banana");
map.put(3, "Cherry");

System.out.println(map);
// Example output (order random): {2=Banana, 1=Apple, 3=Cherry}`,
    linkedHashMap: `Map<Integer, String> map = new LinkedHashMap<>();
map.put(1, "Apple");
map.put(2, "Banana");
map.put(3, "Cherry");

System.out.println(map);
// Output: {1=Apple, 2=Banana, 3=Cherry}`,
    treeMap: `Map<Integer, String> map = new TreeMap<>();
map.put(3, "Cherry");
map.put(1, "Apple");
map.put(2, "Banana");

System.out.println(map);
// Output: {1=Apple, 2=Banana, 3=Cherry} (sorted by key)`,
    hashtable: `Map<Integer, String> map = new Hashtable<>();
map.put(1, "Apple");
map.put(2, "Banana");

System.out.println(map);
// Output: {2=Banana, 1=Apple}`,
  };

  const mapTypes = [
    {
      id: "hashMap",
      number: "1",
      icon: Database,
      title: "HashMap",
      explanations: [
        "Stores key–value pairs",
        "Fast lookup",
        "No order guaranteed",
      ],
      code: codeExamples.hashMap,
      filename: "HashMapExample.java",
    },
    {
      id: "linkedHashMap",
      number: "2",
      icon: Link2,
      title: "LinkedHashMap",
      explanations: [
        "Same as HashMap, but keeps the insertion order",
      ],
      code: codeExamples.linkedHashMap,
      filename: "LinkedHashMapExample.java",
    },
    {
      id: "treeMap",
      number: "3",
      icon: TrendingUp,
      title: "TreeMap",
      explanations: [
        "Stores keys in sorted (ascending) order",
        "Sorting happens automatically",
      ],
      code: codeExamples.treeMap,
      filename: "TreeMapExample.java",
    },
    {
      id: "hashtable",
      number: "4",
      icon: Shield,
      title: "Hashtable",
      explanations: [
        "Like HashMap, but thread-safe",
        "Legacy (old), rarely used now",
        "Does NOT allow null keys or values",
      ],
      code: codeExamples.hashtable,
      filename: "HashtableExample.java",
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
            Map Implementations in Java
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
            Understanding HashMap, LinkedHashMap, TreeMap, and Hashtable
          </p>
        </div>

        {/* INTRO */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600  flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3">
                What are Map Implementations?
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                Map implementations in Java store key-value pairs, allowing you to quickly retrieve values 
                using their associated keys. Each implementation differs in ordering behavior, null handling, 
                and thread-safety. Understanding these differences helps you choose the right Map for your application.
              </p>
            </div>
          </div>
        </section>

        {/* MAP IMPLEMENTATIONS */}
        {mapTypes.map((mapType) => (
          <section key={mapType.id} className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                {mapType.number}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
                {mapType.title}
              </h2>
            </div>

            {/* SIMPLE EXPLANATION */}
            <div className="mb-4 sm:mb-6 p-4 sm:p-6  border-l-4 border-red-600 bg-gray-50">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 font-bold text-base sm:text-lg">Simple explanation</p>
              </div>
              <ul className="space-y-2">
                {mapType.explanations.map((explanation, index) => (
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
                      {mapType.filename}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(mapType.code, mapType.id)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
                  >
                    {copiedCode === mapType.id ? (
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
                    {mapType.code}
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
              Quick Summary Table
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Map Type
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Order?
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Allows null?
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Thread-safe?
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        HashMap
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No order
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Yes
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Fast, most used
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        LinkedHashMap
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Insertion order
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Yes
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Predictable order
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        TreeMap
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Sorted by key
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No (rare cases)
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Uses Red-Black Tree
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        Hashtable
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No order
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        No
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Yes
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Old, replaced by ConcurrentHashMap
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">HashMap</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Fastest</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Random order</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Allows null</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Link2 className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">LinkedHashMap</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Insertion order</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Predictable</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Allows null</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">TreeMap</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Auto-sorted</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>By key</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>No null keys</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 sm:p-6  border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-red-600">Hashtable</h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base text-gray-800">
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Thread-safe</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>Legacy</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-600 flex-shrink-0">•</span>
                  <span>No nulls</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHEN TO USE */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
              When to Use Each Map?
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="bg-gray-50 p-4 sm:p-5  border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 text-sm sm:text-base">Use HashMap when:</h3>
              <p className="text-gray-800 text-sm sm:text-base">You need fast lookups and don't care about order</p>
            </div>

            <div className="bg-gray-50 p-4 sm:p-5  border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 text-sm sm:text-base">Use LinkedHashMap when:</h3>
              <p className="text-gray-800 text-sm sm:text-base">You need to maintain insertion order while still having fast access</p>
            </div>

            <div className="bg-gray-50 p-4 sm:p-5  border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 text-sm sm:text-base">Use TreeMap when:</h3>
              <p className="text-gray-800 text-sm sm:text-base">You need keys automatically sorted in ascending order</p>
            </div>

            <div className="bg-gray-50 p-4 sm:p-5  border-l-4 border-red-600">
              <h3 className="font-bold text-red-600 mb-2 text-sm sm:text-base">Use Hashtable when:</h3>
              <p className="text-gray-800 text-sm sm:text-base">You're working with legacy code (otherwise use ConcurrentHashMap for thread-safety)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}