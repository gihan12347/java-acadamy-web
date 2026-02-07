export default function SpringCloud() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          What is Spring Cloud?
        </h1>

        {/* Introduction Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Spring Cloud is a collection of tools and libraries that work with Spring Boot to help you build and manage microservices 
            systems easily.
          </p>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            When you build microservices, your application is split into many small services that communicate over the network.
            Spring Cloud gives you ready-made solutions for the common problems that come with this.
          </p>
        </section>

        {/* Key Features Overview */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Spring Cloud Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 text-sm sm:text-base">
            <li>Service Discovery (Finding Services)</li>
            <li>Load Balancing (Sharing Traffic)</li>
            <li>Circuit Breaker (Stopping Failure Spread)</li>
            <li>Distributed Tracing (Tracking Requests)</li>
            <li>Monitoring & Metrics (System Health)</li>
            <li>API Gateway (Single Entry Point)</li>
          </ul>
        </section>

        {/* 1. Service Discovery */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            1. Service Discovery (Finding Services)
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Problem:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              In microservices, service locations change often:
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>A service may restart</li>
              <li>IP address may change</li>
              <li>New instances may be added</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              If you hard-code URLs like:
            </p>
            <div className="bg-gray-100 p-3 rounded ml-4 mt-2 mb-2">
              <code className="text-sm sm:text-base text-gray-800">http://192.168.1.10:8080</code>
            </div>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
              They can easily become wrong.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Spring Cloud Solution: Service Discovery
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Each service registers itself in a Service Registry</li>
              <li>Other services ask the registry: "Where is the Order Service?"</li>
              <li>Registry returns the current address</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              <strong>Common tools:</strong> Eureka, Consul, Zookeeper
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Simple example:
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Payment Service starts</li>
              <li>It registers with Eureka</li>
              <li>Order Service asks Eureka for Payment Service</li>
              <li>Eureka returns correct address</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>✅ Benefit:</strong> No hard-coded IPs. Services can move and scale easily.
            </p>
          </div>
        </section>

        {/* 2. Load Balancing */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            2. Load Balancing (Sharing Traffic)
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Problem:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              One service may get too many requests.
            </p>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
              <strong>Example:</strong> 1 Order Service instance + 10,000 users → slow system
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Spring Cloud Solution: Load Balancing
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Run multiple copies (instances) of the same service</li>
              <li>Spring Cloud spreads requests between them</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Example:
            </h3>
            <div className="ml-4 space-y-2">
              <p className="text-gray-800 text-sm sm:text-base">
                Order Service instance A<br />
                Order Service instance B<br />
                Order Service instance C
              </p>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mt-2">
                Requests go like:
              </p>
              <div className="bg-gray-100 p-3 rounded">
                <p className="text-sm sm:text-base text-gray-800">
                  User 1 → A<br />
                  User 2 → B<br />
                  User 3 → C<br />
                  User 4 → A
                </p>
              </div>
            </div>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              <strong>Tools:</strong> Spring Cloud LoadBalancer
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>✅ Benefit:</strong> Better performance. If one instance fails, others still work.
            </p>
          </div>
        </section>

        {/* 3. Circuit Breaker */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            3. Circuit Breaker (Stopping Failure Spread)
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Problem:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              If one service is slow or down:
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Other services keep waiting</li>
              <li>Threads get blocked</li>
              <li>Whole system becomes slow or crashes</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-2 text-sm sm:text-base leading-relaxed">
              This is called <strong>cascading failure</strong>.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Spring Cloud Solution: Circuit Breaker
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              Like an electric circuit breaker in your house.
            </p>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              <strong>How it works:</strong>
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>If a service fails many times</li>
              <li>Circuit breaker "opens"</li>
              <li>Calls are stopped for some time</li>
              <li>After a wait, it tries again</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Example:
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Payment Service is down</li>
              <li>Order Service tries to call it</li>
              <li>Circuit breaker opens</li>
              <li>Order Service stops calling Payment</li>
              <li>Order Service returns a fallback response</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              <strong>Tools:</strong> Resilience4j
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>✅ Benefit:</strong> System stays responsive. Failures don't crash everything.
            </p>
          </div>
        </section>

        {/* 4. Distributed Tracing */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            4. Distributed Tracing (Tracking Requests)
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Problem:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              One user request may go through many services.
            </p>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              <strong>Example path:</strong>
            </p>
            <div className="bg-gray-100 p-3 rounded ml-4">
              <p className="text-sm sm:text-base text-gray-800">
                Client<br />
                &nbsp;→ API Gateway<br />
                &nbsp;&nbsp;&nbsp;→ Order Service<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Payment Service<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ Inventory Service
              </p>
            </div>
            <p className="text-gray-800 ml-4 mt-2 text-sm sm:text-base leading-relaxed">
              If something is slow: Which service is the problem? Hard to know from logs.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Spring Cloud Solution: Distributed Tracing
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Each request gets a Trace ID</li>
              <li>All services log the same Trace ID</li>
              <li>You can follow the full journey</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              <strong>Tools:</strong> Spring Cloud Sleuth, Zipkin, OpenTelemetry
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Example:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              Trace ID = abc123
            </p>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              <strong>Logs:</strong>
            </p>
            <div className="bg-gray-100 p-3 rounded ml-4">
              <p className="text-sm sm:text-base text-gray-800">
                Gateway log: abc123<br />
                Order log: abc123<br />
                Payment log: abc123
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>✅ Benefit:</strong> Easy debugging. Easy performance analysis.
            </p>
          </div>
        </section>

        {/* 5. Monitoring & Metrics */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            5. Monitoring & Metrics (System Health)
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Problem:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              You don't know:
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Which service is slow</li>
              <li>Which service is failing</li>
              <li>How much CPU/memory is used</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Spring Cloud Solution: Monitoring & Metrics
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              Collect health and performance data.
            </p>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              <strong>What you can monitor:</strong>
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Response time</li>
              <li>Error rate</li>
              <li>CPU usage</li>
              <li>Memory usage</li>
              <li>Service health (UP/DOWN)</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              <strong>Tools:</strong> Spring Boot Actuator, Micrometer, Prometheus, Grafana
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Example:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              Dashboard shows:
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Order Service response time = high</li>
              <li>Payment Service error rate = high</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>✅ Benefit:</strong> Find problems early. Better system reliability.
            </p>
          </div>
        </section>

        {/* 6. API Gateway */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            6. API Gateway (Single Entry Point)
          </h2>
          
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Problem:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              Client apps (web/mobile) must:
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Call many services</li>
              <li>Know many URLs</li>
              <li>Handle security for each service</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-2 text-sm sm:text-base leading-relaxed">
              This is complex and unsafe.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Spring Cloud Solution: API Gateway
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              One single entry point for all requests. Gateway routes to correct service.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Example:
            </h3>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              Client calls:
            </p>
            <div className="bg-gray-100 p-3 rounded ml-4 mb-2">
              <code className="text-sm sm:text-base text-gray-800">/api/orders</code>
            </div>
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed">
              Gateway routes to: Order Service
            </p>
          </div>

          <div className="mb-4">
            <p className="text-gray-800 ml-4 text-sm sm:text-base leading-relaxed mb-2">
              <strong>Gateway can also:</strong>
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Do authentication</li>
              <li>Do logging</li>
              <li>Do rate limiting</li>
              <li>Do request routing</li>
            </ul>
            <p className="text-gray-800 ml-4 mt-3 text-sm sm:text-base leading-relaxed">
              <strong>Tools:</strong> Spring Cloud Gateway
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-3 ml-4">
            <p className="text-gray-800 text-sm sm:text-base">
              <strong>✅ Benefit:</strong> Simpler for clients. Central security and control.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}