import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export const metadata = {
  title: "Java Microservices Tutorial | Spring Boot & Cloud Guide",
  description:
    "Build scalable microservices with Java, Spring Boot, Docker, and Kubernetes. Architecture, communication, and security.",
  alternates: { canonical: "/java-microservices" },
};

export default function MicroservicesSectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10">
        <ModuleComponent searchParams={{ section_id: "java-microservices" }} />
      </main>
    </div>
  );
}
