export default function MicroservicesIntoductionGuide() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8 text-center px-2">
          What are Microservices?
        </h1>

        {/* Introduction */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Microservices are a way of building applications as small, independent services that communicate with each other over a network.
          </p>
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Instead of creating one large application (monolith), the system is split into smaller services, each responsible for a specific business task.
          </p>
        </section>

        {/* Key Characteristics */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Each Microservice:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">
                Performs One Specific Function
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Each service focuses on a single business capability
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">
                Independent Development & Deployment
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Can be developed, deployed, and scaled independently
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">
                Technology Flexibility
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                May use different programming languages or frameworks
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded border-l-4 border-red-600">
              <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">
                Self-Contained
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                Works like a small application on its own
              </p>
            </div>
          </div>
        </section>

        {/* How Do Microservices Work */}
        <section className="mb-6 md:mb-8 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6">
            How Do Microservices Work?
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-white rounded border border-gray-200">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  Single Business Feature
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Each service handles a single business feature (e.g., user login, payments, products).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded border border-gray-200">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  API Communication
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Services communicate with each other using APIs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded border border-gray-200">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  Technology Freedom
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Teams can choose the best technology for each service.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded border border-gray-200">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                  Independent Updates
                </h3>
                <p className="text-sm sm:text-base text-gray-800">
                  Services can be updated or scaled independently, reducing risk and improving reliability.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-6 text-center">
            Microservices Architecture Diagram
          </h2>
          <div className="border-2 border-red-600 rounded-lg overflow-hidden shadow-xl bg-gray-50">
            <img 
              src="images/microservice.png">
            </img>
          </div>
        </section>   
        </div>
    </div>
  );
}