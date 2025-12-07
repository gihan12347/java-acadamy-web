export default function JavaIntroduction() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Introduction to Java
        </h1>

        {/* Definition Section */}
        <section className="mb-6 sm:mb-8  p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            1. Definition of Java
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
            <li>Java is a high-level, object-oriented programming language.</li>
            <li>
              Developed by Sun Microsystems (now owned by Oracle) in 1995.
            </li>
            <li>Known for its "write once, run anywhere" capability.</li>
          </ul>
        </section>

        {/* Java Features Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Java Features
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Object-Oriented Programming (OOP):
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Java fully supports object-oriented programming.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Platform Independent:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Java code can run on any system without considering OS.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Multithreading:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Java allows running multiple tasks concurrently and can increase efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Standard Libraries and APIs:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Java provides multiple built-in libraries and APIs for programming needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Open-Source Libraries:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Java has a wide range of libraries to extend functionality and speed up development.
              </p>
            </div>
          </div>
        </section>

        {/* JDK Section */}
        <section className="mb-6 sm:mb-8  p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            What is JDK (Java Development Kit) in Java
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Java Development Kit (JDK) is a software development environment that is developed and distributed by Oracle.
            It is used for building (developing) Java software applications and applets.
          </p>

          {/* Image Placeholder */}
          <div className="bg-white  p-4 sm:p-8 mb-4 text-center overflow-hidden">
            <img
              src="/images/java-platform.png"
              alt="JDK Components Diagram"
              className="mx-auto max-w-full h-auto"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                a) Java Runtime Environment (JRE):
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                It is an environment that is required for running (executing) a Java application.
                It cannot be used for the development of Java applications. 
                It is used only for executing the application program.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                Java Language Specification:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                The Java language specification is a technical definition of syntax and semantics of the Java programming language.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                Java Development Tools:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
                It consists of Java compiler, JAR tool, class file disassembler, debugger, JRE builder, etc.
                Java Development Tools provides everything for compiling, running, monitoring, debugging, and documenting applications.
              </p>
            </div>
          </div>
        </section>

        {/* How to Run Java Programme Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            How to Run Java Programme
          </h2>
          
          <ul className="list-disc list-inside space-y-2 text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            <li>Java is a high-level language.</li>
            <li>Java compiler called "javac" converts it to byte code (creates class file).</li>
            <li>JVM can read byte code and convert it to machine code then execute the programme.</li>
            <li>
              Java is platform independent because this byte code can run on any JVM. JVM takes responsibility for converting
              byte code to executable machine code based on OS and other dependencies.
            </li>
          </ul>

          {/* Image Placeholder */}
          <div className=" p-4 sm:p-8 text-center overflow-hidden">
            <img
              src="/images/how-to-run-java-code.jpg"
              alt="Java Compile and Run Process"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
}