"use client";
import { sections } from "./constant.js";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LearningOverview = () => {
  return (
    <section className="bg-white">
      <div className="app-shell py-8 sm:py-10 lg:py-12">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md border border-red-200 mb-6">
            <img
              src="/images/logo.png"
              alt="Java Icon"
              className="w-7 h-7 object-contain"
            />
            <span className="font-bold text-red-600 tracking-wider">
              JAVA LEARNING PATH
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Learn{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Java
            </span>{" "}
            from {/* Using a darker red gradient for contrast */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-red-800">
              Scratch
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            A comprehensive guide for beginners covering everything from Core
            Java to building enterprise applications
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-8">
          {sections.map((section) => {
            const Icon = section.icon;
            // Since we are applying a single theme, we use the red colors consistently
            const isRed = true;

            return (
              <div
                key={section.id}
                // Border and hover effects are red
                className={`group relative h-full bg-white rounded-3xl p-6 sm:p-7 shadow-lg border-2 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer ${
                  isRed
                    ? "border-red-200 hover:border-red-400"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                {/* Icon */}
                <div
                  // Icon background gradient is red
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform ${
                    isRed
                      ? "bg-gradient-to-br from-red-500 to-red-700"
                      : "bg-gradient-to-br from-gray-500 to-gray-700"
                  }`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {section.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 min-h-[72px] sm:min-h-[96px]">
                  {section.description}
                </p>

                {/* Arrow */}
                <Link href={`/module?section_id=${section.id}`}>
                  <div className="flex items-center justify-between">
                    <span
                      // Start Learning text is red
                      className={`font-bold text-sm ${
                        isRed ? "text-red-600" : "text-gray-600"
                      }`}
                    >
                      Start Learning
                    </span>
                    <div
                      // Chevron background is light red
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
                        isRed
                          ? "bg-red-100 group-hover:bg-red-200"
                          : "bg-gray-100 group-hover:bg-gray-200"
                      }`}
                    >
                      <ChevronRight
                        // Chevron icon is red
                        className={`w-6 h-6 ${
                          isRed ? "text-red-600" : "text-gray-600"
                        }`}
                        strokeWidth={3}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningOverview;
