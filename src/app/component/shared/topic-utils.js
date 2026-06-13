const siteUrl = "https://javaacademyhub.com";

export function getTopicIndex(section, slug) {
  if (!section?.topics) return 0;
  const index = section.topics.findIndex((t) => t.url === slug);
  return index >= 0 ? index : 0;
}

export function buildTopicMetadata(topic) {
  const title =
    topic.metaTitle || `${topic.title} | Java Tutorial for Beginners`;
  const description = topic.metaDescription || topic.intro;
  const keywords = [
    ...(topic.keywords || []),
    "java tutorial",
    "learn java online",
    "java programming course",
    "java for beginners",
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: topic.slug,
      languages: {
        "en-US": topic.slug,
        "en-GB": topic.slug,
        "en-AU": topic.slug,
        "x-default": topic.slug,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${topic.slug}`,
      type: "article",
      locale: "en_US",
      localeAlternate: ["en_GB", "en_AU"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildArticleSchema(topic) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: topic.title,
    description: topic.metaDescription || topic.intro,
    inLanguage: ["en-US", "en-GB", "en-AU"],
    author: {
      "@type": "Organization",
      name: "Java Academy Hub",
    },
    publisher: {
      "@type": "Organization",
      name: "Java Academy Hub",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${siteUrl}${topic.slug}`,
    about: topic.keywords?.[0] || "Java Programming",
  };
}

export function buildFaqSchema(faq) {
  if (!faq?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
