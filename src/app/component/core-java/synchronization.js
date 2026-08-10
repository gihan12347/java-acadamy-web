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

export default function JavaSynchronization() {
  const toc = [
    { id: "part-1", label: "1. What is Synchronization?" },
    { id: "part-2", label: "2. How to Use synchronized" },
    { id: "part-3", label: "3. Avoid Performance Problems" },
    { id: "faq", label: "4. FAQ" },
  ];

  return (
    <article className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 pb-8 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 leading-tight">
            Synchronization in Java
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Learn how to keep shared data safe when many threads run at the same
            time — and how to do it without slowing your program.
          </p>
        </header>

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

        {/* PART 1 */}
        <div id="part-1">
          <PartHeading number="1" title="What is Synchronization?">
            Synchronization means: only one thread can use a shared piece of
            code or data at a time.
          </PartHeading>

          <Section title="Why do we need it?">
            <p>
              When two threads change the same data at the same time, the result
              can be wrong. This is called a <strong>race condition</strong>.
            </p>
            <Code>{`int balance = 100;

// Thread A: withdraw 60
// Thread B: withdraw 60
// Both may think balance is still 100
// Final balance can become wrong`}</Code>
            <p>
              Synchronization fixes this by letting only{" "}
              <strong>one thread</strong> enter the important code at a time.
            </p>
          </Section>

          <Section title="Simple idea">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <p className="mb-2">
                Think of a bathroom with a lock on the door:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>One person goes in and locks the door</li>
                <li>Others wait outside</li>
                <li>When the person leaves, the next person can enter</li>
              </ul>
              <p className="mt-3 text-sm text-gray-700">
                In Java, <code>synchronized</code> is that lock.
              </p>
            </div>
          </Section>
        </div>

        {/* PART 2 */}
        <div id="part-2">
          <PartHeading number="2" title="How to Use synchronized">
            Java gives you two common ways: a synchronized method, or a
            synchronized block.
          </PartHeading>

          <Section title="1. Synchronized method">
            <p>
              Put <code>synchronized</code> on a method. Only one thread can run
              that method on the same object at a time.
            </p>
            <Code>{`class BankAccount {
    private int balance = 0;

    public synchronized void deposit(int amount) {
        balance += amount;
    }

    public synchronized int getBalance() {
        return balance;
    }
}`}</Code>
            <p>
              Good when the <strong>whole method</strong> must be protected.
            </p>
          </Section>

          <Section title="2. Synchronized block (better for performance)">
            <p>
              Lock only the small part that needs protection. Leave the rest of
              the method free.
            </p>
            <Code>{`class OrderService {
    private final Object lock = new Object();
    private int orderCount = 0;

    public void placeOrder(String item) {
        // This part does NOT need a lock
        System.out.println("Preparing order for " + item);

        // Only this part is locked
        synchronized (lock) {
            orderCount++;
        }

        // This part is free again
        System.out.println("Order ready");
    }
}`}</Code>
            <p>
              This is usually better than locking a whole method, because other
              threads can still do the work that does not touch shared data.
            </p>
          </Section>

          <Section title="3. Static synchronization">
            <p>
              Normal <code>synchronized</code> locks one object. Static
              synchronization locks the <strong>whole class</strong>, because
              static data is shared by every object of that class.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-bold text-red-700 mb-2 text-sm">
                  Normal synchronized
                </h4>
                <p className="text-sm text-gray-700">
                  Protects data that belongs to <strong>one object</strong>.
                  Example: one bank account&apos;s balance.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="font-bold text-red-700 mb-2 text-sm">
                  Static synchronized
                </h4>
                <p className="text-sm text-gray-700">
                  Protects data shared by <strong>all objects</strong>. Example:
                  a shared ID counter for the whole app.
                </p>
              </div>
            </div>
            <p>
              Example: every new user needs a unique ID. That counter is{" "}
              <code>static</code>, so all threads must take turns updating it.
            </p>
            <Code>{`class IdGenerator {
    private static int nextId = 1;

    // Only one thread can run this at a time
    // for the whole IdGenerator class
    public static synchronized int next() {
        return nextId++;
    }
}`}</Code>
            <p>
              You can also write it like this:
            </p>
            <Code>{`public static int next() {
    synchronized (IdGenerator.class) {
        return nextId++;
    }
}`}</Code>
            <p className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <strong>Simple rule:</strong> use static synchronization when the
              shared value belongs to the class (static), not to one object.
            </p>
          </Section>

          <Section title="synchronized method vs block">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Style
                    </th>
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Meaning
                    </th>
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Best when
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                      synchronized method
                    </td>
                    <td className="border border-red-200 px-3 py-2">
                      Locks the whole method
                    </td>
                    <td className="border border-red-200 px-3 py-2">
                      Method is short and all of it needs safety
                    </td>
                  </tr>
                  <tr className="bg-red-50/50">
                    <td className="border border-red-200 px-3 py-2 font-semibold text-red-700">
                      synchronized block
                    </td>
                    <td className="border border-red-200 px-3 py-2">
                      Locks only a small part
                    </td>
                    <td className="border border-red-200 px-3 py-2">
                      You want better speed and less waiting
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>
        </div>

        {/* PART 3 - Performance */}
        <div id="part-3">
          <PartHeading number="3" title="Use Synchronization Without Performance Issues">
            Synchronization is useful, but too much locking can make your app
            slow. Follow these rules.
          </PartHeading>

          <Section title="Rule 1: Keep the locked part small">
            <p>
              Only lock the lines that touch shared data. Do not put long work
              inside synchronized.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                <h4 className="font-bold text-amber-800 mb-2 text-sm">
                  Slow (bad)
                </h4>
                <Code>{`synchronized (lock) {
    // network call
    // file write
    // heavy loop
    balance += amount;
}`}</Code>
              </div>
              <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                <h4 className="font-bold text-green-800 mb-2 text-sm">
                  Faster (good)
                </h4>
                <Code>{`// do slow work outside
String result = callApi();

synchronized (lock) {
    balance += amount;
}`}</Code>
              </div>
            </div>
            <p>
              Other threads should not wait while one thread does network calls,
              file writes, or long calculations.
            </p>
          </Section>

          <Section title="Rule 2: Prefer synchronized blocks over big methods">
            <p>
              If a method has 50 lines, but only 2 lines need a lock, do not make
              the whole method synchronized. Use a synchronized block for those
              2 lines.
            </p>
          </Section>

          <Section title="Rule 3: Do not use one lock for everything">
            <p>
              If you lock the whole object for every action, threads wait too
              often. Use separate locks for separate data when it is safe.
            </p>
            <Code>{`class Store {
    private final Object ordersLock = new Object();
    private final Object usersLock = new Object();

    private int orders = 0;
    private int users = 0;

    public void addOrder() {
        synchronized (ordersLock) {
            orders++;
        }
    }

    public void addUser() {
        synchronized (usersLock) {
            users++;
        }
    }
}`}</Code>
            <p>
              Now one thread can add an order while another thread adds a user.
              They do not block each other.
            </p>
          </Section>

          <Section title="Rule 4: Avoid nested locks (deadlock risk)">
            <p>
              If Thread A locks Lock1 and waits for Lock2, while Thread B locks
              Lock2 and waits for Lock1, both wait forever. This is a{" "}
              <strong>deadlock</strong>.
            </p>
            <p className="p-4 bg-red-50 border border-red-100 rounded-lg">
              Tip: if you must use two locks, always take them in the{" "}
              <strong>same order</strong> in every place.
            </p>
          </Section>

          <Section title="Rule 5: Prefer Atomic or concurrent tools when possible">
            <p>
              For simple counters, you may not need synchronized at all. Use
              atomic classes instead.
            </p>
            <Code>{`import java.util.concurrent.atomic.AtomicInteger;

AtomicInteger visits = new AtomicInteger(0);
visits.incrementAndGet(); // safe and often faster for simple counts`}</Code>
            <p>
              For maps and lists shared by many threads, prefer:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                <code>ConcurrentHashMap</code> instead of synchronizing a normal{" "}
                <code>HashMap</code>
              </li>
              <li>
                <code>CopyOnWriteArrayList</code> when reads are many and writes
                are few
              </li>
            </ul>
            <p>
              Learn more in{" "}
              <Link
                href="/java-variables-data-types"
                className="text-red-600 font-medium hover:underline"
              >
                Atomic Variables
              </Link>{" "}
              and{" "}
              <Link
                href="/java-multithreading"
                className="text-red-600 font-medium hover:underline"
              >
                Multithreading
              </Link>
              .
            </p>
          </Section>

          <Section title="Rule 6: Do not synchronize on public objects">
            <p>
              Avoid <code>synchronized (this)</code> when outside code can also
              lock on the same object. Prefer a private lock object.
            </p>
            <Code>{`// Better
private final Object lock = new Object();

synchronized (lock) {
    // critical code
}`}</Code>
          </Section>

          <Section title="Quick checklist for good performance">
            <ul className="list-disc list-inside space-y-2 ml-1">
              <li>Lock only shared data, not the whole method if possible</li>
              <li>Keep synchronized blocks short and fast</li>
              <li>Never do I/O or slow calls inside a lock</li>
              <li>Use separate locks for unrelated data</li>
              <li>
                Prefer <code>AtomicInteger</code> / concurrent collections for
                simple cases
              </li>
              <li>Avoid nested locks when you can</li>
            </ul>
            <p className="p-4 bg-red-50 border border-red-100 rounded-lg mt-2">
              <strong>Remember:</strong> Synchronization should protect data. It
              should not become a long waiting line for every thread.
            </p>
          </Section>
        </div>

        {/* FAQ */}
        <div id="faq">
          <PartHeading number="4" title="FAQ" />
          <section className="mb-8 space-y-3">
            {[
              {
                q: "Is synchronized always slow?",
                a: "No. A short synchronized block is usually fine. It becomes slow when the locked part is long, or when too many threads wait on the same lock.",
              },
              {
                q: "Should I make every method synchronized?",
                a: "No. Only protect the code that changes shared data. Extra locks create extra waiting.",
              },
              {
                q: "When should I use AtomicInteger instead?",
                a: "Use AtomicInteger for simple counters and flags. Use synchronized when you need to update more than one related field together.",
              },
              {
                q: "What is the safest beginner pattern?",
                a: "Use a private final Object lock, put only a few lines inside synchronized (lock), and keep slow work outside the lock.",
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

        <section className="mb-4 p-5 bg-red-50 border border-red-100 rounded-xl">
          <h2 className="text-lg font-bold text-red-700 mb-3">
            Continue Learning
          </h2>
          <ul className="space-y-2">
            {[
              { href: "/java-multithreading", label: "Multithreading in Java" },
              {
                href: "/java-variables-data-types",
                label: "Variables, Atomic & volatile",
              },
              {
                href: "/java-collections-framework",
                label: "Collections Framework",
              },
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
  );
}
