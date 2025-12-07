import { useCopyToClipboard } from "../util.js";
import {
  Code,
  GitBranch,
  Zap,
  BookOpen,
  Copy,
  Check,
  Repeat,
  ArrowRight,
} from "lucide-react";

export default function JavaOOP() {
  const { copiedCode, copyToClipboard } = useCopyToClipboard();
  const codeExamples = {
    encapsulation: `class Building {
    // private data (hidden rooms)
    private String secretRoom = "Hidden Archive";
    private String officeRoom = "Manager Office";

    // public method (main door)
    public String enter(String key) {
        if (key.equals("office")) {
            return officeRoom;
        } else if (key.equals("secret")) {
            return "Access Denied! Secret room is protected.";
        } else {
            return "Invalid key!";
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Building b = new Building();

        // trying to enter rooms
        System.out.println(b.enter("office"));  // allowed
        System.out.println(b.enter("secret"));  // not allowed
    }
}`,
    inheritance: `// Parent class
class Building {
    void showBuilding() {
        System.out.println("This is a building with walls and doors.");
    }
}

// Child class
class House extends Building {
    void showHouse() {
        System.out.println("This house has a kitchen and bedrooms.");
    }
}

// Another child class
class Office extends Building {
    void showOffice() {
        System.out.println("This office has meeting rooms and workspaces.");
    }
}

public class Main {
    public static void main(String[] args) {
        House h = new House();
        h.showBuilding(); // inherited from Building
        h.showHouse();    // its own feature

        Office o = new Office();
        o.showBuilding(); // inherited
        o.showOffice();   // its own feature
    }
}`,
    abstraction: `// Abstract class (hides how the light works)
abstract class Building {
    // abstract method: what the user can do
    abstract void turnOnLights();
}

// Concrete class: shows WHAT it does, hides HOW it does it
class House extends Building {
    @Override
    void turnOnLights() {
        System.out.println("Lights are turned on in the house.");
    }
}

public class Main {
    public static void main(String[] args) {
        Building b = new House();
        b.turnOnLights();   // user just uses the feature
    }
}`,
    overloading: `class Building {

    // open door with a key
    void openDoor(String key) {
        System.out.println("Door opened with a key.");
    }

    // open door with a password
    void openDoor(int password) {
        System.out.println("Door opened with a password.");
    }

    // open door with a card
    void openDoor(String card, int code) {
        System.out.println("Door opened with a card and code.");
    }
}

public class Main {
    public static void main(String[] args) {
        Building b = new Building();

        b.openDoor("metalKey");      // chooses key method
        b.openDoor(1234);            // chooses password method
        b.openDoor("accessCard", 99); // chooses card method
    }
}`,
    overriding: `// Parent class
class Building {
    void openDoor() {
        System.out.println("Opening the building door in a standard way.");
    }
}

// Child class 1
class House extends Building {
    @Override
    void openDoor() {
        System.out.println("Opening the house door with a key.");
    }
}

// Child class 2
class Office extends Building {
    @Override
    void openDoor() {
        System.out.println("Opening the office door with a password.");
    }
}

public class Main {
    public static void main(String[] args) {
        Building b1 = new House();
        Building b2 = new Office();

        b1.openDoor();  // calls House version
        b2.openDoor();  // calls Office version
    }
}`,
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8 text-center px-2">
          The Four Pillars of OOP in Java
        </h1>

        {/* Introduction */}
        <section className="mb-6 md:mb-8 p-4 sm:p-6  border-l-4 border-red-600 ">
          <p className="text-sm sm:text-base text-gray-800 mb-4">
            Object-Oriented Programming (OOP) is built on four fundamental
            pillars that help us write organized, reusable, and maintainable
            code:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4">
            <li>
              <strong>Encapsulation:</strong> Wrapping data and methods
              together, hiding internal details
            </li>
            <li>
              <strong>Inheritance:</strong> Allowing classes to inherit features
              from other classes
            </li>
            <li>
              <strong>Abstraction:</strong> Showing only essential features,
              hiding implementation
            </li>
            <li>
              <strong>Polymorphism:</strong> Same method name, different
              behaviors
            </li>
          </ul>
        </section>

        {/* Encapsulation */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            1. Encapsulation
          </h2>

          <div className=" p-3 sm:p-4  mb-4">
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              Encapsulation is the process of wrapping data and methods together
              into a single unit. It acts as a protective shield that prevents
              data from being accessed by code outside this shield.
            </p>
            <p className="text-sm sm:text-base text-gray-800 mb-2 font-semibold">Key Points:</p>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4">
              <li>Variables inside a class are hidden from other classes</li>
              <li>Data can only be accessed through member functions</li>
              <li>Also known as "data hiding"</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4  mb-4">
            <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">
              Real-Life Analogy: Building Security
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              A building has private rooms that can only be accessed through the
              main door with the right key. You can't directly enter secret
              rooms without proper authorization.
            </p>
          </div>

          <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden ">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                  encapsulation.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.encapsulation, "encapsulation")
                }
                className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white  transition-colors duration-200 text-sm touch-manipulation"
              >
                {copiedCode === "encapsulation" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.encapsulation}
              </code>
            </pre>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4  mt-4">
            <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-xs sm:text-sm text-red-600 block">Manager Office</code>
            <code className="text-xs sm:text-sm text-red-600 block">
              Access Denied! Secret room is protected.
            </code>
          </div>
        </section>

        {/* Inheritance */}
        <section className="mb-6 md:mb-8  p-4 sm:p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            2. Inheritance
          </h2>

          <div className="bg-white p-3 sm:p-4  mb-4 ">
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              Inheritance is the mechanism by which one class is allowed to
              inherit the features (fields and methods) of another class. We
              achieve inheritance using the{" "}
              <code className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs sm:text-sm">
                extends
              </code>{" "}
              keyword.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
              <div className=" p-3 rounded">
                <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                  Superclass (Parent)
                </p>
                <p className="text-gray-800 text-xs sm:text-sm">
                  The class that gives its features to another class
                </p>
              </div>
              <div className=" p-3 rounded">
                <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                  Subclass (Child)
                </p>
                <p className="text-gray-800 text-xs sm:text-sm">
                  The class that receives features from another class
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-4  mb-4 ">
            <p className="text-red-600 font-semibold mb-2 text-sm sm:text-base">✔ Reusability</p>
            <p className="text-sm sm:text-base text-gray-800">
              Inheritance supports code reusability. When creating a new class,
              if an existing class includes some needed code, we can derive the
              new class from the existing one instead of writing everything from
              scratch.
            </p>
          </div>

          <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden ">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                  inheritance.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.inheritance, "inheritance")
                }
                className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white  transition-colors duration-200 text-sm touch-manipulation"
              >
                {copiedCode === "inheritance" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.inheritance}
              </code>
            </pre>
          </div>
        </section>

        {/* Abstraction */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            3. Abstraction
          </h2>

          <div className=" p-3 sm:p-4  mb-4">
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              Abstraction means hiding the internal working details and showing
              only the important features to the user. It lets us focus on{" "}
              <strong>what</strong> an object does, not <strong>how</strong> it
              does it.
            </p>
            <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">Implementation:</p>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-gray-800 ml-2 sm:ml-4">
              <li>Abstract classes</li>
              <li>Interfaces (can provide 100% abstraction)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4  mb-4">
            <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">
              Real-Life Analogy: Light Switch
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              When you flip a light switch, you don't need to know about the
              complex electrical wiring behind the wall. You just need to know
              that flipping the switch turns the light on or off.
            </p>
          </div>

          <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden ">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                  abstraction.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.abstraction, "abstraction")
                }
                className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white  transition-colors duration-200 text-sm touch-manipulation"
              >
                {copiedCode === "abstraction" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-xs sm:text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.abstraction}
              </code>
            </pre>
          </div>
        </section>

        {/* Polymorphism */}
        <section className="mb-6 md:mb-8  p-4 sm:p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            4. Polymorphism
          </h2>

          <div className="bg-white p-3 sm:p-4  mb-4 ">
            <p className="text-sm sm:text-base text-gray-800 mb-3">
              Polymorphism means "many forms". It allows us to perform a single
              action in different ways. In Java, there are two main types of
              polymorphism:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className=" p-3 rounded">
                <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                  Method Overloading
                </p>
                <p className="text-gray-800 text-xs sm:text-sm">
                  Compile-time polymorphism
                </p>
              </div>
              <div className=" p-3 rounded">
                <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                  Method Overriding
                </p>
                <p className="text-gray-800 text-xs sm:text-sm">Runtime polymorphism</p>
              </div>
            </div>
          </div>

          {/* Method Overloading */}
          <div className="bg-white p-3 sm:p-4  mb-6 ">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              Method Overloading (Compile-Time Polymorphism)
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              Multiple methods share the same name but have different parameters
              in the same class. The compiler knows which method to call before
              running the program.
            </p>
            <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden  mb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                    overloading.java
                  </span>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(codeExamples.overloading, "overloading")
                  }
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white  transition-colors duration-200 text-sm touch-manipulation"
                >
                  {copiedCode === "overloading" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs sm:text-sm overflow-x-auto">
                <code className="text-white font-mono leading-relaxed">
                  {codeExamples.overloading}
                </code>
              </pre>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">Output:</p>
              <code className="text-xs sm:text-sm text-red-600 block">
                Door opened with a key.
              </code>
              <code className="text-xs sm:text-sm text-red-600 block">
                Door opened with a password.
              </code>
              <code className="text-xs sm:text-sm text-red-600 block">
                Door opened with a card and code.
              </code>
            </div>
          </div>

          {/* Method Overriding */}
          <div className="bg-white p-3 sm:p-4  ">
            <h3 className="text-lg sm:text-xl font-bold text-red-700 mb-3">
              Method Overriding (Runtime Polymorphism)
            </h3>
            <p className="text-sm sm:text-base text-gray-800 mb-4">
              A child class provides its own implementation of a method that
              already exists in the parent class. The method has the same name,
              return type, and parameters. The Java compiler can't identify
              which method to call until the program runs, because objects are
              created at runtime.
            </p>
            <div className="relative bg-black p-3 sm:p-6 shadow-xl overflow-hidden  mb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-3 border-b border-red-600 gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  <span className="text-white text-xs sm:text-sm ml-2 font-mono">
                    overriding.java
                  </span>
                </div>

                <button
                  onClick={() =>
                    copyToClipboard(codeExamples.overriding, "overriding")
                  }
                  className="flex items-center gap-2 px-3 py-2 sm:px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white  transition-colors duration-200 text-sm touch-manipulation"
                >
                  {copiedCode === "overriding" ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="text-xs sm:text-sm overflow-x-auto">
                <code className="text-white font-mono leading-relaxed">
                  {codeExamples.overriding}
                </code>
              </pre>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm sm:text-base text-gray-800 font-semibold mb-2">Output:</p>
              <code className="text-xs sm:text-sm text-red-600 block">
                Opening the house door with a key.
              </code>
              <code className="text-xs sm:text-sm text-red-600 block">
                Opening the office door with a password.
              </code>
            </div>
          </div>
        </section>

        {/* Advantages of OOP */}
        <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Advantages of OOP over Procedural Programming
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className=" p-3 sm:p-4 ">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">✔ Reusability</p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Create reusable components using objects and classes, leading to
                less duplication
              </p>
            </div>
            <div className=" p-3 sm:p-4 ">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Clear Structure
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Provides logical organization, making code easier to understand
                and maintain
              </p>
            </div>
            <div className=" p-3 sm:p-4 ">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">✔ DRY Principle</p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Don't Repeat Yourself - common functionalities in one place,
                reducing redundancy
              </p>
            </div>
            <div className=" p-3 sm:p-4 ">
              <p className="font-semibold text-red-700 mb-2 text-sm sm:text-base">
                ✔ Faster Development
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Reuse existing code and create modular components for quicker
                application development
              </p>
            </div>
          </div>
        </section>
        {/* Disadvantages of OOP */}
<section className=" p-4 sm:p-6  ">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
            Disadvantages of OOP
          </h2>
          <div className="space-y-3">
            <div className="bg-white p-3 sm:p-4  ">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Learning Curve
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Concepts like classes, objects, and inheritance can be confusing
                for beginners
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4  ">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Overhead for Small Programs
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Using OOP for simple programs may require more code than
                necessary
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4  ">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Debugging Complexity
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Code divided into classes and layers can make finding and fixing
                bugs more time-consuming
              </p>
            </div>
            <div className="bg-white p-3 sm:p-4  ">
              <p className="font-semibold text-red-700 mb-1 text-sm sm:text-base">
                ✘ Memory Usage
              </p>
              <p className="text-gray-800 text-xs sm:text-sm">
                Creates many objects, which can use more memory compared to
                procedural programming
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
