export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://javaacademyhub.com/sitemap.xml',
    host: 'https://javaacademyhub.com',
  }
}
