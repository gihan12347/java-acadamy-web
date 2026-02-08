import Head from "next/head";

export default function SpringCloud() {
  return (
    <>
      <Head>
        <title>Spring Cloud | Build Resilient Microservices with Spring Boot</title>
        <meta
          name="description"
          content="Learn what Spring Cloud is and how it enhances Spring Boot microservices with service discovery, load balancing, circuit breakers, distributed tracing, monitoring, and API gateways."
        />
        <meta
          name="keywords"
          content="Spring Cloud, Spring Boot, microservices, service discovery, load balancing, circuit breaker, distributed tracing, API gateway, resilient microservices"
        />
      </Head>

      <article className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <main className="max-w-4xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 leading-tight">
              What is Spring Cloud?
            </h1>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              Spring Cloud is a suite of tools and libraries that extends Spring Boot to make building and managing microservices easier. It addresses common microservices challenges like service discovery, load balancing, fault tolerance, distributed tracing, monitoring, and centralized routing.
            </p>
          </header>

          {/* Introduction */}
          <section className="mb-6 sm:mb-8 p-4 sm:p-6">
            <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
              Microservices architecture splits applications into independent services that communicate over the network. Spring Cloud provides ready-made solutions to handle the complexities of distributed systems, helping you build resilient and scalable microservices.
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
              Key Features of Spring Cloud
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
              <li>Service Discovery – Automatically find services</li>
              <li>Load Balancing – Distribute requests efficiently</li>
              <li>Circuit Breaker – Stop failures from cascading</li>
              <li>Distributed Tracing – Track requests across services</li>
              <li>Monitoring & Metrics – Observe system health</li>
              <li>API Gateway – Single entry point for clients</li>
            </ul>
          </section>

          {/* Individual Features */}
          <section className="mb-6 sm:mb-8">
            {/* Service Discovery */}
            <Feature
              number="1"
              title="Service Discovery (Finding Services)"
              problem="Service locations change often in microservices, making hard-coded URLs unreliable."
              solution="Each service registers itself in a Service Registry. Other services query the registry to find addresses."
              tools="Eureka, Consul, Zookeeper"
              benefit="No hard-coded IPs. Services can move and scale easily."
              example="Payment Service registers with Eureka. Order Service queries Eureka to find Payment Service."
            />

            {/* Load Balancing */}
            <Feature
              number="2"
              title="Load Balancing (Sharing Traffic)"
              problem="One service may get too many requests, causing performance issues."
              solution="Run multiple instances of a service. Spring Cloud distributes requests among them."
              tools="Spring Cloud LoadBalancer"
              benefit="Better performance. Failures in one instance don't affect others."
              example="Requests are evenly distributed across Order Service instances A, B, and C."
            />

            {/* Circuit Breaker */}
            <Feature
              number="3"
              title="Circuit Breaker (Stopping Failure Spread)"
              problem="If one service is slow or down, it can cause cascading failures."
              solution="Circuit breaker opens after repeated failures, stopping calls temporarily and providing fallbacks."
              tools="Resilience4j"
              benefit="System remains responsive. Failures don't crash everything."
              example="Payment Service is down → Order Service uses fallback responses."
            />

            {/* Distributed Tracing */}
            <Feature
              number="4"
              title="Distributed Tracing (Tracking Requests)"
              problem="Requests pass through multiple services, making debugging difficult."
              solution="Assign a Trace ID to each request; all services log the same ID to track it."
              tools="Spring Cloud Sleuth, Zipkin, OpenTelemetry"
              benefit="Easier debugging and performance analysis."
              example="Trace ID abc123 appears in Gateway, Order Service, and Payment Service logs."
            />

            {/* Monitoring & Metrics */}
            <Feature
              number="5"
              title="Monitoring & Metrics (System Health)"
              problem="You may not know which service is failing or overloaded."
              solution="Collect health and performance data: response time, error rate, CPU/memory, service status."
              tools="Spring Boot Actuator, Micrometer, Prometheus, Grafana"
              benefit="Detect issues early. Improve reliability."
              example="Dashboard shows high response time for Order Service."
            />

            {/* API Gateway */}
            <Feature
              number="6"
              title="API Gateway (Single Entry Point)"
              problem="Clients must call multiple services individually, handling security and routing."
              solution="One gateway routes requests to the correct service, centralizing security and logging."
              tools="Spring Cloud Gateway"
              benefit="Simpler client integration, central security, and control."
              example="Client calls /api/orders → Gateway routes to Order Service."
            />
          </section>
        </main>
      </article>
    </>
  );
}

// Feature Component for reusable sections
function Feature({ number, title, problem, solution, tools, benefit, example }) {
  return (
    <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
        {number}. {title}
      </h2>

      {/* Problem */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Problem:</h3>
        <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">{problem}</p>
      </div>

      {/* Solution */}
      <div className="mb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Spring Cloud Solution:</h3>
        <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">{solution}</p>
        {tools && <p className="text-gray-800 ml-4 mt-2 text-sm sm:text-base leading-relaxed"><strong>Tools:</strong> {tools}</p>}
      </div>

      {/* Example */}
      {example && (
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Example:</h3>
          <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">{example}</p>
        </div>
      )}

      {/* Benefit */}
      {benefit && (
        <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
          <p className="text-gray-800 text-sm sm:text-base"><strong>✅ Benefit:</strong> {benefit}</p>
        </div>
      )}
    </section>
  );
}
