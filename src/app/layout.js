import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const siteUrl = 'https://javaacademyhub.com'
const defaultTitle = 'Java Academy Hub | Learn Java Programming Online'
const defaultDescription =
  'Learn Java programming online with step-by-step tutorials for learners in the USA, Europe, and Australia. Master Core Java, OOP, Spring Boot, and Microservices with practical examples.'

export const metadata = {
  title: {
    default: defaultTitle,
    template: '%s | Java Academy Hub',
  },
  applicationName: 'Java Academy Hub',
  description: defaultDescription,
  metadataBase: new URL(siteUrl),
  keywords: [
    'learn java online',
    'java tutorials for beginners',
    'core java tutorial',
    'spring boot tutorial',
    'microservices java',
    'java course usa',
    'java course europe',
    'java course australia',
  ],
  category: 'education',

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'en-GB': '/',
      'en-AU': '/',
      'x-default': '/',
    },
  },

  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: 'Java Academy Hub',
    locale: 'en_US',
    localeAlternate: ['en_GB', 'en_AU'],
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'Java Academy Hub',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/images/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'content-language': 'en-US, en-GB, en-AU',
  },
}

export default function RootLayout({ children }) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Java Academy Hub',
    url: siteUrl,
    description: defaultDescription,
    inLanguage: ['en-US', 'en-GB', 'en-AU'],
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Java Academy Hub',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    areaServed: ['US', 'GB', 'AU'],
    knowsAbout: ['Java Programming', 'Spring Boot', 'Microservices'],
  }

  return (
    <html lang="en">
      <head>
        {/* Geo + Language Signals */}
        <meta name="language" content="English" />
        <meta httpEquiv="content-language" content="en-US, en-GB, en-AU" />
        <meta name="distribution" content="global" />

        {/* Optional: International Targeting */}
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-us" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-gb" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-au" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="x-default" />

        {/* Structured Data */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NF4H6L1W9Y"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NF4H6L1W9Y', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
