import { createTopic } from "./servlets-topics.js";

export const jdbcTopics = [
  createTopic({
    slug: "/jdbc-introduction",
    title: "Introduction to JDBC in Java",
    metaTitle: "JDBC Tutorial for Beginners | Java Database Connectivity",
    metaDescription:
      "Learn JDBC (Java Database Connectivity) to connect Java applications with MySQL, PostgreSQL, and Oracle databases. Free tutorial for developers in the USA, UK, and Australia.",
    keywords: ["jdbc tutorial", "java database connectivity", "jdbc java", "connect java to mysql", "java sql tutorial"],
    intro: "JDBC is the standard Java API for connecting to relational databases, executing SQL queries, and processing results. It is essential for backend Java developers building data-driven applications.",
    sections: [
      { title: "What Is JDBC?", body: "JDBC provides a vendor-neutral interface between Java code and database management systems. You write Java code against JDBC interfaces; database vendors supply JDBC drivers that translate calls to their native protocol." },
      { title: "JDBC Architecture", type: "cards", cards: [
        { title: "Java Application", text: "Your code using JDBC API (Connection, Statement, ResultSet)." },
        { title: "JDBC Driver", text: "Vendor-specific driver (MySQL Connector/J, PostgreSQL JDBC)." },
        { title: "Database", text: "MySQL, PostgreSQL, Oracle, SQL Server, etc." },
      ]},
      { title: "Basic JDBC Steps", type: "list", items: [
        "Load the JDBC driver (or use DriverManager with JDBC 4+ auto-loading).",
        "Establish a Connection with DriverManager.getConnection(url, user, password).",
        "Create a Statement or PreparedStatement.",
        "Execute SQL and process the ResultSet.",
        "Close resources in finally block or try-with-resources.",
      ]},
      { title: "Hello JDBC Example", type: "code", code: `String url = "jdbc:mysql://localhost:3306/mydb";
try (Connection conn = DriverManager.getConnection(url, "user", "pass");
     Statement stmt = conn.createStatement();
     ResultSet rs = stmt.executeQuery("SELECT id, name FROM users")) {
    while (rs.next()) {
        System.out.println(rs.getInt("id") + ": " + rs.getString("name"));
    }
}` },
    ],
    faq: [{ question: "Do I need to install JDBC separately?", answer: "JDBC is part of the JDK (java.sql package). You need to add the database-specific driver JAR (e.g., mysql-connector-j) to your classpath or Maven/Gradle dependencies." }],
    relatedLinks: [{ label: "JDBC Drivers", href: "/jdbc-drivers" }, { label: "Database Connection", href: "/jdbc-database-connection" }],
  }),

  createTopic({
    slug: "/jdbc-drivers",
    title: "JDBC Drivers Explained",
    metaTitle: "JDBC Driver Types | Type 1, 2, 3, 4 Drivers in Java",
    metaDescription: "Understand JDBC driver types (Bridge, Native, Network, Thin) and choose the right driver for MySQL, PostgreSQL, and enterprise databases.",
    keywords: ["jdbc driver types", "jdbc thin driver", "mysql jdbc driver", "postgresql jdbc driver"],
    intro: "JDBC drivers bridge Java applications and databases. Modern development almost exclusively uses Type 4 (thin/ pure Java) drivers for performance and portability.",
    sections: [
      { title: "Four JDBC Driver Types", type: "list", items: [
        "Type 1 — JDBC-ODBC Bridge (deprecated, avoid).",
        "Type 2 — Native-API driver (uses DB client libraries).",
        "Type 3 — Network protocol driver (middleware server).",
        "Type 4 — Thin driver (pure Java, direct to DB — recommended).",
      ]},
      { title: "Popular Type 4 Drivers", type: "cards", cards: [
        { title: "MySQL", text: "com.mysql.cj.jdbc.Driver — mysql-connector-j artifact." },
        { title: "PostgreSQL", text: "org.postgresql.Driver — postgresql artifact." },
        { title: "Oracle", text: "oracle.jdbc.OracleDriver — ojdbc11 artifact." },
        { title: "SQL Server", text: "com.microsoft.sqlserver.jdbc.SQLServerDriver." },
      ]},
      { title: "Maven Dependency Example", type: "code", code: `<!-- MySQL -->
<dependency>
  <groupId>com.mysql</groupId>
  <artifactId>mysql-connector-j</artifactId>
  <version>8.3.0</version>
</dependency>` },
    ],
    faq: [{ question: "Which driver type should I use?", answer: "Always use Type 4 thin drivers for new projects. They are pure Java, easy to deploy, and perform well without native dependencies." }],
    relatedLinks: [{ label: "JDBC Introduction", href: "/jdbc-introduction" }, { label: "Establishing Connection", href: "/jdbc-database-connection" }],
  }),

  createTopic({
    slug: "/jdbc-database-connection",
    title: "Establishing JDBC Database Connection",
    metaTitle: "JDBC Connection Tutorial | Connect Java to MySQL & PostgreSQL",
    metaDescription: "Learn to establish JDBC database connections using DriverManager and DataSource. Connection strings, pooling, and best practices for production apps.",
    keywords: ["jdbc connection", "drivermanager getconnection", "java mysql connection", "jdbc url format"],
    intro: "Establishing a reliable database connection is the first step in any JDBC application. Learn connection URLs, credentials management, and why connection pooling matters in production.",
    sections: [
      { title: "Connection URL Format", body: "JDBC URLs follow the pattern jdbc:subprotocol:subname. Examples:\njdbc:mysql://localhost:3306/shopdb\njdbc:postgresql://localhost:5432/inventory\njdbc:oracle:thin:@localhost:1521:ORCL" },
      { title: "DriverManager Connection", type: "code", code: `String url = "jdbc:postgresql://localhost:5432/appdb";
Properties props = new Properties();
props.setProperty("user", "app_user");
props.setProperty("password", System.getenv("DB_PASSWORD"));
try (Connection conn = DriverManager.getConnection(url, props)) {
    System.out.println("Connected: " + conn.getMetaData().getDatabaseProductName());
}` },
      { title: "Production Best Practices", type: "list", items: [
        "Never hardcode passwords — use environment variables or secret managers.",
        "Use connection pooling (HikariCP) instead of DriverManager in production.",
        "Set connection timeouts and validation queries.",
        "Use SSL/TLS for database connections in cloud environments.",
        "Close connections promptly — prefer try-with-resources.",
      ]},
    ],
    faq: [{ question: "Why not use DriverManager in production?", answer: "DriverManager creates a new physical connection for every call, which is slow and resource-intensive. Connection pools reuse connections efficiently." }],
    relatedLinks: [{ label: "Connection Pooling", href: "/jdbc-connection-pooling" }, { label: "Statement Interface", href: "/jdbc-statement" }],
  }),

  createTopic({
    slug: "/jdbc-statement",
    title: "JDBC Statement Interface",
    metaTitle: "JDBC Statement Tutorial | executeQuery & executeUpdate",
    metaDescription: "Learn the JDBC Statement interface for executing static SQL queries. Understand executeQuery, executeUpdate, and SQL injection risks.",
    keywords: ["jdbc statement", "executequery java", "executeupdate jdbc", "java sql statement"],
    intro: "The Statement interface executes static SQL without parameters. While simple for learning, PreparedStatement is preferred for production due to security and performance.",
    sections: [
      { title: "Creating a Statement", type: "code", code: `Statement stmt = connection.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM products WHERE category = 'electronics'");
while (rs.next()) {
    System.out.println(rs.getString("name"));
}` },
      { title: "executeUpdate for DML", type: "code", code: `int rows = stmt.executeUpdate(
    "UPDATE accounts SET balance = balance - 100 WHERE id = 42");
System.out.println("Updated rows: " + rows);` },
      { title: "SQL Injection Warning", body: "Never concatenate user input into Statement SQL strings. An attacker could inject malicious SQL. Always use PreparedStatement with parameterized queries for any user-supplied data." },
    ],
    faq: [{ question: "When is Statement acceptable?", answer: "For static DDL (CREATE TABLE) or admin scripts with no user input. For all application queries with dynamic values, use PreparedStatement." }],
    relatedLinks: [{ label: "PreparedStatement", href: "/jdbc-preparedstatement" }, { label: "ResultSet", href: "/jdbc-resultset" }],
  }),

  createTopic({
    slug: "/jdbc-preparedstatement",
    title: "JDBC PreparedStatement",
    metaTitle: "PreparedStatement Tutorial | Parameterized Queries in Java",
    metaDescription: "Master JDBC PreparedStatement for safe, efficient SQL. Learn setString, setInt, batch inserts, and prevent SQL injection in Java apps.",
    keywords: ["preparedstatement jdbc", "parameterized query java", "sql injection prevention java", "jdbc prepared statement example"],
    intro: "PreparedStatement precompiles SQL with placeholders (?), making queries faster on repeated execution and immune to SQL injection when used correctly.",
    sections: [
      { title: "Basic PreparedStatement", type: "code", code: `String sql = "SELECT * FROM users WHERE email = ? AND active = ?";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, userEmail);
ps.setBoolean(2, true);
ResultSet rs = ps.executeQuery();` },
      { title: "Insert with PreparedStatement", type: "code", code: `String sql = "INSERT INTO orders (customer_id, total, created_at) VALUES (?, ?, ?)";
try (PreparedStatement ps = conn.prepareStatement(sql)) {
    ps.setInt(1, customerId);
    ps.setBigDecimal(2, total);
    ps.setTimestamp(3, Timestamp.from(Instant.now()));
    ps.executeUpdate();
}` },
      { title: "Advantages", type: "list", items: [
        "Prevents SQL injection — parameters are escaped automatically.",
        "Better performance — SQL is parsed once, executed many times.",
        "Type-safe parameter binding with setInt, setString, setDate, etc.",
        "Supports batch operations for bulk inserts.",
      ]},
    ],
    faq: [{ question: "Are PreparedStatements always safe?", answer: "They prevent injection for parameter values. However, using string concatenation for table or column names (dynamic SQL structure) still requires careful validation." }],
    relatedLinks: [{ label: "CallableStatement", href: "/jdbc-callablestatement" }, { label: "Batch Processing", href: "/jdbc-batch-processing" }],
  }),

  createTopic({
    slug: "/jdbc-callablestatement",
    title: "JDBC CallableStatement",
    metaTitle: "CallableStatement Tutorial | Call Stored Procedures in Java",
    metaDescription: "Learn JDBC CallableStatement to invoke database stored procedures and functions from Java with IN, OUT, and INOUT parameters.",
    keywords: ["callablestatement jdbc", "stored procedure java", "jdbc call procedure", "java database stored procedure"],
    intro: "CallableStatement extends PreparedStatement to call stored procedures and functions defined in the database, useful for complex business logic maintained in the DB layer.",
    sections: [
      { title: "Calling a Stored Procedure", type: "code", code: `String sql = "{call get_customer_orders(?, ?)}";
CallableStatement cs = conn.prepareCall(sql);
cs.setInt(1, customerId);       // IN parameter
cs.registerOutParameter(2, Types.INTEGER); // OUT parameter
cs.execute();
int orderCount = cs.getInt(2);` },
      { title: "When to Use Stored Procedures", type: "list", items: [
        "Complex multi-step operations already defined in the database.",
        "Legacy enterprise systems with business logic in PL/SQL or T-SQL.",
        "Performance-critical batch operations close to data.",
        "Prefer application-layer logic in modern microservices unless DB team owns procedures.",
      ]},
    ],
    faq: [{ question: "CallableStatement vs PreparedStatement?", answer: "Use PreparedStatement for standard SQL. Use CallableStatement specifically for stored procedure calls with {call proc_name(?,?)} syntax." }],
    relatedLinks: [{ label: "PreparedStatement", href: "/jdbc-preparedstatement" }, { label: "Transaction Management", href: "/jdbc-transaction-management" }],
  }),

  createTopic({
    slug: "/jdbc-resultset",
    title: "JDBC ResultSet",
    metaTitle: "JDBC ResultSet Tutorial | Read Query Results in Java",
    metaDescription: "Learn to navigate and read JDBC ResultSet data. Covers next(), getString, getInt, scrollable result sets, and mapping rows to Java objects.",
    keywords: ["jdbc resultset", "resultset next java", "read sql results java", "resultset getstring"],
    intro: "ResultSet represents the table of data returned by a SQL query. Learn to iterate rows, read column values by name or index, and map results to Java objects.",
    sections: [
      { title: "Reading ResultSet", type: "code", code: `ResultSet rs = stmt.executeQuery("SELECT id, email, created_at FROM users");
while (rs.next()) {
    int id = rs.getInt("id");
    String email = rs.getString("email");
    LocalDateTime created = rs.getTimestamp("created_at").toLocalDateTime();
}` },
      { title: "ResultSet Types", type: "cards", cards: [
        { title: "TYPE_FORWARD_ONLY", text: "Default. Can only move forward with next(). Most efficient." },
        { title: "TYPE_SCROLL_INSENSITIVE", text: "Can scroll forward and backward. Not affected by DB changes." },
        { title: "CONCUR_READ_ONLY", text: "Cannot update rows through ResultSet (default)." },
        { title: "CONCUR_UPDATABLE", text: "Can insert, update, delete rows via ResultSet methods." },
      ]},
      { title: "Mapping to Objects", body: "In production, map ResultSet rows to POJOs manually or use frameworks like JPA/Hibernate, jOOQ, or MyBatis that handle mapping automatically. For learning JDBC, manual mapping builds strong fundamentals." },
    ],
    faq: [{ question: "Should I use column index or name?", answer: "Column names are more readable and resilient to column order changes. Index (1-based) is slightly faster but harder to maintain." }],
    relatedLinks: [{ label: "PreparedStatement", href: "/jdbc-preparedstatement" }, { label: "Batch Processing", href: "/jdbc-batch-processing" }],
  }),

  createTopic({
    slug: "/jdbc-transaction-management",
    title: "JDBC Transaction Management",
    metaTitle: "JDBC Transactions Tutorial | commit, rollback & ACID in Java",
    metaDescription: "Learn JDBC transaction management with setAutoCommit, commit, and rollback. Ensure data integrity with ACID properties in Java database apps.",
    keywords: ["jdbc transaction", "commit rollback java", "jdbc autocommit", "acid transactions java"],
    intro: "Transactions group multiple SQL operations into a single atomic unit. Either all operations succeed (commit) or all are undone (rollback), maintaining data integrity.",
    sections: [
      { title: "Manual Transaction Control", type: "code", code: `conn.setAutoCommit(false);
try {
    debitAccount(conn, fromAccount, amount);
    creditAccount(conn, toAccount, amount);
    conn.commit();
} catch (SQLException e) {
    conn.rollback();
    throw e;
} finally {
    conn.setAutoCommit(true);
}` },
      { title: "ACID Properties", type: "list", items: [
        "Atomicity — All or nothing.",
        "Consistency — Database moves from one valid state to another.",
        "Isolation — Concurrent transactions don't interfere (READ COMMITTED, SERIALIZABLE).",
        "Durability — Committed data survives system failures.",
      ]},
      { title: "Isolation Levels", body: "Set with conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED). Higher isolation prevents more anomalies but reduces concurrency. Most web apps use READ COMMITTED; financial systems may use SERIALIZABLE." },
    ],
    faq: [{ question: "Does Spring handle transactions automatically?", answer: "Yes. @Transactional manages commit/rollback for you. Understanding JDBC transactions helps debug issues and write native SQL code outside Spring." }],
    relatedLinks: [{ label: "Connection Pooling", href: "/jdbc-connection-pooling" }, { label: "Batch Processing", href: "/jdbc-batch-processing" }],
  }),

  createTopic({
    slug: "/jdbc-connection-pooling",
    title: "JDBC Connection Pooling",
    metaTitle: "Java Connection Pooling Tutorial | HikariCP & DataSource",
    metaDescription: "Learn JDBC connection pooling with HikariCP and DataSource. Improve performance and scalability for Java web applications in production.",
    keywords: ["connection pooling java", "hikaricp tutorial", "jdbc datasource", "java database pool"],
    intro: "Connection pooling maintains a cache of reusable database connections, dramatically improving performance for web applications that handle many concurrent users.",
    sections: [
      { title: "Why Connection Pooling?", body: "Creating a new TCP connection and authenticating with the database takes 50-200ms. Pools keep connections open and lend them to threads, reducing latency to microseconds." },
      { title: "HikariCP Configuration", type: "code", code: `HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:postgresql://localhost:5432/appdb");
config.setUsername("app");
config.setPassword(System.getenv("DB_PASS"));
config.setMaximumPoolSize(20);
config.setMinimumIdle(5);
config.setConnectionTimeout(30000);
HikariDataSource ds = new HikariDataSource(config);
try (Connection conn = ds.getConnection()) { /* use connection */ }` },
      { title: "Pool Sizing Guidelines", type: "list", items: [
        "Start with pool size = number of CPU cores × 2 for typical web apps.",
        "Monitor active/idle connections under load.",
        "Set connection max lifetime below database timeout.",
        "Use validation query: SELECT 1 for connection health checks.",
      ]},
    ],
    faq: [{ question: "HikariCP vs Tomcat Pool vs C3P0?", answer: "HikariCP is the default in Spring Boot 2+ and is widely considered the fastest and most reliable. Use it for new projects." }],
    relatedLinks: [{ label: "Database Connection", href: "/jdbc-database-connection" }, { label: "Spring Boot Microservices", href: "/spring-boot-microservices" }],
  }),

  createTopic({
    slug: "/jdbc-batch-processing",
    title: "JDBC Batch Processing",
    metaTitle: "JDBC Batch Insert Tutorial | executeBatch in Java",
    metaDescription: "Speed up bulk database operations with JDBC batch processing. Learn addBatch, executeBatch, and optimize large inserts in Java.",
    keywords: ["jdbc batch insert", "executebatch java", "bulk insert jdbc", "jdbc batch processing"],
    intro: "Batch processing groups multiple SQL statements into a single round-trip to the database, significantly improving performance for bulk inserts, updates, and deletes.",
    sections: [
      { title: "Batch Insert Example", type: "code", code: `String sql = "INSERT INTO logs (message, level, created_at) VALUES (?, ?, ?)";
conn.setAutoCommit(false);
try (PreparedStatement ps = conn.prepareStatement(sql)) {
    for (LogEntry entry : entries) {
        ps.setString(1, entry.getMessage());
        ps.setString(2, entry.getLevel());
        ps.setTimestamp(3, Timestamp.from(entry.getCreatedAt()));
        ps.addBatch();
    }
    int[] results = ps.executeBatch();
    conn.commit();
}` },
      { title: "Performance Tips", type: "list", items: [
        "Use batches of 500-1000 rows, not millions at once.",
        "Disable auto-commit during batch operations.",
        "Consider COPY (PostgreSQL) or LOAD DATA (MySQL) for very large imports.",
        "Monitor memory — large batches consume heap.",
      ]},
    ],
    faq: [{ question: "Batch vs single inserts — how much faster?", answer: "Batching can be 10-50x faster than individual inserts due to reduced network round-trips and database parsing overhead." }],
    relatedLinks: [{ label: "PreparedStatement", href: "/jdbc-preparedstatement" }, { label: "Transaction Management", href: "/jdbc-transaction-management" }],
  }),
];

export function getJdbcTopic(slug) {
  return jdbcTopics.find((t) => t.slug === slug);
}
