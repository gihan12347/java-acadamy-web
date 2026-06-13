/** Shared content builder for topic pages */
export function createTopic({
  slug,
  title,
  metaTitle,
  metaDescription,
  keywords,
  intro,
  sections,
  faq,
  relatedLinks,
}) {
  return {
    slug,
    title,
    metaTitle,
    metaDescription,
    keywords,
    intro,
    sections,
    faq: faq || [],
    relatedLinks: relatedLinks || [],
  };
}

export const servletsTopics = [
  createTopic({
    slug: "/servlets-introduction",
    title: "Introduction to Java Servlets",
    metaTitle: "Introduction to Java Servlets Tutorial | Java Web Development",
    metaDescription:
      "Learn what Java Servlets are, how they work with web servers like Tomcat, and why they remain essential for Java web development. Free tutorial for beginners in the USA, UK, and Australia.",
    keywords: [
      "java servlets",
      "servlet tutorial",
      "java web development",
      "servlet container",
      "apache tomcat java",
    ],
    intro:
      "Java Servlets are server-side Java programs that handle HTTP requests and generate dynamic web content. They form the foundation of Java web applications and are widely used in enterprise systems across the United States, Europe, and Australia.",
    sections: [
      {
        title: "What Are Java Servlets?",
        body: "A Servlet is a Java class that extends the capabilities of servers hosting applications accessed via a request-response programming model. When a user visits a URL, the web container (such as Apache Tomcat) receives the HTTP request and forwards it to the appropriate Servlet, which processes the request and returns a response—typically HTML, JSON, or a redirect.",
      },
      {
        title: "Why Learn Servlets?",
        type: "list",
        items: [
          "Servlets are the core of Java EE/Jakarta EE web stacks used by banks, government, and Fortune 500 companies.",
          "Understanding Servlets helps you master Spring MVC, Spring Boot, and Jakarta REST under the hood.",
          "Servlet concepts—HTTP methods, sessions, filters—apply directly to modern API development.",
          "Strong Servlet knowledge is valued in Java developer interviews in the US, UK, and Australia.",
        ],
      },
      {
        title: "Servlet Architecture Overview",
        type: "cards",
        cards: [
          {
            title: "Web Browser",
            text: "Sends HTTP requests (GET, POST) to the server when users interact with a web application.",
          },
          {
            title: "Web Container (Tomcat)",
            text: "Receives requests, manages Servlet lifecycle, and provides servlet API implementations.",
          },
          {
            title: "Servlet",
            text: "Java class that handles business logic and generates dynamic responses.",
          },
          {
            title: "Database / Services",
            text: "Servlets often connect to JDBC, REST APIs, or message queues for data.",
          },
        ],
      },
      {
        title: "Basic Servlet Example",
        type: "code",
        code: `@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter out = resp.getWriter();
        out.println("<h1>Hello from Servlet!</h1>");
    }
}`,
      },
      {
        title: "Servlet vs JSP",
        body: "Servlets contain Java code with embedded HTML, while JSP (JavaServer Pages) embed Java inside HTML. Modern applications often use Servlets as controllers and JSP or template engines for views. Spring Boot abstracts much of this, but the underlying request handling remains Servlet-based.",
      },
    ],
    faq: [
      {
        question: "Are Java Servlets still used in 2025?",
        answer:
          "Yes. While Spring Boot is the dominant framework, it runs on an embedded Servlet container. Legacy enterprise apps and many government systems still use Servlets directly. Understanding them is essential for Java web developers.",
      },
      {
        question: "What do I need to run Servlets locally?",
        answer:
          "Install JDK 17 or later and Apache Tomcat (or use an IDE like IntelliJ IDEA or Eclipse with built-in Tomcat support). Deploy your WAR file or run from your IDE.",
      },
    ],
    relatedLinks: [
      { label: "Servlet Lifecycle", href: "/servlet-lifecycle" },
      { label: "HttpServlet Class", href: "/servlet-httpservlet" },
      { label: "Core Java Introduction", href: "/intro-java" },
    ],
  }),

  createTopic({
    slug: "/servlet-lifecycle",
    title: "Servlet Lifecycle in Java",
    metaTitle: "Servlet Lifecycle Explained | init, service, destroy Methods",
    metaDescription:
      "Understand the Servlet lifecycle: loading, instantiation, init(), service(), and destroy(). Essential Java web tutorial for developers learning server-side programming.",
    keywords: [
      "servlet lifecycle",
      "servlet init method",
      "servlet service method",
      "servlet destroy",
      "java servlet tutorial",
    ],
    intro:
      "Every Servlet passes through a well-defined lifecycle managed by the web container. Understanding init(), service(), and destroy() helps you write efficient, thread-safe web applications.",
    sections: [
      {
        title: "Lifecycle Phases",
        type: "list",
        items: [
          "Loading and Instantiation — The container loads the Servlet class and creates one instance (Singleton by default).",
          "Initialization — init(ServletConfig) is called once before any request is handled.",
          "Request Handling — service() (or doGet/doPost) is called for each client request.",
          "Destruction — destroy() is called when the container shuts down or undeploys the application.",
        ],
      },
      {
        title: "init() Method",
        body: "The init() method runs exactly once when the Servlet is first loaded. Use it to read configuration from web.xml or @WebInitParam annotations, open database connection pools, or initialize expensive resources. Never perform heavy initialization in the constructor.",
      },
      {
        title: "service() Method",
        body: "For every HTTP request, the container calls service(), which dispatches to doGet(), doPost(), doPut(), or doDelete() based on the HTTP method. Servlets must be thread-safe: instance variables shared across requests can cause race conditions.",
      },
      {
        title: "destroy() Method",
        body: "When the application is undeployed or the server stops, destroy() releases resources—closing connections, flushing caches, and stopping background threads. Always clean up resources opened in init().",
      },
      {
        title: "Lifecycle Code Example",
        type: "code",
        code: `public class LifecycleServlet extends HttpServlet {
    @Override
    public void init() throws ServletException {
        System.out.println("Servlet initialized");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.getWriter().println("Handling request");
    }

    @Override
    public void destroy() {
        System.out.println("Servlet destroyed");
    }
}`,
      },
    ],
    faq: [
      {
        question: "How many Servlet instances are created?",
        answer:
          "Typically one instance per Servlet class per JVM. The container creates multiple threads to handle concurrent requests against that single instance, which is why thread safety matters.",
      },
    ],
    relatedLinks: [
      { label: "Introduction to Servlets", href: "/servlets-introduction" },
      { label: "HttpServlet Class", href: "/servlet-httpservlet" },
    ],
  }),

  createTopic({
    slug: "/servlet-httpservlet",
    title: "HttpServlet Class in Java",
    metaTitle: "HttpServlet Tutorial | doGet and doPost in Java Servlets",
    metaDescription:
      "Learn the HttpServlet class, override doGet and doPost methods, and handle HTTP requests in Java. Practical Servlet tutorial with code examples.",
    keywords: [
      "httpservlet",
      "doget dopost servlet",
      "java httpservlet example",
      "http servlet request handling",
    ],
    intro:
      "HttpServlet is the base class most developers extend when building Java web applications. It provides convenient methods for each HTTP verb and integrates with the Servlet API request/response objects.",
    sections: [
      {
        title: "Class Hierarchy",
        body: "GenericServlet → HttpServlet → YourServlet. GenericServlet is protocol-independent; HttpServlet adds HTTP-specific methods like doGet(), doPost(), doPut(), doDelete(), and doHead().",
      },
      {
        title: "Overriding HTTP Methods",
        type: "cards",
        cards: [
          {
            title: "doGet()",
            text: "Handles HTTP GET requests. Used for retrieving data, displaying pages. Should be idempotent and not modify server state.",
          },
          {
            title: "doPost()",
            text: "Handles HTTP POST requests. Used for form submissions, creating resources. Data is sent in the request body.",
          },
          {
            title: "doPut() / doDelete()",
            text: "Used in RESTful APIs for updating and deleting resources. Less common in traditional web forms.",
          },
        ],
      },
      {
        title: "doGet and doPost Example",
        type: "code",
        code: `@WebServlet("/register")
public class RegisterServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.getRequestDispatcher("/register.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String email = req.getParameter("email");
        String name = req.getParameter("name");
        // Save to database...
        resp.sendRedirect("/success");
    }
}`,
      },
      {
        title: "Best Practices",
        type: "list",
        items: [
          "Never override service() unless you need custom dispatch logic.",
          "Set content type before writing to the response: resp.setContentType(\"text/html;charset=UTF-8\").",
          "Use POST for form submissions that change data; GET for read-only operations.",
          "Validate and sanitize all request parameters to prevent injection attacks.",
        ],
      },
    ],
    faq: [
      {
        question: "What happens if I don't override doGet()?",
        answer:
          "HttpServlet's default doGet() returns HTTP 405 Method Not Allowed. Always override the methods your application supports.",
      },
    ],
    relatedLinks: [
      { label: "Request and Response Objects", href: "/servlet-request-response" },
      { label: "Servlet Lifecycle", href: "/servlet-lifecycle" },
    ],
  }),

  createTopic({
    slug: "/servlet-request-response",
    title: "Servlet Request and Response Objects",
    metaTitle: "HttpServletRequest & HttpServletResponse Tutorial | Java Servlets",
    metaDescription:
      "Master HttpServletRequest and HttpServletResponse in Java Servlets. Learn to read parameters, headers, set status codes, and write responses.",
    keywords: [
      "httpservletrequest",
      "httpservletresponse",
      "servlet request response",
      "java web request handling",
    ],
    intro:
      "HttpServletRequest and HttpServletResponse are the primary interfaces for reading client data and sending responses. Every Servlet method receives these two objects.",
    sections: [
      {
        title: "HttpServletRequest — Reading Data",
        type: "list",
        items: [
          "getParameter(\"name\") — Read form fields and query string values.",
          "getParameterValues(\"hobby\") — Read multi-value fields like checkboxes.",
          "getHeader(\"User-Agent\") — Read HTTP headers.",
          "getSession() — Access or create an HTTP session.",
          "getRequestDispatcher(\"/page.jsp\").forward() — Forward to another resource.",
          "getCookies() — Read cookies sent by the browser.",
        ],
      },
      {
        title: "HttpServletResponse — Sending Data",
        type: "list",
        items: [
          "setContentType(\"application/json\") — Set MIME type.",
          "setStatus(HttpServletResponse.SC_NOT_FOUND) — Set HTTP status code.",
          "sendRedirect(\"/login\") — Redirect browser to another URL.",
          "addCookie(new Cookie(\"theme\", \"dark\")) — Set cookies.",
          "getWriter() — Get PrintWriter for text responses.",
          "getOutputStream() — Get stream for binary data (images, files).",
        ],
      },
      {
        title: "Practical Example",
        type: "code",
        code: `@WebServlet("/search")
public class SearchServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String query = req.getParameter("q");
        if (query == null || query.isBlank()) {
            resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "Missing query");
            return;
        }
        resp.setContentType("application/json");
        resp.getWriter().printf("{\"query\":\"%s\",\"results\":[]}", query);
    }
}`,
      },
      {
        title: "Request Scope vs Session Scope",
        body: "Use request attributes (req.setAttribute) for data passed between Servlets and JSPs within a single request. Use session attributes (req.getSession().setAttribute) for user-specific data that persists across multiple requests, such as login state or shopping cart contents.",
      },
    ],
    faq: [
      {
        question: "Can I read the request body in doGet()?",
        answer:
          "GET requests typically have no body. Parameters come from the query string via getParameter(). For JSON bodies, read from req.getReader() or req.getInputStream() in doPost().",
      },
    ],
    relatedLinks: [
      { label: "Session Management", href: "/servlet-session-management" },
      { label: "HttpServlet Class", href: "/servlet-httpservlet" },
    ],
  }),

  createTopic({
    slug: "/servlet-session-management",
    title: "Session Management in Java Servlets",
    metaTitle: "Java Servlet Session Management Tutorial | HttpSession Guide",
    metaDescription:
      "Learn HttpSession in Java Servlets for login state, shopping carts, and user tracking. Covers session creation, timeout, and security best practices.",
    keywords: [
      "httpsession servlet",
      "session management java",
      "servlet login session",
      "java web session tutorial",
    ],
    intro:
      "HTTP is stateless, but web applications need to remember users across requests. HttpSession provides server-side storage keyed by a session ID sent to the browser as a cookie.",
    sections: [
      {
        title: "How HttpSession Works",
        body: "When you call request.getSession(true), the container creates a session (if none exists) and sends a JSESSIONID cookie to the browser. On subsequent requests, the browser sends this cookie back, allowing the server to retrieve the same session and its stored attributes.",
      },
      {
        title: "Common Session Operations",
        type: "code",
        code: `HttpSession session = request.getSession();
session.setAttribute("user", loggedInUser);
User user = (User) session.getAttribute("user");
session.invalidate(); // Logout — destroys session
int timeout = session.getMaxInactiveInterval(); // seconds`,
      },
      {
        title: "Session Timeout",
        body: "Sessions expire after a period of inactivity (default 30 minutes in Tomcat). Configure in web.xml with <session-timeout>20</session-timeout> (minutes) or programmatically with session.setMaxInactiveInterval(1200). Always invalidate sessions on logout.",
      },
      {
        title: "Security Best Practices",
        type: "list",
        items: [
          "Store minimal data in sessions—prefer user ID over full user objects.",
          "Regenerate session ID after login to prevent session fixation attacks.",
          "Use HTTPS in production to protect JSESSIONID from interception.",
          "Never store passwords or sensitive tokens in session attributes.",
          "Set appropriate timeout values for banking vs. content sites.",
        ],
      },
    ],
    faq: [
      {
        question: "Session vs Cookie — what's the difference?",
        answer:
          "Sessions store data on the server; only a session ID cookie is sent to the browser. Cookies store data directly on the client. Sessions are more secure for sensitive data but consume server memory.",
      },
    ],
    relatedLinks: [
      { label: "Cookies in Servlets", href: "/servlet-cookies" },
      { label: "Request and Response Objects", href: "/servlet-request-response" },
    ],
  }),

  createTopic({
    slug: "/servlet-cookies",
    title: "Cookies in Java Servlets",
    metaTitle: "Java Servlet Cookies Tutorial | Set and Read HTTP Cookies",
    metaDescription:
      "Learn to create, read, and delete HTTP cookies in Java Servlets. Covers Cookie class, expiration, security flags, and practical examples.",
    keywords: [
      "servlet cookies",
      "java cookie tutorial",
      "http cookie servlet",
      "set cookie java",
    ],
    intro:
      "Cookies are small pieces of data stored in the user's browser and sent with every request to your domain. Servlets use them for preferences, tracking, and remember-me functionality.",
    sections: [
      {
        title: "Creating Cookies",
        type: "code",
        code: `Cookie cookie = new Cookie("language", "en-AU");
cookie.setMaxAge(60 * 60 * 24 * 365); // 1 year
cookie.setHttpOnly(true);
cookie.setSecure(true); // HTTPS only
cookie.setPath("/");
response.addCookie(cookie);`,
      },
      {
        title: "Reading Cookies",
        type: "code",
        code: `Cookie[] cookies = request.getCookies();
if (cookies != null) {
    for (Cookie c : cookies) {
        if ("language".equals(c.getName())) {
            String lang = c.getValue();
        }
    }
}`,
      },
      {
        title: "Deleting Cookies",
        body: "To delete a cookie, create a Cookie with the same name and path, set maxAge to 0, and add it to the response. The browser will remove it on the next request.",
      },
      {
        title: "Cookie Security",
        type: "list",
        items: [
          "HttpOnly — Prevents JavaScript access (mitigates XSS).",
          "Secure — Cookie only sent over HTTPS.",
          "SameSite — Controls cross-site cookie sending (CSRF protection).",
          "Never store passwords or JWTs in cookies without encryption.",
        ],
      },
    ],
    faq: [
      {
        question: "How many cookies can I set?",
        answer:
          "Browsers typically allow 50 cookies per domain with a 4KB size limit per cookie. Keep cookie payloads small.",
      },
    ],
    relatedLinks: [
      { label: "Session Management", href: "/servlet-session-management" },
      { label: "Servlet Filters", href: "/servlet-filters" },
    ],
  }),

  createTopic({
    slug: "/servlet-filters",
    title: "Servlet Filters in Java",
    metaTitle: "Java Servlet Filters Tutorial | Authentication & Logging Filters",
    metaDescription:
      "Learn Servlet Filters for authentication, logging, compression, and CORS. Chain filters before Servlets with FilterChain in Java web apps.",
    keywords: [
      "servlet filters",
      "java filter chain",
      "authentication filter servlet",
      "servlet filter tutorial",
    ],
    intro:
      "Filters intercept requests before they reach Servlets and responses before they return to the client. They are ideal for cross-cutting concerns like authentication, logging, and encoding.",
    sections: [
      {
        title: "Filter Lifecycle",
        body: "Filters implement javax.servlet.Filter with init(), doFilter(), and destroy() methods. The container calls doFilter() for every matching request. Filters are configured in web.xml or with @WebFilter annotation.",
      },
      {
        title: "Filter Chain",
        type: "code",
        code: `@WebFilter("/admin/*")
public class AuthFilter implements Filter {
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpSession session = request.getSession(false);
        if (session == null || session.getAttribute("user") == null) {
            ((HttpServletResponse) res).sendRedirect("/login");
            return;
        }
        chain.doFilter(req, res); // Continue to next filter or servlet
    }
}`,
      },
      {
        title: "Common Filter Use Cases",
        type: "cards",
        cards: [
          { title: "Authentication", text: "Verify login before allowing access to protected URLs." },
          { title: "Logging", text: "Log request URL, method, duration, and client IP." },
          { title: "Encoding", text: "Set request character encoding to UTF-8." },
          { title: "CORS", text: "Add Access-Control headers for API endpoints." },
        ],
      },
    ],
    faq: [
      {
        question: "Filter order — how is it determined?",
        answer:
          "With @WebFilter, use the urlPatterns and dispatcherTypes attributes. In web.xml, the order of filter-mapping elements determines execution order. Spring Boot uses @Order annotation on FilterRegistrationBean.",
      },
    ],
    relatedLinks: [
      { label: "Request Dispatcher", href: "/servlet-request-dispatcher" },
      { label: "Session Management", href: "/servlet-session-management" },
    ],
  }),

  createTopic({
    slug: "/servlet-request-dispatcher",
    title: "Request Dispatcher in Java Servlets",
    metaTitle: "RequestDispatcher Tutorial | forward vs include in Servlets",
    metaDescription:
      "Learn RequestDispatcher forward and include methods in Java Servlets. Transfer control between Servlets and JSPs without client redirects.",
    keywords: [
      "requestdispatcher servlet",
      "forward include servlet",
      "servlet jsp forward",
      "java request dispatcher",
    ],
    intro:
      "RequestDispatcher allows one Servlet to delegate processing to another Servlet or JSP on the server side, without the client knowing about the internal transfer.",
    sections: [
      {
        title: "forward() vs include()",
        type: "cards",
        cards: [
          {
            title: "forward()",
            text: "Transfers control completely. The original Servlet stops processing. Browser URL stays the same. Used for MVC controller → view pattern.",
          },
          {
            title: "include()",
            text: "Embeds another resource's output into the current response. Original Servlet continues after include returns. Used for headers, footers, sidebars.",
          },
        ],
      },
      {
        title: "Forward Example",
        type: "code",
        code: `@WebServlet("/dashboard")
public class DashboardServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        req.setAttribute("stats", loadStats());
        req.getRequestDispatcher("/WEB-INF/views/dashboard.jsp")
           .forward(req, resp);
    }
}`,
      },
      {
        title: "When to Use sendRedirect Instead",
        body: "Use sendRedirect() when you want the browser URL to change (after POST to prevent duplicate submissions) or when redirecting to an external site. Use forward() when keeping the same URL and performing server-side view rendering.",
      },
    ],
    faq: [
      {
        question: "Can I forward to an external URL?",
        answer:
          "No. RequestDispatcher only works for resources within the same web application context. Use sendRedirect() for external URLs.",
      },
    ],
    relatedLinks: [
      { label: "Servlet Filters", href: "/servlet-filters" },
      { label: "ServletConfig and ServletContext", href: "/servlet-config-context" },
    ],
  }),

  createTopic({
    slug: "/servlet-config-context",
    title: "ServletConfig and ServletContext",
    metaTitle: "ServletConfig vs ServletContext | Java Servlet Configuration",
    metaDescription:
      "Understand ServletConfig and ServletContext in Java. Read init parameters, share application-wide data, and configure Servlets properly.",
    keywords: [
      "servletconfig",
      "servletcontext",
      "servlet init parameters",
      "web.xml servlet config",
    ],
    intro:
      "ServletConfig holds configuration for a single Servlet, while ServletContext provides application-wide scope shared by all Servlets in the web application.",
    sections: [
      {
        title: "ServletConfig",
        body: "Each Servlet has its own ServletConfig object, available via getServletConfig() or the init() method. Use it to read init parameters defined in web.xml or @WebInitParam annotations specific to that Servlet.",
        type: "text",
      },
      {
        title: "ServletContext",
        body: "ServletContext represents the entire web application. There is one instance per application. Use it to store shared resources (database connection info, file paths), read context init parameters, get real paths to files, and log application events.",
      },
      {
        title: "Reading Init Parameters",
        type: "code",
        code: `// Servlet-specific (ServletConfig)
String dbUrl = getServletConfig().getInitParameter("db.url");

// Application-wide (ServletContext)
String appName = getServletContext().getInitParameter("app.name");
getServletContext().setAttribute("userCount", 0);`,
      },
      {
        title: "Scope Comparison",
        type: "list",
        items: [
          "Request scope — One request (request.setAttribute).",
          "Session scope — One user session (session.setAttribute).",
          "Application scope — All users, entire app (context.setAttribute).",
          "ServletConfig scope — One Servlet only (init parameters).",
        ],
      },
    ],
    faq: [
      {
        question: "Is ServletContext thread-safe?",
        answer:
          "The ServletContext object itself is thread-safe, but attributes you store in it are not automatically synchronized. Use concurrent collections or synchronization when multiple threads modify shared context attributes.",
      },
    ],
    relatedLinks: [
      { label: "Introduction to Servlets", href: "/servlets-introduction" },
      { label: "Servlet Lifecycle", href: "/servlet-lifecycle" },
    ],
  }),
];

export function getServletTopic(slug) {
  return servletsTopics.find((t) => t.slug === slug);
}
