import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "../util.js";

const codeExamples = {
  pluginsExample: `plugins {
    id 'java'
    id 'application'
}`,
  repositoriesExample: `repositories {
    mavenCentral()
}`,
  dependenciesExample: `dependencies {
    implementation 'org.springframework:spring-core:5.3.8'
    testImplementation 'junit:junit:4.13.2'
}`,
  tasksExample: `task hello {
    doLast {
        println 'Hello, Gradle'
    }
}`,
  projectPropertiesExample: `project.version = '1.0.0'`,
  sourceSetExample: `sourceSets {
    main {
        java {
            srcDirs = ['src/main/java']
        }
    }
}`,
  taskOrderExample: `task clean {
    delete 'build'
}

task compileJava {
    dependsOn clean
}`,
  defaultTasksExample: `defaultTasks 'build'`,
  fullExample: `plugins {
    id 'java'
    id 'application'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework:spring-core:5.3.8'
    testImplementation 'junit:junit:4.13.2'
}

application {
    mainClassName = 'com.example.Main'
}

task hello {
    doLast {
        println 'Hello, Gradle'
    }
}`,
};

export default function GradleBuildScript() {
    const { copiedCode, copyToClipboard } = useCopyToClipboard();

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center px-2">
          Gradle Build Script Structure
        </h1>

        {/* Introduction */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            A Gradle build script tells Gradle how to build, test, and run your
            project. It is written in Groovy (build.gradle) or Kotlin
            (build.gradle.kts).
          </p>
        </section>

        {/* Main Parts Header */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Main Parts of a Gradle Build Script
          </h2>
        </section>

        {/* 1. Plugins */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            1. Plugins
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Plugins add features to your project.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
            <li>
              <strong>java</strong> → for Java projects
            </li>
            <li>
              <strong>application</strong> → for runnable apps
            </li>
          </ul>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.pluginsExample, "pluginsExample")
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "pluginsExample" ? (
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
                {codeExamples.pluginsExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 2. Repositories */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            2. Repositories
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Repositories tell Gradle where to download libraries from. Most
            projects use Maven Central.
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.repositoriesExample,
                    "repositoriesExample"
                  )
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "repositoriesExample" ? (
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
                {codeExamples.repositoriesExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 3. Dependencies */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            3. Dependencies
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Dependencies are libraries your project needs.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2 sm:ml-4 mb-4 text-sm sm:text-base">
            <li>
              <strong>implementation</strong> → used while running the app
            </li>
            <li>
              <strong>testImplementation</strong> → used only for testing
            </li>
          </ul>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.dependenciesExample,
                    "dependenciesExample"
                  )
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "dependenciesExample" ? (
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
                {codeExamples.dependenciesExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 4. Tasks */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            4. Tasks
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Tasks are actions Gradle performs (build, test, clean, etc.). You
            can also create custom tasks.
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.tasksExample, "tasksExample")
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "tasksExample" ? (
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
                {codeExamples.tasksExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 5. Project Properties */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            5. Project Properties
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Used to set project details like version.
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.projectPropertiesExample,
                    "projectPropertiesExample"
                  )
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "projectPropertiesExample" ? (
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
                {codeExamples.projectPropertiesExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 6. Source Sets */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            6. Source Sets
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Tell Gradle where your code is located. (Default is src/main/java)
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.sourceSetExample,
                    "sourceSetExample"
                  )
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "sourceSetExample" ? (
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
                {codeExamples.sourceSetExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 7. Task Order */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            7. Task Order (Dependencies)
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            You can control which task runs first.
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.taskOrderExample,
                    "taskOrderExample"
                  )
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "taskOrderExample" ? (
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
                {codeExamples.taskOrderExample}
              </code>
            </pre>
          </div>
        </section>

        {/* 8. Default Tasks */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            8. Default Tasks
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Runs a task automatically when no task is specified.
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(
                    codeExamples.defaultTasksExample,
                    "defaultTasksExample"
                  )
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "defaultTasksExample" ? (
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
                {codeExamples.defaultTasksExample}
              </code>
            </pre>
          </div>
        </section>

        {/* Full Example */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Simple Full Example
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base">
            Here's a complete Gradle build script combining all the main parts:
          </p>

          <div className="relative bg-black p-3 sm:p-6 mb-6 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-red-600 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-600"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-1 sm:ml-2 font-mono">
                  build.gradle
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.fullExample, "fullExample")
                }
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 text-white transition-colors duration-200"
              >
                {copiedCode === "fullExample" ? (
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
                {codeExamples.fullExample}
              </code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}
