import Link from "next/link";

const topicClusters = [
  {
    title: "Core Java Fundamentals",
    description:
      "Start with syntax, variables, classes, objects, control flow, and JVM architecture.",
    links: [
      { label: "Introduction to Java", href: "/intro-java" },
      { label: "Variables and Data Types", href: "/java-variables-data-types" },
      { label: "Java Control Flow", href: "/java-control-flow" },
      { label: "JVM Architecture", href: "/java-vertual-machine" },
    ],
  },
  {
    title: "Object-Oriented Java",
    description:
      "Build strong OOP knowledge using classes, inheritance, encapsulation, and polymorphism.",
    links: [
      { label: "Classes and Objects", href: "/java-classes-objects" },
      { label: "Java OOP", href: "/java-oop" },
      { label: "Access Modifiers", href: "/java-access-modifiers" },
      { label: "Java Class Types", href: "/java-class-types" },
    ],
  },
  {
    title: "Java Collections and Concurrency",
    description:
      "Learn collections, exception handling, and multithreading to write reliable Java programs.",
    links: [
      { label: "Exception Handling", href: "/java-exception-handling" },
      { label: "Multithreading", href: "/java-multithreading" },
      { label: "Collections Framework", href: "/java-collections-framework" },
      { label: "Map in Java", href: "/java-collections-framework/map" },
    ],
  },
  {
    title: "Build Tools and Microservices",
    description:
      "Move from fundamentals to real project workflows with Maven, Gradle, Spring Boot, and microservices.",
    links: [
      { label: "Build Tools Introduction", href: "/build-tools-introduction" },
      { label: "Maven Basics", href: "/maven-basics" },
      { label: "Gradle Basics", href: "/gradle-basics" },
      { label: "Spring Boot Microservices", href: "/spring-boot-microservices" },
    ],
  },
  {
    title: "Servlets and Java Web Development",
    description:
      "Learn servlet architecture, request/response lifecycle, and session handling for Java web apps.",
    links: [
      { label: "Servlet Learning Path", href: "/module?section_id=servlets" },
      { label: "Build Your First Java Web App", href: "/module?section_id=servlets" },
      { label: "Microservices Introduction", href: "/microservices-introduction" },
      { label: "Monolith vs Microservices", href: "/monolith-vs-microservices" },
    ],
  },
  {
    title: "JDBC and Database Integration",
    description:
      "Connect Java applications with databases using JDBC drivers, statements, and transaction management.",
    links: [
      { label: "JDBC Learning Path", href: "/module?section_id=jdbc" },
      { label: "Java to MySQL Tutorial", href: "/module?section_id=jdbc" },
      { label: "Collections Framework", href: "/java-collections-framework" },
      { label: "Exception Handling", href: "/java-exception-handling" },
    ],
  },
];

const HomepageSeoContent = () => {
  return (
    <section className="app-shell">
      <article className="bg-white border border-red-100 rounded-2xl p-5 sm:p-7 lg:p-10 shadow-sm space-y-8">
        <header className="space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
            Complete Java Guide: Learn Java Online with a Free Java Programming
            Course
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            If you want to learn Java online from scratch, this guide gives you a
            practical and structured roadmap. Instead of jumping between random
            tutorials, you can follow one learning path from Core Java basics to
            Spring Boot and microservices. This free Java programming course layout
            is designed for beginners, self-taught developers, and students who want
            clear progression across Core Java, Servlets, JDBC, Build Tools, and
            project-ready backend skills.
          </p>
        </header>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700">
            Topic Clusters for Better Learning
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Use the topic clusters below to build depth in one area before moving to
            the next. This cluster structure improves user experience and strengthens
            internal linking between related lessons, including Servlets, JDBC, and
            Build Tools.
          </p>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {topicClusters.map((cluster) => (
              <div
                key={cluster.title}
                className="rounded-xl border border-gray-200 p-4 sm:p-5"
              >
                <h4 className="font-bold text-gray-900 mb-2">{cluster.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{cluster.description}</p>
                <ul className="space-y-1.5">
                  {cluster.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-red-700 hover:text-red-800 hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700">
            Why Beginners Should Learn Java Online
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Java remains one of the most widely used programming languages for
            enterprise applications, backend systems, Android development, and cloud
            platforms. The language has a mature ecosystem, clear syntax, and
            excellent documentation. For beginners, Java helps build discipline in
            programming fundamentals such as object-oriented thinking, type safety,
            debugging, and code organization. Learning Java online is also flexible:
            you can study at your own pace, revisit difficult concepts, and combine
            theory with practice projects. A structured beginner path gives better
            long-term results than isolated short lessons because each topic depends
            on previous concepts.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            To become job-ready, you should not stop at syntax. You need to
            understand how Java code runs in the JVM, how packages and classes are
            organized, how exceptions are handled in production code, and how tools
            like Maven or Gradle automate builds. You also need Servlet and JDBC
            knowledge to build web endpoints and connect Java applications to real
            databases. After that, modern Java learning continues with Spring Boot
            APIs, service communication, and deployment basics. This is exactly why
            a complete learning path matters: it prevents knowledge gaps and helps
            you connect fundamentals to real software work.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700">
            Free Java Programming Course Roadmap
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Stage 1 is Core Java fundamentals: variables, data types, operators,
            control flow, methods, classes, and objects. Stage 2 expands into
            object-oriented programming with inheritance, abstraction, encapsulation,
            and polymorphism. Stage 3 focuses on practical topics that every
            developer needs: exception handling, collections, multithreading, and
            JDBC basics for database access. Stage 4 introduces Servlets for Java web
            development and request-response handling. Stage 5 introduces build tools
            such as Maven and Gradle so you can manage dependencies and run project
            builds efficiently. Stage 6 introduces Spring Boot and microservices
            communication patterns for real-world backend development.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Follow each stage in order and spend most of your time writing code.
            After every lesson, implement one small exercise and one mini project.
            For example, after control flow, build a command-line quiz app. After
            collections, build a student record manager. After JDBC, build a
            database-backed student management app. After Servlets, create a small
            Java web module with forms and session tracking. After Spring Boot
            basics, create a CRUD REST API. This practice model helps convert passive
            reading into active skill building and dramatically improves interview
            readiness.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-red-700">
            Common Mistakes to Avoid
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Many learners try to cover too many frameworks before mastering basics.
            This often causes confusion when debugging because fundamental concepts
            are not strong yet. Another common mistake is reading tutorials without
            implementing exercises. Learning happens when you compile code, fix
            errors, and understand output. It is also important to revisit difficult
            topics multiple times. Concepts like multithreading and collections become
            easier when you apply them in simple projects.
          </p>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            A final mistake is weak revision discipline. Keep your own notes for
            syntax rules, common exceptions, and reusable code snippets. Build a
            personal practice repository and document each mini project clearly. Over
            time, this creates a visible portfolio that supports internship and
            junior developer applications.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-2">
            Start the Pillar Page
          </h3>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
            Read the full pillar page for a complete step-by-step curriculum,
            internal links to all clusters, and a long-form guide designed to improve
            topical authority.
          </p>
          <Link
            href="/complete-java-guide"
            className="inline-flex items-center text-red-700 font-bold hover:underline"
          >
            Open Complete Java Guide
          </Link>
        </div>
      </article>
    </section>
  );
};

export default HomepageSeoContent;
