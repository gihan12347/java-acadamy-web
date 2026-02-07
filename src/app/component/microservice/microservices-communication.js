export default function MicroservicesCommunication() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Fundamentals of Microservices Communication
        </h1>

        {/* Introduction Section */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Microservices are small, independent services that work together to build one big application. For the system to work properly, these services must communicate with each other in a good way.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Below are the basic ideas explained in simple terms.
          </p>
        </section>

        {/* 1. How Microservices Talk */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            1. How Microservices Talk to Each Other
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Synchronous Communication (Real-Time)
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base leading-relaxed">
              <li>One service sends a request and waits for a reply.</li>
              <li>Like making a phone call and waiting for the answer.</li>
              <li><strong>Common technologies:</strong> HTTP, REST API, gRPC.</li>
              <li><strong>Best for:</strong> When you need an immediate result.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Asynchronous Communication (Not Real-Time)
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base leading-relaxed">
              <li>One service sends a message and does NOT wait for a reply.</li>
              <li>Like sending a WhatsApp message and continuing your work.</li>
              <li>Uses message queues or brokers.</li>
              <li><strong>Common tools:</strong> RabbitMQ, Kafka, AWS SQS.</li>
              <li><strong>Best for:</strong> Background work and large systems.</li>
            </ul>
          </div>
        </section>

        {/* 2. Message Brokers */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            2. Message Brokers
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            Message brokers help services send messages to each other without talking directly.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>They:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
            <li>Store messages</li>
            <li>Deliver messages</li>
            <li>Help services work independently</li>
          </ul>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            <strong>Examples:</strong> Kafka, RabbitMQ, AWS SNS / SQS
          </p>
        </section>

        {/* 3. Service Discovery */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            3. Service Discovery
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            In microservices, services can start, stop, or move.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>Service discovery helps services:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
            <li>Find each other automatically</li>
            <li>Know where other services are running</li>
          </ul>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            <strong>Common tools:</strong> Consul, Eureka
          </p>
        </section>

        {/* 4. Load Balancing */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            4. Load Balancing
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            Load balancing shares requests across many copies of a service.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>This helps to:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
            <li>Improve speed</li>
            <li>Avoid overloading one server</li>
            <li>Increase reliability</li>
          </ul>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            <strong>Common tools:</strong> NGINX, HAProxy, Cloud load balancers (AWS, Azure, GCP)
          </p>
        </section>

        {/* 5. Circuit Breaker */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            5. Circuit Breaker
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            A circuit breaker stops requests to a service that is failing.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>This helps to:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
            <li>Prevent the whole system from failing</li>
            <li>Give time for the broken service to recover</li>
          </ul>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            <strong>Example tools:</strong> Hystrix, Resilience4j
          </p>
        </section>

        {/* 6. API Gateway */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            6. API Gateway
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            API Gateway is the single entry point for users or apps.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>It:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
            <li>Sends requests to correct services</li>
            <li>Handles security (login, auth)</li>
            <li>Controls request limits</li>
            <li>Logs requests</li>
          </ul>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>Benefits:</strong>
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
            <li>Simpler for clients</li>
            <li>Better security</li>
            <li>Central control</li>
          </ul>
        </section>

        {/* Why Communication Patterns Are Important */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Why Communication Patterns Are Important
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            Good communication makes microservices better in many ways:
          </p>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                • Scalability
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Each service can grow or shrink by itself.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                • Reliability (Resilience)
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                If one service fails, others can still work.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                • Faster Development
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Teams can update services independently.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                • Better Performance
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Async communication can make systems faster.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                • Easier Maintenance
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Clear communication makes bugs easier to find and fix.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-1">
                • Data Consistency
              </h3>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">
                Helps keep data correct across many services.
              </p>
            </div>
          </div>
        </section>

        {/* Common Communication Protocols */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Common Communication Protocols
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
              1. HTTP / HTTPS
            </h3>
            
            <div className="space-y-3 ml-4">
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">REST API</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>Most common method</li>
                  <li>Uses GET, POST, PUT, DELETE</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">GraphQL</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>Client asks only for the data it needs</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">gRPC</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>Very fast</li>
                  <li>Uses HTTP/2</li>
                  <li>Good for internal service communication</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">WebSockets</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>Real-time two-way connection</li>
                  <li>Used for chat apps, live updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-3">
              2. Message Queues
            </h3>
            
            <div className="space-y-3 ml-4">
              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">AMQP (RabbitMQ)</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>Reliable messaging</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">Kafka</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>High-speed message streaming</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-800 text-sm sm:text-base mb-1">MQTT</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                  <li>Lightweight</li>
                  <li>Good for IoT devices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Synchronous Communication Patterns */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Synchronous Communication Patterns (Real-Time)
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            Used when a service must wait for a response.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>Common patterns:</strong>
          </p>
          
          <div className="space-y-2 ml-4">
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Client-Side Load Balancing</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Client chooses which service to call.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Server-Side Load Balancing</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Load balancer chooses the service.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">API Gateway</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">One entry point for all requests.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Service Registry</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Services register and discover each other.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Service Mesh</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Manages service-to-service communication.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Circuit Breaker</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Stops calls to broken services.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Bulkhead</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Separates parts of the system to limit damage.</p>
            </div>
          </div>
        </section>

        {/* Asynchronous Communication Patterns */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Asynchronous Communication Patterns (Message-Based)
          </h2>
          <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
            Used when services should not wait.
          </p>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            <strong>Common patterns:</strong>
          </p>
          
          <div className="space-y-2 ml-4">
            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Publish / Subscribe (Pub-Sub)</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">One message goes to many services.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Event Sourcing</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Store events instead of current state.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">CQRS</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Separate read and write operations.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Saga Pattern</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Manage long transactions across services.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Dead Letter Queue (DLQ)</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Stores failed messages.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Backpressure</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Slows down message sending if system is busy.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 text-sm sm:text-base">Polling</p>
              <p className="text-gray-800 ml-4 text-sm sm:text-base">Services check for new work regularly.</p>
            </div>
          </div>
        </section>

        {/* Performance Considerations */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Performance Considerations
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Synchronous (Real-Time)
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
              <li>Can be slower because services wait</li>
              <li>Can cause failures to spread</li>
            </ul>
            <p className="text-gray-800 ml-4 mb-1 text-sm sm:text-base">
              <strong>Needs:</strong>
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Timeouts</li>
              <li>Circuit breakers</li>
              <li>Load balancing</li>
              <li>Caching</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
              Asynchronous (Message-Based)
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base mb-3">
              <li>Better for large systems</li>
              <li>More scalable</li>
              <li>Better fault tolerance</li>
            </ul>
            <p className="text-gray-800 ml-4 mb-1 text-sm sm:text-base">
              <strong>Needs:</strong>
            </p>
            <ul className="list-disc list-inside ml-8 space-y-1 text-gray-800 text-sm sm:text-base">
              <li>Message monitoring</li>
              <li>DLQs</li>
              <li>Idempotent processing (safe to retry)</li>
            </ul>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="mb-6 sm:mb-8 p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Common Challenges
          </h2>
          <p className="text-gray-800 mb-2 text-sm sm:text-base leading-relaxed">
            Microservices communication can be hard because of:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
            <li>Network delays</li>
            <li>Many services to manage</li>
            <li>Service discovery issues</li>
            <li>Data consistency problems</li>
            <li>Complex error handling</li>
          </ul>
        </section>

        {/* Best Practices */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Best Practices (Simple)
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Choose the Right Pattern
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Use sync for quick responses</li>
                <li>Use async for background work</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Use Clear APIs
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Define APIs clearly</li>
                <li>Use versioning to avoid breaking changes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Use Service Discovery
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Automatically find services</li>
                <li>Use load balancers</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Handle Errors Properly
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Use circuit breakers</li>
                <li>Use retries with delays</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">
                • Manage Data Carefully
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-800 text-sm sm:text-base">
                <li>Use eventual consistency</li>
                <li>Use Saga pattern for long workflows</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}