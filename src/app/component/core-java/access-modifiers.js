export default function JavaAccessModifiers() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
          Access Modifiers in Java
        </h1>

        {/* Introduction */}
        <section className="mb-8 border-l-4 border-red-600 pl-6">
          <p className="text-gray-800 mb-4">
            Access modifiers control the visibility (accessibility) of classes,
            methods, and variables in Java. They determine which parts of your
            code can be accessed from other parts.
          </p>
          <p className="text-gray-800">
            There are two main categories: <strong>Access Modifiers</strong>{" "}
            (control visibility) and <strong>Non-Access Modifiers</strong>{" "}
            (control behavior).
          </p>
        </section>

        {/* Access Modifiers Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Access Modifiers
          </h2>
          <p className="text-gray-800 mb-6">
            Control the visibility and accessibility of classes, methods, and
            variables.
          </p>

          {/* 1. public */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">1. public</h3>
            <p className="text-gray-800 mb-3">
              <strong>Accessible from anywhere</strong>, in any class or
              package.
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Most open permission level</li>
              <li>Can be accessed from any other class</li>
              <li>No restrictions on accessibility</li>
            </ul>
          </div>

          {/* 2. private */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">2. private</h3>
            <p className="text-gray-800 mb-3">
              <strong>Accessible only within the same class.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Most restrictive access level</li>
              <li>Used to hide data (encapsulation)</li>
              <li>Cannot be accessed from outside the class</li>
            </ul>
          </div>

          {/* 3. protected */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              3. protected
            </h3>
            <p className="text-gray-800 mb-3">
              <strong>Accessible in specific contexts:</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">Accessible:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Within the same class</li>
              <li>Within the same package</li>
              <li>In subclasses (even in different packages)</li>
            </ul>
          </div>

          {/* 4. default */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              4. default (no keyword)
            </h3>
            <p className="text-gray-800 mb-3">
              <strong>When no access modifier is specified.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Accessible only within the same package</li>
              <li>Also called package-private</li>
              <li>No explicit keyword needed</li>
            </ul>
          </div>
        </section>

        {/* Access Modifiers Comparison Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">
            Access Modifiers Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-red-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Modifier
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-center">
                    Same Class
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-center">
                    Same Package
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-center">
                    Subclass
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-center">
                    Other Package
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    public
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    protected
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✗
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    default
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✗
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✗
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    private
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✓
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✗
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✗
                  </td>
                  <td className="border border-red-300 px-4 py-3 text-center">
                    ✗
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Non-Access Modifiers Section */}
        <section className="mb-8 border-l-4 border-red-600 pl-6">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Non-Access Modifiers
          </h2>
          <p className="text-gray-800 mb-6">
            These modifiers do NOT control visibility, but change the behavior
            of classes, methods, and variables.
          </p>

          {/* 1. static */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">1. static</h3>
            <p className="text-gray-800 mb-3">
              <strong>Belongs to the class, not objects.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Can be accessed without creating an object</li>
              <li>Shared across all instances of the class</li>
              <li>Memory efficient for common data</li>
            </ul>
          </div>

          {/* 2. final */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">2. final</h3>
            <p className="text-gray-800 mb-3">
              <strong>Makes elements unchangeable.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">Usage:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>
                <strong>Variable:</strong> value cannot be changed (constant)
              </li>
              <li>
                <strong>Method:</strong> cannot be overridden
              </li>
              <li>
                <strong>Class:</strong> cannot be inherited
              </li>
            </ul>
          </div>

          {/* 3. abstract */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              3. abstract
            </h3>
            <p className="text-gray-800 mb-3">
              <strong>Defines incomplete elements.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">Usage:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>
                <strong>Class:</strong> cannot be instantiated
              </li>
              <li>
                <strong>Method:</strong> has no body; must be implemented by
                subclasses
              </li>
              <li>Used for creating templates and contracts</li>
            </ul>
          </div>

          {/* 4. synchronized */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              4. synchronized
            </h3>
            <p className="text-gray-800 mb-3">
              <strong>Used in multithreading.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Method can be accessed by only one thread at a time</li>
              <li>Prevents data inconsistency in concurrent programs</li>
              <li>Ensures thread safety</li>
            </ul>
          </div>

          {/* 5. volatile */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              5. volatile
            </h3>
            <p className="text-gray-800 mb-3">
              <strong>Used in concurrency.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>
                Tells the JVM to always read the variable from main memory,
                not cache
              </li>
              <li>Ensures visibility of changes across threads</li>
              <li>Used when variables are shared between threads</li>
            </ul>
          </div>

          {/* 6. transient */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              6. transient
            </h3>
            <p className="text-gray-800 mb-3">
              <strong>Controls serialization.</strong>
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Variable will not be serialized</li>
              <li>Used when you don't want to save sensitive data</li>
              <li>Value becomes default after deserialization</li>
            </ul>
          </div>
        </section>

        {/* Summary Table */}
        <section>
          <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">
            Non-Access Modifiers Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-red-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Modifier
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Purpose
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Common Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    static
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Belongs to class, not objects
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Utility methods, constants
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    final
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Makes elements unchangeable
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Constants, prevent override/inheritance
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    abstract
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Defines incomplete elements
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Templates, contracts for subclasses
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    synchronized
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Thread-safe access
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Multithreading, concurrent programs
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    volatile
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Memory visibility
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Shared variables in concurrency
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    transient
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Skip serialization
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Sensitive data, temporary fields
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}