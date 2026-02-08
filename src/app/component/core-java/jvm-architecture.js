import Head from "next/head";

export default function JVMArchitecture() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>JVM Architecture for Beginners | Java Virtual Machine Tutorial</title>
        <meta
          name="description"
          content="Learn JVM Architecture in Java for beginners. Understand Class Loader, Memory Areas, Execution Engine, JNI, and Native Method Libraries with clear explanations and images."
        />
        <meta
          name="keywords"
          content="JVM architecture, Java Virtual Machine tutorial, Java class loader, JVM memory, execution engine, JNI, native libraries, Java tutorial for beginners"
        />
      </Head>

      <article className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <main className="max-w-4xl mx-auto">
          {/* Title */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 leading-tight">
              JVM Architecture Explained for Beginners
            </h1>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Understand the Java Virtual Machine (JVM) architecture including Class Loader, Memory Areas, Execution Engine, Java Native Interface (JNI), and Native Method Libraries. Perfect for beginners in Java.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              Introduction to JVM
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              The Java Virtual Machine (JVM) is a core part of the Java Runtime Environment (JRE) that allows Java programs to run on any platform. JVM interprets Java bytecode and executes it efficiently.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-4">
              <li>Java source (.java) → compiled by javac → bytecode (.class)</li>
              <li>JVM loads the bytecode, verifies it, links it, and executes it</li>
              <li>JVM can interpret bytecode or use JIT compilation for faster execution</li>
              <li>Garbage Collection automatically reclaims memory from unused objects</li>
            </ul>
          </section>

          {/* Components of JVM */}
          <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              Components of JVM Architecture
            </h2>
            <figure className="bg-gray-100 p-4 sm:p-8 mb-4 text-center">
              <img
                src="/images/jvm.png"
                alt="Java Virtual Machine architecture diagram"
                className="mx-auto"
              />
              <figcaption className="text-gray-500 text-sm sm:text-base mt-2">
                Overview of JVM architecture
              </figcaption>
            </figure>
          </section>

          {/* Class Loader */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              1. Class Loader Subsystem
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              The class loader subsystem loads, links, and initializes classes in JVM. It has three main steps:
            </p>
            <figure className="bg-gray-100 p-4 sm:p-8 mb-6 text-center">
              <img
                src="/images/class-loader.png"
                alt="JVM Class Loader Subsystem"
                className="mx-auto"
              />
              <figcaption className="text-gray-500 text-sm sm:text-base mt-2">
                Class Loader Subsystem diagram
              </figcaption>
            </figure>

            {/* Steps */}
            <div className="space-y-6 ml-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  a) Loading
                </h3>
                <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
                  JVM reads the .class file and creates a Class object representing the class structure.
                </p>
                <p className="text-gray-800 mb-3 text-sm sm:text-base font-medium leading-relaxed">
                  👉 Note: Class object ≠ instance of the class
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base">
                  <li><strong>Bootstrap Class Loader:</strong> Loads core Java classes (java.lang, java.util).</li>
                  <li><strong>Extension Class Loader:</strong> Loads classes from extensions or additional libraries.</li>
                  <li><strong>Application Class Loader:</strong> Loads application classes from classpath or JARs.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  b) Linking
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
                  <li><strong>Verification:</strong> Ensures bytecode correctness and safety.</li>
                  <li><strong>Preparation:</strong> Allocates memory for static variables with default values.</li>
                  <li><strong>Resolution:</strong> Converts symbolic references into direct memory references.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                  c) Initialization
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
                  <li>Assigns actual values to static variables</li>
                  <li>Executes static blocks defined in the class</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Memory Areas */}
          <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              2. JVM Memory Areas
            </h2>
            <div className="space-y-4 ml-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Method Area</h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  Stores class-level information: class names, parent classes, methods, variables, and static data. Shared across all JVM instances.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Heap Area</h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">Stores all objects created during runtime. Shared among threads.</p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Stack Area</h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  Each thread has its own stack storing method calls and local variables.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Program Counter (PC) Register</h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  Keeps track of the instruction currently executed by the thread.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Native Method Stack</h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  Stores data for methods written in native code (C/C++). Each thread has its own native stack.
                </p>
              </div>
            </div>
          </section>

          {/* Execution Engine */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              3. Execution Engine
            </h2>
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Executes bytecode with three main components:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
              <li><strong>Interpreter:</strong> Reads and executes bytecode line by line.</li>
              <li><strong>JIT Compiler:</strong> Converts frequently used bytecode into native machine code for faster execution.</li>
              <li><strong>Garbage Collector:</strong> Automatically removes unused objects to free memory.</li>
            </ul>
          </section>

          {/* JNI */}
          <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              4. Java Native Interface (JNI)
            </h2>
            <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
              JNI allows Java code to call native methods written in C/C++ and vice versa.
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
              <li>Java can call C/C++ functions</li>
              <li>Native code can call Java methods</li>
            </ul>
          </section>

          {/* Native Method Libraries */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              5. Native Method Libraries
            </h2>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              Collections of native libraries required to execute native methods.
            </p>
          </section>
        </main>
      </article>
    </>
  );
}
