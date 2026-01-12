export default function BuildToolsIntro() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Introduction to Build Tools
        </h1>

        {/* Introduction Image */}
        <div className="mb-6 sm:mb-8  border-2 border-red-200 rounded-lg overflow-hidden">
          <img 
            src="/images/build-tools-intro.png" 
            alt="Introduction to Build Tools" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Introduction Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Build tools are essential programs that turn source code into executable applications.
          </p>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            In modern software development, writing code isn't enough. The code must be tested, optimized, and packaged before it can run.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Build tools automate this process, making software delivery faster, more reliable, and consistent.
          </p>
        </section>

        {/* What Does a Build Tool Do Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            What Does a Build Tool Do?
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            A build tool manages the steps needed to turn source code into a deployable application. These steps usually include:
          </p>

          <div className="space-y-4">
            <div className="p-4 sm:p-5 border-l-4 border-red-600 ">
              <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2">
                Dependency Resolution
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Downloading required libraries.
              </p>
            </div>

            <div className="p-4 sm:p-5 border-l-4 border-red-600 ">
              <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2">
                Compilation
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Converting source code into machine-readable code.
              </p>
            </div>

            <div className="p-4 sm:p-5 border-l-4 border-red-600 ">
              <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2">
                Testing
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Running tests to check code quality.
              </p>
            </div>

            <div className="p-4 sm:p-5 border-l-4 border-red-600 ">
              <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2">
                Packaging
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Bundling everything into a deployable format.
              </p>
            </div>

            <div className="p-4 sm:p-5 border-l-4 border-red-600 ">
              <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2">
                Publishing
              </h3>
              <p className="text-gray-800 text-sm sm:text-base">
                Uploading the final product to a repository.
              </p>
            </div>
          </div>
        </section>

        {/* Types of Build Tools Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Types of Build Tools
          </h2>

          {/* Types Image */}
          <div className="mb-6  border-2 border-red-200 rounded-lg overflow-hidden">
            <img 
              src="/images/types-of-build-tools.png" 
              alt="Types of Build Tools" 
              className="w-full h-auto object-cover"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-4">
            Major Types of Build Tools
          </h3>

          <div className="space-y-6">
            {/* Build Automation Tools */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                1. Build Automation Tools
              </h4>
              <p className="text-gray-800 mb-3 ml-4 text-sm sm:text-base leading-relaxed">
                These tools turn source code into executable programs automatically.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-6">
                <li><span className="font-semibold text-red-700">Ant:</span> Flexible but uses detailed XML files.</li>
                <li><span className="font-semibold text-red-700">Maven:</span> Uses a standard project structure and manages dependencies.</li>
                <li><span className="font-semibold text-red-700">Gradle:</span> Fast and flexible, using Groovy or Kotlin for configuration.</li>
              </ul>
            </div>

            {/* Task Runners */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                2. Task Runners
              </h4>
              <p className="text-gray-800 mb-3 ml-4 text-sm sm:text-base leading-relaxed">
                Common in front-end development to automate repetitive tasks.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-6">
                <li><span className="font-semibold text-red-700">Grunt:</span> Uses a configuration file to define tasks.</li>
                <li><span className="font-semibold text-red-700">Gulp:</span> Faster than Grunt by processing files in streams.</li>
              </ul>
            </div>

            {/* Build Systems */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                3. Build Systems
              </h4>
              <p className="text-gray-800 mb-3 ml-4 text-sm sm:text-base leading-relaxed">
                Used for large projects where speed and scalability matter.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-6">
                <li><span className="font-semibold text-red-700">Make:</span> One of the earliest build tools.</li>
                <li><span className="font-semibold text-red-700">CMake:</span> Creates build files for different platforms.</li>
                <li><span className="font-semibold text-red-700">Ninja:</span> Focuses on very fast builds.</li>
                <li><span className="font-semibold text-red-700">Bazel:</span> Supports large, multi-language projects.</li>
              </ul>
            </div>

            {/* CI Tools */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                4. Continuous Integration (CI) Tools
              </h4>
              <p className="text-gray-800 mb-3 ml-4 text-sm sm:text-base leading-relaxed">
                Automatically build, test, and deploy code changes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-6">
                <li><span className="font-semibold text-red-700">Jenkins:</span> Popular open-source automation server.</li>
                <li><span className="font-semibold text-red-700">Travis CI, CircleCI, GitHub Actions:</span> Cloud-based CI tools.</li>
              </ul>
            </div>

            {/* Package Managers */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                5. Package Managers
              </h4>
              <p className="text-gray-800 mb-3 ml-4 text-sm sm:text-base leading-relaxed">
                Manage project dependencies and sometimes build tasks.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-6">
                <li><span className="font-semibold text-red-700">npm:</span> For JavaScript projects.</li>
                <li><span className="font-semibold text-red-700">pip:</span> For Python projects.</li>
                <li><span className="font-semibold text-red-700">Bundler:</span> For Ruby projects.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dependency Graph Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Anatomy of a Build: Dependency Graph
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            A build tool figures out what to build by creating a dependency graph.
          </p>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            If one module depends on another, the tool builds them in the correct order. This allows it to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base ml-4">
            <li><span className="font-semibold text-red-700">Run tasks in parallel:</span> Build independent parts at the same time.</li>
            <li><span className="font-semibold text-red-700">Use incremental builds:</span> Rebuild only what changed, saving time.</li>
          </ul>
        </section>

        {/* Top Build Tools Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Top Build Tools by Ecosystem
          </h2>

          {/* Top Tools Image Placeholder */}
        <div className="mb-6 sm:mb-8  border-2 border-red-200 rounded-lg overflow-hidden">
        <img 
            src="/images/top-five-building-tools.png" 
            alt="Introduction to Build Tools" 
            className="w-full h-auto object-cover"
        />
        </div>

          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Different programming languages use different build tools:
          </p>

          <div className="space-y-6">
            {/* Java */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                1. Java (JVM)
              </h3>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Maven:</h4>
                  <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
                    Uses a standard project structure and XML configuration.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base ml-4">
                    <li><span className="font-semibold">Pros:</span> Stable and widely used.</li>
                    <li><span className="font-semibold">Cons:</span> Less flexible and verbose.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Gradle:</h4>
                  <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
                    Uses Groovy or Kotlin scripts for configuration.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base ml-4">
                    <li><span className="font-semibold">Pros:</span> Fast, flexible, and used for Android.</li>
                    <li><span className="font-semibold">Cons:</span> Harder to learn.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                2. JavaScript / Node.js
              </h3>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">npm:</h4>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Manages packages and runs tasks using package.json.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Webpack / Vite:</h4>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Bundle JavaScript, CSS, and images into optimized files for the browser.
                  </p>
                </div>
              </div>
            </div>

            {/* C/C++ */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                3. C / C++
              </h3>
              
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Make:</h4>
                  <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
                    Uses Makefiles to define build rules.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base ml-4">
                    <li><span className="font-semibold">Pros:</span> Widely available.</li>
                    <li><span className="font-semibold">Cons:</span> Hard to manage large projects.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">CMake:</h4>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    Generates build files and is the modern standard for C++.
                  </p>
                </div>
              </div>
            </div>

            {/* Multi-language */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
                4. Multi-language (Monorepos)
              </h3>
              
              <div className="ml-4">
                <h4 className="font-semibold text-red-700 mb-2 text-sm sm:text-base">Bazel:</h4>
                <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
                  Handles large projects with many languages.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-800 text-sm sm:text-base ml-4">
                  <li><span className="font-semibold">Pros:</span> Fast, reliable, and highly scalable.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}