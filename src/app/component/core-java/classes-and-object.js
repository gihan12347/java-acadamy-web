"use client";

import {
  Copy,
  Check
} from "lucide-react";
import { useState } from "react";

// Placeholder for your imported hook
const useCopyToClipboard = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };
  return { copiedCode, copyToClipboard };
};

// Placeholder code examples - replace with your actual imports
const codeExamples = {
  concreteClassExample: `class Building {
    int floors;
    String color;
    
    Building(int floors, String color) {
        this.floors = floors;
        this.color = color;
    }
}`,
  objectExample: `Building building1 = new Building(5, "Blue");
Building building2 = new Building(10, "White");

System.out.println("This building has " + building1.floors + " floors and is " + building1.color + ".");
System.out.println("This building has " + building2.floors + " floors and is " + building2.color + ".");`,
  reflectionExample: `Class<?> clazz = Class.forName("Building");
Building building = (Building) clazz.getDeclaredConstructor().newInstance();`,
  cloneObjectExample: `class Building implements Cloneable {
    int floors;
    String color;
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

Building original = new Building(5, "Blue");
Building cloned = (Building) original.clone();`,
  desenterlizationExample: `ObjectInputStream in = new ObjectInputStream(new FileInputStream("building.ser"));
Building building = (Building) in.readObject();
in.close();`
};

export default function JavaClassesObjects() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center px-2">
          Classes and Objects in Java
        </h1>

        {/* Introduction */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Classes and objects are the foundation of object-oriented
            programming. They help to structure real-world entities in our code
            base.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2 sm:ml-4 text-sm sm:text-base">
            <li>
              <strong>Classes:</strong> Blueprint that creates objects. Shares
              common properties of the object.
            </li>
            <li>
              <strong>Objects:</strong> Specific entity that is created from a
              class.
            </li>
          </ul>
        </section>

        {/* Real Life Analogy */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Real Life Analogy: Building Blueprint
          </h2>

          <div className="p-3 sm:p-4 mb-4">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">
              Class = Blueprint
            </p>
            <p className="text-gray-800 mb-3 text-sm sm:text-base">A building blueprint defines:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>How many windows</li>
              <li>How many floors</li>
              <li>Type of materials</li>
              <li>Layout</li>
            </ul>
            <p className="text-gray-800 mt-3 italic text-sm sm:text-base">
              But a blueprint is not a building — it's only the plan.
            </p>
          </div>

          <div className="p-3 sm:p-4 mb-4">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">
              Object = Real Building
            </p>
            <p className="text-gray-800 text-sm sm:text-base">
              Objects are real buildings that are built using the blueprint.
            </p>
          </div>

          <p className="text-red-600 font-semibold text-sm sm:text-base">
            ✔ Class = Blueprint, Object = Real Building
          </p>
        </section>

        {/* Java Class Example */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Java Class (Blueprint)
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            The Building class is like a blueprint:
          </p>
          <div className="relative bg-black  p-3 sm:p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  Java Class (Blueprint)
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.concreteClassExample, "concreteClassExample")}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "concreteClassExample" ? (
                  <>
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.concreteClassExample}
              </code>
            </pre>
          </div>
        </section>

        {/* Object Creation */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Object = Real Building
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Objects are created from the class using the{" "}
            <code className=" text-red-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
              new
            </code>{" "}
            keyword.
          </p>
          <div className="relative bg-black  p-3 sm:p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  objectExample.java
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.objectExample, "objectExample")}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "objectExample" ? (
                  <>
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.objectExample}
              </code>
            </pre>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50 ">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Output:</p>
            <code className="text-red-600 block text-xs sm:text-sm break-words">
              This building has 5 floors and is Blue.
            </code>
            <code className="text-red-600 block text-xs sm:text-sm break-words">
              This building has 10 floors and is White.
            </code>
          </div>
        </section>

        {/* Ways to Create Objects */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Ways to Create Objects
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            There are four main ways to create objects in Java:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4  ">
              <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                1. Using new keyword
              </h3>
              <p className="text-gray-800 text-xs sm:text-sm">Most common way</p>
            </div>
            <div className="p-3 sm:p-4  ">
              <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                2. Using Reflection
              </h3>
              <p className="text-gray-800 text-xs sm:text-sm">
                Create objects dynamically
              </p>
            </div>
            <div className="p-3 sm:p-4  ">
              <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                3. Using clone() method
              </h3>
              <p className="text-gray-800 text-xs sm:text-sm">Copy existing objects</p>
            </div>
            <div className="p-3 sm:p-4  ">
              <h3 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                4. Using Deserialization
              </h3>
              <p className="text-gray-800 text-xs sm:text-sm">Recreate from byte stream</p>
            </div>
          </div>
        </section>

        {/* Method 1: Using new keyword */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            1. Using new Keyword
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Most common way to create an object.
          </p>
          <div className="bg-gray-900 text-gray-100 p-3 sm:p-4  overflow-x-auto">
            <pre className="text-xs sm:text-sm">
              {`Building building1 = new Building(5, "Blue");`}
            </pre>
          </div>
        </section>

        {/* Method 2: Using Reflection */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            2. Using Reflection
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Create an object without using the{" "}
            <code className="bg-white text-red-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">new</code>{" "}
            keyword, by asking Java to create it at runtime using the class
            name.
          </p>
          <div className="p-3 sm:p-4 mb-4 bg-gray-50 ">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Useful for:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2 sm:ml-4 text-xs sm:text-sm">
              <li>Frameworks (Spring, Hibernate)</li>
              <li>Loading classes dynamically</li>
              <li>Working with unknown classes at runtime</li>
            </ul>
          </div>
          <div className="relative bg-black  p-3 sm:p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono break-all">
                  reflectionExample.java
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.reflectionExample, "reflectionExample")}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "reflectionExample" ? (
                  <>
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.reflectionExample}
              </code>
            </pre>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50 ">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Explanation:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2 sm:ml-4 text-xs sm:text-sm">
              <li className="break-words">
                <code className="text-red-600">Class.forName("Building")</code>{" "}
                → loads the class using its name
              </li>
              <li className="break-words">
                <code className="text-red-600">
                  getDeclaredConstructor().newInstance()
                </code>{" "}
                → creates object
              </li>
              <li>
                No <code className="text-red-600">new Building()</code> used!
              </li>
            </ul>
          </div>
        </section>

        {/* Method 3: Using clone() */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            3. Using clone() Method
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            The{" "}
            <code className="text-red-600 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
              clone()
            </code>{" "}
            method creates a copy of an existing object instead of creating a
            new one manually.
          </p>
          <div className="p-3 sm:p-4 mb-4 bg-gray-50 ">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">
              Steps to Use clone():
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2 sm:ml-4 text-xs sm:text-sm">
              <li>
                Your class must implement{" "}
                <code className="text-red-600">Cloneable</code>
              </li>
              <li>
                You must override the{" "}
                <code className="text-red-600">clone()</code> method
              </li>
              <li>Then you can copy the object</li>
            </ul>
          </div>
          <div className="relative bg-black  p-3 sm:p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono break-all">
                  cloneObjectExample.java
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.cloneObjectExample, "cloneObjectExample")}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "cloneObjectExample" ? (
                  <>
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.cloneObjectExample}
              </code>
            </pre>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50 ">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Output:</p>
            <code className="text-red-600 block text-xs sm:text-sm">Original: 5, Blue</code>
            <code className="text-red-600 block text-xs sm:text-sm">Clone: 5, Blue</code>
          </div>
        </section>

        {/* Method 4: Using Deserialization */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            4. Using Deserialization
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Deserialization is a technique of reading an object from the saved
            state in a file. The object is recreated from a stored byte stream.
          </p>
          <div className="relative bg-black  p-3 sm:p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono break-all">
                  desenterlizationExample.java
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.desenterlizationExample, "desenterlizationExample")}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "desenterlizationExample" ? (
                  <>
                    <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.desenterlizationExample}
              </code>
            </pre>
          </div>
          <div className="p-3 sm:p-4 bg-gray-50 ">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Output:</p>
            <code className="text-red-600 text-xs sm:text-sm">Building with 5 floors</code>
          </div>
        </section>

        {/* Summary */}       
