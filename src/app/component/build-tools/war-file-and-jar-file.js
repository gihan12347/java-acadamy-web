import { Copy, Check } from "lucide-react";
import { useCopyToClipboard } from "../util.js";

export default function GradleJarWarGuide() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();
  const codeExamples = {
    jarPlugin: `plugins {
    id 'java'
}`,
    jarBuild: `gradle build`,
    jarCustom: `jar {
    archiveBaseName = 'my-application'
    archiveVersion = '1.0.0'
    manifest {
        attributes(
            'Main-Class': 'com.example.MainClass'
        )
    }
}`,
    warPlugin: `plugins {
    id 'java'
    id 'war'
}`,
    warBuild: `gradle build`,
    warCustom: `war {
    archiveBaseName = 'my-web-app'
    archiveVersion = '1.0'
}`,

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
          Creating JAR and WAR Files Using Gradle
        </h1>

        {/* Introduction */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Gradle is a powerful build automation tool widely used for Java applications. It allows developers to compile code, manage dependencies, run tests, and package applications into distributable formats such as JAR and WAR files.
          </p>
        </section>

        {/* JAR Files Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            What is a JAR File?
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            A JAR (Java ARchive) file is a compressed package that contains:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4 mb-4">
            <li>Compiled .class files</li>
            <li>Resource files (properties, images, etc.)</li>
            <li>A manifest file (MANIFEST.MF)</li>
          </ul>
          
          <p className="text-sm sm:text-base text-gray-800 mb-2 font-semibold">
            JAR files are commonly used for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4">
            <li>Standalone Java applications</li>
            <li>Libraries and utilities</li>
            <li>Microservices (e.g., Spring Boot JARs)</li>
          </ul>
        </section>

        {/* Creating JAR Files */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">
            Creating a JAR File Using Gradle
          </h2>

          {/* Step 1 */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              1. Apply the Java Plugin
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              Gradle can generate a JAR automatically when the Java plugin is applied.
            </p>
            <CodeBlock
              code={codeExamples.jarPlugin}
              id="jarPlugin"
              filename="build.gradle"
            />
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              2. Project Structure
            </h3>
            <div className="bg-gray-50 p-4 sm:p-6 rounded border-l-4 border-red-600">
              <div className="space-y-2 font-mono text-sm sm:text-base text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-red-600">📁</span>
                  <span className="font-semibold">project-name</span>
                </div>
                <div className="ml-6 flex items-center gap-2">
                  <span className="text-red-600">📁</span>
                  <span>src</span>
                </div>
                <div className="ml-12 flex items-center gap-2">
                  <span className="text-red-600">📁</span>
                  <span>main</span>
                </div>
                <div className="ml-18 flex items-center gap-2" style={{marginLeft: '4.5rem'}}>
                  <span className="text-red-600">📁</span>
                  <span>java</span>
                </div>
                <div className="ml-6 flex items-center gap-2">
                  <span className="text-red-600">📄</span>
                  <span>build.gradle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              3. Build the JAR
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              Run the following command:
            </p>
            <CodeBlock
              code={codeExamples.jarBuild}
              id="jarBuild"
              filename="terminal"
            />
            <p className="text-sm sm:text-base text-gray-800 mt-4">
              The JAR file will be created at:{" "}
              <span className="font-mono bg-white px-2 py-1 border border-gray-200">
                build/libs/project-name.jar
              </span>
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              4. Customizing the JAR (Optional)
            </h3>
            <CodeBlock
              code={codeExamples.jarCustom}
              id="jarCustom"
              filename="build.gradle"
            />
          </div>
        </section>

        {/* WAR Files Section */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            What is a WAR File?
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            A WAR (Web Application ARchive) file is used to deploy Java web applications to servlet containers like:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
              <p className="font-semibold text-red-700 text-sm sm:text-base">Apache Tomcat</p>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
              <p className="font-semibold text-red-700 text-sm sm:text-base">Jetty</p>
            </div>
            <div className="p-3 bg-gray-50 rounded border border-gray-200 text-center">
              <p className="font-semibold text-red-700 text-sm sm:text-base">WildFly</p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-800 mb-2 font-semibold">
            A WAR file contains:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4">
            <li>Servlets and controllers</li>
            <li>JSP files</li>
            <li>HTML, CSS, JavaScript</li>
            <li>WEB-INF configuration files</li>
          </ul>
        </section>

        {/* Creating WAR Files */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">
            Creating a WAR File Using Gradle
          </h2>

          {/* Step 1 */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              1. Apply the WAR Plugin
            </h3>
            <CodeBlock
              code={codeExamples.warPlugin}
              id="warPlugin"
              filename="build.gradle"
            />
          </div>

          {/* Step 2 */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              2. Project Structure
            </h3>
            <div className="bg-gray-50 p-4 sm:p-6 rounded border-l-4 border-red-600">
              <div className="space-y-2 font-mono text-sm sm:text-base text-gray-800">
                <div className="flex items-center gap-2">
                  <span className="text-red-600">📁</span>
                  <span className="font-semibold">project-name</span>
                </div>
                <div className="ml-6 flex items-center gap-2">
                  <span className="text-red-600">📁</span>
                  <span>src</span>
                </div>
                <div className="ml-12 flex items-center gap-2">
                  <span className="text-red-600">📁</span>
                  <span>main</span>
                </div>
                <div className="flex items-center gap-2" style={{marginLeft: '4.5rem'}}>
                  <span className="text-red-600">📁</span>
                  <span>java</span>
                </div>
                <div className="flex items-center gap-2" style={{marginLeft: '4.5rem'}}>
                  <span className="text-red-600">📁</span>
                  <span>webapp</span>
                </div>
                <div className="flex items-center gap-2" style={{marginLeft: '6rem'}}>
                  <span className="text-red-600">📄</span>
                  <span>index.jsp</span>
                </div>
                <div className="flex items-center gap-2" style={{marginLeft: '6rem'}}>
                  <span className="text-red-600">📁</span>
                  <span>WEB-INF</span>
                </div>
                <div className="flex items-center gap-2" style={{marginLeft: '7.5rem'}}>
                  <span className="text-red-600">📄</span>
                  <span>web.xml</span>
                </div>
                <div className="ml-6 flex items-center gap-2">
                  <span className="text-red-600">📄</span>
                  <span>build.gradle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              3. Build the WAR
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              Run:
            </p>
            <CodeBlock
              code={codeExamples.warBuild}
              id="warBuild"
              filename="terminal"
            />
            <p className="text-sm sm:text-base text-gray-800 mt-4">
              The WAR file will be generated at:{" "}
              <span className="font-mono bg-white px-2 py-1 border border-gray-200">
                build/libs/project-name.war
              </span>
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              4. Customizing the WAR
            </h3>
            <CodeBlock
              code={codeExamples.warCustom}
              id="warCustom"
              filename="build.gradle"
            />
          </div>
        </section>

        {/* Key Differences */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            JAR vs WAR: Key Differences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded border border-gray-200">
              <h3 className="font-bold text-red-700 mb-2 text-lg">JAR Files</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                <li>Standalone Java applications</li>
                <li>Contains compiled classes and resources</li>
                <li>Can be executed directly with java -jar</li>
                <li>Used for libraries and microservices</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded border border-gray-200">
              <h3 className="font-bold text-red-700 mb-2 text-lg">WAR Files</h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-800">
                <li>Web applications for servlet containers</li>
                <li>Contains web resources (JSP, HTML, CSS)</li>
                <li>Requires deployment to a server</li>
                <li>Includes WEB-INF directory structure</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}