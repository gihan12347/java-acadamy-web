import Head from "next/head";

export default function MicroservicesIntroductionGuide() {
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Microservices Architecture Guide | What Are Microservices?</title>
        <meta
          name="description"
          content="Learn about microservices architecture. Understand microservices benefits, how they work, key characteristics, and see a diagram for beginners and developers."
        />
        <meta
          name="keywords"
          content="microservices, microservices architecture, microservices tutorial, benefits of microservices, microservices examples, independent services, API communication"
        />
      </Head>

      <article className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
        <main className="max-w-6xl mx-auto">
          {/* Page Title */}
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 px-2">
              Microservices Architecture Explained
            </h1>
            <p className="text-gray-800 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              Microservices are an architectural style for building applications as small, independent services that communicate over APIs. This guide explains microservices concepts, benefits, characteristics, and how they work in modern software systems.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">Introduction to Microservices</h2>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              Unlike traditional monolithic applications, microservices break down an application into smaller, autonomous services. Each service focuses on a specific business capability, making development, deployment, and scaling more efficient.
            </p>
          </section>

          {/* Key Characteristics */}
          <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">Key Characteristics of Microservices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">Performs One Specific Function</h3>
                <p className="text-sm sm:text-base text-gray-800">Each service focuses on a single business capability.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">Independent Development & Deployment</h3>
                <p className="text-sm sm:text-base text-gray-800">Services can be developed, deployed, and scaled independently.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">Technology Flexibility</h3>
                <p className="text-sm sm:text-base text-gray-800">Each service can use different programming languages or frameworks.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
                <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">Self-Contained</h3>
                <p className="text-sm sm:text-base text-gray-800">Each microservice is like a mini-application on its own.</p>
              </div>
            </div>
          </section>

          {/* How Microservices Work */}
          <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">How Microservices Work</h2>
            <div className="space-y-4">
              {[{
                step: "1",
                title: "Single Business Feature",
                description: "Each service handles a single business feature (e.g., user login, payments, products)."
              },{
                step: "2",
                title: "API Communication",
                description: "Services communicate with each other using APIs."
              },{
                step: "3",
                title: "Technology Freedom",
                description: "Teams can choose the best technology for each service."
              },{
                step: "4",
                title: "Independent Updates",
                description: "Services can be updated or scaled independently, reducing risk and improving reliability."
              }].map(({step, title, description}) => (
                <div key={step} className="flex items-start gap-4 p-4 bg-white rounded border border-gray-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">{step}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-800">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Diagram */}
          <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 text-center">Microservices Architecture Diagram</h2>
            <figure className="border-2 border-red-600 rounded-lg overflow-hidden shadow-xl bg-gray-50">
              <img 
                src="images/microservice.png"
                alt="Microservices architecture diagram showing services and API communication"
                className="w-full h-auto"
              />
              <figcaption className="text-gray-500 text-sm sm:text-base p-2 text-center">
                Example of microservices architecture
              </figcaption>
            </figure>
          </section>
        </main>
      </article>
    </>
  );
}