<section className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4 text-center">
            Summary
          </h2>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse border-2 border-red-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Method
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-left">
                    When to Use
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Key Feature
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    new keyword
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Standard object creation
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Most common way
                  </td>
                </tr>
                <tr>
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Reflection
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Frameworks, dynamic loading
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Runtime class loading
                  </td>
                </tr>
                <tr>
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    clone()
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Copying existing objects
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Creates duplicate
                  </td>
                </tr>
                <tr>
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Deserialization
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Loading saved objects
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    From byte stream
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            <div className="border-2 border-red-300  overflow-hidden">
              <div className="bg-red-600 text-white px-4 py-3 font-semibold">
                new keyword
              </div>
              <div className="p-4 space-y-2">
                <div>
                  <span className="text-red-700 font-semibold text-sm">When to Use:</span>
                  <p className="text-gray-700">Standard object creation</p>
                </div>
                <div>
                  <span className="text-red-700 font-semibold text-sm">Key Feature:</span>
                  <p className="text-gray-700">Most common way</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-300  overflow-hidden">
              <div className="bg-red-600 text-white px-4 py-3 font-semibold">
                Reflection
              </div>
              <div className="p-4 space-y-2">
                <div>
                  <span className="text-red-700 font-semibold text-sm">When to Use:</span>
                  <p className="text-gray-700">Frameworks, dynamic loading</p>
                </div>
                <div>
                  <span className="text-red-700 font-semibold text-sm">Key Feature:</span>
                  <p className="text-gray-700">Runtime class loading</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-300  overflow-hidden">
              <div className="bg-red-600 text-white px-4 py-3 font-semibold">
                clone()
              </div>
              <div className="p-4 space-y-2">
                <div>
                  <span className="text-red-700 font-semibold text-sm">When to Use:</span>
                  <p className="text-gray-700">Copying existing objects</p>
                </div>
                <div>
                  <span className="text-red-700 font-semibold text-sm">Key Feature:</span>
                  <p className="text-gray-700">Creates duplicate</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-red-300  overflow-hidden">
              <div className="bg-red-600 text-white px-4 py-3 font-semibold">
                Deserialization
              </div>
              <div className="p-4 space-y-2">
                <div>
                  <span className="text-red-700 font-semibold text-sm">When to Use:</span>
                  <p className="text-gray-700">Loading saved objects</p>
                </div>
                <div>
                  <span className="text-red-700 font-semibold text-sm">Key Feature:</span>
                  <p className="text-gray-700">From byte stream</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}