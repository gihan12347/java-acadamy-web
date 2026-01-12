import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function GradleIntro() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    customTask: `build.gradle : task hello
{
    doLast
    {
        println 'Welcome to Java Acadamy!'
    }
}`,
    output: `> gradle -q hello
Welcome to java Acadamy!`,
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8 text-center px-2">
          Introduction to Gradle
        </h1>

        {/* Introduction */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Gradle is an open-source build tool used to automate tasks like
            compiling code, testing, packaging, deploying, and publishing
            applications.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4">
            <li>Based on ideas from Apache Ant and Apache Maven</li>
            <li>
              Supports multiple languages such as Java, Groovy, C, C++, and
              Scala
            </li>
            <li>Automates repetitive development tasks</li>
          </ul>
        </section>

        {/* Working with Gradle */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Working with Gradle
          </h2>

          <div className="p-3 sm:p-4 mb-4">
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              A Gradle setup is made up of projects and tasks.
            </p>
          </div>

          {/* Gradle Projects */}
          <div className="bg-gray-50 p-3 sm:p-4 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              1. Gradle Projects
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              A Gradle project can be an application or a library (like a JAR
              file). Each project is made up of one or more tasks.
            </p>
            <div className="bg-white p-3 rounded">
              <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">
                Real-Life Analogy:
              </p>
              <p className="text-sm sm:text-base text-gray-800">
                You can think of a project as a wall and tasks as the bricks
                used to build it.
              </p>
            </div>
          </div>

          {/* Gradle Tasks */}
          <div className="bg-gray-50 p-3 sm:p-4 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              2. Gradle Tasks
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              Tasks are small actions that do specific jobs, such as:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4 mb-4">
              <li>Compiling code</li>
              <li>Creating documentation</li>
              <li>Publishing files to a repository</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              Tasks tell Gradle what input to use and what output to produce.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                  Default Tasks
                </p>
                <p className="text-gray-800 text-xs sm:text-sm">
                  Built-in tasks provided by Gradle (for example, init and
                  wrapper)
                </p>
              </div>
              <div className="bg-white p-3 rounded">
                <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                  Custom Tasks
                </p>
                <p className="text-gray-800 text-xs sm:text-sm">
                  Tasks created by developers to perform specific actions needed
                  for a project
                </p>
              </div>
            </div>
          </div>

          {/* Custom Task Example */}
          <div className="bg-white p-3 sm:p-4 mb-4">
            <h4 className="text-base sm:text-lg font-semibold text-red-700 mb-3">
              Example: Custom Task
            </h4>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              A custom task can be created to print "Welcome to Java Acadamy!"
            </p>

            <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden mb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                    build.gradle
                  </span>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(codeExamples.customTask, "customTask")
                  }
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white transition-colors duration-200 text-sm touch-manipulation"
                >
                  {copiedCode === "customTask" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs sm:text-sm overflow-x-auto">
                <code className="text-white font-mono leading-relaxed">
                  {codeExamples.customTask}
                </code>
              </pre>
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">
                Output:
              </p>
              <pre className="text-xs sm:text-sm overflow-x-auto">
                <code className="text-red-600 font-mono leading-relaxed">
                  {codeExamples.output}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* Features of Gradle */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Features of Gradle
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Works with IDEs
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Supports popular development tools
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Java-based
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Runs on the JVM and feels familiar to Java developers
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Ant & Maven support
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Can use Ant tasks and Maven repositories
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Fast builds
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Rebuilds only what has changed
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Open source
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Free to use with strong community support
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Handles large projects
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Supports multi-project setups
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Manages dependencies
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Automatically downloads required libraries
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Flexible scripting
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Uses Groovy or Kotlin for configuration
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Plugin support
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Works with many languages and platforms
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Highly customizable
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Easy to extend with plugins and APIs
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Build caching
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Reuses previous build results to save time
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Test support
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Works with common testing frameworks
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ CI friendly
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Integrates easily with CI tools
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Supports many languages
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Java, Kotlin, Groovy, Scala, and more
              </p>
            </div>
          </div>
        </section>

        {/* Pros of Using Gradle */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Pros of Using Gradle
          </h2>
          <div className="space-y-3">
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✔ Declarative and Scalable
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Uses a clear DSL for configuration and scales well with project
                size
              </p>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✔ Flexible Structure
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Adapts to any project layout and supports custom plugins
              </p>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✔ Deep API Access
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Allows detailed control over build execution and behavior
              </p>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✔ Improved Performance
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Optimized for faster builds, even in large projects
              </p>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✔ Strong Community
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Offers rich documentation, tutorials and plugin resources
              </p>
            </div>
          </div>
        </section>

        {/* Cons of Using Gradle */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Cons of Using Gradle
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-3 sm:p-4 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Learning Curve
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Requires knowledge of Groovy/Java and an understanding of
                Gradle's architecture
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Complex Configuration
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Setup and plugin integration can be tricky for beginners
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Debugging Difficulty
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Troubleshooting can be hard in large builds with many
                dependencies
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Resource Intensive
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Can consume significant system resources during builds
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Migration Challenges
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Transitioning from other build tools may require significant
                effort and expertise
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
