import Head from "next/head";
import React from "react";
import Link from "next/link";

const Code = ({ children }) => (
  <pre className="overflow-x-auto rounded-lg bg-gray-900 text-green-400 p-4 text-xs sm:text-sm leading-relaxed">
    <code>{children}</code>
  </pre>
);

const PartHeading = ({ number, title, children }) => (
  <div className="mb-6 mt-10 first:mt-0">
    <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
      Part {number}
    </p>
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
      {title}
    </h2>
    {children && (
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {children}
      </p>
    )}
    <div className="mt-3 h-1 w-16 bg-red-600 rounded-full" />
  </div>
);

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
      {title}
    </h3>
    <div className="space-y-4 text-gray-800 text-sm sm:text-base leading-relaxed">
      {children}
    </div>
  </section>
);

export default function JavaDataTypes() {
  const toc = [
    { id: "part-1", label: "1. Variables" },
    { id: "part-2", label: "2. Data Types" },
    { id: "part-3", label: "3. Shared Variables (Threads)" },
    { id: "thread-local", label: "4. ThreadLocal Variables" },
    { id: "faq", label: "5. FAQ" },
  ];

  return (
    <>
      <Head>
        <title>
          Java Variables and Data Types | Primitive, Reference & Atomic Variables
        </title>
        <meta
          name="description"
          content="Learn Java variables and data types in simple English: primitive types, reference types, volatile, and atomic variables with clear examples."
        />
        <meta
          name="keywords"
          content="Java variables, Java data types, primitive data types, atomic variables Java, AtomicInteger, volatile Java, synchronized vs volatile"
        />
      </Head>

      <article className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-8 pb-8 border-b border-gray-100">
            <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 leading-tight">
              Variables and Data Types in Java
            </h1>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              A beginner-friendly guide to Java variables, data types, and how
              to share values safely between threads.
            </p>
          </header>

          {/* Table of contents */}
          <nav
            aria-label="Page sections"
            className="mb-10 p-4 sm:p-5 bg-red-50 border border-red-100 rounded-xl"
          >
            <p className="font-bold text-red-700 mb-3 text-sm sm:text-base">
              On this page
            </p>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm sm:text-base">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-red-600 hover:text-red-800 hover:underline font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* ========== PART 1 ========== */}
          <div id="part-1">
            <PartHeading number="1" title="Variables">
              A variable is a named place in memory that stores a value.
            </PartHeading>

            <Section title="What is a variable?">
              <p>
                In Java, every variable has a <strong>type</strong>, a{" "}
                <strong>name</strong>, and often a <strong>value</strong>. The
                type tells Java what kind of data it can store.
              </p>
              <Code>{`int age = 25;
String city = "Sydney";
boolean isActive = true;`}</Code>
              <p>
                Once you give a variable a type, you cannot put the wrong kind
                of data into it. For example, you cannot store text in an{" "}
                <code>int</code>.
              </p>
            </Section>

            <Section title="Types of variables">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 !mt-2">
                {[
                  {
                    title: "Local",
                    text: "Inside a method. Lives only while the method runs. Must be given a value before use.",
                  },
                  {
                    title: "Instance",
                    text: "Inside a class, but outside methods. Each object has its own copy.",
                  },
                  {
                    title: "Static",
                    text: "Shared by all objects of the class. One copy for the whole class.",
                  },
                  {
                    title: "Final",
                    text: "Cannot be changed after it is set. Useful for constants.",
                  },
                  {
                    title: "ThreadLocal",
                    text: "Each thread gets its own private copy. Threads do not share this value.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <h4 className="font-bold text-red-700 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* ========== PART 2 ========== */}
          <div id="part-2">
            <PartHeading number="2" title="Data Types">
              Data types tell Java what kind of value a variable can hold.
            </PartHeading>

            <Section title="Two main groups">
              <div className="grid sm:grid-cols-2 gap-3 !mt-2">
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-700 mb-1">Primitive</h4>
                  <p className="text-sm text-gray-700">
                    Stores the real value directly. Examples:{" "}
                    <code>int</code>, <code>boolean</code>, <code>double</code>.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-700 mb-1">
                    Non-primitive (Reference)
                  </h4>
                  <p className="text-sm text-gray-700">
                    Stores an address that points to an object. Examples:{" "}
                    <code>String</code>, arrays, custom classes.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="How values are stored in memory">
              <div className="grid sm:grid-cols-2 gap-4 !mt-2">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-red-700 mb-2">Primitive</h4>
                  <Code>{`int x = 10;`}</Code>
                  <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700">
                    <li>
                      <code>x</code> stores the number <code>10</code> directly
                    </li>
                    <li>No object is created</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-red-700 mb-2">Non-primitive</h4>
                  <Code>{`String name = new String("John");`}</Code>
                  <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700">
                    <li>
                      <code>name</code> stores a reference (address)
                    </li>
                    <li>
                      The text <code>&quot;John&quot;</code> lives on the heap
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <figure className="mb-8 text-center">
              <img
                src="/images/data-types.png"
                alt="Diagram showing Java primitive and non-primitive data types"
                className="max-w-full h-auto mx-auto rounded-lg shadow border border-gray-100"
              />
              <figcaption className="text-gray-500 text-sm mt-2">
                Primitive vs non-primitive data types in Java
              </figcaption>
            </figure>

            <Section title="The 8 primitive types">
              <p>
                Java has eight primitive data types. They are the basic building
                blocks for other types.
              </p>
              <div className="overflow-x-auto !mt-3">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Type
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Meaning
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Size
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["boolean", "true / false", "JVM dependent", "true"],
                      ["byte", "Small whole number", "1 byte", "10"],
                      ["short", "Medium whole number", "2 bytes", "2000"],
                      ["int", "Common whole number", "4 bytes", "1000"],
                      ["long", "Large whole number", "8 bytes", "123L"],
                      ["float", "Decimal number", "4 bytes", "3.14f"],
                      ["double", "Precise decimal", "8 bytes", "3.14159"],
                      ["char", "Single character", "2 bytes", "'A'"],
                    ].map((row, i) => (
                      <tr
                        key={row[0]}
                        className={i % 2 === 0 ? "bg-white" : "bg-red-50/50"}
                      >
                        <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                          {row[0]}
                        </td>
                        <td className="border border-red-200 px-3 py-2">
                          {row[1]}
                        </td>
                        <td className="border border-red-200 px-3 py-2">
                          {row[2]}
                        </td>
                        <td className="border border-red-200 px-3 py-2">
                          {row[3]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Non-primitive (reference) types">
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>
                  <strong>String</strong> — text
                </li>
                <li>
                  <strong>Arrays</strong> — list of values
                </li>
                <li>
                  <strong>Wrapper classes</strong> — Integer, Double, Boolean
                </li>
                <li>
                  <strong>Custom classes</strong> — classes you create
                </li>
              </ul>
              <Code>{`String title = "Java Guide";
int[] scores = {90, 85, 78};
Integer count = Integer.valueOf(42);`}</Code>
            </Section>
          </div>

          {/* ========== PART 3 ========== */}
          <div id="part-3">
            <PartHeading number="3" title="Shared Variables (Threads)">
              When many threads use the same variable, you need special tools so
              the values stay correct.
            </PartHeading>

            <Section title="The problem with a normal variable">
              <p>
                Two threads may update the same number at the same time. This
                can give the wrong result.
              </p>
              <Code>{`int count = 0;

// Thread A and Thread B both do:
count++;   // NOT safe

// count++ is really 3 steps:
// 1. read count
// 2. add 1
// 3. write count back`}</Code>
              <p>
                If both threads read <code>0</code> at the same time, both may
                write <code>1</code>. One update is lost. This is called a{" "}
                <strong>race condition</strong>.
              </p>
            </Section>

            <Section title="Atomic variables">
              <p>
                An <strong>atomic variable</strong> updates a value in one
                complete step. No other thread can interrupt in the middle. They
                live in <code>java.util.concurrent.atomic</code>.
              </p>

              <h4 className="font-bold text-gray-900 !mt-5">
                Common atomic classes
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Class
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Holds
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Use for
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["AtomicInteger", "int", "Counters, IDs"],
                      ["AtomicLong", "long", "Large counters"],
                      ["AtomicBoolean", "boolean", "Flags, start/stop"],
                      ["AtomicReference", "Object", "Shared object swap"],
                    ].map((row, i) => (
                      <tr
                        key={row[0]}
                        className={i % 2 === 0 ? "bg-white" : "bg-red-50/50"}
                      >
                        <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                          {row[0]}
                        </td>
                        <td className="border border-red-200 px-3 py-2">
                          {row[1]}
                        </td>
                        <td className="border border-red-200 px-3 py-2">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4 className="font-bold text-gray-900 !mt-5">
                AtomicInteger example
              </h4>
              <Code>{`import java.util.concurrent.atomic.AtomicInteger;

AtomicInteger visits = new AtomicInteger(0);

visits.incrementAndGet();  // safe ++
int total = visits.get();  // read value`}</Code>

              <h4 className="font-bold text-gray-900 !mt-5">
                Useful methods
              </h4>
              <ul className="list-disc list-inside space-y-1 ml-1 text-sm sm:text-base">
                <li>
                  <code>get()</code> — read the value
                </li>
                <li>
                  <code>set(value)</code> — set a new value
                </li>
                <li>
                  <code>incrementAndGet()</code> — add 1 safely
                </li>
                <li>
                  <code>compareAndSet(old, new)</code> — change only if value is
                  still old
                </li>
              </ul>

              <h4 className="font-bold text-gray-900 !mt-5">
                AtomicBoolean example
              </h4>
              <Code>{`AtomicBoolean started = new AtomicBoolean(false);

// Only the first thread starts the service
if (started.compareAndSet(false, true)) {
    System.out.println("Starting...");
}`}</Code>
            </Section>

            <Section title="How CAS works (simple)">
              <p>
                CAS means <strong>Compare And Swap</strong>. Before updating, it
                checks the value:
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-1">
                <li>Look at the current value</li>
                <li>Decide the new value</li>
                <li>Update only if nobody else changed it</li>
                <li>If someone else changed it, try again</li>
              </ol>
              <p>
                Example: value is <code>5</code>, thread wants <code>6</code>.
                CAS says: &quot;If it is still 5, change it to 6.&quot; If
                another thread already made it <code>7</code>, skip and try
                again.
              </p>
            </Section>

            <Section title="The volatile keyword">
              <p>
                <code>volatile</code> means: when one thread changes this
                variable, other threads see the new value quickly.
              </p>
              <Code>{`volatile boolean running = true;

// One thread
running = false;

// Other threads see running == false soon`}</Code>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-800 mb-2 text-sm">
                    What it does
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Shares the latest value</li>
                    <li>Good for stop flags</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-2 text-sm">
                    What it does NOT do
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>
                      Does not make <code>count++</code> safe
                    </li>
                    <li>Does not replace AtomicInteger</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="Which one should you use?">
              <p>
                Use the tool that matches your problem:
              </p>

              <div className="space-y-4 !mt-2">
                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-700 mb-1">
                    volatile — show the latest value
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    One thread writes. Other threads only read.
                  </p>
                  <Code>{`volatile boolean running = true;`}</Code>
                  <p className="text-sm text-gray-600 mt-2">
                    Best for: stop flags, on/off switches
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-700 mb-1">
                    Atomic — safe update for one value
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Many threads change the same number.
                  </p>
                  <Code>{`visits.incrementAndGet();`}</Code>
                  <p className="text-sm text-gray-600 mt-2">
                    Best for: counters, IDs
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                  <h4 className="font-bold text-red-700 mb-1">
                    synchronized — only one thread at a time
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Several steps must stay together.
                  </p>
                  <Code>{`synchronized void transfer(...) {
    from.balance -= amount;
    to.balance += amount;
}`}</Code>
                  <p className="text-sm text-gray-600 mt-2">
                    Best for: money transfer, updating many fields together
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto !mt-4">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Tool
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Simple meaning
                      </th>
                      <th className="border border-red-400 px-3 py-2 text-left">
                        Example
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                        volatile
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        Share the latest value
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        Stop flag
                      </td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                        Atomic
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        Safely change one value
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        Visit counter
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                        synchronized
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        One thread runs a group of steps
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        Money transfer
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="p-4 bg-red-50 border border-red-100 rounded-lg">
                <strong>Quick rule:</strong> use <strong>volatile</strong> for a
                flag, use <strong>atomic</strong> for one shared number, use{" "}
                <strong>synchronized</strong> when many related changes must
                happen together.
              </p>
            </Section>
          </div>

          {/* ========== THREADLOCAL ========== */}
          <div id="thread-local">
            <PartHeading number="4" title="ThreadLocal Variables">
              ThreadLocal gives each thread its own private copy of a value.
            </PartHeading>

            <Section title="What is ThreadLocal?">
              <p>
                A normal shared variable is seen by all threads. A{" "}
                <strong>ThreadLocal</strong> variable is different: each thread
                has its <strong>own separate value</strong>. One thread cannot
                see or change another thread&apos;s ThreadLocal value.
              </p>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="font-semibold text-gray-900 mb-2 text-sm">
                  Simple picture
                </p>
                <p className="text-sm text-gray-700">
                  Think of a locker room. Every person (thread) has their own
                  locker (ThreadLocal value). They use the same locker room
                  name, but each locker holds different things.
                </p>
              </div>
            </Section>

            <Section title="How to use ThreadLocal">
              <Code>{`ThreadLocal<String> userName = new ThreadLocal<>();

// Thread A
userName.set("Alice");
System.out.println(userName.get()); // Alice

// Thread B (different thread)
userName.set("Bob");
System.out.println(userName.get()); // Bob

// Alice's value is still Alice in Thread A
// Bob's value is still Bob in Thread B`}</Code>
              <ul className="list-disc list-inside space-y-1 ml-1">
                <li>
                  <code>set(value)</code> — store a value for the current thread
                </li>
                <li>
                  <code>get()</code> — read this thread&apos;s value
                </li>
                <li>
                  <code>remove()</code> — delete this thread&apos;s value
                </li>
              </ul>
            </Section>

            <Section title="ThreadLocal vs shared variables">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-bold text-red-700 mb-2 text-sm">
                    Shared variable
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>All threads see the same value</li>
                    <li>Needs sync / atomic / volatile when updated</li>
                    <li>Example: visit counter</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-bold text-red-700 mb-2 text-sm">
                    ThreadLocal
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Each thread has its own value</li>
                    <li>No need to synchronize that value</li>
                    <li>Example: current user, request id</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="When to use ThreadLocal">
              <ul className="list-disc list-inside space-y-2 ml-1">
                <li>Store data that belongs to one request/thread only</li>
                <li>Keep a user id or transaction id for the current thread</li>
                <li>Avoid passing the same value through many method calls</li>
              </ul>
              <Code>{`class UserContext {
    private static final ThreadLocal<String> CURRENT_USER =
            new ThreadLocal<>();

    static void setUser(String name) {
        CURRENT_USER.set(name);
    }

    static String getUser() {
        return CURRENT_USER.get();
    }

    static void clear() {
        CURRENT_USER.remove(); // important!
    }
}`}</Code>
              <p className="p-4 bg-amber-50 border border-amber-100 rounded-lg text-sm text-amber-900">
                <strong>Important:</strong> always call <code>remove()</code> when
                the work is finished (especially with thread pools). If you
                forget, an old value may stay and leak into the next task that
                reuses the same thread.
              </p>
            </Section>
          </div>

          {/* ========== FAQ ========== */}
          <div id="faq">
            <PartHeading number="5" title="FAQ" />
            <section className="mb-8 space-y-3">
              {[
                {
                  q: "Is AtomicInteger a primitive type?",
                  a: "No. It is a class that holds an int and updates it safely. The 8 primitives are still byte, short, int, long, float, double, char, and boolean.",
                },
                {
                  q: "Can atomic variables replace synchronized?",
                  a: "Only for simple one-value updates. If you must change several fields together, use synchronized.",
                },
                {
                  q: "Is volatile enough instead of AtomicInteger?",
                  a: "No. volatile only helps other threads see the latest value. It does not make count++ safe.",
                },
                {
                  q: "What is a ThreadLocal variable?",
                  a: "ThreadLocal gives each thread its own private copy of a value. Other threads cannot see it. Always call remove() when finished, especially with thread pools.",
                },
                {
                  q: "Are atomic variables slower?",
                  a: "A little slower than a plain int with one thread. With many threads, they are often safer and cleaner for counters.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group border border-gray-200 rounded-lg p-4 bg-white"
                >
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center gap-3">
                    {item.q}
                    <span className="text-red-600 text-xs group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </section>
          </div>

          {/* Next */}
          <section className="mb-4 p-5 bg-red-50 border border-red-100 rounded-xl">
            <h2 className="text-lg font-bold text-red-700 mb-3">
              Continue Learning
            </h2>
            <ul className="space-y-2">
              {[
                { href: "/java-control-flow", label: "Control Flow Statements" },
                { href: "/java-multithreading", label: "Multithreading in Java" },
                { href: "/java-synchronization", label: "Synchronization in Java" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-red-600 hover:text-red-800 font-medium text-sm sm:text-base hover:underline"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}
