"use client";

import React, { useState } from "react";
import {
  Code,
  GitBranch,
  Zap,
  BookOpen,
  Copy,
  Check,
  Repeat,
  ArrowRight,
} from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function ControlFlowGuide() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    ifElse: `public class IfElseExample {
    public static void main(String[] args) {
        
        int score = 85;

        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: D");
        }
    }
}`,
    switchCase: `public class SwitchCase {
    public static void main(String[] args) {
        
        String role = "admin";

        switch (role) {
            case "admin":
                System.out.println("Admin Access");
                break;
            case "user":
                System.out.println("User Access");
                break;
            case "guest":
                System.out.println("Guest Access");
                break;
            default:
                System.out.println("Unknown Role");
        }
    }
}`,
    forLoop: `public class ForLoopExample {
    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {
            System.out.println("Number: " + i);
        }
    }
}`,
    whileLoop: `public class WhileLoopExample {
    public static void main(String[] args) {

        int i = 1;

        while (i <= 5) {
            System.out.println("Count: " + i);
            i++;
        }
    }
}`,
    doWhileLoop: `public class DoWhileExample {
    public static void main(String[] args) {

        int i = 1;

        do {
            System.out.println("Value: " + i);
            i++;
        } while (i <= 5);
    }
}`,
    break: `public class BreakExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                break;   // loop stops when i becomes 5
            }
            System.out.println(i);
        }
    }
}`,
    continue: `public class ContinueExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 7; i++) {
            if (i == 5) {
                continue;  // skip printing 5
            }
            System.out.println(i);
        }
    }
}`,
    returnVoid: `public class ReturnExample {
    public static void main(String[] args) {
        checkAge(15);
        checkAge(20);
    }
    
    static void checkAge(int age) {
        if (age < 18) {
            System.out.println("You are not allowed.");
            return;   // method stops here
        }
        System.out.println("You are allowed!");
    }
}`,
    returnValue: `public class ReturnValue {
    public static void main(String[] args) {
        int result = addNumbers(5, 7);
        System.out.println("Sum = " + result);
    }
    
    static int addNumbers(int a, int b) {
        return a + b;   // sends back the result
    }
}`,
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* ---------------- HEADER ---------------- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Control Flow Statements
          </h1>
          <p className="text-xl text-gray-700">
            Master the building blocks of programming logic
          </p>
        </div>

        {/* ---------------- INTRO ---------------- */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-red-600 mb-3">
                What are Control Flow Statements?
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Control flow statements are fundamental components of
                programming languages that allow developers to control the order
                in which instructions are executed in a program. They enable
                execution of code based on conditions or repeatedly until a
                condition is met.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- IMAGE ---------------- */}
        <div className="bg-white rounded-2xl p-10 mb-10  ">
          <img
            src="/images/control-flow-overview.png"
            alt="Control Flow Overview"
            className="max-w-full h-auto mx-auto "
          />
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
            <GitBranch className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Conditional Statements in Programming
          </h1>
          <p className="text-xl text-gray-700">
            Make decisions and control program flow with conditions
          </p>
        </div>

        {/* Content Section */}
        <section className="mb-10 bg-white p-8  ">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Understanding Conditional Logic
          </h2>

          <p className="text-gray-800 leading-relaxed mb-4">
            Conditional statements allow a program to make decisions based on
            specific conditions. They determine which block of code should
            execute depending on whether a condition is true or false. Two of
            the most commonly used conditional structures are{" "}
            <strong>if-else</strong> and <strong>switch</strong>.
          </p>
        </section>

        {/* ---------------- IF ELSE ---------------- */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              1
            </div>
            <h2 className="text-3xl font-bold text-red-600">
              If Statement in Programming
            </h2>
          </div>

          {/* CODE BOX */}
          <div className="relative bg-black rounded-xl p-6 mb-6  overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  IfElseExample.java
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.ifElse, "ifElse")}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "ifElse" ? (
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
                {codeExamples.ifElse}
              </code>
            </pre>
          </div>

          {/* HOW IT WORKS */}
          <div className="p-6 rounded-xl ">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-red-600" />
              <p className="text-red-600 font-bold text-lg">How it works:</p>
            </div>

            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>
                  If score is{" "}
                  <span className="font-semibold text-red-600">
                    90 or above
                  </span>
                  , print Grade: A.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>
                  Otherwise, if score is{" "}
                  <span className="font-semibold text-red-600">80–89</span>,
                  print Grade: B.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>
                  Otherwise, if score is{" "}
                  <span className="font-semibold text-red-600">70–79</span>,
                  print Grade: C.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>Otherwise, print Grade: D.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------------- SWITCH ---------------- */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              2
            </div>
            <h2 className="text-3xl font-bold text-red-600">
              Switch Statement in Programming
            </h2>
          </div>

          {/* SWITCH CODE BOX */}
          <div className="relative bg-black rounded-xl p-6 mb-6  overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  SwitchCase.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.switchCase, "switchCase")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "switchCase" ? (
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
                {codeExamples.switchCase}
              </code>
            </pre>
          </div>

          {/* SWITCH EXPLANATION */}
          <div className="p-6 rounded-xl ">
            <div className="flex items-center gap-2 mb-5">
              <GitBranch className="w-5 h-5 text-red-600" />
              <p className="text-red-600 font-bold text-lg">
                Step-by-step explanation
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4  shadow-sm border-l-4 border-red-600">
                <p className="font-bold text-red-600 mb-2 font-mono text-sm">
                  String role = "admin";
                </p>
                <ul className="space-y-1 text-gray-800 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      A variable named{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        role
                      </code>{" "}
                      is created.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      It stores the text{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        "admin"
                      </code>
                      .
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4  shadow-sm border-l-4 border-red-600">
                <p className="font-bold text-red-600 mb-2 font-mono text-sm">
                  switch (role)
                </p>
                <ul className="space-y-1 text-gray-800 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      Java compares the value of{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        role
                      </code>{" "}
                      with each case.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4  shadow-sm border-l-4 border-red-600">
                <p className="font-bold text-red-600 mb-2 font-mono text-sm">
                  case "admin":
                </p>
                <ul className="space-y-1 text-gray-800 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      If role is{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        "admin"
                      </code>
                      , print "Admin Access".
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        break
                      </code>{" "}
                      stops checking other cases.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4  shadow-sm border-l-4 border-red-600">
                <p className="font-bold text-red-600 mb-2 font-mono text-sm">
                  case "user":
                </p>
                <ul className="space-y-1 text-gray-800 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      If role was{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        "user"
                      </code>
                      , print "User Access".
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4  shadow-sm border-l-4 border-red-600">
                <p className="font-bold text-red-600 mb-2 font-mono text-sm">
                  case "guest":
                </p>
                <ul className="space-y-1 text-gray-800 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      If role was{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        "guest"
                      </code>
                      , print "Guest Access".
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4  shadow-sm border-l-4 border-red-600">
                <p className="font-bold text-red-600 mb-2 font-mono text-sm">
                  default:
                </p>
                <ul className="space-y-1 text-gray-800 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>Runs only if none of the cases match.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <span>
                      Prints{" "}
                      <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                        "Unknown Role"
                      </code>
                      .
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- LOOPS SECTION START ---------------- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
            <Repeat className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Looping Statements in Programming
          </h1>
          <p className="text-xl text-gray-700">
            Master iteration and repetition in your code
          </p>
        </div>

        {/* INTRO LOOP SECTION */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-red-600 mb-3">
                What are Looping Statements?
              </h3>

              <p className="text-gray-800 leading-relaxed mb-4">
                Looping statements, also known as iteration or repetition
                statements, are used in programming to repeatedly execute a
                block of code.
              </p>

              <div className="p-5  border-l-4 border-red-600">
                <p className="text-gray-800 font-semibold mb-3">
                  Here are simple and clear Java examples for:
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-red-600 text-lg">✔</span>
                    <span className="font-medium text-gray-800">for loop</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-red-600 text-lg">✔</span>
                    <span className="font-medium text-gray-800">
                      while loop
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-red-600 text-lg">✔</span>
                    <span className="font-medium text-gray-800">
                      do-while loop
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                  Each example includes an explanation so it's easy to
                  understand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- FOR LOOP ---------------- */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
              1
            </div>
            <h2 className="text-3xl font-bold text-red-600">FOR LOOP</h2>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Code Example:
          </h3>

          {/* FOR LOOP CODE BOX */}
          <div className="relative bg-black rounded-xl p-6 mb-6  overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm font-mono ml-2">
                  ForLoopExample.java
                </span>
              </div>

              <button
                onClick={() => copyToClipboard(codeExamples.forLoop, "forLoop")}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition"
              >
                {copiedCode === "forLoop" ? (
                  <>
                    <Check className="w-4 h-4" /> <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.forLoop}
              </code>
            </pre>
          </div>

          {/* FOR LOOP EXPLANATION */}
          <div className="p-6 rounded-xl  mb-4">
            <p className="text-red-600 font-bold text-lg mb-4">Explanation:</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <div>
                  <code className="text-red-600 font-mono">int i = 1</code>
                  <span className="text-gray-800"> → loop starts at 1</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <div>
                  <code className="text-red-600 font-mono">i &lt;= 5</code>
                  <span className="text-gray-800">
                    {" "}
                    → loop continues while i ≤ 5
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <div>
                  <code className="text-red-600 font-mono">i++</code>
                  <span className="text-gray-800"> → increments i</span>
                </div>
              </div>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="bg-white p-4  ">
            <p className="text-red-600 font-bold mb-3">Prints:</p>

            <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
              <div>Number: 1</div>
              <div>Number: 2</div>
              <div>Number: 3</div>
              <div>Number: 4</div>
              <div>Number: 5</div>
            </div>
          </div>
        </section>

        {/* ---------------- WHILE LOOP ---------------- */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center  font-bold">
              2
            </div>
            <h2 className="text-3xl font-bold text-red-600">WHILE LOOP</h2>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Code Example:
          </h3>

          {/* WHILE LOOP CODE BOX */}
          <div className="relative bg-black rounded-xl p-6 mb-6  overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm font-mono">
                  WhileLoopExample.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.whileLoop, "whileLoop")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition"
              >
                {copiedCode === "whileLoop" ? (
                  <>
                    <Check className="w-4 h-4" /> <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.whileLoop}
              </code>
            </pre>
          </div>

          {/* WHILE LOOP EXPLANATION */}
          <div className="p-6 rounded-xl  mb-4">
            <p className="text-red-600 font-bold text-lg mb-4">Explanation:</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <div>
                  <code className="text-red-600 font-mono">int i = 1</code>
                  <span className="text-gray-800"> → starting value</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <div>
                  <code className="text-red-600 font-mono">
                    while (i &lt;= 5)
                  </code>
                  <span className="text-gray-800">
                    {" "}
                    → condition must be true
                  </span>
                </div>
              </div>

              <div className="bg-white p-3  border-l-4 border-red-600">
                <p className="text-gray-800 font-semibold mb-2">
                  Inside the loop:
                </p>

                <ul className="ml-4 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span> prints the value
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-red-600">•</span>
                    <code className="px-2 py-0.5 rounded font-mono text-xs text-red-600">
                      i++
                    </code>{" "}
                    increases i
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-3">
              <ArrowRight className="w-5 h-5 text-red-600" />
              <span className="text-gray-800">
                When i becomes 6 → loop stops.
              </span>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="bg-white p-4  ">
            <p className="text-red-600 font-bold mb-3">Prints:</p>

            <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
              <div>Count: 1</div>
              <div>Count: 2</div>
              <div>Count: 3</div>
              <div>Count: 4</div>
              <div>Count: 5</div>
            </div>
          </div>
        </section>

        {/* ---------------- DO WHILE LOOP ---------------- */}
        <section className="mb-10 bg-white p-8  ">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600  text-white flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-3xl font-bold text-red-600">DO-WHILE LOOP</h2>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Code Example:
          </h3>

          {/* DO-WHILE CODE BOX */}
          <div className="relative bg-black rounded-xl p-6 mb-6  overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-white text-sm font-mono">
                  DoWhileExample.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.doWhileLoop, "doWhileLoop")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition"
              >
                {copiedCode === "doWhileLoop" ? (
                  <>
                    <Check className="w-4 h-4" /> <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.doWhileLoop}
              </code>
            </pre>
          </div>

          {/* EXPLANATION */}
          <div className="p-6 rounded-xl  mb-4">
            <p className="text-red-600 font-bold text-lg mb-4">Explanation:</p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <span className="text-gray-800">
                  The{" "}
                  <code className="bg-white px-2 py-0.5 rounded font-mono text-xs text-red-600">
                    do
                  </code>{" "}
                  block always runs once.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <span className="text-gray-800">
                  After that, it checks{" "}
                  <code className="bg-white px-2 py-0.5 rounded font-mono text-xs text-red-600">
                    (i &lt;= 5)
                  </code>
                  .
                </span>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-red-600" />
                <span className="text-gray-800">If true → loop continues.</span>
              </div>
            </div>
          </div>

          {/* OUTPUT */}
          <div className="bg-white p-4  ">
            <p className="text-red-600 font-bold mb-3">Prints:</p>

            <div className="bg-gray-50 p-4 rounded font-mono text-sm space-y-1">
              <div>Value: 1</div>
              <div>Value: 2</div>
              <div>Value: 3</div>
              <div>Value: 4</div>
              <div>Value: 5</div>
            </div>
          </div>
        </section>
        <div className="min-h-screen bg-white p-8">
          <div className="max-w-6xl mx-auto">
            {/* ---------------- HEADER ---------------- */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-2xl mb-6 shadow-lg">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-red-600 mb-4">
                Jump Statements in Programming
              </h1>
              <p className="text-xl text-gray-700">
                Master the control flow of your programs
              </p>
            </div>

            {/* ---------------- INTRO ---------------- */}
            <section className="mb-10 bg-white p-8  ">
              <p className="text-gray-800 leading-relaxed">
                Jump statements in programming are used to change the flow of
                control within a program. They allow the programmer to transfer
                program control to different parts of the code based on certain
                conditions or requirements. Here are common types of jump
                statements:
              </p>
            </section>

            {/* ---------------- BREAK STATEMENT ---------------- */}
            <section className="mb-10 bg-white p-8  ">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h2 className="text-3xl font-bold text-red-600">
                  break Statement
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                The break statement immediately stops a loop (for, while,
                do-while).
              </p>

              {/* CODE BOX */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  ⭐ Example (Stopping a loop early):
                </h3>

                <div className="relative bg-black rounded-xl p-6  overflow-hidden ">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <span className="text-white text-sm ml-2 font-mono">
                        BreakExample.java
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(codeExamples.break, "break")
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
                    >
                      {copiedCode === "break" ? (
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
                      {codeExamples.break}
                    </code>
                  </pre>
                </div>
              </div>

              {/* OUTPUT */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  ✔ What happens? Output:
                </h3>
                <div className="bg-gray-50 p-4  font-mono text-sm border-2 border-red-200 space-y-1">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                </div>
              </div>

              {/* EXPLANATION */}
              <div className="mb-6 p-6 rounded-xl ">
                <div className="flex items-start gap-3">
                  <Zap className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-800">
                      As soon as i == 5, the break statement runs and stops the
                      whole loop — it does NOT print 5, 6, 7, 8, 9, 10.
                    </p>
                  </div>
                </div>
              </div>

              {/* USE CASES */}
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  📌 When to use break?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">
                      When you found what you're looking for
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">
                      When you want to exit a loop early
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">
                      When a certain condition is met
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ---------------- CONTINUE STATEMENT ---------------- */}
            <section className="mb-10 bg-white p-8  ">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h2 className="text-3xl font-bold text-red-600">
                  continue Statement
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                The continue statement skips one loop iteration, but the loop
                continues running.
              </p>

              {/* CODE BOX */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  ⭐ Example (Skip number 5):
                </h3>

                <div className="relative bg-black rounded-xl p-6  overflow-hidden ">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <span className="text-white text-sm ml-2 font-mono">
                        ContinueExample.java
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(codeExamples.continue, "continue")
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
                    >
                      {copiedCode === "continue" ? (
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
                      {codeExamples.continue}
                    </code>
                  </pre>
                </div>
              </div>

              {/* OUTPUT */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  ✔ What happens? Output:
                </h3>
                <div className="bg-gray-50 p-4  font-mono text-sm border-2 border-red-200 space-y-1">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>6</div>
                  <div>7</div>
                </div>
              </div>

              {/* EXPLANATION */}
              <div className="mb-6 p-6 rounded-xl ">
                <div className="flex items-start gap-3">
                  <Zap className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-gray-800">
                      When i == 5, the loop skips it but keeps running normally
                      afterward.
                    </p>
                  </div>
                </div>
              </div>

              {/* USE CASES */}
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  📌 When to use continue?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">Skip unwanted values</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">Skip invalid input</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">
                      Skip specific conditions while still looping
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* ---------------- RETURN STATEMENT ---------------- */}
            <section className="mb-10 bg-white p-8  ">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-red-600  flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h2 className="text-3xl font-bold text-red-600">
                  return Statement
                </h2>
              </div>

              <p className="text-gray-700 text-lg mb-6">
                The return statement exits a method completely and optionally
                returns a value.
              </p>

              {/* EXAMPLE 1: RETURN WITHOUT VALUE */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  ⭐ Example 1: return without value (void method):
                </h3>

                <div className="relative bg-black rounded-xl p-6  overflow-hidden ">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <span className="text-white text-sm ml-2 font-mono">
                        ReturnExample.java
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(codeExamples.returnVoid, "returnVoid")
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
                    >
                      {copiedCode === "returnVoid" ? (
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
                      {codeExamples.returnVoid}
                    </code>
                  </pre>
                </div>

                {/* OUTPUT */}
                <div className="mt-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">
                    ✔ Output:
                  </h3>
                  <div className="bg-gray-50 p-4  font-mono text-sm border-2 border-red-200 space-y-1">
                    <div>You are not allowed.</div>
                    <div>You are allowed!</div>
                  </div>
                </div>

                {/* EXPLANATION */}
                <div className="p-6 rounded-xl ">
                  <div className="flex items-start gap-3">
                    <Zap
                      className="text-red-600 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <p className="text-gray-800">
                        When age is &lt; 18, the method stops immediately —
                        nothing below return runs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* EXAMPLE 2: RETURN WITH VALUE */}
              <div className="mb-6 pt-6 border-t-2 border-red-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Example 2: return with a value:
                </h3>

                <div className="relative bg-black rounded-xl p-6  overflow-hidden ">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </div>
                      <span className="text-white text-sm ml-2 font-mono">
                        ReturnValue.java
                      </span>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(codeExamples.returnValue, "returnValue")
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
                    >
                      {copiedCode === "returnValue" ? (
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
                      {codeExamples.returnValue}
                    </code>
                  </pre>
                </div>

                {/* OUTPUT */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">
                    ✔ Output:
                  </h3>
                  <div className="bg-gray-50 p-4  font-mono text-sm border-2 border-red-200">
                    Sum = 12
                  </div>
                </div>
              </div>

              {/* USE CASES */}
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">
                  📌 When to use return?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">
                      To stop a method early
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">To send a result back</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">
                      To end execution of a method immediately
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
