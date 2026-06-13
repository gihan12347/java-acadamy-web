import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export const metadata = {
  title: "Java REST API Tutorial | Build Web Services with Spring Boot",
  description:
    "Learn REST API development in Java with Spring Boot. HTTP methods, JSON, OpenAPI documentation, testing, and best practices.",
  alternates: { canonical: "/apis" },
};

export default function ApisSectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10">
        <ModuleComponent searchParams={{ section_id: "apis" }} />
      </main>
    </div>
  );
}
