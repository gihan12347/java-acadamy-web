import Head from "next/head";
import React from "react";

export default function JavaDataTypes() {
  return (
    <>
      <Head>
        <title>Java Data Types | Primitive & Non-Primitive Types Explained</title>
        <meta
          name="description"
          content="Learn Java data types including primitive types (int, boolean, float, etc.) and non-primitive types (String, arrays, objects). Includes examples and diagrams."
        />
        <meta
          name="keywords"
          content="Java data types, primitive data types, non-primitive data types, Java tutorial, int, float, boolean, String, Java variables"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "Java Data Types",
              "description": "Learn Java data types including primitive types (int, boolean, float, etc.) and non-primitive types (String, arrays, objects).",
              "author": {
                "@type": "Person",
                "name": "Your Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Website Name"
              },
              "datePublished": "2026-02-08",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourwebsite.com/java-data-types"
              }
            }
          `}
        </script>
      </Head>

      <main className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 sm:mb-6 leading-tight">
              Data Types in Java
            </h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Java data types define the kind of data a variable can hold and how memory is allocated. Learn about primitive types, reference types, and memory storage.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-8 p-4 sm:p-6 border-l-4 border-red-600">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              Overview of Data Types
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Data types in Java are broadly categorized into:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>
                <strong>Primitive Data Types:</strong> Store simple values directly in memory.
              </li>
              <li>
                <strong>Non-Primitive (Reference) Data Types:</strong> Store memory references to objects.
              </li>
            </ul>
          </section>

          {/* How Primitive Variables Are Stored */}
          <section className="mb-8 p-4 sm:p-6 border-l-4 border-red-600">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              How Primitive Variables Are Stored
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Primitive types store the actual value directly in the stack memory.
            </p>
            <article className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4">
              <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Example:</p>
              <code className="text-red-600 text-sm sm:text-base break-all">int x = 10;</code>
              <ul className="list-disc list-inside mt-3 ml-2 sm:ml-4 text-gray-800 text-sm sm:text-base">
                <li>The variable <code>x</code> is stored in the stack.</li>
                <li>The value <code>10</code> is also in the stack.</li>
              </ul>
            </article>
            <p className="text-red-600 font-semibold text-sm sm:text-base">
              ✔ Primitive = store REAL value in stack
            </p>
          </section>

          {/* How Non-Primitive Variables Are Stored */}
          <section className="mb-8 p-4 sm:p-6 border-l-4 border-red-600">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              How Non-Primitive Variables Are Stored
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Non-primitive types store a reference in the stack, but the actual object is stored in the heap memory.
            </p>
            <article className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 mb-4">
              <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Example:</p>
              <code className="text-red-600 text-sm sm:text-base break-all">String name = new String("John");</code>
              <p className="text-gray-800 mt-3 mb-2 text-sm sm:text-base">Memory behavior:</p>
              <ul className="list-disc list-inside mt-1 ml-2 sm:ml-4 text-gray-800 text-sm sm:text-base">
                <li><code>name</code> → stored in stack</li>
                <li>"John" object → stored in heap</li>
                <li>Stack variable <code>name</code> stores a reference to the heap object.</li>
              </ul>
            </article>
            <p className="text-red-600 font-semibold text-sm sm:text-base">
              ✔ Non-primitive = stack holds reference, heap holds actual object
            </p>
          </section>

          {/* Data Types Diagram */}
          <section className="mb-8 text-center">
            <img
              src="/images/data-types.png"
              alt="Diagram showing Java primitive and non-primitive data types"
              className="max-w-full h-auto mx-auto rounded-lg shadow"
            />
          </section>

          {/* Primitive Data Types Table */}
          <section className="mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
              Primitive Data Types
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Java has eight primitive data types. They store single values directly and are stored in stack memory.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-red-400 px-3 py-2 text-left">Type</th>
                    <th className="border border-red-400 px-3 py-2 text-left">Description</th>
                    <th className="border border-red-400 px-3 py-2 text-left">Default</th>
                    <th className="border border-red-400 px-3 py-2 text-left">Size</th>
                    <th className="border border-red-400 px-3 py-2 text-left">Example</th>
                    <th className="border border-red-400 px-3 py-2 text-left">Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "boolean", desc: "Logical values", defaultVal: "false", size: "1 byte (JVM dependent)", example: "true, false", range: "—" },
                    { type: "byte", desc: "8-bit signed integer", defaultVal: "0", size: "1 byte", example: "10", range: "-128 to 127" },
                    { type: "char", desc: "16-bit Unicode character", defaultVal: "\\u0000", size: "2 bytes", example: "'A', '\\u0041'", range: "0 to 65,535" },
                    { type: "short", desc: "16-bit signed integer", defaultVal: "0", size: "2 bytes", example: "2000", range: "-32,768 to 32,767" },
                    { type: "int", desc: "32-bit signed integer", defaultVal: "0", size: "4 bytes", example: "1000, -500", range: "-2,147,483,648 to 2,147,483,647" },
                    { type: "long", desc: "64-bit signed integer", defaultVal: "0L", size: "8 bytes", example: "123456789L", range: "±9.22e18" },
                    { type: "float", desc: "32-bit floating point", defaultVal: "0.0f", size: "4 bytes", example: "3.14f", range: "~6–7 digits precision" },
                    { type: "double", desc: "64-bit floating point", defaultVal: "0.0d", size: "8 bytes", example: "3.14159d", range: "~15–16 digits precision" },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "" : "bg-white"}>
                      <td className="border border-red-300 px-3 py-2 font-semibold text-red-700">{row.type}</td>
                      <td className="border border-red-300 px-3 py-2">{row.desc}</td>
                      <td className="border border-red-300 px-3 py-2">{row.defaultVal}</td>
                      <td className="border border-red-300 px-3 py-2">{row.size}</td>
                      <td className="border border-red-300 px-3 py-2">{row.example}</td>
                      <td className="border border-red-300 px-3 py-2">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
