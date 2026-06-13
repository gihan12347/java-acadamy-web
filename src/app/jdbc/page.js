import Header from "../component/header";
import ModuleComponent from "../component/module-component";

export const metadata = {
  title: "JDBC Tutorial | Java Database Connectivity for Beginners",
  description:
    "Complete JDBC tutorial — connect Java to MySQL and PostgreSQL, use PreparedStatement, transactions, and connection pooling.",
  alternates: { canonical: "/jdbc" },
};

export default function JdbcSectionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="app-shell py-8 sm:py-10">
        <ModuleComponent searchParams={{ section_id: "jdbc" }} />
      </main>
    </div>
  );
}
