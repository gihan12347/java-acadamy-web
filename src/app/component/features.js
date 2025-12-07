import React from 'react';
import { Code, Calculator, Globe, Database, Clock, ArrowRight, Sparkles } from 'lucide-react';

const FeaturedTutorials = () => {
  const tutorials = [
    {
      id: 1,
      icon: Code,
      title: 'Build Your First Java Program',
      subtitle: '"Hello World" Explained',
      description: 'Start your Java journey by creating your very first program. Learn the basics of Java syntax and structure.',
      duration: '5 min',
      level: 'Beginner',
      color: 'red', 
      link: 'https://www.geeksforgeeks.org/java/java-hello-world-program'
    },
    {
      id: 2,
      icon: Calculator,
      title: 'Make a Calculator App in Java',
      subtitle: 'Step-by-Step Guide',
      description: 'Build a functional calculator application using core Java concepts including operators and control flow.',
      duration: '15 min',
      level: 'Beginner',
      color: 'red',
      link: 'https://www.geeksforgeeks.org/java/basic-calculator-program-using-java'
    },
    {
      id: 3,
      icon: Globe,
      title: 'Your First Web App',
      subtitle: 'With JSP and Servlets',
      description: 'Create dynamic web applications using JavaServer Pages and Servlets. Perfect introduction to web development.',
      duration: '25 min',
      level: 'Intermediate',
      color: 'red', 
      link: 'https://javatrainingschool.com/first-jsp-application'
    },
    {
      id: 4,
      icon: Database,
      title: 'Connect Java to MySQL',
      subtitle: 'In 10 Minutes',
      description: 'Master database connectivity with JDBC. Learn to read, write, and manage data in MySQL databases.',
      duration: '10 min',
      level: 'Intermediate',
      color: 'red',
      link: 'https://www.geeksforgeeks.org/java/java-database-connectivity-with-mysql'
    }
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-lg border-2 border-red-200 mb-6">
            <Sparkles className="w-5 h-5 text-red-500" />
            <span className="font-bold text-red-600 tracking-wider">POPULAR TUTORIALS</span>
          </div>
          
          <h2 className="text-5xl font-black text-gray-900 mb-4 leading-tight">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Tutorials
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with these hands-on tutorials and build real Java applications from scratch
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {tutorials.map((tutorial) => {
            const Icon = tutorial.icon;
            
            // Note: Since all tutorials are now 'red', we can simplify the logic, 
            // but keeping it dynamic just in case other colors are added later.
            const isRed = tutorial.color === 'red';
            
            return (
              <div
                key={tutorial.id}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
              >
                {/* Decorative corner gradient */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${
                  isRed 
                    ? 'bg-gradient-to-bl from-red-100 to-transparent' // Changed from orange/blue
                    : 'bg-gradient-to-bl from-gray-100 to-transparent'
                } opacity-50 rounded-bl-full`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start gap-5 mb-6">
                    {/* Icon Box */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${
                      isRed
                        ? 'bg-gradient-to-br from-red-500 to-red-700' // Changed from orange/blue
                        : 'bg-gradient-to-br from-gray-500 to-gray-700'
                    }`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          isRed
                            ? 'bg-red-100 text-red-700' // Changed from orange/blue
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {tutorial.level}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {tutorial.title}
                      </h3>
                      <p className={`text-sm font-semibold ${
                        isRed ? 'text-red-600' : 'text-gray-600' // Changed from orange/blue
                      }`}>
                        {tutorial.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {tutorial.description}
                  </p>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-semibold">{tutorial.duration}</span>
                    </div>                    
                    
                    {/* Link/Button */}
                    <a
                      href={tutorial.link} 
                      target='_blank'
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg group-hover:shadow-xl transition-all ${
                          isRed
                          ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800' // Changed from orange/blue
                          : 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
                      }`}
                    >
                      Start Tutorial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                  isRed ? 'border-red-400' : 'border-gray-400' // Changed from orange/blue
                }`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTutorials;