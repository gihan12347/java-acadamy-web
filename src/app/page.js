import Header from "./component/header";
import HeroSlideshow from "./component/hero-section";
import LearningOverview from "./component/learning-and-overview";
import FeaturedTutorials from "./component/features.js";

export const metadata = {
  title: "Learn Java Online for USA, Europe and Australia",
  description:
    "Java Academy Hub offers beginner-friendly Java tutorials for learners in the USA, Europe, and Australia, covering Core Java, Spring Boot, and Microservices.",
  keywords: [
    "learn java usa",
    "learn java europe",
    "learn java australia",
    "java tutorials beginners",
    "core java online course",
    "spring boot tutorial",
    "java microservices tutorial",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Learn Java Online | USA, Europe, Australia",
    description:
      "Step-by-step Java tutorials for global learners in the USA, Europe, and Australia.",
    url: "https://javaacademyhub.com",
    type: "website",
  },
}

const JavaForBeginerApp = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div>
        <HeroSlideshow />
      </div>
      <main className="py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10">
        <LearningOverview />
        <FeaturedTutorials />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-10 sm:mt-16">
        <div className="app-shell py-6 sm:py-8 text-center text-sm sm:text-base text-gray-600">
          © 2024 Java Tutorials. Learn Java step by step.
        </div>
      </footer>
    </div>
  );
};

export default JavaForBeginerApp;