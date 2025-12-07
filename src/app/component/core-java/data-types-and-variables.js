export default function JavaDataTypes() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 mb-6 sm:mb-8 text-center leading-tight">
          Data Types in Java
        </h1>

        {/* Introduction */}
        <section className="mb-6 sm:mb-8  p-4 sm:p-6 border-l-4 border-red-600">
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Data types in Java define the kind of data a variable can hold and the memory required to store it.
            They are broadly divided into two categories:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800 ml-2 sm:ml-4 text-sm sm:text-base">
            <li><strong>Primitive Data Types:</strong> Store simple values directly in memory.</li>
            <li><strong>Non-Primitive (Reference) Data Types:</strong> Store memory references to objects.</li>
          </ul>
        </section>

        {/* How Primitive Variables Are Stored */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6  border-l-4 border-red-600">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            How Primitive Variables Are Stored
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Primitive data types store the actual value directly in the stack memory.
          </p>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Example:</p>
            <code className="text-red-600 text-sm sm:text-base break-all">int x = 10;</code>
            <ul className="list-disc list-inside space-y-1 text-gray-800 mt-3 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>The variable x is stored in stack.</li>
              <li>The actual value 10 is also in the stack.</li>
            </ul>
          </div>
          <p className="text-red-600 font-semibold text-sm sm:text-base">
            ✔ Primitive = store REAL value in stack
          </p>
        </section>

        {/* How Non-Primitive Variables Are Stored */}
        <section className="mb-6 sm:mb-8  p-4 sm:p-6 border-l-4 border-red-600">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            How Non-Primitive Variables Are Stored
          </h2>
          <p className="text-gray-800 mb-4 text-sm sm:text-base leading-relaxed">
            Non-primitive data types store only the reference (address) in stack,
            but the actual object is stored in heap memory.
          </p>
          <div className="bg-white p-3 sm:p-4 rounded-lg mb-4 border border-gray-200">
            <p className="text-gray-800 font-semibold mb-2 text-sm sm:text-base">Example:</p>
            <code className="text-red-600 text-sm sm:text-base break-all">String name = new String("John");</code>
            <p className="text-gray-800 mt-3 mb-2 text-sm sm:text-base">This is what happens:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>name → stored in stack</li>
              <li>"John" object → stored in heap</li>
              <li>Stack variable name stores a reference (pointer) to the heap object.</li>
            </ul>
          </div>
          <p className="text-red-600 font-semibold text-sm sm:text-base">
            ✔ Non-primitive = stack holds reference, heap holds actual object
          </p>
        </section>

        {/* Data Types Diagram */}
        <div className="bg-white  rounded-lg p-4 sm:p-8 mb-6 sm:mb-8 text-center overflow-hidden">
          <img 
            src="/images/data-types.png" 
            alt="Data Types Diagram" 
            className="max-w-full h-auto mx-auto"
          />
        </div>

        {/* Primitive Data Types */}
        <section className="mb-6 sm:mb-8 bg-white p-4 sm:p-6 ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">
            Primitive Data Types
          </h2>
          <p className="text-gray-800 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            Primitive types are the fundamental data types that store single values. 
            Java defines eight primitive data types, summarized below:
          </p>

          {/* Table */}
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className="w-full border-collapse text-sm sm:text-base">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="border border-red-400 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-base">Type</th>
                    <th className="border border-red-400 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-base">Description</th>
                    <th className="border border-red-400 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-base">Default</th>
                    <th className="border border-red-400 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-base">Size</th>
                    <th className="border border-red-400 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-base">Example</th>
                    <th className="border border-red-400 px-2 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-base">Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">boolean</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">Logical values</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">false</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">JVM-dependent (typically 1 byte)</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">true, false</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">—</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">byte</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">8-bit signed integer</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">1 byte</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">10</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">-128 to 127</td>
                  </tr>
                  <tr className="">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">char</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">16-bit Unicode character</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">\u0000</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">2 bytes</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">'A', '\u0041'</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0 to 65,535</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">short</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">16-bit signed integer</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">2 bytes</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">2000</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">-32,768 to 32,767</td>
                  </tr>
                  <tr className="">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">int</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">32-bit signed integer</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">4 bytes</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">1000, -500</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">-2,147,483,648 to 2,147,483,647</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">long</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">64-bit signed integer</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0L</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">8 bytes</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">123456789L</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">±9.22e18</td>
                  </tr>
                  <tr className="">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">float</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">32-bit floating point</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0.0f</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">4 bytes</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">3.14f</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">~6–7 digits precision</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 font-semibold text-red-700 text-xs sm:text-base">double</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">64-bit floating point</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">0.0d</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">8 bytes</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-base">3.14159d</td>
                    <td className="border border-red-300 px-2 sm:px-4 py-3 text-xs sm:text-base">~15–16 digits precision</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}