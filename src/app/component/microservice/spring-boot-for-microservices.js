import Link from "next/link.js";

export default function SpringBootMicroservices() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Microservices with Spring Boot
        </h1>

        {/* Microservices with Spring Boot Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Microservices with Spring Boot
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            With Spring Boot, your microservices can start small and iterate fast. That's why it has become the de facto standard 
            for Java™ microservices. Quickstart your project with Spring Initializr and then package as a JAR. With Spring Boot's embedded 
            server model, you're ready to go in minutes.
          </p>
        </section>

        {/* Microservice Resilience Section */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Microservice Resilience with Spring Cloud
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            When you build applications using microservices, you split one big system into many small services. 
            Each service does one job (like login, payments, orders, etc.).
          </p>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Because these services are separate and run on different machines/containers, many new problems appear. 
            <Link 
              href="/microservices-spring-cloud" 
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700 underline font-semibold"
            >
              Spring Cloud
            </Link> gives ready-made solutions for these problems.
          </p>

          {/* Image Placeholder */}
          <div className="bg-white p-4 sm:p-8 mt-6 text-center overflow-hidden">
            <img
              src="/images/spring-cloud-microservices.png"
              alt="Spring Cloud Microservices Architecture"
              className="mx-auto max-w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  );
}