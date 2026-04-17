import Header from "./component/header";
import HeroSlideshow from "./component/hero-section";
import LearningOverview from "./component/learning-and-overview";
import FeaturedTutorials from "./component/features.js";
import Script from "next/script";

export const metadata = {
  title: "Java Tutorial for Beginners | USA, Europe, Australia",
  description:
    "Java tutorial for beginners with practical examples for learners in the USA, Europe, and Australia. Learn Core Java, Spring Boot, and Microservices step by step.",
  keywords: [
    "java tutorial",
    "java tutorial for beginners",
    "java tutorial for beginers",
    "best java tutorial",
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
    title: "Java Tutorial for Beginners | USA, Europe, Australia",
    description:
      "Java tutorial for beginners with step-by-step lessons, examples, and projects for the USA, Europe, and Australia.",
    url: "https://javaacademyhub.com",
    type: "website",
  },
}

const JavaForBeginerApp = () => {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Java Tutorial for Beginners",
    description:
      "Java tutorial for beginners with Core Java, Spring Boot, and Microservices lessons.",
    url: "https://javaacademyhub.com/",
    inLanguage: ["en-US", "en-GB", "en-AU"],
    keywords: [
      "java tutorial",
      "java tutorial for beginners",
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
              Java Tutorial for Beginners
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Looking for a complete Java tutorial? This Java tutorial for beginners
              covers Core Java basics, OOP, collections, Spring Boot, and
              Microservices with easy examples and practical lessons.
            </p>
          </div>
        </section>
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