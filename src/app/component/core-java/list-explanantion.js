"use client";

import React, { useState } from "react";
import {
  Code,
  List,
  Link2,
  Shield,
  Layers,
  Copy,
  Check,
  Building2,
  Lightbulb,
} from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function ListImplementationsGuide() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    arrayList: `import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<String> rooms = new ArrayList<>();
        
        rooms.add("Room 101");
        rooms.add("Room 102");
        rooms.add("Room 103");
        
        // Fast access by index
        System.out.println("Second room: " + rooms.get(1));  
    }
}`,
    linkedList: `import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<String> containers = new LinkedList<>();
        
        containers.add("Container A");
        containers.add("Container B");
        containers.add("Container C");
        
        // Fast insertion at the beginning
        containers.addFirst("Container X");
        System.out.println(containers);
    }
}`,
    vector: `import java.util.Vector;

public class VectorExample {
    public static void main(String[] args) {
        Vector<String> safeRooms = new Vector<>();
        
        safeRooms.add("Safe Room 1");
        safeRooms.add("Safe Room 2");
        System.out.println(safeRooms);
    }
}`,
    stack: `import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> bricks = new Stack<>();
        
        bricks.push("Brick 1");
        bricks.push("Brick 2");
        bricks.push("Brick 3");
        
        // Removes the last inserted item
        System.out.println("Removed: " + bricks.pop());  
    }
}`,
  };

  const listTypes = [
    {
      id: "arrayList",
      number: "1",
      icon: List,
      title: "ArrayList",
      subtitle: "Dynamic array, fast random access",
      meaning:
        "Works like a growable array. You can quickly jump to any element using an index.",
      buildingExample:
        "Like a hallway with numbered rooms—you can quickly jump to any room.",
      code: codeExamples.arrayList,
      filename: "ArrayListExample.java",
    },
    {
      id: "linkedList",
      number: "2",
      icon: Link2,
      title: "LinkedList",
      subtitle: "Doubly linked list, fast insert/delete",
      meaning:
        "Each element points to the next AND previous. Fast when adding or removing items in between.",
      buildingExample:
        "Like containers attached in a chain—you can easily add or remove containers anywhere.",
      code: codeExamples.linkedList,
      filename: "LinkedListExample.java",
    },
    {
      id: "vector",
      number: "3",
      icon: Shield,
      title: "Vector",
      subtitle: "Synchronized ArrayList",
      meaning:
        "Works like an ArrayList. But it is thread-safe (good when many people use it at the same time).",
      buildingExample:
        "Same hallway of rooms, but with a guard letting one person in at a time.",
      code: codeExamples.vector,
      filename: "VectorExample.java",
    },
    {
      id: "stack",
      number: "4",
      icon: Layers,
      title: "Stack",
      subtitle: "Last-In, First-Out (LIFO)",
      meaning:
        "The last item you put in is the first item you take out. Like a pile of plates.",
      buildingExample:
        "A stack of bricks: the last brick added is the first one removed.",
      code: codeExamples.stack,
      filename: "StackExample.java",
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
            List Implementations in Java
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
            Master dynamic data structures with simple examples
          </p>
        </div>

        {/* INTRO */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600  flex items-center justify-center">
              <List className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3">
                What are List Implementations?
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                List implementations in Java provide different ways to store and
                manage collections of elements. Each implementation has unique
                characteristics that make it suitable for specific use cases.
                Understanding these differences helps you choose the right data
                structure for your program.
              </p>
            </div>
          </div>
        </section>

        {/* LIST IMPLEMENTATIONS */}
        {listTypes.map((listType) => (
          <section key={listType.id} className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-lg">
                {listType.number}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
                {listType.title}
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 font-medium">
              {listType.subtitle}
            </p>

            {/* SIMPLE MEANING */}
            <div className="mb-4 sm:mb-6 p-4 sm:p-6 border-l-4 border-red-600 bg-gray-50 rounded-r-xl">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 font-bold text-base sm:text-lg">Simple meaning</p>
              </div>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {listType.meaning}
              </p>
            </div>

            {/* BUILDING EXAMPLE */}
            <div className="mb-4 sm:mb-6 p-4 sm:p-6 border-l-4 border-red-600 bg-gray-50 rounded-r-xl">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-red-600 font-bold text-base sm:text-lg">
                  Building example
                </p>
              </div>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                {listType.buildingExample}
              </p>
            </div>

            {/* CODE EXAMPLE */}
            <div className="mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                Code example
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
                      {listType.filename}
                    </span>
                  </div>

                  <button
                    onClick={() => copyToClipboard(listType.code, listType.id)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
                  >
                    {copiedCode === listType.id ? (
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
                    {listType.code}
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
              <List className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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
                        Class
                      </th>
                      <th className="border border-red-700 p-2 sm:p-3 lg:p-4 text-left font-bold text-xs sm:text-sm lg:text-base">
                        Simple Meaning
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        ArrayList
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Dynamic array, fast access
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        LinkedList
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Linked nodes, fast insert/delete
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        Vector
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        Synchronized ArrayList
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 font-semibold text-red-600 text-xs sm:text-sm lg:text-base">
                        Stack
                      </td>
                      <td className="border border-gray-300 p-2 sm:p-3 lg:p-4 text-gray-800 text-xs sm:text-sm lg:text-base">
                        LIFO structure
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}