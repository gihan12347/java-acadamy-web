export default function QueuePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        Java Queue Interface
      </h1>

      <p className="mb-4">
        The Queue interface in Java is used to hold elements before processing.
        It follows the FIFO (First In, First Out) principle.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        Common Implementations
      </h2>

      <ul className="list-disc pl-6 mb-4">
        <li>LinkedList</li>
        <li>PriorityQueue</li>
        <li>ArrayDeque</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">
        Basic Example
      </h2>

      <pre className="bg-gray-100 p-4 rounded">
{`Queue<String> queue = new LinkedList<>();
queue.add("A");
queue.add("B");
queue.add("C");

System.out.println(queue.poll()); // A`}
      </pre>
    </main>
  );
}
