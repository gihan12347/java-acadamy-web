import { createTopic } from "./servlets-topics.js";

export const microservicesExtraTopics = [
  createTopic({
    slug: "/microservices-docker-kubernetes",
    title: "Docker & Kubernetes for Java Microservices",
    metaTitle: "Docker Kubernetes Java Microservices Tutorial | Container Deployment",
    metaDescription:
      "Deploy Java microservices with Docker and Kubernetes. Containerize Spring Boot apps, write Dockerfiles, and orchestrate with K8s for production in cloud environments.",
    keywords: [
      "docker java microservices",
      "kubernetes spring boot",
      "containerize java app",
      "dockerfile spring boot",
      "java kubernetes tutorial",
    ],
    intro:
      "Docker and Kubernetes are the standard deployment stack for Java microservices in cloud environments used by companies across the USA, Europe, and Australia. Learn to containerize Spring Boot applications and orchestrate them at scale.",
    sections: [
      {
        title: "Why Containers for Microservices?",
        body: "Each microservice runs in its own container with isolated dependencies. Containers are lightweight, portable, and ensure consistent behavior from development laptops to AWS, Azure, and Google Cloud production clusters.",
      },
      {
        title: "Dockerfile for Spring Boot",
        type: "code",
        code: `# Multi-stage build
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY . .
RUN ./gradlew bootJar --no-daemon

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`,
      },
      {
        title: "Kubernetes Deployment",
        type: "code",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
      - name: order-service
        image: myregistry/order-service:1.0.0
        ports:
        - containerPort: 8080
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"`,
      },
      {
        title: "Key Kubernetes Concepts",
        type: "cards",
        cards: [
          { title: "Pod", text: "Smallest deployable unit — one or more containers sharing network." },
          { title: "Deployment", text: "Manages replica sets and rolling updates." },
          { title: "Service", text: "Stable network endpoint for pods (ClusterIP, LoadBalancer)." },
          { title: "Ingress", text: "HTTP routing and TLS termination for external traffic." },
        ],
      },
      {
        title: "Production Tips",
        type: "list",
        items: [
          "Use multi-stage Docker builds to minimize image size.",
          "Set CPU and memory limits on every container.",
          "Use liveness and readiness probes for health checks.",
          "Store secrets in Kubernetes Secrets or external vaults.",
          "Use Helm charts for repeatable deployments.",
        ],
      },
    ],
    faq: [
      {
        question: "Docker vs Kubernetes — do I need both?",
        answer:
          "Docker builds and runs containers. Kubernetes orchestrates many containers across a cluster — scaling, load balancing, and self-healing. Production microservices typically use both.",
      },
    ],
    relatedLinks: [
      { label: "Spring Boot Microservices", href: "/spring-boot-microservices" },
      { label: "Microservices Security", href: "/microservices-security" },
    ],
  }),

  createTopic({
    slug: "/microservices-security",
    title: "Security in Java Microservices",
    metaTitle: "Microservices Security Tutorial | OAuth2, JWT & Zero Trust",
    metaDescription:
      "Secure Java microservices with OAuth 2.0, JWT, API gateways, and zero-trust architecture. Essential guide for enterprise microservices in regulated industries.",
    keywords: [
      "microservices security",
      "oauth2 spring boot",
      "jwt microservices",
      "api gateway security",
      "zero trust microservices",
    ],
    intro:
      "Microservices expand the attack surface of applications. Each service needs authentication, authorization, encrypted communication, and secure configuration — especially critical for finance and healthcare systems in the US, UK, and Australia.",
    sections: [
      {
        title: "Security Challenges in Microservices",
        type: "list",
        items: [
          "Many network endpoints to protect.",
          "Service-to-service communication must be authenticated.",
          "Distributed sessions don't work — use stateless JWT tokens.",
          "Secrets and credentials must not be hardcoded.",
          "Each service may have different access control requirements.",
        ],
      },
      {
        title: "OAuth 2.0 and JWT",
        body: "OAuth 2.0 delegates authorization to an identity provider (Auth0, Keycloak, Azure AD). JWT (JSON Web Tokens) carries signed claims about the user. API gateways validate JWTs before forwarding requests to microservices.",
      },
      {
        title: "Spring Security with JWT",
        type: "code",
        code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/actuator/health").permitAll()
                .anyRequest().authenticated())
            .oauth2ResourceServer(oauth2 -> oauth2.jwt(Customizer.withDefaults()))
            .build();
    }
}`,
      },
      {
        title: "Defense in Depth",
        type: "cards",
        cards: [
          { title: "API Gateway", text: "Single entry point for auth, rate limiting, and routing." },
          { title: "mTLS", text: "Mutual TLS encrypts service-to-service communication." },
          { title: "Secrets Management", text: "HashiCorp Vault or cloud secret managers for credentials." },
          { title: "Network Policies", text: "Kubernetes network policies restrict pod-to-pod traffic." },
        ],
      },
    ],
    faq: [
      {
        question: "Should each microservice validate JWT?",
        answer:
          "Yes. Never trust network boundaries alone. Each service should validate the JWT signature and check authorization claims for the resources it owns.",
      },
    ],
    relatedLinks: [
      { label: "API Best Practices", href: "/api-best-practices" },
      { label: "Docker & Kubernetes", href: "/microservices-docker-kubernetes" },
    ],
  }),
];

export function getMicroservicesExtraTopic(slug) {
  return microservicesExtraTopics.find((t) => t.slug === slug);
}
