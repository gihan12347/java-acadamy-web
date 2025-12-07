"use client";

import React, { useState } from "react";
import {
  Code,
  Cpu,
  Zap,
  BookOpen,
  Copy,
  Check,
  GitBranch,
  Play,
  Pause,
  Lock,
  Clock,
  AlertCircle,
} from "lucide-react";

const useCopyToClipboard = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return { copiedCode, copyToClipboard };
};

export default function Multithreading() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    extendThread: `// Step 1: Create a class that extends Thread
class MyThread extends Thread {

    // Step 2: Write the code you want the thread to run inside run()
    public void run() {
        System.out.println("This is my thread running!");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}

// Step 3: Create an object of your thread class and start it
public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();  // create thread
        thread.start();                    // start thread
    }
}`,
    implementRunnable: `// Step 1: Create a class that implements Runnable
class MyRunnable implements Runnable {

    // Step 2: Write the code you want the thread to run inside run()
    public void run() {
        System.out.println("This is my runnable thread running!");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}

// Step 3: Create a Thread object and pass your Runnable to it
public class Main {
    public static void main(String[] args) {
        MyRunnable myRunnable = new MyRunnable();  // create runnable object
        Thread thread = new Thread(myRunnable);     // wrap it in a Thread
        thread.start();                             // start the thread
    }
}`,
    synchronizedMethod: `synchronized void print() {
    System.out.println("Hello");
}`,
    synchronizedBlock: `synchronized (this) {
    System.out.println("Safe execution");
}`,
  };

  const threadStates = [
    {
      name: "New",
      icon: AlertCircle,
      description: "The thread is created but hasn't started running yet.",
    },
    {
      name: "Runnable",
      icon: Play,
      description:
        "The thread is ready to run or currently running. The CPU scheduler decides when it gets CPU time.",
    },
    {
      name: "Running",
      icon: Cpu,
      description: "Thread is running",
    },
    {
      name: "Blocked",
      icon: Lock,
      description:
        "A thread is blocked when it needs something (a lock) that another thread is already using. It just waits. When the other thread is done and releases the lock, the waiting thread can run again.",
    },
    {
      name: "Waiting",
      icon: Pause,
      description:
        "The thread waits with no set time limit for another thread to do something. It can run again only when it gets a signal or when the other thread is done.",
    },
    {
      name: "Timed Waiting",
      icon: Clock,
      description:
        "The thread is waiting for a specific amount of time (e.g., using sleep() or wait(timeout)). It goes back to runnable after the time ends or when notified.",
    },
    {
      name: "Terminated",
      icon: Code,
      description:
        "The thread has finished running—either because it completed normally or because an error caused it to stop.",
    },
  ];

  const threadMethods = [
    { method: "start()", description: "starts execution in new thread" },
    { method: "run()", description: "thread code (DO NOT call manually)" },
    { method: "sleep(ms)", description: "pause thread" },
    { method: "join()", description: "wait for thread to finish" },
    { method: "yield()", description: "hint to scheduler" },
    { method: "interrupt()", description: "interrupts a thread" },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
            <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-3 sm:mb-4 px-4">
            Multithreading in Java
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
            Execute multiple tasks simultaneously and utilize CPU efficiently
          </p>
        </div>

        {/* INTRO */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600  flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3">
                What is Multithreading?
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-3">
                A thread is a single unit that can execute a program
                independently. Java allows multithreading to run multiple Java
                programs simultaneously, allowing tasks to execute in parallel
                and utilize the CPU more efficiently.
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                A thread in Java can exist in any one of the following states at
                any given time. A thread lies only in one of these states at any
                instant.
              </p>
            </div>
          </div>
        </section>

        {/* THREAD LIFECYCLE IMAGE */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-10 mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4 sm:mb-6 text-center">
            Thread Life Cycle
          </h2>
          <img
            src="/images/thread-life-cycle.png"
            alt="Thread Life Cycle Diagram"
            className="max-w-full h-auto mx-auto"
          />
        </div>

        {/* THREAD STATES */}
        <section className="mb-8 sm:mb-10">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-3 sm:mb-4 px-4">
              Thread States
            </h2>
            <p className="text-base sm:text-lg text-gray-700 px-4">
              A thread goes through several states during its lifetime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {threadStates.map((state, index) => {
              const IconComponent = state.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6  hover:shadow-xl transition-shadow duration-200 border-l-4 border-red-600"
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600  flex items-center justify-center text-white flex-shrink-0">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-red-600">
                      {state.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                    {state.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CREATING THREADS HEADER */}
        <div className="text-center mb-8 sm:mb-12 mt-12 sm:mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
            <GitBranch className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-3 sm:mb-4 px-4">
            Different Ways to Create Threads
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
            Two primary approaches to implement threading in Java
          </p>
        </div>

        {/* METHOD 1: EXTENDING THREAD */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
              Extending the Thread Class
            </h2>
          </div>

          {/* CODE BOX */}
          <div className="relative bg-black  p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                  MyThread.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.extendThread, "extendThread")
                }
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
              >
                {copiedCode === "extendThread" ? (
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
                {codeExamples.extendThread}
              </code>
            </pre>
          </div>

          {/* HOW IT WORKS */}
          <div className="p-4 sm:p-6  bg-gray-50">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-600 font-bold text-base sm:text-lg">How it works:</p>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-gray-800">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>You create a class that extends Thread.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>You put the thread's work inside the run() method.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>
                  You create an object of that class and call start(), not
                  run().
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>
                  start() tells Java to run your run() method on a separate
                  thread.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* METHOD 2: IMPLEMENTING RUNNABLE */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="flex-shrink-0 w-10 h-10 bg-red-600 flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
              Implementing the Runnable Interface
            </h2>
          </div>

          {/* CODE BOX */}
          <div className="relative bg-black  p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                  MyRunnable.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.implementRunnable,
                    "implementRunnable"
                  )
                }
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
              >
                {copiedCode === "implementRunnable" ? (
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
                {codeExamples.implementRunnable}
              </code>
            </pre>
          </div>

          {/* HOW IT WORKS */}
          <div className="p-4 sm:p-6  bg-gray-50 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-red-600 flex-shrink-0" />
              <p className="text-red-600 font-bold text-base sm:text-lg">How it works:</p>
            </div>

            <ul className="space-y-3 text-sm sm:text-base text-gray-800">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <span>You create a class that implements Runnable.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </span>
                <span>You write your thread code inside run().</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </span>
                <span>
                  You create a Thread object and give it your Runnable.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  4
                </span>
                <span>You start the thread using start().</span>
              </li>
            </ul>
          </div>

          {/* RECOMMENDATION */}
          <div className="bg-white p-4  border-l-4 border-red-600 shadow-sm">
            <p className="text-sm sm:text-base text-gray-800 font-semibold">
              ✅ <span className="text-red-600">Recommended:</span> implements
              Runnable is the recommended way because Java doesn't allow
              multiple inheritance.
            </p>
          </div>
        </section>

        {/* THREAD METHODS */}
        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 sm:mb-6">
            Important Thread Methods
          </h2>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="p-2 sm:p-3 lg:p-4 text-left font-bold border-2 border-red-700 text-xs sm:text-sm lg:text-base">
                        Method
                      </th>
                      <th className="p-2 sm:p-3 lg:p-4 text-left font-bold border-2 border-red-700 text-xs sm:text-sm lg:text-base">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {threadMethods.map((item, index) => (
                      <tr
                        key={index}
                        className="border-2 border-red-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-2 sm:p-3 lg:p-4 font-mono text-red-600 font-semibold border-2 border-red-200 text-xs sm:text-sm lg:text-base">
                          {item.method}
                        </td>
                        <td className="p-2 sm:p-3 lg:p-4 text-gray-800 border-2 border-red-200 text-xs sm:text-sm lg:text-base">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* THREAD SYNCHRONIZATION HEADER */}
        <div className="text-center mb-8 sm:mb-12 mt-12 sm:mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-600 mb-3 sm:mb-4 px-4">
            Thread Synchronization
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 px-4">
            Control access to shared resources in multithreaded environments
          </p>
        </div>

        <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 lg:p-8 ">
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 sm:mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-red-600  flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-red-600 mb-3">
                What is Thread Synchronization?
              </h3>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-3">
                Thread Synchronization means that only one thread can access a
                shared resource (like a code block) at a time.
              </p>
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                When a thread enters the synchronized code, it gets a lock.
                After the thread finishes running that part of the code, it
                releases the lock, and then another thread can access the
                resource.
              </p>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-4">
            Synchronization can be achieved two ways:
          </h3>

          {/* SYNCHRONIZED METHOD */}
          <div className="mb-4 sm:mb-6">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
              1. Using synchronized method
            </h4>
            <div className="relative bg-black  p-3 sm:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 pb-3 border-b border-red-600">
                <span className="text-white text-xs sm:text-sm font-mono">
                  Synchronized Method
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(
                      codeExamples.synchronizedMethod,
                      "syncMethod"
                    )
                  }
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
                >
                  {copiedCode === "syncMethod" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-xs sm:text-sm overflow-x-auto">
                <code className="text-white font-mono leading-relaxed">
                  {codeExamples.synchronizedMethod}
                </code>
              </pre>
            </div>
          </div>

          {/* SYNCHRONIZED BLOCK */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
              2. Using synchronized block
            </h4>
            <div className="relative bg-black  p-3 sm:p-4 lg:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 pb-3 border-b border-red-600">
                <span className="text-white text-xs sm:text-sm font-mono">
                  Synchronized Block
                </span>
                <button
                  onClick={() =>
                    copyToClipboard(codeExamples.synchronizedBlock, "syncBlock")
                  }
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm rounded"
                >
                  {copiedCode === "syncBlock" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-xs sm:text-sm overflow-x-auto">
                <code className="text-white font-mono leading-relaxed">
                  {codeExamples.synchronizedBlock}
                </code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}