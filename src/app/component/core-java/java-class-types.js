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

export default function JavaClassTypes() {
 const { copiedCode, copyToClipboard } = useCopyToClipboard();
  const codeExamples = {
    finalClass: `// Final class: cannot be inherited
final class Building {
    // Final variable: cannot be changed
    final int floors = 5;

    // Final method: cannot be overridden
    final void fireSafety() {
        System.out.println("Follow fire safety rules.");
    }
}

// This would cause an error because Building is final
// class House extends Building {}

public class Main {
    public static void main(String[] args) {
        Building b = new Building();
        System.out.println("Number of floors: " + b.floors);
        b.fireSafety();
    }
}`,
    staticClass: `class Building {
    static String type = "Skyscraper";

    // Static nested class
    static class Room {
        void showRoom() {
            System.out.println("This is a room in a " + type);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // No need to create Building object
        Building.Room r = new Building.Room();
        r.showRoom();
    }
}`,
    abstractClass: `abstract class Building {
    abstract void openDoor();
}

// Concrete subclass
class House extends Building {
    void openDoor() {
        System.out.println("House door opened.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Building b = new Building(); // Not allowed
        House h = new House();          // Allowed
        h.openDoor();
    }
}`,
    concreteClass: `// Abstract parent class
abstract class Building {
    abstract void openDoor();  // abstract method
}

// Concrete class that extends abstract class
class ConcreteBuilding extends Building {
    @Override
    void openDoor() {
        System.out.println("Door opened in the building.");
    }

    void turnOnLights() {
        System.out.println("Lights are turned on.");
    }
}

public class Main {
    public static void main(String[] args) {
        ConcreteBuilding building = new ConcreteBuilding(); // object created
        building.openDoor();   // uses implemented method
        building.turnOnLights(); // uses its own method
    }
}`,
    pojoClass: `// POJO class
public class Building {
    // private variables
    private String name;
    private int floors;
    private String color;

    // No-argument constructor
    public Building() {}

    // Getter and Setter for name
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for floors
    public int getFloors() {
        return floors;
    }
    public void setFloors(int floors) {
        this.floors = floors;
    }

    // Getter and Setter for color
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
}`,
    singletonClass: `class Building {
    // static variable to hold single instance
    private static Building singleInstance;

    // private constructor so no other class can create object
    private Building() {}

    // static method to provide single instance
    public static Building getInstance() {
        if (singleInstance == null) {
            singleInstance = new Building(); // create only once
        }
        return singleInstance;
    }

    // example method
    public void showInfo() {
        System.out.println("This is the only Building instance.");
    }
}

public class Main {
    public static void main(String[] args) {
        Building b1 = Building.getInstance();
        Building b2 = Building.getInstance();

        b1.showInfo();
        b2.showInfo();

        // Check if both references point to the same object
        if (b1 == b2) {
            System.out.println("Both b1 and b2 refer to the same instance.");
        }
    }
}`,
    innerClass: `class Building {
    private String name = "Sky Tower";

    // Inner class
    class Room {
        void showRoomInfo() {
            // Inner class can access outer class's private members
            System.out.println("This room is in the building: " + name);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Building building = new Building();

        // Create object of inner class
        Building.Room room = building.new Room();
        room.showRoomInfo();
    }
}`,
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">
          Types of Classes in Java
        </h1>

        {/* Introduction */}
        <section className="mb-8 p-6  border-l-4 border-red-600">
          <p className="text-gray-800 mb-4">
            Java provides different types of classes to serve specific purposes
            in your application. Understanding these class types helps you write
            better organized and efficient code.
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">• Final Class</span>
            </div>
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">• Static Class</span>
            </div>
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">
                • Abstract Class
              </span>
            </div>
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">
                • Concrete Class
              </span>
            </div>
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">• POJO Class</span>
            </div>
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">
                • Singleton Class
              </span>
            </div>
            <div className="bg-white p-3 rounded ">
              <span className="text-red-600 font-semibold">• Inner Class</span>
            </div>
          </div>
        </section>

        {/* Final Class */}
        <section className="mb-8 bg-white p-6 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            1. Final Class
          </h2>

          <div className=" p-4  mb-4">
            <p className="text-gray-800 mb-3 font-semibold">
              Final Keyword in Java:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>
                A{" "}
                <code className="bg-white text-red-600 px-2 py-1 rounded">
                  final
                </code>{" "}
                variable cannot change its value once assigned
              </li>
              <li>
                A{" "}
                <code className="bg-white text-red-600 px-2 py-1 rounded">
                  final
                </code>{" "}
                method cannot be overridden by a subclass
              </li>
              <li>
                A{" "}
                <code className="bg-white text-red-600 px-2 py-1 rounded">
                  final
                </code>{" "}
                class cannot be inherited
              </li>
            </ul>
          </div>

          <div className=" p-4  mb-4">
            <p className="text-red-600 font-semibold mb-2">✔ Use Cases</p>
            <p className="text-gray-800 mb-2">
              Useful for creating immutable classes, like the String class in
              Java.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 ml-4 text-sm">
              <li>If a class is final, it cannot be changed or extended</li>
              <li>
                If only its members are final, the class can still be extended,
                but final members cannot be changed
              </li>
            </ul>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  finalClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.finalClass, "finalClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "finalClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.finalClass}
              </code>
            </pre>
          </div>

          <div className=" p-4 ">
            <p className="text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-red-600 block">Number of floors: 5</code>
            <code className="text-red-600 block">
              Follow fire safety rules.
            </code>
          </div>
        </section>

        {/* Static Class */}
        <section className="mb-8 p-6  border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            2. Static Class
          </h2>

          <div className="bg-white p-4  mb-4 ">
            <p className="text-gray-800 mb-3">
              A static class is a nested class declared inside another class
              with the{" "}
              <code className=" text-red-600 px-2 py-1 rounded">
                static
              </code>{" "}
              keyword.
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Key Characteristics:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>Does not need an object of the outer class to be created</li>
              <li>Can access only static members of the outer class</li>
              <li>
                Useful for grouping classes that are only related to the outer
                class
              </li>
            </ul>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  staticClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.staticClass, "staticClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "staticClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.staticClass}
              </code>
            </pre>
          </div>

          <div className="bg-white p-4  ">
            <p className="text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-red-600 block">
              This is a room in a Skyscraper
            </code>
          </div>
        </section>

        {/* Abstract Class */}
        <section className="mb-8 bg-white p-6 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            3. Abstract Class
          </h2>

          <div className=" p-4  mb-4">
            <p className="text-gray-800 mb-3">
              A class with one or more abstract methods and declared with the{" "}
              <code className="bg-white text-red-600 px-2 py-1 rounded">
                abstract
              </code>{" "}
              keyword.
            </p>
            <p className="text-gray-800 font-semibold mb-2">
              Important Points:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>
                It is incomplete, so we must extend it in a concrete subclass to
                use it
              </li>
              <li>Can have constructors, static methods, and final methods</li>
              <li>Final methods cannot be changed by subclasses</li>
              <li>
                <strong>You cannot create an object</strong> of an abstract
                class directly because it may have abstract methods without a
                body
              </li>
            </ul>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  abstractClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.abstractClass, "abstractClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "abstractClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.abstractClass}
              </code>
            </pre>
          </div>

          <div className=" p-4 ">
            <p className="text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-red-600 block">House door opened.</code>
          </div>
        </section>

        {/* Concrete Class */}
        <section className="mb-8 p-6  border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            4. Concrete Class
          </h2>

          <div className="bg-white p-4  mb-4 ">
            <p className="text-gray-800 mb-3">
              A class that has complete implementations for all its methods and
              no abstract methods.
            </p>
            <p className="text-gray-800 font-semibold mb-2">Characteristics:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>
                It is a fully working class that can be instantiated (objects
                can be created)
              </li>
              <li>Can extend an abstract class or implement an interface</li>
              <li>
                Must provide implementations for all abstract methods from
                parent class
              </li>
            </ul>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  concreteClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.concreteClass, "concreteClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "concreteClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.concreteClass}
              </code>
            </pre>
          </div>

          <div className="bg-white p-4  ">
            <p className="text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-red-600 block">
              Door opened in the building.
            </code>
            <code className="text-red-600 block">Lights are turned on.</code>
          </div>
        </section>

        {/* POJO Class */}
        <section className="mb-8 bg-white p-6 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            5. POJO Class
          </h2>

          <div className=" p-4  mb-4">
            <p className="text-gray-800 mb-3">
              <strong>POJO</strong> stands for{" "}
              <strong>"Plain Old Java Object"</strong>
            </p>
            <p className="text-gray-800 mb-3">
              A POJO class is a simple data container with private variables and
              public getter and setter methods. It does not have its own
              behavior, but it can override methods like{" "}
              <code className="bg-white text-red-600 px-2 py-1 rounded">
                equals()
              </code>{" "}
              or implement interfaces like{" "}
              <code className="bg-white text-red-600 px-2 py-1 rounded">
                Serializable
              </code>
              .
            </p>
          </div>

          <div className=" p-4  mb-4">
            <p className="text-gray-800 font-semibold mb-2">
              Properties of a POJO Class:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>Use private variables for all data</li>
              <li>Provide public getter and setter methods</li>
              <li>Do not extend other classes</li>
              <li>Do not implement pre-defined interfaces</li>
              <li>Do not use pre-defined annotations</li>
              <li>Should have a default no-argument constructor</li>
            </ul>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  pojoClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.pojoClass, "pojoClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "pojoClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.pojoClass}
              </code>
            </pre>
          </div>
        </section>

        {/* Singleton Class */}
        <section className="mb-8 p-6  border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            6. Singleton Class
          </h2>

          <div className="bg-white p-4  mb-4 ">
            <p className="text-gray-800 mb-3">
              A singleton class allows only <strong>one object</strong> to exist
              at a time.
            </p>
            <p className="text-gray-800 font-semibold mb-2">Key Concepts:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>
                If you try to create another object, it refers to the same
                existing object
              </li>
              <li>
                Any changes made through one instance affect the single object
              </li>
              <li>
                Commonly used for database connections or socket programming
              </li>
            </ul>
          </div>

          <div className="bg-white p-4  mb-4 ">
            <p className="text-red-600 font-semibold mb-2">
              How to Create a Singleton Class:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-800 ml-4">
              <li>
                Make the constructor private so no other class can create an
                object
              </li>
              <li>
                Provide a static method that returns the single instance (lazy
                initialization)
              </li>
            </ol>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  singletonClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.singletonClass, "singletonClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "singletonClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.singletonClass}
              </code>
            </pre>
          </div>

          <div className="bg-white p-4  ">
            <p className="text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-red-600 block">
              This is the only Building instance.
            </code>
            <code className="text-red-600 block">
              This is the only Building instance.
            </code>
            <code className="text-red-600 block">
              Both b1 and b2 refer to the same instance.
            </code>
          </div>
        </section>

        {/* Inner Class */}
        <section className="mb-8 bg-white p-6 border-l-4 border-red-600">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            7. Inner Class
          </h2>

          <div className=" p-4  mb-4">
            <p className="text-gray-800 mb-3">
              An inner class is a class defined inside another class in Java.
            </p>
            <p className="text-gray-800 font-semibold mb-2">Benefits:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 ml-4">
              <li>Helps to organize classes logically</li>
              <li>Achieves better encapsulation</li>
              <li>
                The inner class can access all members of the outer class,
                including private ones
              </li>
            </ul>
          </div>

          <div className="relative bg-black rounded-xl p-6 shadow-xl overflow-hidden ">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-600">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className="text-white text-sm ml-2 font-mono">
                  innerClass.java
                </span>
              </div>

              <button
                onClick={() =>
                  copyToClipboard(codeExamples.innerClass, "innerClass")
                }
                className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white  transition-colors duration-200"
              >
                {copiedCode === "innerClass" ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span className="text-sm">Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <pre className="text-sm overflow-x-auto">
              <code className="text-white font-mono leading-relaxed">
                {codeExamples.innerClass}
              </code>
            </pre>
          </div>

          <div className=" p-4 ">
            <p className="text-gray-800 font-semibold mb-2">Output:</p>
            <code className="text-red-600 block">
              This room is in the building: Sky Tower
            </code>
          </div>
        </section>

        {/* Summary Table */}
        <section className=" p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">
            Quick Reference Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-red-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Class Type
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Key Feature
                  </th>
                  <th className="border border-red-400 px-4 py-3 text-left">
                    Use Case
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Final
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Cannot be inherited
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Immutable classes
                  </td>
                </tr>
                <tr className="">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Static
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Nested, no outer object needed
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Grouping related classes
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Abstract
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Has abstract methods
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Template for subclasses
                  </td>
                </tr>
                <tr className="">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Concrete
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Fully implemented
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Working, instantiable classes
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    POJO
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Simple data container
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Data transfer objects
                  </td>
                </tr>
                <tr className="">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Singleton
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Only one instance
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Database connections
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-red-300 px-4 py-3 font-semibold text-red-700">
                    Inner
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Defined inside another class
                  </td>
                  <td className="border border-red-300 px-4 py-3">
                    Logical grouping, encapsulation
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
