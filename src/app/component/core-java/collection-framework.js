export default function JavaCollectionFramework() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
          Java Collection Framework Tutorial (JCF) – Complete Guide with Examples
        </h1>

        {/* Introduction */}
        <section className="mb-8 border-l-4 border-red-600 pl-6">
          <p className="text-gray-800 mb-4">
            The <strong>Java Collection Framework (JCF)</strong> is a core part of
            Java that provides a unified architecture to store, manage, and
            manipulate groups of objects. It is part of the{" "}
            <strong>java.util</strong> package and includes interfaces, classes,
            and algorithms to work efficiently with data structures in Java.
          </p>
          <p className="text-gray-800">
            In this complete Java Collection Framework tutorial, you will learn
            the hierarchy, core interfaces, implementations, and commonly used
            algorithms with simple explanations for beginners and interview
            preparation.
          </p>
        </section>

        {/* Why Use Collection Framework */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Why Use Java Collection Framework?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
            <li>Reduces Java development time using ready-made data structures</li>
            <li>Improves performance with optimized collection classes</li>
            <li>Provides consistent APIs for List, Set, Queue, and Map</li>
            <li>Supports built-in algorithms like sorting and searching</li>
            <li>Makes Java code more reusable, readable, and maintainable</li>
          </ul>
        </section>

        {/* Hierarchy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Java Collection Framework Hierarchy
          </h2>

          <div className="bg-white rounded-2xl p-10 mb-10">
            <img
              src="/images/hierarchy-of-collection-framework-in-java.jpg"
              alt="Java Collection Framework hierarchy diagram showing List, Set, Queue, Map interfaces"
              className="max-w-full h-auto mx-auto"
              loading="lazy"
            />
          </div>

          <h3 className="text-xl font-bold text-red-700 mb-4">
            Core Interfaces in Java Collection Framework
          </h3>

          {/* Collection */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              Collection Interface
            </h4>
            <p className="text-gray-800">
              Root interface of the Java Collection Framework for List, Set, and Queue.
            </p>
          </div>

          {/* List */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              List Interface
            </h4>
            <p className="text-gray-800">
              Ordered collection that allows duplicate elements and maintains insertion order.
            </p>
          </div>

          {/* Set */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              Set Interface
            </h4>
            <p className="text-gray-800 mb-2">
              Collection that stores unique elements and does not allow duplicates.
            </p>
            <p className="text-gray-800 text-sm italic">
              LinkedHashSet maintains insertion order while keeping elements unique.
            </p>
          </div>

          {/* Queue */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              Queue Interface
            </h4>
            <p className="text-gray-800">
              Used for FIFO (First In, First Out) data structures.
            </p>
          </div>

          {/* Deque */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              Deque Interface
            </h4>
            <p className="text-gray-800">
              Double-ended queue that allows insertion and removal from both ends.
            </p>
          </div>

          {/* Map */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              Map Interface
            </h4>
            <p className="text-gray-800">
              Stores data as key-value pairs and is not a subtype of Collection.
            </p>
          </div>
        </section>

        {/* Core Implementations */}
        <section className="mb-8 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Core Java Collection Framework Implementations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/java-collections-framework/list" className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100">
              <h3 className="text-lg font-bold text-red-700">List Implementations</h3>
              <p className="text-gray-600 text-sm mt-1">
                ArrayList, LinkedList, Vector
              </p>
            </a>

            <a href="/java-collections-framework/set" className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100">
              <h3 className="text-lg font-bold text-red-700">Set Implementations</h3>
              <p className="text-gray-600 text-sm mt-1">
                HashSet, LinkedHashSet, TreeSet
              </p>
            </a>

            <a href="/java-collections-framework/map" className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100">
              <h3 className="text-lg font-bold text-red-700">Map Implementations</h3>
              <p className="text-gray-600 text-sm mt-1">
                HashMap, LinkedHashMap, TreeMap
              </p>
            </a>

            <a href="/java-collections-framework/queue" className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100">
              <h3 className="text-lg font-bold text-red-700">Queue & Deque</h3>
              <p className="text-gray-600 text-sm mt-1">
                PriorityQueue, ArrayDeque, LinkedList
              </p>
            </a>
          </div>
        </section>

        {/* FAQ Section for */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Java Collection Framework – Frequently Asked Questions (FAQ)
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-red-700">
                What is Java Collection Framework?
              </h3>
              <p className="text-gray-800">
                Java Collection Framework is a set of interfaces and classes used to store and manipulate groups of objects in Java efficiently.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-red-700">
                What are the main interfaces in JCF?
              </h3>
              <p className="text-gray-800">
                The main interfaces are List, Set, Queue, Deque, and Map.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-red-700">
                What is the difference between List and Set in Java?
              </h3>
              <p className="text-gray-800">
                List allows duplicate elements and maintains order, while Set stores only unique elements.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-8 border-t pt-6">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Summary: Java Collection Framework
          </h2>
          <p className="text-gray-800">
            The Java Collection Framework is essential for every Java developer.
            It provides powerful data structures, consistent APIs, and built-in
            algorithms that make Java programming easier, faster, and more
            efficient.
          </p>
        </section>

      </div>
    </div>
  );
}
