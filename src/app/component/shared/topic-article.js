import Link from "next/link";
import Script from "next/script";
import { buildArticleSchema, buildFaqSchema } from "./topic-utils";

function SectionBlock({ section, index }) {
  if (section.type === "list") {
    return (
      <section className="mb-6 md:mb-8 p-4 sm:p-6 border-l-4 border-red-600 bg-white">
        <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
          {section.title}
        </h2>
        <ul className="space-y-2 list-disc list-inside text-gray-800 text-sm sm:text-base">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.type === "code") {
    return (
      <section className="mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
          {section.title}
        </h2>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 text-green-400 p-4 sm:p-6 text-xs sm:text-sm leading-relaxed">
          <code>{section.code}</code>
        </pre>
      </section>
    );
  }

  if (section.type === "cards") {
    return (
      <section className="mb-6 md:mb-8 bg-white p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
          {section.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {section.cards.map((card, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded border-l-4 border-red-600"
            >
              <h3 className="font-semibold text-red-700 mb-2 text-base sm:text-lg">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-800">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      className={`mb-6 md:mb-8 p-4 sm:p-6 ${
        index % 2 === 0 ? "border-l-4 border-red-600 bg-white" : "bg-gray-50"
      }`}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3">
        {section.title}
      </h2>
      <p className="text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-line">
        {section.body}
      </p>
    </section>
  );
}

export default function TopicArticle({ topic }) {
  const articleSchema = buildArticleSchema(topic);
  const faqSchema = buildFaqSchema(topic.faq);

  return (
    <>
      <Script
        id={`article-schema-${topic.slug.replace(/\//g, "")}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <Script
          id={`faq-schema-${topic.slug.replace(/\//g, "")}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
        <main className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4 px-2">
              {topic.title}
            </h1>
            <p className="text-gray-800 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
              {topic.intro}
            </p>
          </header>

          {topic.sections?.map((section, index) => (
            <SectionBlock key={index} section={section} index={index} />
          ))}

          {topic.faq?.length > 0 && (
            <section className="mb-8 p-4 sm:p-6 bg-white border border-red-100 rounded-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {topic.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group border border-gray-100 rounded-lg p-4"
                  >
                    <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                      {item.question}
                      <span className="text-red-600 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {topic.relatedLinks?.length > 0 && (
            <section className="mb-8 p-4 sm:p-6 bg-red-50 rounded-xl">
              <h2 className="text-lg font-bold text-red-700 mb-3">
                Continue Learning
              </h2>
              <ul className="space-y-2">
                {topic.relatedLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-red-600 hover:text-red-800 font-medium text-sm sm:text-base underline-offset-2 hover:underline"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </article>
    </>
  );
}
