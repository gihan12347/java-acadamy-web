"use client";
import { sections } from "./constant.js";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LearningOverview = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-full shadow-lg border-2 border-red-200 mb-6">
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
          <h1 className="text-6xl font-black text-gray-900 mb-6 leading-tight">
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
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            A comprehensive guide for beginners covering everything from Core
            Java to building enterprise applications
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            // Since we are applying a single theme, we use the red colors consistently
            const isRed = true;

            return (
              <div
                key={section.id}
                // Border and hover effects are red
                className={`group relative bg-white rounded-3xl p-8 shadow-xl border-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                  isRed
                    ? "border-red-200 hover:border-red-400"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                {/* Icon */}
                <div
                  // Icon background gradient is red
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${
                    isRed
                      ? "bg-gradient-to-br from-red-500 to-red-700"
                      : "bg-gradient-to-br from-gray-500 to-gray-700"
                  }`}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
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
                      className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
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
    </div>
  );
};

export default LearningOverview;
