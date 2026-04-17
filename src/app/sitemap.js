const siteUrl = 'https://javaacademyhub.com'

const routes = [
  '',
  '/complete-java-guide',
  '/module',
  '/intro-java',
  '/java-variables-data-types',
  '/java-control-flow',
  '/java-classes-objects',
  '/java-oop',
  '/java-access-modifiers',
  '/java-class-types',
  '/java-vertual-machine',
  '/java-exception-handling',
  '/java-multithreading',
  '/java-collections-framework',
  '/java-collections-framework/list',
  '/java-collections-framework/set',
  '/java-collections-framework/map',
  '/java-collections-framework/queue',
  '/build-tools-introduction',
  '/maven-basics',
  '/maven-lifecycle',
  '/gradle-basics',
  '/gradle-life-cycle-and-tasks',
  '/gradle-build-file',
  '/build-tools-dependency-management',
  '/build-tools-jar-war',
  '/microservices-introduction',
  '/monolith-vs-microservices',
  '/microservices-communication',
  '/microservices-spring-cloud',
  '/spring-boot-microservices',
]

export default function sitemap() {
  const now = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
