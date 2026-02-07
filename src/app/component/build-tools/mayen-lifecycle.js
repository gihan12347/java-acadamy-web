export default function MavenBuildLifeCycle() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Maven Build Life Cycle
        </h1>

        {/* Introduction Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            In Maven Build life cycle there are different phases these phases are used for different purposes like test phase for complies tests, verify phases is used for tests and main source code and other.
          </p>
        </section>

        {/* Build Phases Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Maven Build Life Cycle Phases
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Validate:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                This phase is responsible for validates if the project structure is correct or not.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Compile:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It compiles the source code, converts the .java files to .class, and stores these classes in the target/classes folder.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Test:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It runs unit tests for the maven project.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Package:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                This phase is responsible for distribute complied code in the format of WAR, JAR and others.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Integration test:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It runs the integration tests for the maven project.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Verify:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Verify that the project is valid and meets the quality standards.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Install:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                This phase is responsible for install packaged code on the system.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Deploy:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Copies the packaged code to the remote repository for deployment then other developers can easily access this one.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}