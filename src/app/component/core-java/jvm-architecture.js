export default function JVMArchitecture() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          JVM Architecture
        </h1>

        {/* Introduction Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            The Java Virtual Machine (JVM) is a core component of the Java Runtime Environment (JRE) that allows Java programs to run on any platform without modification.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
            <li>Java source (.java) → compiled by javac → bytecode (.class)</li>
            <li>JVM loads the bytecode, verifies it, links it, and then executes it</li>
            <li>The JVM can directly interpret bytecode or use JIT to turn frequently used code into fast native machine code.</li>
            <li>Garbage collection runs in the background to reclaim memory from unused objects</li>
          </ul>
        </section>

        {/* Components of JVM Architecture */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Components of JVM Architecture
          </h2>
          
          {/* Image Placeholder */}
          <div className="bg-gray-100 p-4 sm:p-8 mb-4 text-center">
            <div className="text-gray-500 text-sm sm:text-base">
              <img
              src="/images/jvm.png"
              alt="JVM"
            />
            </div>
          </div>
        </section>

        {/* Class Loader Subsystem */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            1. Class Loader Subsystem
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            It is mainly responsible for three activities.
          </p>

          {/* Image Placeholder */}
          <div className="bg-gray-100  p-4 sm:p-8 mb-6 text-center">
            <div className="text-gray-500 text-sm sm:text-base">
                            <img
              src="/images/class-loader.png"
              alt="JVM"
            />
            </div>
          </div>

          <div className="space-y-6">
            {/* Loading */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                a) Loading
              </h3>
              <p className="text-gray-800 ml-4 mb-3 text-sm sm:text-base leading-relaxed">
                Java only reads the .class file. It stores information about the class (its methods, variables, etc.). It creates a Class object that represents the class itself, not an object of that class.
              </p>
              <p className="text-gray-800 ml-4 mb-4 text-sm sm:text-base leading-relaxed font-medium">
                👉 This Class object is not the same as creating an actual object (instance)
              </p>

              <div className="ml-4 space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                    1. Bootstrap Class Loader
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base">
                    <li>The parent of all class loaders.</li>
                    <li>Loads core Java classes like java.lang, java.util, etc.</li>
                    <li>Works with the files in the JDK's rt.jar or core modules.</li>
                    <li className="font-medium italic">Think of it as: "The class loader that loads Java's most basic and essential classes."</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                    2. Extension (or Platform) Class Loader
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base">
                    <li>Child of the bootstrap loader.</li>
                    <li>Loads classes from the extensions directory, like: JAVA_HOME/jre/lib/ext/</li>
                    <li className="font-medium italic">Think of it as: "The class loader that loads extra libraries added to Java."</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                    3. Application (or System) Class Loader
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base">
                    <li>Child of the extension loader.</li>
                    <li>Loads classes from the application's classpath, such as: your .class files, JARs, or bin/ folder.</li>
                    <li className="font-medium italic">Think of it as: "The class loader that loads your program's classes."</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Linking */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                b) Linking
              </h3>
              <p className="text-gray-800 ml-4 mb-3 text-sm sm:text-base leading-relaxed">
                Responsible for preparing the loaded class for execution. It includes three steps:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
                <li><strong>Verification:</strong> Ensures the bytecode follows JVM rules and is safe to execute.</li>
                <li><strong>Preparation:</strong> Allocates memory for static variables and assigns default values.</li>
                <li><strong>Resolution:</strong> Converts symbolic references into direct references in memory.</li>
              </ul>
            </div>

            {/* Initialization */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                c) Initialization
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
                <li>Assigns actual values to static variables.</li>
                <li>Executes static blocks defined in the class.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* JVM Memory Areas */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            2. JVM Memory Areas
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                Method Area:
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Stores class-level information like class name, parent class, methods, variables, and static data. Shared across the JVM.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                Heap Area:
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Stores all objects. Shared across the JVM.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                Stack Area:
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Each thread has its own runtime stack; stores method calls, local variables in stack frames. Destroyed when the thread ends.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                PC Register (Program Counter):
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Each thread has one. It stores the address of the instruction the thread is currently running. Helps the thread know "what to run next."
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-4">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                Native Method Stack:
              </h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Used when Java calls non-Java (native) code, like C/C++ methods. Each thread gets its own native stack. It stores data needed to run those native methods.
              </p>
            </div>
          </div>
        </section>

        {/* Execution Engine */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            3. Execution Engine
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            The execution engine runs the bytecode from the .class file. It reads instructions, uses data from memory, and executes them. It has three main parts:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                1. Interpreter
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Reads and executes bytecode line by line.</li>
                <li>Slower if the same method runs many times because it must interpret it again each time.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                2. Just-In-Time (JIT) Compiler
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Speeds up execution. Converts frequently used bytecode into native machine code.</li>
                <li>So repeated methods run faster (no need to re-interpret).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                3. Garbage Collector
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                Removes objects from memory that are no longer used.
              </p>
            </div>
          </div>
        </section>

        {/* Java Native Interface */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            4. Java Native Interface (JNI)
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            JNI lets Java work with native code written in C or C++.
          </p>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            It allows:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-gray-800 text-sm sm:text-base">
            <li>Java to call C/C++ functions</li>
            <li>C/C++ code to call Java methods</li>
          </ul>
          <p className="text-gray-800 mt-3 text-sm sm:text-base leading-relaxed">
            This is useful for tasks that need hardware-specific or faster native code.
          </p>
        </section>

        {/* Native Method Libraries */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            5. Native Method Libraries
          </h2>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            These are collections of native libraries required for executing native methods.
          </p>
        </section>
      </div>
    </div>
  );
}