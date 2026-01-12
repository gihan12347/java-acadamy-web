export default function GradleLifecycle() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Gradle Tasks and Lifecycle
        </h1>

        {/* Gradle Lifecycle Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            1. Gradle Lifecycle
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Gradle's lifecycle describes how a build runs from start to finish. It has three main phases:
          </p>

          <div className="space-y-6">
            {/* Phase 1 */}
            <div className=" p-4 sm:p-5 ">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                1. Initialization Phase
              </h3>
              <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
                Gradle determines which projects are involved in the build.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-2">
                <li>Gradle finds the root project (where settings.gradle or settings.gradle.kts lives).</li>
                <li>It evaluates settings.gradle to discover all included subprojects.</li>
                <li>It creates a Project object for each project.</li>
              </ul>
              <div className="mt-3 bg-white p-3  border-l-4 border-red-600">
                <p className="text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold text-red-600">Example:</span> A multi-module project creates multiple Project instances here.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className=" p-4 sm:p-5 ">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                2. Configuration Phase
              </h3>
              <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
                Gradle configures the build for all projects included in the build.
              </p>
              
              <div className="mb-3">
                <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">What happens:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-2">
                  <li>Gradle runs all the build scripts (build.gradle, build.gradle.kts) to configure tasks.</li>
                  <li>Task objects are created and configured.</li>
                  <li>Dependency graphs for tasks are built.</li>
                </ul>
              </div>

              <div className="mt-3 bg-white p-3  border-l-4 border-red-600">
                <p className="text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold text-red-600">Output:</span> A fully configured build with all tasks ready, but no tasks have run yet.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className=" p-4 sm:p-5 ">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                3. Execution Phase
              </h3>
              <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
                Gradle executes only the tasks requested on the command line.
              </p>
              <div className="mt-3 bg-white p-3  border-l-4 border-red-600">
                <p className="text-xs sm:text-sm text-gray-700">
                  <span className="font-semibold text-red-600">Example:</span> :moduleA:build
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradle Tasks Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            2. Gradle Tasks
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            A Gradle task is a single job in the build process. It could be any task like compiling code, running tests, creating a package or uploading files. These tasks are defined in a build script (build.gradle).
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-4 mt-6">
            Types of Gradle Tasks
          </h3>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Gradle provides two main types of tasks which are listed below:
          </p>

          <div className="space-y-6">
            {/* Built-In Tasks */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                1. Built-In Tasks:
              </h4>
              <p className="text-gray-800 mb-3 ml-4 text-sm sm:text-base leading-relaxed">
                Built-In Tasks are tasks that come pre-configured with gradle. Common built-in tasks include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-6">
                <li><span className="font-semibold text-red-700">build:</span> It compiles and assembles the project.</li>
                <li><span className="font-semibold text-red-700">clean:</span> It deletes the build directory.</li>
                <li><span className="font-semibold text-red-700">test:</span> It runs unit tests for the project.</li>
                <li><span className="font-semibold text-red-700">jar:</span> It creates a JAR file from the compiled classes.</li>
              </ul>
            </div>

            {/* Custom Tasks */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                2. Custom Tasks:
              </h4>
              <p className="text-gray-800 mb-4 ml-4 text-sm sm:text-base leading-relaxed">
                Custom tasks are tasks that we define in our build.gradle file. We can create a task to automate any action that Gradle does not handle by default.
              </p>
              
              <div className="ml-4">
                <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Example:</p>
                <div className="bg-gray-900 text-gray-100 p-4  overflow-x-auto text-xs sm:text-sm font-mono">
                  <pre>{`task helloWorld {
    doLast {
        println 'Welcome to the homePath'
    }
}`}</pre>
                </div>
                
                <div className="mt-4  p-4  border-l-4 border-red-600">
                  <p className="text-sm sm:text-base text-gray-800">
                    <span className="font-semibold text-red-600">Output:</span> This task will print a message when you run it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}