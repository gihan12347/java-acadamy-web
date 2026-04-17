import Header from "./component/header";
import HeroSlideshow from "./component/hero-section";
import LearningOverview from "./component/learning-and-overview";
import FeaturedTutorials from "./component/features.js";
import HomepageSeoContent from "./component/homepage-seo-content.js";
import Script from "next/script";

export const metadata = {
  title:
    "Learn Java Online Free | Java Tutorial for Beginners | Free Java Programming Course",
  description:
    "Learn Java online with a free Java programming course for beginners. Follow our complete Java tutorial covering Core Java, OOP, Spring Boot, and Microservices step by step.",
  keywords: [
    "learn java online",
    "java tutorial for beginners",
    "java programming course free",
    "free java programming course",
    "learn java online free",
    "complete java guide",
    "java tutorial",
    "java tutorial for beginers",
    "best java tutorial",
    "core java online course",
    "spring boot tutorial",
    "java microservices tutorial",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Learn Java Online Free | Java Tutorial for Beginners | Free Java Programming Course",
    description:
      "Learn Java online with step-by-step lessons, projects, and a free Java programming course for beginners.",
    url: "https://javaacademyhub.com",
    type: "website",
  },
};

const JavaForBeginerApp = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Learn Java Online Free - Java Tutorial for Beginners",
    description:
      "Learn Java online through a free Java programming course with Core Java, OOP, Spring Boot, and Microservices lessons.",
    url: "https://javaacademyhub.com/",
    inLanguage: ["en-US", "en-GB", "en-AU"],
    keywords: [
      "java tutorial",
      "learn java online",
      "java tutorial for beginners",
      "java programming course free",
      "java tutorial for beginers",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Script
        id="homepage-seo-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Header />
      <div>
        <HeroSlideshow />
      </div>
      <main className="py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10">
        <section className="app-shell">
          <div className="bg-white border border-red-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
              Learn Java Online with a Free Java Programming Course
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Looking for a complete Java tutorial? This free Java programming
              course is designed for beginners and covers Core Java basics, OOP,
              collections, build tools, Spring Boot, and Microservices with
              practical lessons.
            </p>
          </div>
        </section>
        <LearningOverview />
        <HomepageSeoContent />
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