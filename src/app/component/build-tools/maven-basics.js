export default function Maven() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          What is Maven?
        </h1>

        {/* Definition Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Maven is a build automation tool developed using the Java programming language. It is primarily used for Java-based projects to manage the build process, including source code compilation, testing, packaging, and more. Maven utilizes the Project Object Model (POM), where the <code className="bg-gray-100 px-2 py-1 rounded text-red-600">pom.xml</code> file describes the project's configuration and dependency management.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Features of Maven
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            The Maven Build Automation tool provides a lot of features to make the development easy. Below we listed them:
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Dependency Management:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Automatically downloads and manages external libraries.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Standard Project Structure:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Follows a fixed folder layout for source, test, and other files.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Build Lifecycle:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Defines standard build phases like compile, test, and deploy.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Plugins:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Supports plugins for compiling, testing, packaging, and more.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • POM File:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Uses <code className="bg-gray-100 px-2 py-1 rounded text-red-600">pom.xml</code> to manage configuration and dependencies.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Central Repository:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Fetches dependencies from a shared online repository.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Build Profiles:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Supports different settings for dev, QA, and production.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Reporting:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Can generate Javadoc, test reports, and project documentation.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • IDE Support:
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Integrates with Eclipse, IntelliJ, NetBeans, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Maven Project Structure */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Maven Project Structure
          </h2>

          {/* Image Placeholder */}
          <div className="bg-white p-4 sm:p-8 mb-4 text-center overflow-hidden">
            <img
              src="/images/maven-project-structure.png"
              alt="Maven Project Structure Diagram"
              className="mx-auto max-w-full h-auto"
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
            Directory structure
          </h3>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Maven provides a standard Project folder structure you can observe this in the above image.
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • src/main/java:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It contains the main Java source code.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • src/main/resources:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It contains non-Java resources used by the application.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • src/main/webapp:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It contains resources for web applications.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • src/test/java:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It contains test source code.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • src/test/resources:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It contains resources used for testing.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • target:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                It contains compiled classes, packaged JARs/WARs, and other built artifacts.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold text-red-600 mb-1">
                • pom.xml:
              </h4>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                The Project Object Model file that defines the project configuration, dependencies, and build settings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}