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

const TypeCard = ({ title, badge, points, when, example }) => (
  <article className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100">
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <h4 className="font-bold text-red-700 text-base sm:text-lg">{title}</h4>
      {badge && (
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
          {badge}
        </span>
      )}
    </div>
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-3">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
    {when && (
      <p className="text-sm text-gray-600 mb-3">
        <strong className="text-gray-800">Use when:</strong> {when}
      </p>
    )}
    {example && (
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
          Example
        </p>
        <Code>{example}</Code>
      </div>
    )}
  </article>
);

export default function QueueGuide() {
  const toc = [
    { id: "part-1", label: "1. What is a Queue?" },
    { id: "part-2", label: "2. Queue Methods" },
    { id: "part-3", label: "3. All Queue Types" },
    { id: "part-4", label: "4. Differences & Comparison" },
    { id: "part-5", label: "5. Which Queue to Choose?" },
    { id: "faq", label: "6. FAQ" },
  ];

  return (
    <article className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 pb-8 border-b border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-4 leading-tight">
            Queue in Java — All Types Explained
          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Learn the Java Queue and Deque family in simple English. See every
            common queue type, how they differ, and when to use each one.
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
          <PartHeading number="1" title="What is a Queue?">
            A Queue is a collection that holds elements waiting to be processed.
          </PartHeading>

          <Section title="Simple idea">
            <p>
              Think of people standing in a line at a ticket counter. The first
              person who joins is the first person served. This is called{" "}
              <strong>FIFO</strong> — First In, First Out.
            </p>
            <Code>{`// People join at the back
queue.offer("Alice");
queue.offer("Bob");
queue.offer("Carol");

// First out is Alice
queue.poll(); // Alice`}</Code>
            <p>
              Note: not every queue is strict FIFO. A{" "}
              <strong>PriorityQueue</strong> serves the highest priority item
              first, not always the oldest item.
            </p>
          </Section>

          <Section title="Queue vs Deque">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-700 mb-1">Queue</h4>
                <p className="text-sm text-gray-700">
                  Add at one end, remove from the other end (usually FIFO).
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold text-red-700 mb-1">Deque</h4>
                <p className="text-sm text-gray-700">
                  Double-ended queue. You can add and remove from{" "}
                  <strong>both</strong> ends. Can work as a queue or a stack.
                </p>
              </div>
            </div>
          </Section>
        </div>

        {/* PART 2 */}
        <div id="part-2">
          <PartHeading number="2" title="Important Queue Methods">
            For each action, Java gives two methods. They do the same job, but
            react differently when something goes wrong.
          </PartHeading>

          <Section title="Why two methods for the same action?">
            <p>
              Example: you try to remove an item, but the queue is empty.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-1">
              <li>
                <code>remove()</code> throws an error (exception)
              </li>
              <li>
                <code>poll()</code> returns <code>null</code> — no crash
              </li>
            </ul>
            <p>
              So the second column is not a different feature. It is the{" "}
              <strong>same action</strong>, written in a way that does not throw
              an exception. That is why we call it the safer option for
              beginners.
            </p>
          </Section>

          <Section title="Method pairs">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Action
                    </th>
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Throws exception
                    </th>
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Returns null / false
                    </th>
                    <th className="border border-red-400 px-3 py-2 text-left">
                      Meaning
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Insert",
                      "add(e)",
                      "offer(e)",
                      "Put element into queue",
                    ],
                    [
                      "Remove",
                      "remove()",
                      "poll()",
                      "Take and remove head",
                    ],
                    [
                      "Look",
                      "element()",
                      "peek()",
                      "See head without remove",
                    ],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i % 2 === 0 ? "bg-white" : "bg-red-50/50"}
                    >
                      <td className="border border-red-200 px-3 py-2 font-semibold">
                        {row[0]}
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        <code>{row[1]}</code>
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        <code>{row[2]}</code>
                      </td>
                      <td className="border border-red-200 px-3 py-2">
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <strong>Tip:</strong> prefer <code>offer</code>,{" "}
              <code>poll</code>, and <code>peek</code> when the queue might be
              empty or full. Your program can check the result instead of
              crashing.
            </p>
            <Code>{`Queue<String> q = new LinkedList<>();
q.offer("Task-1");
q.offer("Task-2");

System.out.println(q.peek()); // Task-1 (still in queue)
System.out.println(q.poll()); // Task-1 (removed)
System.out.println(q.poll()); // Task-2
System.out.println(q.poll()); // null (empty)`}</Code>
          </Section>
        </div>

        {/* PART 3 */}
        <div id="part-3">
          <PartHeading number="3" title="All Queue Types in Java">
            Java has many Queue and Deque classes. Some are for one thread. Some
            are for many threads. Some sort by priority.
          </PartHeading>

          <Section title="A) Everyday queues (single-thread friendly)">
            <div className="space-y-4">
              <TypeCard
                title="LinkedList"
                badge="Queue + Deque + List"
                points={[
                  "Can work as a Queue, Deque, or List",
                  "FIFO when used as a Queue",
                  "Uses linked nodes (more memory than ArrayDeque)",
                  "Not thread-safe",
                ]}
                when="You need a queue and also List features, or frequent insert/remove at both ends in older code."
                example={`Queue<String> queue = new LinkedList<>();
queue.offer("A");
queue.offer("B");
queue.offer("C");
System.out.println(queue.poll()); // A`}
              />
              <TypeCard
                title="ArrayDeque"
                badge="Best general Deque"
                points={[
                  "Resizable array implementation",
                  "Faster than LinkedList for most queue/stack use",
                  "No capacity limit (grows as needed)",
                  "Null elements are not allowed",
                  "Not thread-safe",
                ]}
                when="Most queue or stack needs in a single-threaded app. Preferred default Deque."
                example={`Deque<String> deque = new ArrayDeque<>();
deque.offerLast("first");
deque.offerLast("second");
System.out.println(deque.pollFirst()); // first
// Also works as a stack:
deque.push("top");
System.out.println(deque.pop()); // top`}
              />
              <TypeCard
                title="PriorityQueue"
                badge="Not strict FIFO"
                points={[
                  "Orders elements by priority (natural order or Comparator)",
                  "Smallest/highest-priority item comes out first",
                  "Not fully sorted when you iterate",
                  "Not thread-safe",
                  "Null not allowed",
                ]}
                when="Tasks, jobs, or events must be processed by priority, not by arrival time."
                example={`PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(30);
pq.offer(10);
pq.offer(20);
System.out.println(pq.poll()); // 10 (smallest first)
System.out.println(pq.poll()); // 20
System.out.println(pq.poll()); // 30`}
              />
            </div>
          </Section>

          <Section title="How to define priority in PriorityQueue">
            <p>
              Priority means: which item comes out first. You can define it in
              three simple ways.
            </p>

            <h4 className="font-bold text-gray-900 !mt-2">
              1. Default priority (natural order)
            </h4>
            <p>
              For numbers, the <strong>smallest</strong> value has the highest
              priority. For strings, alphabetical order is used.
            </p>
            <Code>{`PriorityQueue<Integer> pq = new PriorityQueue<>();
pq.offer(5);
pq.offer(1);
pq.offer(3);
System.out.println(pq.poll()); // 1  (smallest first)`}</Code>

            <h4 className="font-bold text-gray-900 !mt-4">
              2. Reverse priority (largest first)
            </h4>
            <p>
              Use <code>Comparator.reverseOrder()</code> when a bigger number
              should come out first.
            </p>
            <Code>{`PriorityQueue<Integer> pq =
        new PriorityQueue<>(Comparator.reverseOrder());

pq.offer(5);
pq.offer(1);
pq.offer(3);
System.out.println(pq.poll()); // 5  (largest first)`}</Code>

            <h4 className="font-bold text-gray-900 !mt-4">
              3. Custom priority with your own class
            </h4>
            <p>
              For real apps, store objects and decide priority with a field (for
              example: 1 = high, 2 = medium, 3 = low).
            </p>
            <Code>{`class Task {
    String name;
    int priority; // smaller number = higher priority

    Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
}

PriorityQueue<Task> tasks = new PriorityQueue<>(
    (a, b) -> a.priority - b.priority  // compare by priority
);

tasks.offer(new Task("Send email", 3));
tasks.offer(new Task("Fix bug", 1));     // highest priority
tasks.offer(new Task("Write report", 2));

System.out.println(tasks.poll().name); // Fix bug
System.out.println(tasks.poll().name); // Write report
System.out.println(tasks.poll().name); // Send email`}</Code>

            <p className="p-4 bg-red-50 border border-red-100 rounded-lg">
              <strong>Simple rule:</strong> in{" "}
              <code>(a, b) -&gt; a.priority - b.priority</code>, the smaller
              priority number comes out first. To reverse it, use{" "}
              <code>(a, b) -&gt; b.priority - a.priority</code>.
            </p>
          </Section>

          <Section title="B) Blocking queues (multi-thread / producer-consumer)">
            <p>
              A <strong>BlockingQueue</strong> can wait when it is empty (no
              item to take) or full (no space to add). Perfect for one thread
              producing work and another consuming it.
            </p>
            <div className="space-y-4">
              <TypeCard
                title="ArrayBlockingQueue"
                badge="Fixed size"
                points={[
                  "Array-based BlockingQueue",
                  "Has a fixed capacity you set at creation",
                  "Fairness option available",
                  "Thread-safe",
                ]}
                when="You want a bounded buffer (for example, max 100 tasks waiting)."
                example={`BlockingQueue<String> jobs = new ArrayBlockingQueue<>(3);
jobs.put("Job-1"); // waits if queue is full
jobs.put("Job-2");
String job = jobs.take(); // waits if empty → Job-1
System.out.println(job);`}
              />
              <TypeCard
                title="LinkedBlockingQueue"
                badge="Optional bound"
                points={[
                  "Linked-node BlockingQueue",
                  "Can be bounded or almost unbounded",
                  "Good for producer-consumer pipelines",
                  "Thread-safe",
                ]}
                when="Default choice for many producer-consumer tasks."
                example={`BlockingQueue<String> queue = new LinkedBlockingQueue<>();
queue.put("Task-A");
queue.put("Task-B");
System.out.println(queue.take()); // Task-A
System.out.println(queue.size()); // 1`}
              />
              <TypeCard
                title="PriorityBlockingQueue"
                badge="Priority + blocking"
                points={[
                  "Like PriorityQueue, but thread-safe and blocking",
                  "Unbounded (grows with memory)",
                  "Orders by priority",
                ]}
                when="Many threads add jobs, and workers must take highest priority first."
                example={`BlockingQueue<Integer> pbq = new PriorityBlockingQueue<>();
pbq.put(50);
pbq.put(10);
pbq.put(30);
System.out.println(pbq.take()); // 10
System.out.println(pbq.take()); // 30`}
              />
              <TypeCard
                title="DelayQueue"
                badge="Time-based"
                points={[
                  "Elements become available only after a delay",
                  "Implements Delayed interface",
                  "Thread-safe",
                ]}
                when="Scheduled tasks, retries, timeouts, or delayed notifications."
                example={`DelayQueue<DelayedTask> dq = new DelayQueue<>();
dq.put(new DelayedTask("Send email", 3)); // ready after 3 seconds
DelayedTask task = dq.take(); // waits until delay ends
System.out.println(task.getName()); // Send email`}
              />
              <article className="p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h4 className="font-bold text-red-700 text-base sm:text-lg">
                    SynchronousQueue
                  </h4>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
                    No storage
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-800 mb-3 leading-relaxed">
                  A normal queue is like a shelf: you put items on it, and someone
                  takes them later. A <strong>SynchronousQueue</strong> has{" "}
                  <strong>no shelf</strong>. The giver and the taker must meet at
                  the same time.
                </p>

                <p className="p-3 bg-amber-50 border border-amber-100 rounded-lg mb-3 text-sm text-amber-900">
                  <strong>Important:</strong> SynchronousQueue needs{" "}
                  <strong>at least two threads</strong> — one to{" "}
                  <code>put()</code> and one to <code>take()</code>. With only one
                  thread, <code>put()</code> waits forever because nobody is there
                  to take the item.
                </p>

                <div className="p-3 bg-white rounded-lg border border-gray-100 mb-3 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900 mb-1">
                    Simple picture
                  </p>
                  <p>
                    Person A wants to give a package. Person B wants to receive
                    it. There is nowhere to leave the package. So A waits until B
                    arrives, then hands it over directly. Both people (threads)
                    must be present.
                  </p>
                </div>

                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mb-3">
                  <li>
                    It does <strong>not</strong> store items (size is always 0)
                  </li>
                  <li>
                    Needs <strong>multithreading</strong> (producer thread +
                    consumer thread)
                  </li>
                  <li>
                    <code>put()</code> waits until another thread calls{" "}
                    <code>take()</code>
                  </li>
                  <li>
                    <code>take()</code> waits until another thread calls{" "}
                    <code>put()</code>
                  </li>
                  <li>One item is passed straight from one thread to another</li>
                </ul>

                <p className="text-sm text-gray-600 mb-3">
                  <strong className="text-gray-800">Use when:</strong> you want a
                  direct hand-off between threads, with no waiting list of items.
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Example
                </p>
                <Code>{`BlockingQueue<String> handoff = new SynchronousQueue<>();

// Thread 1: gives the item (waits for a taker)
new Thread(() -> {
    try {
        System.out.println("Giving item...");
        handoff.put("Hello");  // waits here until take() happens
        System.out.println("Item given");
    } catch (InterruptedException e) {}
}).start();

// Thread 2: takes the item (waits for a giver)
String msg = handoff.take();   // waits here until put() happens
System.out.println("Got: " + msg); // Got: Hello`}</Code>
              </article>
              <TypeCard
                title="LinkedTransferQueue"
                badge="Transfer support"
                points={[
                  "High-performance concurrent queue",
                  "Supports transfer() — try to hand item directly to a waiting consumer",
                  "Unbounded",
                ]}
                when="Advanced producer-consumer designs that need transfer semantics."
                example={`LinkedTransferQueue<String> tq = new LinkedTransferQueue<>();
tq.offer("buffered-item");     // normal offer
boolean waiting = tq.hasWaitingConsumer();
tq.transfer("direct-item");    // waits for a consumer
System.out.println(tq.poll()); // buffered-item (if still present)`}
              />
            </div>
          </Section>

          <Section title="C) Concurrent non-blocking queues">
            <p>
              These queues are safe for many threads, but they{" "}
              <strong>do not wait</strong>. If the queue is empty,{" "}
              <code>poll()</code> returns <code>null</code> right away. The
              thread continues — it does not sleep or block.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <h4 className="font-bold text-red-700 mb-2 text-sm">
                  Blocking queue
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>
                    Empty? <code>take()</code> waits
                  </li>
                  <li>
                    Full? <code>put()</code> waits
                  </li>
                  <li>Good when a worker must wait for the next job</li>
                  <li>
                    Example: <code>ArrayBlockingQueue</code>
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100">
                <h4 className="font-bold text-red-700 mb-2 text-sm">
                  Concurrent non-blocking queue
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>
                    Empty? <code>poll()</code> returns <code>null</code> now
                  </li>
                  <li>No waiting — thread keeps running</li>
                  <li>Good when you check the queue and move on</li>
                  <li>
                    Example: <code>ConcurrentLinkedQueue</code>
                  </li>
                </ul>
              </div>
            </div>

            <p className="p-4 bg-red-50 border border-red-100 rounded-lg text-sm">
              <strong>Simple difference:</strong> blocking = wait for an item.
              Non-blocking = try now, get <code>null</code> if nothing is there.
              Both can be used by many threads safely.
            </p>

            <div className="space-y-4">
              <TypeCard
                title="ConcurrentLinkedQueue"
                badge="Lock-free Queue"
                points={[
                  "Thread-safe, non-blocking",
                  "Uses CAS (compare-and-swap), not heavy locks",
                  "Unbounded",
                  "Does not block when empty — poll() returns null",
                ]}
                when="Many threads share a queue and you do not need waiting/blocking."
                example={`ConcurrentLinkedQueue<String> q = new ConcurrentLinkedQueue<>();
q.offer("A");
q.offer("B");
System.out.println(q.poll()); // A
System.out.println(q.poll()); // B
System.out.println(q.poll()); // null (empty, no waiting)`}
              />
              <TypeCard
                title="ConcurrentLinkedDeque"
                badge="Lock-free Deque"
                points={[
                  "Thread-safe double-ended queue",
                  "Add/remove from both ends concurrently",
                  "Non-blocking",
                ]}
                when="Concurrent work-stealing style designs or both-end access from many threads."
                example={`ConcurrentLinkedDeque<String> dq = new ConcurrentLinkedDeque<>();
dq.offerFirst("front");
dq.offerLast("back");
System.out.println(dq.pollFirst()); // front
System.out.println(dq.pollLast());  // back`}
              />
            </div>
          </Section>

          <Section title="D) Blocking deques">
            <div className="space-y-4">
              <TypeCard
                title="LinkedBlockingDeque"
                badge="Blocking Deque"
                points={[
                  "Thread-safe Deque with optional capacity",
                  "Supports blocking put/take from both ends",
                  "Useful for work-stealing and dual-end buffering",
                ]}
                when="Producer-consumer where both ends of the queue are used."
                example={`LinkedBlockingDeque<String> deque = new LinkedBlockingDeque<>(5);
deque.putFirst("left");
deque.putLast("right");
System.out.println(deque.takeFirst()); // left
System.out.println(deque.takeLast());  // right`}
              />
            </div>
          </Section>

          <Section title="E) Older / special types">
            <div className="space-y-4">
              <TypeCard
                title="Stack (legacy)"
                badge="Prefer ArrayDeque"
                points={[
                  "LIFO (Last In, First Out)",
                  "Extends Vector (synchronized, older design)",
                  "Not recommended for new code",
                ]}
                when="Legacy code only. For new apps, use ArrayDeque as a stack."
              />
              <TypeCard
                title="PriorityQueue with Comparator"
                badge="Custom order"
                points={[
                  "You decide the priority rule",
                  "Example: longer string first, or higher score first",
                ]}
                when="Natural order is not what you need."
              />
            </div>
            <Code>{`// Custom priority: larger number first
PriorityQueue<Integer> maxHeap =
    new PriorityQueue<>(Comparator.reverseOrder());

maxHeap.offer(3);
maxHeap.offer(9);
maxHeap.offer(1);
System.out.println(maxHeap.poll()); // 9`}</Code>
          </Section>
        </div>

        {/* PART 4 */}
        <div id="part-4">
          <PartHeading number="4" title="Differences — Quick Comparison">
            Use this table to see how the main queue types differ.
          </PartHeading>

          <Section title="Comparison table">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-red-400 px-2 py-2 text-left">
                      Type
                    </th>
                    <th className="border border-red-400 px-2 py-2 text-left">
                      Order
                    </th>
                    <th className="border border-red-400 px-2 py-2 text-left">
                      Thread-safe?
                    </th>
                    <th className="border border-red-400 px-2 py-2 text-left">
                      Blocking?
                    </th>
                    <th className="border border-red-400 px-2 py-2 text-left">
                      Bounded?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["LinkedList", "FIFO", "No", "No", "No"],
                    ["ArrayDeque", "FIFO / LIFO", "No", "No", "No"],
                    ["PriorityQueue", "By priority", "No", "No", "No"],
                    ["ArrayBlockingQueue", "FIFO", "Yes", "Yes", "Yes (fixed)"],
                    [
                      "LinkedBlockingQueue",
                      "FIFO",
                      "Yes",
                      "Yes",
                      "Optional",
                    ],
                    [
                      "PriorityBlockingQueue",
                      "By priority",
                      "Yes",
                      "Yes",
                      "No",
                    ],
                    ["DelayQueue", "By delay time", "Yes", "Yes", "No"],
                    ["SynchronousQueue", "Hand-off", "Yes", "Yes", "0 capacity"],
                    [
                      "ConcurrentLinkedQueue",
                      "FIFO",
                      "Yes",
                      "No",
                      "No",
                    ],
                    [
                      "LinkedBlockingDeque",
                      "Both ends",
                      "Yes",
                      "Yes",
                      "Optional",
                    ],
                  ].map((row, i) => (
                    <tr
                      key={row[0]}
                      className={i % 2 === 0 ? "bg-white" : "bg-red-50/50"}
                    >
                      {row.map((cell, idx) => (
                        <td
                          key={idx}
                          className={`border border-red-200 px-2 py-2 ${
                            idx === 0 ? "font-semibold text-red-700" : ""
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>

        {/* PART 5 */}
        <div id="part-5">
          <PartHeading number="5" title="Which Queue Should You Choose?">
            Start with your use case, then pick the matching type.
          </PartHeading>

          <Section title="Decision guide">
            <div className="space-y-3">
              {[
                {
                  need: "Simple FIFO queue (one thread)",
                  pick: "ArrayDeque",
                },
                {
                  need: "Stack (LIFO) in new code",
                  pick: "ArrayDeque (push/pop)",
                },
                {
                  need: "Process by priority",
                  pick: "PriorityQueue",
                },
                {
                  need: "Producer + consumer with max size",
                  pick: "ArrayBlockingQueue",
                },
                {
                  need: "Producer + consumer, flexible size",
                  pick: "LinkedBlockingQueue",
                },
                {
                  need: "Priority jobs from many threads",
                  pick: "PriorityBlockingQueue",
                },
                {
                  need: "Run task after a delay",
                  pick: "DelayQueue",
                },
                {
                  need: "Many threads, no waiting needed",
                  pick: "ConcurrentLinkedQueue",
                },
                {
                  need: "Direct hand-off, no buffer",
                  pick: "SynchronousQueue",
                },
              ].map((item) => (
                <div
                  key={item.need}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <span className="text-sm text-gray-700">{item.need}</span>
                  <span className="text-sm font-bold text-red-700">
                    → {item.pick}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Complete beginner example">
            <Code>{`import java.util.ArrayDeque;
import java.util.Queue;

public class QueueDemo {
    public static void main(String[] args) {
        Queue<String> printJobs = new ArrayDeque<>();

        printJobs.offer("Invoice.pdf");
        printJobs.offer("Report.docx");
        printJobs.offer("Photo.png");

        while (!printJobs.isEmpty()) {
            String job = printJobs.poll();
            System.out.println("Printing: " + job);
        }
    }
}`}</Code>
          </Section>
        </div>

        {/* FAQ */}
        <div id="faq">
          <PartHeading number="6" title="FAQ" />
          <section className="mb-8 space-y-3">
            {[
              {
                q: "Is LinkedList still good as a Queue?",
                a: "It works, but ArrayDeque is usually better for queue and stack use. Prefer ArrayDeque in new code unless you need List features.",
              },
              {
                q: "Why does PriorityQueue not print in sorted order?",
                a: "PriorityQueue only guarantees the head is the next priority item. Iterating the whole queue is not a full sorted list.",
              },
              {
                q: "What is the difference between poll() and remove()?",
                a: "Both remove the head. poll() returns null if empty. remove() throws an exception if empty.",
              },
              {
                q: "When do I need a BlockingQueue?",
                a: "When one thread creates work and another thread consumes it, and you want waiting when the queue is empty or full.",
              },
              {
                q: "Can Queue store null?",
                a: "Some implementations allow null (like LinkedList). Many do not (ArrayDeque, PriorityQueue, most concurrent queues). Avoid null in queues.",
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
              {
                href: "/java-collections-framework",
                label: "Collections Framework Overview",
              },
              {
                href: "/java-collections-framework/list",
                label: "List in Java",
              },
              {
                href: "/java-multithreading",
                label: "Multithreading in Java",
              },
              {
                href: "/java-synchronization",
                label: "Synchronization in Java",
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
