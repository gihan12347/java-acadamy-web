import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export const metadata = {
  title: "Java Servlets Tutorial | Learn Server-Side Java Web Development",
  description:
    "Free Java Servlets tutorial for beginners. Learn servlet lifecycle, HttpServlet, sessions, filters, and web development.",
  alternates: { canonical: "/servlets" },
};

export default function ServletsSectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10">
        <ModuleComponent searchParams={{ section_id: "servlets" }} />
      </main>
    </div>
  );
}
