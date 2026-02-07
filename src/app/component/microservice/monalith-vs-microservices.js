export default function MonolithVsMicroservices() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8 text-center px-2">
          Monolith vs Microservices Architecture
        </h1>

        {/* Introduction */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Choosing the right architecture is an important decision when building a software application.
          </p>
          <p className="text-sm sm:text-base text-gray-800">
            The two most common approaches are Monolithic Architecture and Microservices Architecture. Each has its own strengths and use cases.
          </p>
        </section>

        {/* What is Monolithic Architecture */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            What is a Monolithic Architecture?
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            A monolithic application is built as a single, unified unit where all components—UI, business logic, and data access—are tightly connected.
          </p>
          <p className="text-sm sm:text-base text-gray-800">
            All features are developed, deployed, and scaled together as one application.
          </p>
        </section>

        {/* Key Characteristics of Monoliths */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Key Characteristics of Monoliths
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <p className="text-sm sm:text-base text-gray-800">Single codebase</p>
            </div>
            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <p className="text-sm sm:text-base text-gray-800">One deployment unit</p>
            </div>
            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <p className="text-sm sm:text-base text-gray-800">Shared database</p>
            </div>
            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <p className="text-sm sm:text-base text-gray-800">Tight coupling between components</p>
            </div>
            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600 md:col-span-2">
              <p className="text-sm sm:text-base text-gray-800">Changes require redeploying the entire application</p>
            </div>
          </div>
        </section>

        {/* What is Microservices Architecture */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            What is Microservices Architecture?
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            In a microservices architecture, the application is divided into small, independent services, each responsible for a specific business function.
          </p>
          <p className="text-sm sm:text-base text-gray-800">
            Each service can be developed, deployed, and scaled independently.
          </p>
        </section>

        {/* Comparison Table */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 text-center">
            Monolith vs Microservices: Key Differences
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-700 p-3 text-left text-sm sm:text-base">Feature</th>
                  <th className="border border-red-700 p-3 text-left text-sm sm:text-base">Monolithic Architecture</th>
                  <th className="border border-red-700 p-3 text-left text-sm sm:text-base">Microservices Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Structure</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Single application</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Multiple independent services</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Deployment</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">One deployment unit</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Each service deployed separately</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Scalability</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Scale entire application</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Scale only required services</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Technology Stack</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Usually one technology</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Multiple technologies allowed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Development Speed</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Faster for small apps</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Better for large, complex systems</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Fault Isolation</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Failure affects whole app</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Failure isolated to one service</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">Maintenance</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Harder as app grows</td>
                  <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">Easier to maintain over time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Use Monolithic */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">
            When to Use Monolithic Architecture
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Monolithic architecture is a good choice when:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">The application is small or simple</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">The team size is small</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">Rapid development is required</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">Infrastructure and deployment need to be simple</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">The application is in an early stage</p>
            </div>
          </div>
        </section>

        {/* When to Use Microservices */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">
            When to Use Microservices Architecture
          </h2>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Microservices are suitable when:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">The application is large or complex</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">Independent scaling is required</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">Multiple teams work on different features</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">High availability and fault tolerance are needed</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-white rounded border-l-4 border-red-600">
              <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
              <p className="text-sm sm:text-base text-gray-800">The system needs frequent updates</p>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 text-center">
            Challenges of Each Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Monolith Challenges */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded border-2 border-red-600">
              <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-4">
                Monolith Challenges
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <p className="text-sm sm:text-base text-gray-800">Difficult to scale specific features</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <p className="text-sm sm:text-base text-gray-800">Slower deployments as the app grows</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <p className="text-sm sm:text-base text-gray-800">Harder to adopt new technologies</p>
                </div>
              </div>
            </div>

            {/* Microservices Challenges */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded border-2 border-red-600">
              <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-4">
                Microservices Challenges
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <p className="text-sm sm:text-base text-gray-800">More complex infrastructure</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <p className="text-sm sm:text-base text-gray-800">Requires DevOps, monitoring, and automation</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold text-lg">•</span>
                  <p className="text-sm sm:text-base text-gray-800">Network communication overhead</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}