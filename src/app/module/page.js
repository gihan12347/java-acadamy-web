import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export default function ModulePage({ searchParams }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10 space-y-8">
        <ModuleComponent searchParams={searchParams} />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-10 sm:mt-16">
        <div className="app-shell py-6 sm:py-8 text-center text-sm sm:text-base text-gray-600">
          © 2024 Java Tutorials. Learn Java step by step.
        </div>
      </footer>
    </div>
  );
}
