import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export const metadata = {
  title: "Core Java Tutorial | Learn Java Programming from Scratch",
  description:
    "Master Core Java fundamentals — OOP, collections, multithreading, and exception handling with free step-by-step tutorials.",
  alternates: { canonical: "/core-java" },
};

export default function CoreJavaSectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10">
        <ModuleComponent searchParams={{ section_id: "core-java" }} />
      </main>
    </div>
  );
}
