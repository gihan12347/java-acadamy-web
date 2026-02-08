export default function JavaAccessModifiers() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
          Access Modifiers in Java (Public, Private, Protected, Default) – Beginner Guide
        </h1>

        {/* Introduction */}
        <section className="mb-8 border-l-4 border-red-600 pl-6">
          <p className="text-gray-800 mb-4">
            Access modifiers in Java control <strong>who can access your classes, methods, and variables</strong>. They are a core part of Java programming and are especially important for beginners to understand object-oriented programming (OOP) and data protection.
          </p>
          <p className="text-gray-800 mb-4">
            In this beginner-friendly guide, you will learn all <strong>Java access modifiers</strong> — <strong>public, private, protected, and default</strong> — with simple explanations and practical use cases.
          </p>
          <p className="text-gray-800">
            You will also learn about important <strong>non-access modifiers in Java</strong> such as <strong>static, final, abstract, synchronized, volatile, and transient</strong>, which control how your Java code behaves in real-world applications.
          </p>
        </section>

        {/* Access Modifiers Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Types of Access Modifiers in Java
          </h2>
          <p className="text-gray-800 mb-6">
            Java provides four access modifiers to control the visibility and accessibility of classes, methods, and variables.
          </p>

          {/* 1. public */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">1. public</h3>
            <p className="text-gray-800 mb-3">
              <strong>public</strong> allows access from anywhere in the program. It is commonly used when you want classes, methods, or variables to be accessible from other packages and projects.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Most open permission level</li>
              <li>Accessible from any class and package</li>
              <li>Common in APIs and libraries</li>
            </ul>
          </div>

          {/* 2. private */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">2. private</h3>
            <p className="text-gray-800 mb-3">
              <strong>private</strong> restricts access to only within the same class. It is mainly used for data hiding and encapsulation in Java.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Most restrictive access level</li>
              <li>Improves data security</li>
              <li>Used with getters and setters</li>
            </ul>
          </div>

          {/* 3. protected */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">3. protected</h3>
            <p className="text-gray-800 mb-3">
              <strong>protected</strong> allows access within the same package and in subclasses, even if they are in different packages.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Accessible in same class</li>
              <li>Accessible in same package</li>
              <li>Accessible in subclasses</li>
            </ul>
          </div>

          {/* 4. default */}
          <div className="mb-6 border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold text-red-700 mb-3">
              4. default (package-private)
            </h3>
            <p className="text-gray-800 mb-3">
              If no access modifier is specified, Java uses <strong>default (package-private)</strong> access.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
              <li>Accessible only within the same package</li>
              <li>No explicit keyword used</li>
              <li>Useful for internal package logic</li>
            </ul>
          </div>
        </section>

        {/* Access Modifiers Comparison Table */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">
            Access Modifiers Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-red-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-400 px-4 py-3 text-left">Modifier</th>
                  <th className="border border-red-400 px-4 py-3 text-center">Same Class</th>
                  <th className="border border-red-400 px-4 py-3 text-center">Same Package</th>
                  <th className="border border-red-400 px-4 py-3 text-center">Subclass</th>
                  <th className="border border-red-400 px-4 py-3 text-center">Other Package</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["public", "✓", "✓", "✓", "✓"],
                  ["protected", "✓", "✓", "✓", "✗"],
                  ["default", "✓", "✓", "✗", "✗"],
                  ["private", "✓", "✗", "✗", "✗"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`border border-red-300 px-4 py-3 ${
                          j === 0 ? "font-semibold text-red-700" : "text-center"
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
        </section>

        {/* Non-Access Modifiers Section */}
        <section className="mb-8 border-l-4 border-red-600 pl-6">
          <h2 className="text-2xl font-bold text-red-700 mb-6">
            Non-Access Modifiers in Java
          </h2>
          <p className="text-gray-800 mb-6">
            Non-access modifiers do NOT control visibility. Instead, they control the behavior of classes, methods, and variables in Java programs.
          </p>

          {[
            ["static", "Belongs to the class, not objects", ["Access without creating object", "Shared across instances", "Common for utility methods"]],
            ["final", "Makes elements unchangeable", ["Constants", "Prevent method overriding", "Prevent class inheritance"]],
            ["abstract", "Defines incomplete elements", ["Abstract classes", "Abstract methods", "Templates for subclasses"]],
            ["synchronized", "Thread-safe access", ["One thread at a time", "Prevents data inconsistency", "Used in multithreading"]],
            ["volatile", "Memory visibility", ["Read from main memory", "Shared variables", "Concurrency visibility"]],
            ["transient", "Controls serialization", ["Skip serialization", "Sensitive data", "Temporary fields"]],
          ].map(([title, desc, points], i) => (
            <div key={i} className="mb-6">
              <h3 className="text-xl font-bold text-red-700 mb-3">
                {i + 1}. {title}
              </h3>
              <p className="text-gray-800 mb-3">
                <strong>{desc}</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4">
                {points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* FAQ Section */}
        <section className="mt-12 border-t-2 border-red-300 pt-8">
          <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
            Java Access Modifiers – Frequently Asked Questions (FAQ)
          </h2>

          <h3 className="text-lg font-semibold text-red-700 mb-2">
            What are the 4 access modifiers in Java?
          </h3>
          <p className="text-gray-800 mb-4">
            The four access modifiers in Java are public, private, protected, and default (package-private). They control where classes, methods, and variables can be accessed from.
          </p>

          <h3 className="text-lg font-semibold text-red-700 mb-2">
            What is the difference between public and private in Java?
          </h3>
          <p className="text-gray-800 mb-4">
            public allows access from anywhere, while private restricts access to only within the same class. private is commonly used to protect sensitive data.
          </p>

          <h3 className="text-lg font-semibold text-red-700 mb-2">
            What is the default access modifier in Java?
          </h3>
          <p className="text-gray-800 mb-4">
            If no access modifier is specified, Java uses default (package-private) access. This means the member is accessible only within the same package.
          </p>

          <h3 className="text-lg font-semibold text-red-700 mb-2">
            Are non-access modifiers important for beginners?
          </h3>
          <p className="text-gray-800">
            Yes. Modifiers like static, final, and abstract are commonly used in real Java applications and are important concepts for beginners preparing for jobs and interviews.
          </p>
        </section>
      </div>
    </div>
  );
}
