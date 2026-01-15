import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function GradleDependencyManagement() {
    const { copiedCode, copyToClipboard } = useCopyToClipboard();

  const codeExamples = {
    basicSetup: `plugins {
    id 'java'
}
repositories {
    mavenCentral()
}
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter:2.3.4.RELEASE'
    testImplementation 'org.springframework.boot:spring-boot-starter-test:2.3.4.RELEASE'
}`,
    shortFormat: `implementation 'org.springframework.boot:spring-boot-starter:2.3.4.RELEASE'`,
    moduleRepo: `repositories {
    mavenCentral()
}
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter:2.3.4.RELEASE'
}`,
    fileSpecific: `dependencies {
    runtimeOnly files('libs/lib1.jar', 'libs/lib2.jar')
}`,
    fileFolder: `dependencies {
    runtimeOnly fileTree('libs') { include '*.jar' }
}`,
    projectDep: `dependencies {
    implementation project(':shared')
}`,
    gradleApi: `dependencies {
    implementation gradleApi()
}`,
    buildscript: `buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'org.springframework.boot:spring-boot-gradle-plugin:2.3.4.RELEASE'
    }
}
apply plugin: 'org.springframework.boot'`,
  };

  const CodeBlock = ({ code, id, filename }) => (
    <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden mb-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-600"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
          </div>
          <span className="text-white text-xs sm:text-sm ml-2 font-mono">
            {filename}
          </span>
        </div>

        <button
          onClick={() => copyToClipboard(code, id)}
          className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white transition-colors duration-200 text-sm touch-manipulation"
        >
          {copiedCode === id ? (
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
        <code className="text-white font-mono leading-relaxed">{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8 text-center px-2">
          Dependency Management in Gradle
        </h1>

        {/* Introduction */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Let's start with a simple Gradle script for Java projects:
          </p>

          <CodeBlock
            code={codeExamples.basicSetup}
            id="basicSetup"
            filename="build.gradle"
          />

          <div className="space-y-3 text-sm sm:text-base text-gray-800">
            <p>This Gradle script sets up a basic Java project.</p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4">
              <li>
                The <span className="font-mono bg-gray-100 px-1">plugins</span>{" "}
                block applies the Java plugin, telling Gradle this is a Java
                project.
              </li>
              <li>
                The{" "}
                <span className="font-mono bg-gray-100 px-1">repositories</span>{" "}
                block specifies that dependencies should be downloaded from
                Maven Central.
              </li>
              <li>
                The{" "}
                <span className="font-mono bg-gray-100 px-1">dependencies</span>{" "}
                block adds Spring Boot:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    <span className="font-mono text-xs sm:text-sm">
                      spring-boot-starter
                    </span>{" "}
                    (version 2.3.4.RELEASE) for the main application code
                  </li>
                  <li>
                    <span className="font-mono text-xs sm:text-sm">
                      spring-boot-starter-test
                    </span>{" "}
                    (same version) for testing
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Dependency Configurations */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Dependency Configurations
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            There are different configurations in which we can declare
            dependencies. In this regard, we can choose to be more or less
            precise, as we'll see later on.
          </p>
        </section>

        {/* How to Declare Dependencies */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            How to Declare Dependencies
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            A dependency is defined using four parts:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4 mb-4">
            <li>
              <span className="font-semibold">group</span> – who makes it
              (organization or project)
            </li>
            <li>
              <span className="font-semibold">name</span> – the dependency's
              name
            </li>
            <li>
              <span className="font-semibold">version</span> – which version to
              use
            </li>
            <li>
              <span className="font-semibold">classifier</span> – optional, used
              to tell similar dependencies apart
            </li>
          </ul>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Gradle lets you declare dependencies in different ways. The simplest
            is the short (string) format, like this:
          </p>

          <CodeBlock
            code={codeExamples.shortFormat}
            id="shortFormat"
            filename="build.gradle"
          />
        </section>

        {/* Types of Dependency Configurations */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Types of Dependency Configurations
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Gradle offers different configuration types to control when and how
            dependencies are used:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                api
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Exposed to other projects that depend on this one
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                implementation
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Used internally for main code only
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                compileOnly
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Needed only during compilation, not at runtime
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                compileOnlyApi
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Needed at compile time and visible to consumers
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                runtimeOnly
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Needed only when the app runs
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                testCompileOnly
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Needed only to compile tests
              </p>
            </div>
            <div className="p-3 sm:p-4 bg-gray-50 rounded border border-gray-200">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base font-mono">
                testRuntimeOnly
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Needed only when running tests
              </p>
            </div>
          </div>
        </section>

        {/* Types of Dependencies in Gradle */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">
            Types of Dependencies in Gradle
          </h2>

          {/* Module Dependencies */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              1. Module Dependencies
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              The most common way to add dependencies is from a repository (like
              Maven Central). Gradle downloads them using the repositories
              block.
            </p>
            <CodeBlock
              code={codeExamples.moduleRepo}
              id="moduleRepo"
              filename="build.gradle"
            />
          </div>

          {/* File Dependencies */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              2. File Dependencies
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              If dependencies are stored locally, you can include them by
              specifying their file paths.
            </p>

            <div className="mb-4">
              <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">
                Specific JAR files:
              </p>
              <CodeBlock
                code={codeExamples.fileSpecific}
                id="fileSpecific"
                filename="build.gradle"
              />
            </div>

            <div>
              <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">
                All JARs in a folder:
              </p>
              <CodeBlock
                code={codeExamples.fileFolder}
                id="fileFolder"
                filename="build.gradle"
              />
            </div>
          </div>

          {/* Project Dependencies */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              3. Project Dependencies
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              One project can depend on another within the same build.
            </p>
            <CodeBlock
              code={codeExamples.projectDep}
              id="projectDep"
              filename="build.gradle"
            />
          </div>

          {/* Gradle Dependencies */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              4. Gradle Dependencies
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              When building Gradle plugins or tasks, you can depend on Gradle's
              own API.
            </p>
            <CodeBlock
              code={codeExamples.gradleApi}
              id="gradleApi"
              filename="build.gradle"
            />
          </div>
        </section>

        {/* buildscript */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            buildscript
          </h2>
          
          <div className="space-y-3 text-sm sm:text-base text-gray-800 mb-4">
            <p>
              The <span className="font-mono bg-white px-1">dependencies</span>{" "}
              block is for your application code.
            </p>
            <p>
              The <span className="font-mono bg-white px-1">buildscript</span>{" "}
              block is for Gradle itself.
            </p>
            <p>
              It lets you add dependencies that Gradle needs to run the build,
              such as plugins and custom tasks. Without it, you can only use
              Gradle's built-in features.
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-800 font-semibold mb-3">
            Example: adding the Spring Boot plugin from Maven Central:
          </p>

          <CodeBlock
            code={codeExamples.buildscript}
            id="buildscript"
            filename="build.gradle"
          />

          <p className="text-sm sm:text-base text-gray-800 mt-4">
            This tells Gradle to download and use the Spring Boot plugin for the
            build.
          </p>
        </section>
      </div>
    </div>
  );
}