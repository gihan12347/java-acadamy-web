import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export default function ModulePage({ searchParams }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <ModuleComponent searchParams={searchParams} />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
          © 2024 Java Tutorials. Learn Java step by step.
        </div>
      </footer>
    </div>
  );
}
