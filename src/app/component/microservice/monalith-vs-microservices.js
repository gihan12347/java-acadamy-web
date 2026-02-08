import Head from "next/head";

export default function MonolithVsMicroservices() {
  return (
    <>
      <Head>
        <title>Monolith vs Microservices | Architecture Comparison Guide</title>
        <meta
          name="description"
          content="Compare Monolithic vs Microservices architecture. Learn key differences, advantages, challenges, and when to use each architecture for scalable software applications."
        />
        <meta
          name="keywords"
          content="Monolith vs Microservices, Monolithic architecture, Microservices architecture, software architecture comparison, scalability, deployment, fault isolation, software design patterns"
        />
      </Head>

      <article className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
        <main className="max-w-6xl mx-auto">
          {/* Page Header */}
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 px-2">
              Monolith vs Microservices Architecture
            </h1>
            <p className="text-gray-800 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Choosing the right software architecture is critical for building scalable and maintainable applications. This guide compares Monolithic and Microservices architectures, highlighting their key differences, advantages, challenges, and ideal use cases.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
            <p className="text-sm sm:text-base text-gray-800 mb-2">
              Monolithic and Microservices architectures are two common approaches to building software applications.
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              Monolithic applications are single, unified units, while Microservices are composed of small, independent services. Understanding their differences helps in choosing the best architecture for your project.
            </p>
          </section>

          {/* Monolithic Architecture */}
          <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
              What is a Monolithic Architecture?
            </h2>
            <p className="text-sm sm:text-base text-gray-800 mb-2">
              A monolithic application is built as a single, unified unit where all components—UI, business logic, and data access—are tightly coupled.
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              All features are deployed and scaled together as one application.
            </p>
          </section>

          {/* Key Characteristics of Monolith */}
          <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
              Key Characteristics of Monoliths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Single codebase",
                "One deployment unit",
                "Shared database",
                "Tight coupling between components",
                "Changes require redeploying the entire application"
              ].map((text, index) => (
                <div
                  key={index}
                  className={`p-4 bg-gray-50 rounded border-l-4 border-red-600 ${index === 4 ? "md:col-span-2" : ""}`}
                >
                  <p className="text-sm sm:text-base text-gray-800">{text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Microservices Architecture */}
          <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
              What is Microservices Architecture?
            </h2>
            <p className="text-sm sm:text-base text-gray-800 mb-2">
              Microservices architecture divides an application into small, independent services, each handling a specific business function.
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
                  {[
                    ["Structure", "Single application", "Multiple independent services"],
                    ["Deployment", "One deployment unit", "Each service deployed separately"],
                    ["Scalability", "Scale entire application", "Scale only required services"],
                    ["Technology Stack", "Usually one technology", "Multiple technologies allowed"],
                    ["Development Speed", "Faster for small apps", "Better for large, complex systems"],
                    ["Fault Isolation", "Failure affects whole app", "Failure isolated to one service"],
                    ["Maintenance", "Harder as app grows", "Easier to maintain over time"]
                  ].map(([feature, monolith, micro], index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="border border-gray-300 p-3 font-semibold text-red-700 text-sm sm:text-base">{feature}</td>
                      <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">{monolith}</td>
                      <td className="border border-gray-300 p-3 text-sm sm:text-base text-gray-800">{micro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* When to Use */}
          <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">When to Use Monolithic Architecture</h2>
            <p className="text-sm sm:text-base text-gray-800 mb-2">Monoliths are suitable when:</p>
            <ul className="list-disc list-inside ml-4 text-gray-800 text-sm sm:text-base space-y-1">
              <li>Application is small or simple</li>
              <li>Team size is small</li>
              <li>Rapid development is needed</li>
              <li>Infrastructure should be simple</li>
              <li>Application is in an early stage</li>
            </ul>
          </section>

          <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">When to Use Microservices Architecture</h2>
            <p className="text-sm sm:text-base text-gray-800 mb-2">Microservices are suitable when:</p>
            <ul className="list-disc list-inside ml-4 text-gray-800 text-sm sm:text-base space-y-1">
              <li>Application is large or complex</li>
              <li>Independent scaling is required</li>
              <li>Multiple teams work on different features</li>
              <li>High availability and fault tolerance are needed</li>
              <li>Frequent updates are required</li>
            </ul>
          </section>

          {/* Challenges */}
          <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 text-center">
              Challenges of Each Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Monolith Challenges */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded border-2 border-red-600">
                <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-4">Monolith Challenges</h3>
                <ul className="list-disc list-inside ml-4 text-gray-800 text-sm sm:text-base space-y-1">
                  <li>Difficult to scale specific features</li>
                  <li>Slower deployments as the app grows</li>
                  <li>Harder to adopt new technologies</li>
                </ul>
              </div>

              {/* Microservices Challenges */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded border-2 border-red-600">
                <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-4">Microservices Challenges</h3>
                <ul className="list-disc list-inside ml-4 text-gray-800 text-sm sm:text-base space-y-1">
                  <li>More complex infrastructure</li>
                  <li>Requires DevOps, monitoring, and automation</li>
                  <li>Network communication overhead</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </article>
    </>
  );
}
