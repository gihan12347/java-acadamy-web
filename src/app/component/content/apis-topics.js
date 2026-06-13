import { createTopic } from "./servlets-topics.js";

export const apisTopics = [
  createTopic({
    slug: "/api-introduction",
    title: "Introduction to APIs in Java",
    metaTitle: "Java API Tutorial for Beginners | REST & Web Services",
    metaDescription: "Learn what APIs are, how REST APIs work, and how Java developers build web services with Spring Boot. Free tutorial for USA, UK, and Australia developers.",
    keywords: ["java api tutorial", "rest api java", "web services java", "api development tutorial", "java backend api"],
    intro: "APIs (Application Programming Interfaces) allow software systems to communicate. Java developers commonly build REST APIs with Spring Boot, serving mobile apps, web frontends, and microservices across global markets.",
    sections: [
      { title: "What Is an API?", body: "An API defines how one application requests data or actions from another. Web APIs use HTTP to send JSON or XML over the internet. Examples: a mobile banking app calling a payment API, or a React frontend fetching user data from a Java backend." },
      { title: "Types of Java Web APIs", type: "cards", cards: [
        { title: "REST APIs", text: "Resource-based, uses HTTP methods. Most popular for modern apps." },
        { title: "SOAP Web Services", text: "XML-based, strict contracts. Common in legacy enterprise/banking." },
        { title: "GraphQL", text: "Client-specified queries. Growing adoption for flexible frontends." },
        { title: "gRPC", text: "High-performance RPC using Protocol Buffers. Popular in microservices." },
      ]},
      { title: "Why Java for APIs?", type: "list", items: [
        "Spring Boot makes REST API development fast and production-ready.",
        "Strong typing, mature ecosystem, excellent for enterprise APIs.",
        "High demand for Java API developers in US, UK, and Australian tech markets.",
        "Integrates seamlessly with JDBC, JPA, Kafka, and cloud platforms.",
      ]},
    ],
    faq: [{ question: "REST vs SOAP — which should I learn first?", answer: "Learn REST first. It dominates modern development. Understand SOAP basics for enterprise/legacy maintenance roles." }],
    relatedLinks: [{ label: "REST Principles", href: "/rest-principles" }, { label: "Spring Boot REST", href: "/spring-boot-rest" }],
  }),

  createTopic({
    slug: "/rest-principles",
    title: "REST Principles and Architecture",
    metaTitle: "REST API Principles Tutorial | RESTful Design Guide",
    metaDescription: "Master REST architectural principles: resources, URIs, statelessness, and HATEOAS. Build well-designed RESTful APIs in Java.",
    keywords: ["rest principles", "restful api design", "rest architecture", "rest api best practices", "stateless api"],
    intro: "REST (Representational State Transfer) is an architectural style for designing networked APIs. Following REST principles leads to scalable, maintainable web services.",
    sections: [
      { title: "Core REST Principles", type: "list", items: [
        "Client-Server — Separation of UI and data storage enables independent evolution.",
        "Stateless — Each request contains all information needed; server stores no client session state.",
        "Cacheable — Responses should define whether they can be cached.",
        "Uniform Interface — Consistent use of URIs, HTTP methods, and representations.",
        "Layered System — Client cannot tell if connected directly to server or intermediary.",
        "Resource-Based — Everything is a resource identified by a URI (/users/42).",
      ]},
      { title: "Resource Naming Conventions", type: "list", items: [
        "Use nouns, not verbs: /orders not /getOrders.",
        "Use plural names: /products not /product.",
        "Use nesting for relationships: /customers/5/orders.",
        "Use query params for filtering: /products?category=electronics&sort=price.",
      ]},
      { title: "HTTP Status Codes", type: "cards", cards: [
        { title: "2xx Success", text: "200 OK, 201 Created, 204 No Content." },
        { title: "4xx Client Error", text: "400 Bad Request, 401 Unauthorized, 404 Not Found." },
        { title: "5xx Server Error", text: "500 Internal Server Error, 503 Service Unavailable." },
      ]},
    ],
    faq: [{ question: "Is REST the same as RESTful?", answer: "RESTful means following REST principles. Not every API labeled REST is truly RESTful — many are RPC-style APIs over HTTP." }],
    relatedLinks: [{ label: "HTTP Methods", href: "/rest-http-methods" }, { label: "API Best Practices", href: "/api-best-practices" }],
  }),

  createTopic({
    slug: "/rest-http-methods",
    title: "HTTP Methods in REST APIs",
    metaTitle: "HTTP Methods Tutorial | GET POST PUT DELETE PATCH",
    metaDescription: "Learn HTTP methods (GET, POST, PUT, PATCH, DELETE) for REST APIs. Idempotency, safety, and when to use each method in Java web services.",
    keywords: ["http methods rest", "get post put delete", "rest api http verbs", "idempotent http methods"],
    intro: "HTTP methods define the action performed on a resource. Using the correct method is fundamental to RESTful API design and is tested in Java developer interviews worldwide.",
    sections: [
      { title: "Method Reference", type: "cards", cards: [
        { title: "GET", text: "Retrieve resource(s). Safe and idempotent. Never modify data." },
        { title: "POST", text: "Create new resource. Not idempotent — repeated calls may create duplicates." },
        { title: "PUT", text: "Replace entire resource. Idempotent." },
        { title: "PATCH", text: "Partial update. Idempotent when designed correctly." },
        { title: "DELETE", text: "Remove resource. Idempotent." },
      ]},
      { title: "Spring Boot Example", type: "code", code: `@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping("/{id}")
    public Product get(@PathVariable Long id) { ... }

    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product p) { ... }

    @PutMapping("/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product p) { ... }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) { ... }
}` },
    ],
    faq: [{ question: "POST vs PUT for updates?", answer: "Use PUT to replace the entire resource. Use PATCH for partial updates. POST is for creating new resources." }],
    relatedLinks: [{ label: "Creating RESTful Services", href: "/rest-create-services" }, { label: "REST Principles", href: "/rest-principles" }],
  }),

  createTopic({
    slug: "/rest-create-services",
    title: "Creating RESTful Services in Java",
    metaTitle: "Create REST API in Java | Step-by-Step Spring Boot Guide",
    metaDescription: "Build your first RESTful web service in Java with Spring Boot. Controllers, DTOs, validation, and error handling for production APIs.",
    keywords: ["create rest api java", "spring boot rest api tutorial", "java web service example", "restful service java"],
    intro: "This guide walks through building a complete REST API with Spring Boot — from project setup to handling requests, validation, and structured error responses.",
    sections: [
      { title: "Project Setup", body: "Use Spring Initializr (start.spring.io) with Spring Web dependency. JDK 17+, Maven or Gradle. The embedded Tomcat server runs your API on port 8080." },
      { title: "Controller Layer", type: "code", code: `@RestController
@RequestMapping("/api/v1/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public List<BookDto> list(@RequestParam(defaultValue = "0") int page) {
        return bookService.findAll(page);
    }

    @PostMapping
    public ResponseEntity<BookDto> create(@Valid @RequestBody CreateBookRequest req) {
        BookDto created = bookService.create(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }
}` },
      { title: "Layered Architecture", type: "list", items: [
        "Controller — HTTP layer, request/response mapping.",
        "Service — Business logic, transactions.",
        "Repository — Data access (JPA, JDBC).",
        "DTO — Data transfer objects for API contracts.",
        "Entity — Database-mapped objects (keep separate from DTOs).",
      ]},
    ],
    faq: [{ question: "Should I expose JPA entities directly?", answer: "No. Use DTOs to control the API contract, hide internal fields, and prevent lazy-loading serialization issues." }],
    relatedLinks: [{ label: "Spring Boot REST", href: "/spring-boot-rest" }, { label: "JSON Processing", href: "/json-processing" }],
  }),

  createTopic({
    slug: "/json-processing",
    title: "JSON Processing in Java",
    metaTitle: "Java JSON Tutorial | Jackson, Gson & JSON Parsing",
    metaDescription: "Learn JSON processing in Java with Jackson and Gson. Serialize objects to JSON and deserialize API responses for REST applications.",
    keywords: ["java json tutorial", "jackson java", "gson tutorial", "json parsing java", "objectmapper jackson"],
    intro: "JSON is the standard data format for REST APIs. Java developers use Jackson (default in Spring Boot) or Gson to convert between Java objects and JSON strings.",
    sections: [
      { title: "Jackson with Spring Boot", type: "code", code: `// Spring Boot auto-configures Jackson
// Request body automatically deserialized:
@PostMapping("/users")
public User create(@RequestBody User user) {
    return userService.save(user);
}

// Manual serialization:
ObjectMapper mapper = new ObjectMapper();
String json = mapper.writeValueAsString(user);
User parsed = mapper.readValue(json, User.class);` },
      { title: "Common Jackson Annotations", type: "list", items: [
        "@JsonProperty(\"full_name\") — Custom JSON field name.",
        "@JsonIgnore — Exclude field from serialization.",
        "@JsonFormat(pattern = \"yyyy-MM-dd\") — Date formatting.",
        "@JsonInclude(Include.NON_NULL) — Skip null fields.",
      ]},
      { title: "Handling Dates", body: "Use ISO-8601 format (2025-06-13T10:30:00Z) for API dates. Register JavaTimeModule for Java 8 date/time types. Configure ObjectMapper globally in Spring Boot via application.yml." },
    ],
    faq: [{ question: "Jackson vs Gson?", answer: "Jackson is the Spring Boot default, faster, and more feature-rich. Gson is simpler for standalone apps. Use Jackson for Spring projects." }],
    relatedLinks: [{ label: "Spring Boot REST", href: "/spring-boot-rest" }, { label: "Creating RESTful Services", href: "/rest-create-services" }],
  }),

  createTopic({
    slug: "/jax-rs",
    title: "JAX-RS — Java API for RESTful Web Services",
    metaTitle: "JAX-RS Tutorial | Jakarta REST with Jersey",
    metaDescription: "Learn JAX-RS (Jakarta REST) for building REST APIs in Java. Annotations, resources, providers, and comparison with Spring MVC.",
    keywords: ["jax-rs tutorial", "jakarta rest", "jersey java", "jax-rs annotations", "java rest framework"],
    intro: "JAX-RS is the standard Java specification for building RESTful web services. Implementations include Jersey (reference) and RESTEasy, commonly used in Jakarta EE applications.",
    sections: [
      { title: "JAX-RS Annotations", type: "code", code: `@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
public class UserResource {
    @GET
    @Path("/{id}")
    public Response getUser(@PathParam("id") Long id) {
        User user = userService.find(id);
        return Response.ok(user).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(User user) {
        User saved = userService.save(user);
        return Response.status(201).entity(saved).build();
    }
}` },
      { title: "JAX-RS vs Spring MVC", type: "list", items: [
        "JAX-RS — Jakarta EE standard, portable across app servers (WildFly, GlassFish).",
        "Spring MVC — Spring ecosystem, more popular for new projects and startups.",
        "Both support REST; Spring Boot is the dominant choice in US/UK/AU job markets.",
        "Learn JAX-RS for enterprise Jakarta EE maintenance roles.",
      ]},
    ],
    faq: [{ question: "Is JAX-RS still relevant?", answer: "Yes in enterprise Jakarta EE environments. For new projects, Spring Boot REST is more common, but JAX-RS knowledge transfers well." }],
    relatedLinks: [{ label: "Spring Boot REST", href: "/spring-boot-rest" }, { label: "REST Principles", href: "/rest-principles" }],
  }),

  createTopic({
    slug: "/spring-boot-rest",
    title: "Spring Boot REST API Development",
    metaTitle: "Spring Boot REST API Tutorial | Complete Guide 2025",
    metaDescription: "Master Spring Boot REST API development. Controllers, dependency injection, JPA integration, validation, and deployment for production Java apps.",
    keywords: ["spring boot rest api", "spring boot tutorial", "spring rest controller", "spring boot api development", "java spring boot rest"],
    intro: "Spring Boot is the most popular framework for building Java REST APIs. It provides auto-configuration, embedded servers, and seamless integration with databases, security, and cloud platforms.",
    sections: [
      { title: "Spring Boot REST Stack", type: "list", items: [
        "spring-boot-starter-web — REST controllers, Jackson JSON, embedded Tomcat.",
        "spring-boot-starter-data-jpa — Database access with Hibernate.",
        "spring-boot-starter-validation — Bean validation (@NotNull, @Email).",
        "spring-boot-starter-security — Authentication and authorization.",
        "spring-boot-starter-actuator — Health checks and metrics.",
      ]},
      { title: "Complete REST Controller", type: "code", code: `@RestController
@RequestMapping("/api/v1/customers")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerRepository repo;

    @GetMapping("/{id}")
    public CustomerDto get(@PathVariable Long id) {
        return repo.findById(id)
            .map(CustomerDto::from)
            .orElseThrow(() -> new ResourceNotFoundException(id));
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {
        return ResponseEntity.status(404).body(new ErrorResponse(ex.getMessage()));
    }
}` },
      { title: "application.yml Configuration", type: "code", code: `spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/myapp
    username: \${DB_USER}
    password: \${DB_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: validate
server:
  port: 8080` },
    ],
    faq: [{ question: "Spring Boot vs plain Spring?", answer: "Spring Boot adds auto-configuration, embedded server, and starter dependencies. You can build REST APIs much faster with minimal boilerplate." }],
    relatedLinks: [{ label: "API Testing", href: "/api-testing" }, { label: "API Documentation", href: "/api-documentation" }],
  }),

  createTopic({
    slug: "/api-documentation",
    title: "API Documentation with OpenAPI & Swagger",
    metaTitle: "Java API Documentation Tutorial | Swagger & OpenAPI 3",
    metaDescription: "Document REST APIs with OpenAPI 3 and Swagger UI in Spring Boot. Auto-generate interactive API docs for developers and clients.",
    keywords: ["openapi java", "swagger spring boot", "api documentation java", "springdoc openapi"],
    intro: "Well-documented APIs are essential for team collaboration and external integrations. OpenAPI (formerly Swagger) is the industry standard for describing REST APIs.",
    sections: [
      { title: "SpringDoc OpenAPI Setup", type: "code", code: `// build.gradle
implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.5.0'

// Access docs at: http://localhost:8080/swagger-ui.html

@Operation(summary = "Get customer by ID")
@ApiResponses({
    @ApiResponse(responseCode = "200", description = "Customer found"),
    @ApiResponse(responseCode = "404", description = "Customer not found")
})
@GetMapping("/{id}")
public CustomerDto get(@PathVariable Long id) { ... }` },
      { title: "Documentation Best Practices", type: "list", items: [
        "Document every endpoint with summary and description.",
        "Include request/response examples.",
        "Document error responses (400, 401, 404, 500).",
        "Version your API in the URL (/api/v1/).",
        "Keep documentation in sync with code using annotations.",
      ]},
    ],
    faq: [{ question: "Swagger vs OpenAPI?", answer: "OpenAPI is the specification name (formerly Swagger Specification). Swagger UI is a tool that renders OpenAPI docs interactively." }],
    relatedLinks: [{ label: "Spring Boot REST", href: "/spring-boot-rest" }, { label: "API Testing", href: "/api-testing" }],
  }),

  createTopic({
    slug: "/api-testing",
    title: "Testing REST APIs in Java",
    metaTitle: "Java API Testing Tutorial | JUnit, MockMvc & RestAssured",
    metaDescription: "Learn to test REST APIs in Java with JUnit 5, MockMvc, and RestAssured. Unit tests, integration tests, and test best practices.",
    keywords: ["api testing java", "mockmvc spring boot", "restassured tutorial", "junit api test", "integration test rest api"],
    intro: "Automated API testing ensures your endpoints work correctly after every code change. Java developers use MockMvc for unit tests and RestAssured or TestRestTemplate for integration tests.",
    sections: [
      { title: "MockMvc Unit Test", type: "code", code: `@WebMvcTest(BookController.class)
class BookControllerTest {
    @Autowired MockMvc mockMvc;
    @MockBean BookService bookService;

    @Test
    void getBook_returns200() throws Exception {
        when(bookService.findById(1L)).thenReturn(new BookDto(1L, "Java Guide"));
        mockMvc.perform(get("/api/books/1"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.title").value("Java Guide"));
    }
}` },
      { title: "RestAssured Integration Test", type: "code", code: `@SpringBootTest(webEnvironment = RANDOM_PORT)
class BookApiIT {
    @LocalServerPort int port;

    @Test
    void createBook_returns201() {
        given().port(port).contentType(JSON)
            .body("{\"title\":\"New Book\"}")
        .when().post("/api/books")
        .then().statusCode(201)
            .body("title", equalTo("New Book"));
    }
}` },
      { title: "Testing Strategy", type: "list", items: [
        "Unit test controllers with MockMvc (mock service layer).",
        "Integration test full stack with @SpringBootTest.",
        "Use Testcontainers for real database in integration tests.",
        "Test happy path, validation errors, and auth failures.",
      ]},
    ],
    faq: [{ question: "MockMvc vs RestAssured?", answer: "MockMvc tests the web layer without starting a server (faster). RestAssured tests against a running server (more realistic). Use both." }],
    relatedLinks: [{ label: "Spring Boot REST", href: "/spring-boot-rest" }, { label: "API Best Practices", href: "/api-best-practices" }],
  }),

  createTopic({
    slug: "/api-best-practices",
    title: "REST API Best Practices in Java",
    metaTitle: "REST API Best Practices | Production Java API Guide",
    metaDescription: "Production-ready REST API best practices: versioning, pagination, error handling, security, rate limiting, and monitoring for Java developers.",
    keywords: ["rest api best practices", "api design best practices", "java api security", "api versioning", "production api java"],
    intro: "Building APIs that work in demo is easy; building APIs that scale in production requires following established best practices for design, security, and operability.",
    sections: [
      { title: "Design Best Practices", type: "list", items: [
        "Version APIs in URL: /api/v1/users.",
        "Use pagination: ?page=0&size=20&sort=createdAt,desc.",
        "Return consistent error format: { \"error\": \"code\", \"message\": \"...\" }.",
        "Use proper HTTP status codes — don't return 200 for errors.",
        "Implement HATEOAS links for discoverable APIs when appropriate.",
      ]},
      { title: "Security Best Practices", type: "list", items: [
        "Always use HTTPS in production.",
        "Implement authentication (JWT, OAuth 2.0) and authorization.",
        "Validate and sanitize all input.",
        "Rate limit public endpoints to prevent abuse.",
        "Never expose stack traces in error responses.",
        "Use CORS configuration to restrict allowed origins.",
      ]},
      { title: "Operational Best Practices", type: "list", items: [
        "Add health check endpoint (/actuator/health).",
        "Log request ID for distributed tracing.",
        "Monitor latency, error rates, and throughput.",
        "Document breaking changes in changelog.",
        "Use CI/CD to run API tests on every commit.",
      ]},
    ],
    faq: [{ question: "How do I version APIs without breaking clients?", answer: "Support multiple versions simultaneously (/api/v1 and /api/v2). Deprecate old versions with sunset headers. Give clients 6-12 months to migrate." }],
    relatedLinks: [{ label: "REST Principles", href: "/rest-principles" }, { label: "Microservices Security", href: "/microservices-security" }],
  }),
];

export function getApiTopic(slug) {
  return apisTopics.find((t) => t.slug === slug);
}
