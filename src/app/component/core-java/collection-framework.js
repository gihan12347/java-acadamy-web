export default function JavaCollectionFramework() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
          Java Collection Framework (JCF)
        </h1>

        {/* Introduction */}
        <section className="mb-8 border-l-4 border-red-600 pl-6">
          <p className="text-gray-800 mb-4">
            The Java Collection Framework is a powerful set of classes and
            interfaces that provide a standard way to store, manage, and
            manipulate groups of objects in Java. It is part of the java.util
            package and offers ready-to-use data structures and algorithms,
            making development faster and more efficient.
          </p>
        </section>

        {/* Why Use Collection Framework */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Why Use the Collection Framework?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
            <li>Reduces development time with built-in data structures</li>
            <li>Improves performance with optimized classes</li>
            <li>
              Provides consistent APIs across different types of collections
            </li>
            <li>Supports algorithms like sorting, searching, and shuffling</li>
            <li>Enhances code reusability and readability</li>
          </ul>
        </section>

        {/* Hierarchy Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Hierarchy of the Collection Framework
          </h2>

          <div className="bg-white rounded-2xl p-10 mb-10  ">
            <img
              src="/images/hierarchy-of-collection-framework-in-java.jpg"
              alt="Control Flow Overview"
              className="max-w-full h-auto mx-auto "
            />
          </div>
          <h3 className="text-xl font-bold text-red-700 mb-4">1. Interfaces</h3>
          <p className="text-gray-800 mb-6">
            The backbone of the framework—defines abstract data types.
          </p>

          {/* Collection */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">Collection</h4>
            <p className="text-gray-800">Root interface for most collections</p>
          </div>

          {/* List */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">List</h4>
            <p className="text-gray-800">
              Ordered collection allowing duplicate elements (ordered means
              maintain insertion order)
            </p>
          </div>

          {/* Set */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">Set</h4>
            <p className="text-gray-800 mb-2">
              Unordered collection of unique elements
            </p>
            <p className="text-gray-800 text-sm italic">
              Note: Set has LinkedHashSet which still maintains unique elements
              BUT maintains insertion order using a linked list internally. It
              acts like a mix of HashSet (uniqueness + fast lookup) and Linked
              list (keeps order).
            </p>
          </div>

          {/* SortedSet / NavigableSet */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              SortedSet / NavigableSet
            </h4>
            <p className="text-gray-800">Sorted versions of Set</p>
          </div>

          {/* Queue */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">Queue</h4>
            <p className="text-gray-800">
              For FIFO structures. FIFO means First In, First Out. The first
              item added is the first one removed.
            </p>
          </div>

          {/* Deque */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">Deque</h4>
            <p className="text-gray-800">
              Double-ended queue. You can add or remove items from both the
              front and the back. More flexible than a regular queue.
            </p>
          </div>

          {/* Map */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">Map</h4>
            <p className="text-gray-800">
              Key-value based collections (not under Collection interface)
            </p>
          </div>

          {/* SortedMap / NavigableMap */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h4 className="text-lg font-bold text-red-700 mb-3">
              SortedMap / NavigableMap
            </h4>
            <p className="text-gray-800">Sorted versions of Map</p>
          </div>
        </section>

        {/* Core Implementations Links */}
        <section className="mb-8  p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Core Implementations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/java-collections-framework/list"
              className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100 hover:border-red-500 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-red-700">
                List Explanation
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                ArrayList, LinkedList, Vector
              </p>
            </a>

            <a
              href="/java-collections-framework/set"
              className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100 hover:border-red-500 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-red-700">
                Set Exception
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                HashSet, LinkedHashSet, TreeSet
              </p>
            </a>

            <a
              href="/java-collections-framework/map"
              className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100 hover:border-red-500 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-red-700">
                Map Implementations
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                HashMap, LinkedHashMap, TreeMap
              </p>
            </a>

            <a
              href="/java-collections-framework/queue"
              className="block p-4 bg-white border-2 border-red-300 rounded-lg hover:bg-red-100 hover:border-red-500 transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-red-700">Queue & Deque</h3>
              <p className="text-gray-600 text-sm mt-1">
                PriorityQueue, ArrayDeque, LinkedList
              </p>
            </a>
          </div>
        </section>

        {/* Common Algorithms */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Common Algorithms
          </h2>
          <p className="text-gray-800 mb-6">
            The Collections utility class provides helpful methods such as:
          </p>

          {/* 1. sort() */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">1. sort()</h3>
            <p className="text-gray-800 mb-2">
              Arranges the elements of a list in ascending order.
            </p>
            <p className="text-gray-600 italic">
              Example: [3, 1, 2] becomes [1, 2, 3].
            </p>
          </div>

          {/* 2. reverse() */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              2. reverse()
            </h3>
            <p className="text-gray-800 mb-2">
              Reverses the order of elements in a list.
            </p>
            <p className="text-gray-600 italic">
              Example: [1, 2, 3] becomes [3, 2, 1].
            </p>
          </div>

          {/* 3. shuffle() */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              3. shuffle()
            </h3>
            <p className="text-gray-800 mb-2">
              Randomly mixes the elements in a list.
            </p>
            <p className="text-gray-600 italic">
              Example: [1, 2, 3] might become [3, 1, 2].
            </p>
          </div>

          {/* 4. binarySearch() */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              4. binarySearch()
            </h3>
            <p className="text-gray-800 mb-2">
              Searches for an element in a sorted list.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Returns the index of the element if found</li>
              <li>
                Much faster than normal search, but the list must be sorted
                first
              </li>
            </ul>
          </div>

          {/* 5. min() / max() */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              5. min() / max()
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>min() returns the smallest element</li>
              <li>max() returns the largest element</li>
            </ul>
          </div>

          {/* 6. frequency() */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              6. frequency()
            </h3>
            <p className="text-gray-800 mb-2">
              Counts how many times a particular element appears in a
              collection.
            </p>
            <p className="text-gray-600 italic">
              Example: In [1, 2, 2, 3], the frequency of 2 is 2.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
