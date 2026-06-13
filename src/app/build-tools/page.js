import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export const metadata = {
  title: "Java Build Tools Tutorial | Maven & Gradle Guide",
  description:
    "Learn Maven and Gradle build tools for Java projects. Dependency management, lifecycle, and packaging JAR/WAR files.",
  alternates: { canonical: "/build-tools" },
};

export default function BuildToolsSectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10">
        <ModuleComponent searchParams={{ section_id: "build-tools" }} />
      </main>
    </div>
  );
}
