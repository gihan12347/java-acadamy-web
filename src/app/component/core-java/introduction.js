"use client";

import React from "react";
import Head from "next/head";

export default function JavaIntroduction() {
  return (
    <>
      {/* ---------- Meta ---------- */}
      <Head>
        <title>Introduction to Java | Java Programming Basics</title>
        <meta
          name="description"
          content="Learn Java programming basics, including definition, features, JDK, JRE, Java Development Tools, and how to run Java programs. Perfect for beginners."
        />
        <meta
          name="keywords"
          content="Java introduction, Java programming, Java features, Java JDK, Java JRE, How to run Java, Java tutorial, Java for beginners"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "TechArticle",
              "headline": "Introduction to Java",
              "description": "Learn Java programming basics, including definition, features, JDK, JRE, Java Development Tools, and how to run Java programs.",
              "author": {
                "@type": "Person",
                "name": "Your Name"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Your Website"
              },
              "datePublished": "2026-02-08",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yourwebsite.com/java-introduction"
              }
            }
          `}
        </script>
      </Head>

      {/* ---------- Main Content ---------- */}
      <main className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
            Introduction to Java
          </h1>

          {/* Definition Section */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              1. Definition of Java
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
              <li>Java is a high-level, object-oriented programming language.</li>
              <li>Developed by Sun Microsystems (now owned by Oracle) in 1995.</li>
              <li>Known for its "write once, run anywhere" capability.</li>
            </ul>
          </section>

          {/* Java Features Section */}
          <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              Java Features
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Object-Oriented Programming (OOP)",
                  desc: "Java fully supports object-oriented programming."
                },
                {
                  title: "Platform Independent",
                  desc: "Java code can run on any system without considering OS."
                },
                {
                  title: "Multithreading",
                  desc: "Java allows running multiple tasks concurrently and increases efficiency."
                },
                {
                  title: "Standard Libraries and APIs",
                  desc: "Java provides multiple built-in libraries and APIs for programming needs."
                },
                {
                  title: "Open-Source Libraries",
                  desc: "Java has a wide range of libraries to extend functionality and speed up development."
                }
              ].map((feature, idx) => (
                <div key={idx}>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                    • {feature.title}:
                  </h3>
                  <p className="text-gray-800 ml-4 text-sm sm:text-base">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* JDK Section */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              What is JDK (Java Development Kit) in Java
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Java Development Kit (JDK) is a software development environment developed and distributed by Oracle.
              It is used for building Java software applications and applets.
            </p>

            <div className="bg-white p-4 sm:p-8 mb-4 text-center overflow-hidden rounded-lg shadow">
              <img
                src="/images/java-platform.png"
                alt="JDK Components Diagram showing JRE, Java Compiler, Tools"
                className="mx-auto max-w-full h-auto"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  a) Java Runtime Environment (JRE):
                </h3>
                <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                  Required for running a Java application. JRE cannot be used to develop Java applications; it only executes them.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  Java Language Specification:
                </h3>
                <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                  The technical definition of syntax and semantics of the Java programming language.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  Java Development Tools:
                </h3>
                <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                  Includes Java compiler, JAR tool, debugger, JRE builder, and more. Provides everything for compiling, running, monitoring, debugging, and documenting applications.
                </p>
              </div>
            </div>
          </section>

          {/* How to Run Java Program Section */}
          <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              How to Run Java Program
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              <li>Java is a high-level language.</li>
              <li>Java compiler "javac" converts it to byte code (.class file).</li>
              <li>JVM reads byte code, converts it to machine code, and executes the program.</li>
              <li>
                Java is platform independent because the byte code can run on any JVM. JVM converts byte code to machine code based on OS.
              </li>
            </ul>

            <div className="p-4 sm:p-8 text-center overflow-hidden">
              <img
                src="/images/how-to-run-java-code.jpg"
                alt="Diagram showing Java compilation and execution process via JVM"
                className="mx-auto max-w-full h-auto"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
