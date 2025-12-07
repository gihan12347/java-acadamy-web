"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  Zap,
  BookOpen,
  Copy,
  Check,
  Shield,
  AlertTriangle,
  Code,
  ArrowRight,
} from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function ExceptionHandlingGuide() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    defaultHandler: `public static void main(String[] args) {
    int x = 10 / 0;  // This causes ArithmeticException
}`,
    tryCatch: `class CementMixer implements AutoCloseable {
    public void startMixer() {
        System.out.println("Mixer started...");
        throw new RuntimeException("Mixer overload!");
    }

    @Override
    public void close() {
        System.out.println("Mixer stopped and cleaned up.");
    }
}

public class BuildingDemo {
    public static void main(String[] args) {
        try (CementMixer mixer = new CementMixer()) {
            mixer.startMixer();
        } catch (RuntimeException e) {
            System.out.println("Problem occurred: " + e.getMessage());
        } finally {
            System.out.println("Construction site closing for the day.");
        }
    }
}`,
    throwsKeyword: `void operateCrane() throws Exception {
    throw new Exception("Crane malfunction!");
}

public static void main(String[] args) {
    try {
        operateCrane();
    } catch (Exception e) {
        System.out.println("Manager handles: " + e.getMessage());
    }
}`,
    throwKeyword: `void useDrill() {
    if (true) { // drill overheats
        throw new RuntimeException("Drill overheated!");
    }
}

public static void main(String[] args) {
    try {
        useDrill();
    } catch (RuntimeException e) {
        System.out.println("Supervisor handles: " + e.getMessage());
    }
}`,
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* ---------------- HEADER ---------------- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
            <AlertCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Java Exception Handling
          </h1>
          <p className="text-xl text-gray-700">
            Master error handling and build robust applications
          </p>
        </div>

        {/* ---------------- INTRO ---------------- */}
        <section className="mb-10 bg-white p-8 ">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600  flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-3">
                What is an Exception?
              </h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                Exception is an unexpected problem that arises during execution
                of a programme. When an Exception occurs, the normal flow of the
                program is disrupted and the program/application terminates
                abnormally, which is not recommended. Therefore, these
                exceptions need to be handled.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-10 bg-white p-8 ">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Exception hierarchy{" "}
          </h2>

          {/* ---------------- IMAGE ---------------- */}
          <div className="bg-white rounded-2xl p-10 mb-10">
            <img
              src="/images/exception-hireachy.png"
              alt="Exception Hierarchy"
              className="w-full h-auto mx-auto "
            />
          </div>
        </section>

        {/* ---------------- THROWABLE CLASS ---------------- */}
        <section className="mb-10 bg-white p-8 ">
          <h2 className="text-3xl font-bold text-red-600 mb-6">
            Throwable Class
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            Parent class of Exception and Error classes. Following is the list
            of important methods available in the Throwable class:
          </p>

          <div className="space-y-4">
            <div className=" p-4  border-l-4 border-red-600">
              <p className="font-mono text-red-600 font-bold mb-2">
                getMessage()
              </p>
              <p className="text-gray-800">
                Returns a message that explains what exception happened.
              </p>
            </div>

            <div className=" p-4  border-l-4 border-red-600">
              <p className="font-mono text-red-600 font-bold mb-2">
                getCause()
              </p>
              <p className="text-gray-800">
                Returns the cause of the exception.
              </p>
            </div>

            <div className=" p-4  border-l-4 border-red-600">
              <p className="font-mono text-red-600 font-bold mb-2">
                toString()
              </p>
              <p className="text-gray-800">
                Returns the name of the class concatenated with the result of
                getMessage().
              </p>
            </div>

            <div className=" p-4  border-l-4 border-red-600">
              <p className="font-mono text-red-600 font-bold mb-2">
                printStackTrace()
              </p>
              <p className="text-gray-800">
                Prints the exception message and the list of method calls (stack
                trace) to the error output.
              </p>
            </div>

            <div className=" p-4  border-l-4 border-red-600">
              <p className="font-mono text-red-600 font-bold mb-2">
                getStackTrace()
              </p>
              <p className="text-gray-800">
                Returns an array of stack trace elements (Index 0 = most recent
                call, Last index = earliest call).
              </p>
            </div>

            <div className=" p-4  border-l-4 border-red-600">
              <p className="font-mono text-red-600 font-bold mb-2">
                fillInStackTrace()
              </p>
              <p className="text-gray-800">
                Updates the Throwable's stack trace with the current stack
                trace.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- EXCEPTION CATEGORIES ---------------- */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Java Exception Categories
          </h2>
          <p className="text-lg text-gray-700">
            Understanding the types of exceptions in Java
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* CHECKED EXCEPTIONS */}
          <div className="bg-white p-6 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600  flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600">
                Checked Exceptions
              </h3>
            </div>
            <p className="text-gray-800 leading-relaxed">
              The compiler checks whether these exceptions are handled (using
              try/catch or throws). If you don't handle a checked exception, the
              compiler gives an error. They are checked at compile time.
            </p>
          </div>

          {/* UNCHECKED EXCEPTIONS */}
          <div className="bg-white p-6 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-600  flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-600">
                Unchecked Exceptions
              </h3>
            </div>
            <p className="text-gray-800 leading-relaxed">
              The compiler does NOT check these exceptions. They occur during
              runtime (e.g., NullPointerException, ArithmeticException). You may
              handle them, but you are not required to. All errors and runtime
              exceptions are unchecked exceptions.
            </p>
          </div>
        </div>

        {/* ---------------- EXCEPTION HANDLING HEADER ---------------- */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Exception Handling Methods
          </h2>
          <p className="text-lg text-gray-700">
            Four ways to handle exceptions in Java
          </p>
        </div>

        {/* ---------------- METHOD 1: DEFAULT HANDLER ---------------- */}
        <section className="mb-10 bg-white p-8 ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              1
            </div>
            <h2 className="text-3xl font-bold text-red-600">
              Using Default Exception Handler
            </h2>
          </div>

          <p className="text-gray-800 leading-relaxed mb-6">
            If an exception happens and you don't handle it using try/catch,
            Java sends it to the Default Exception Handler (built into the JVM).
          </p>

          <div className=" p-6   mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-red-600" />
              <p className="text-red-600 font-bold text-lg">
                What the Default Exception Handler Does:
              </p>
            </div>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Stops the program (your code cannot continue)</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>
                  Prints the exception name (like NullPointerException)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Prints the message</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>
                  Prints the stack trace showing where the error happened
                </span>
              </li>
            </ul>
          </div>

          {/* CODE BOX */}
          <div className="relative bg-black  p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  DefaultHandler.java
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(codeExamples.defaultHandler, "defaultHandler")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "defaultHandler" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.defaultHandler}
              </code>
            </pre>
          </div>

          {/* OUTPUT */}
          <div className="bg-white p-4  ">
            <p className="text-red-600 font-bold mb-3">Output:</p>
            <div className="bg-gray-50 p-4 rounded font-mono text-sm">
              Exception in thread "main" java.lang.ArithmeticException: / by
              zero
              <br />
              &nbsp;&nbsp;at Main.main(Main.java:3)
            </div>
          </div>
        </section>

        {/* ---------------- METHOD 2: TRY/CATCH ---------------- */}
        <section className="mb-10 bg-white p-8 ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              2
            </div>
            <h2 className="text-3xl font-bold text-red-600">Using try/catch</h2>
          </div>

          {/* CODE BOX */}
          <div className="relative bg-black  p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  BuildingDemo.java
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(codeExamples.tryCatch, "tryCatch")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "tryCatch" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.tryCatch}
              </code>
            </pre>
          </div>

          {/* EXPLANATIONS */}
          <div className="space-y-4">
            <div className=" p-6  border-l-4 border-red-600">
              <h4 className="text-red-600 font-bold text-lg mb-2">
                try block – "Do the risky work"
              </h4>
              <p className="text-gray-800">
                Contains code that might cause an exception. Like starting the
                cement mixer, which may overload.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Duty:</strong> Runs the risky operation and "tries" it
                safely.
              </p>
            </div>

            <div className=" p-6  border-l-4 border-red-600">
              <h4 className="text-red-600 font-bold text-lg mb-2">
                catch block – "Handle the problem"
              </h4>
              <p className="text-gray-800">
                Runs only if an exception happens inside try. Like catching the
                mixer overload problem.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Duty:</strong> Receives the exception and handles it
                (prints message, takes action).
              </p>
            </div>

            <div className=" p-6  border-l-4 border-red-600">
              <h4 className="text-red-600 font-bold text-lg mb-2">
                finally block – "Always do cleanup"
              </h4>
              <p className="text-gray-800">
                Runs whether there is an exception or not. Like cleaning the
                site after work is done.
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Duty:</strong> Perform necessary cleanup (close tools,
                save data, release resources).
              </p>
            </div>

            <div className=" p-6  border-l-4 border-red-600">
              <h4 className="text-red-600 font-bold text-lg mb-2">
                Auto-closable Object (try-with-resources)
              </h4>
              <p className="text-gray-800">
                The object (mixer) is automatically closed at the end of the try
                block.
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Must implement AutoCloseable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>
                    Java automatically calls close() after the try block
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>
                    It closes resources safely even if an exception happens
                  </span>
                </li>
              </ul>
              <p className="text-red-600 font-semibold mt-3">
                With auto closable object, no need to define finally block
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- METHOD 3: THROWS KEYWORD ---------------- */}
        <section className="mb-10 bg-white p-8 ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              3
            </div>
            <h2 className="text-3xl font-bold text-red-600">
              With throws Keyword
            </h2>
          </div>

          <p className="text-gray-800 leading-relaxed mb-6">
            <code className=" px-2 py-1 rounded font-mono text-red-600">
              throws
            </code>{" "}
            is used in a method's declaration to say that the method might
            produce an exception, and the caller (parent method) must handle it.
          </p>

          {/* CODE BOX */}
          <div className="relative bg-black  p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  ThrowsExample.java
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(codeExamples.throwsKeyword, "throwsKeyword")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "throwsKeyword" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.throwsKeyword}
              </code>
            </pre>
          </div>

          <div className=" p-6  ">
            <p className="text-gray-800">
              This method says:{" "}
              <strong>
                "I might throw an exception — the caller must handle it."
              </strong>
            </p>
          </div>
        </section>

        {/* ---------------- METHOD 4: THROW KEYWORD ---------------- */}
        <section className="mb-10 bg-white p-8 ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              4
            </div>
            <h2 className="text-3xl font-bold text-red-600">
              Using throw Keyword
            </h2>
          </div>

          <p className="text-gray-800 leading-relaxed mb-6">
            <code className=" px-2 py-1 rounded font-mono text-red-600">
              throw
            </code>{" "}
            is used inside a method to manually create and throw an exception at
            a specific point.
          </p>

          {/* CODE BOX */}
          <div className="relative bg-black  p-6 mb-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  ThrowExample.java
                </span>
              </div>
              <button
                onClick={() =>
                  copyToClipboard(codeExamples.throwKeyword, "throwKeyword")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "throwKeyword" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.throwKeyword}
              </code>
            </pre>
          </div>

          <div className=" p-6  ">
            <p className="text-gray-800">
              Here the worker (method) directly throws the exception using{" "}
              <code className="bg-white px-2 py-1 rounded font-mono text-red-600">
                throw
              </code>
              . The caller must handle it with a try/catch block.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
