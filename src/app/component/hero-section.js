"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from "./constant.js";

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gradient-to-br from-red-900 via-red-800 to-rose-900 py-8 md:py-10 lg:py-12">
      <div className="app-shell">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Slideshow */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[220px] sm:h-[280px] lg:h-[340px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 group">
              {/* Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover sm:object-contain"
                  />
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 sm:bg-white/20 hover:bg-red-600 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 sm:bg-white/20 hover:bg-red-600 backdrop-blur-sm text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-10 sm:w-12 h-2.5 sm:h-3 bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-600/50'
                        : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Welcome to Java Beginners' Hub!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-3 sm:mb-4">
              Learn Java step-by-step — from Core Java to Web Development.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto lg:mx-0">
              Start your journey with easy tutorials, code examples, and projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;