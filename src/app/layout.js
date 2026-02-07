import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: {
    default: 'Java Academy Hub | Learn Java Programming Online',
    template: '%s | Java Academy Hub',
  },
  description:
    'Learn Java programming online with step-by-step tutorials. From Core Java basics to advanced topics like Spring Boot and Microservices. Perfect for beginners and professionals in USA, Europe, Australia, and New Zealand.',

  metadataBase: new URL('https://javaacademyhub.com'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Java Academy Hub | Learn Java Programming Online',
    description:
      'Master Java programming with easy-to-follow lessons. Covers Core Java, OOP, Spring Boot, and Microservices. Trusted by learners worldwide.',
    url: 'https://javaacademyhub.com',
    siteName: 'Java Academy Hub',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Java Academy Hub | Learn Java Programming Online',
    description:
      'Learn Java online with structured tutorials. From beginner to advanced Java, Spring Boot & Microservices.',
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
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Geo + Language Signals */}
        <meta name="language" content="English" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* Optional: International Targeting */}
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-us" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-gb" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-au" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="en-nz" />
        <link rel="alternate" href="https://javaacademyhub.com" hrefLang="x-default" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
