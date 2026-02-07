import { Code, Server, Layers, Database, Package } from "lucide-react";

export const sections = [
  {
    id: "core-java",
    name: "Core Java",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    url: "/core-java",
    description:
      "Master Java fundamentals, OOP concepts, collections, and exception handling",
    topics: [
      { topic: "Introduction to Java", url: "/intro-java" },
      { topic: "Java vertual machine (JVM)", url: "/java-vertual-machine" },
      { topic: "Variables and Data Types", url: "/java-variables-data-types" },
      { topic: "Control Flow Statements", url: "/java-control-flow" },
      { topic: "Classes and Objects", url: "/java-classes-objects" },
      { topic: "Object-Oriented Programming", url: "/java-oop" },
      { topic: "Types of Class", url: "/java-class-types" },
      { topic: "Access Modifiers", url: "/java-access-modifiers" },
      { topic: "Exception Handling", url: "/java-exception-handling" },
      { topic: "Multithreading", url: "/java-multithreading" },
      { topic: "Collections Framework", url: "/java-collections-framework" }
    ],
  },

  {
    id: "servlets",
    name: "Servlets",
    url: "/servlets",
    icon: Server,
    color: "from-purple-500 to-purple-600",
    description: "Learn server-side Java programming with Servlets",
    topics: [
      { topic: "Introduction to Servlets", url: "/servlets-introduction" },
      { topic: "Servlet Lifecycle", url: "/servlet-lifecycle" },
      { topic: "HttpServlet Class", url: "/servlet-httpservlet" },
      {
        topic: "Request and Response Objects",
        url: "/servlet-request-response",
      },
      { topic: "Session Management", url: "/servlet-session-management" },
      { topic: "Cookies", url: "/servlet-cookies" },
      { topic: "Servlet Filters", url: "/servlet-filters" },
      { topic: "Request Dispatcher", url: "/servlet-request-dispatcher" },
      {
        topic: "ServletConfig and ServletContext",
        url: "/servlet-config-context",
      },
    ],
  },

  {
    id: "jdbc",
    name: "JDBC",
    url: "/jdbc",
    icon: Database,
    color: "from-amber-500 to-amber-600",
    description: "Connect and interact with databases using JDBC",
    topics: [
      { topic: "Introduction to JDBC", url: "/jdbc-introduction" },
      { topic: "JDBC Drivers", url: "/jdbc-drivers" },
      {
        topic: "Establishing Database Connection",
        url: "/jdbc-database-connection",
      },
      { topic: "Statement Interface", url: "/jdbc-statement" },
      { topic: "PreparedStatement", url: "/jdbc-preparedstatement" },
      { topic: "CallableStatement", url: "/jdbc-callablestatement" },
      { topic: "ResultSet", url: "/jdbc-resultset" },
      { topic: "Transaction Management", url: "/jdbc-transaction-management" },
      { topic: "Connection Pooling", url: "/jdbc-connection-pooling" },
      { topic: "Batch Processing", url: "/jdbc-batch-processing" },
    ],
  },

  {
    id: "java-microservices",
    name: "Microservices",
    url: "/java-microservices",
    icon: Layers,
    color: "from-red-500 to-red-600",
    description: "Build scalable, cloud-native microservices with Java",
    topics: [
      {
        topic: "Introduction to Microservices Architecture",
        url: "/microservices-introduction",
      },
      {
        topic: "Monolith vs Microservices",
        url: "/monolith-vs-microservices",
      },
      {
        topic: "Spring Boot for Microservices",
        url: "/spring-boot-microservices",
      },
      {
        topic: "Spring Cloud",
        url: "/microservices-spring-cloud",
      },
      {
        topic: "Inter-Service Communication",
        url: "/microservices-communication",
      },
      {
        topic: "Docker & Kubernetes for Microservices",
        url: "/microservices-docker-kubernetes",
      },
      {
        topic: "Security in Microservices",
        url: "/microservices-security",
      },
    ],
  },

  {
    id: "build-tools",
    name: "Build Tools",
    url: "/build-tools",
    icon: Package,
    color: "from-indigo-500 to-indigo-600",
    description: "Build RESTful APIs and web services",
    topics: [
      {
        topic: "Introduction to Build Tools",
        url: "/build-tools-introduction",
      },
      { topic: "Gradle Basics", url: "/gradle-basics" },
      { topic: "build.gradle structure", url: "/gradle-build-file" },
      {
        topic: "gradle lifecycle & tasks",
        url: "/gradle-life-cycle-and-tasks",
      },
      {
        topic: "Dependency Management",
        url: "/build-tools-dependency-management",
      },
      { topic: "Creating JAR/WAR files", url: "/build-tools-jar-war" },
      { topic: "Maven Basics", url: "/maven-basics" },
      { topic: "Maven Lifecycle", url: "/maven-lifecycle" }
      // { topic: "Maven Dependencies", url: "/maven-dependencies" }
    ],
  },

  {
    id: "apis",
    name: "APIs",
    url: "/apis",
    icon: Layers,
    color: "from-teal-500 to-teal-600",
    topics: [
      { topic: "Introduction to APIs", url: "/api-introduction" },
      { topic: "REST Principles", url: "/rest-principles" },
      { topic: "HTTP Methods", url: "/rest-http-methods" },
      { topic: "Creating RESTful Services", url: "/rest-create-services" },
      { topic: "JSON Processing", url: "/json-processing" },
      { topic: "JAX-RS", url: "/jax-rs" },
      { topic: "Spring Boot REST", url: "/spring-boot-rest" },
      { topic: "API Documentation", url: "/api-documentation" },
      { topic: "Testing APIs", url: "/api-testing" },
      { topic: "Best Practices", url: "/api-best-practices" },
    ],
  },
];

export const slides = [
  {
    image: "/images/slide-1.png",
    alt: "Learn Core Java & Web - Servlets & JSP, Gradle & JDC",
  },
  {
    image: "/images/slide-2.png",
    alt: "Master Key Java Concepts - Understand the Fundamentals",
  },
  {
    image: "/images/slide-3.png",
    alt: "Build Real-World Applications - Create Your Projects",
  },
  {
    image: "/images/slide-4.png",
    alt: "Build Real-World Java & Web Applications - Create Your Projects",
  },
  {
    image: "/images/slide-5.png",
    alt: "Start Your Java Journey - Begin Coding Now",
  },
];
