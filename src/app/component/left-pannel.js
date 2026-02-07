"use client";
import { ChevronRight, BookOpen } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LeftPanel({ section, selectedTopicId = 0 }) {
  const normalizedSelectedId =
    typeof selectedTopicId === "string"
      ? parseInt(selectedTopicId, 10)
      : selectedTopicId;

  const [localSelectedId, setLocalSelectedId] = useState(normalizedSelectedId);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setLocalSelectedId(normalizedSelectedId);
  }, [normalizedSelectedId]);

  const handleTopicClick = (url) => {
    router.push(url);
  };

  return (
    <div className="h-screen flex flex-col min-h-0">

      <aside className="hidden md:flex flex-col w-72 bg-white border-r-2 border-red-100 shadow-xl min-h-0">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-5 md:p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <BookOpen size={24} className="text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">
              {section?.name || "Topics"}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-red-50 text-sm">
            <div className="w-1.5 h-1.5 bg-red-200 rounded-full"></div>
            <p>{section?.topics?.length || 0} topics available</p>
          </div>
        </div>

        {/* Topics */}
        <nav className="flex-1 min-h-0 overflow-y-auto p-5 pb-20 bg-gray-50">
          {section?.topics?.length ? (
            <ul className="space-y-2">
              {section.topics.map((topic, index) => {
                console.log("topic ::", topic.topic);

                const isSelected = index === localSelectedId;

                return (
                  <li key={index}>
                    <button
                      onClick={() => handleTopicClick(topic.url)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`
                        w-full text-left px-4 py-4 rounded-xl transition-all duration-200
                        flex items-center justify-between group relative
                        ${
                          isSelected
                            ? "bg-red-600 text-white shadow-lg shadow-red-200 scale-[1.02]"
                            : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 hover:shadow-md border border-gray-100"
                        }
                      `}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div
                          className={`
                            flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold
                            ${
                              isSelected
                                ? "bg-white bg-opacity-20 text-white"
                                : "bg-red-50 text-red-600 group-hover:bg-red-100"
                            }
                          `}
                        >
                          {index + 1}
                        </div>

                        <span className="font-medium text-xs md:text-sm truncate group-hover:whitespace-normal group-hover:overflow-visible">
                          {topic.topic}
                        </span>
                      </div>

                      <ChevronRight
                        size={20}
                        className={`
                          flex-shrink-0 transition-all duration-200
                          ${
                            isSelected
                              ? "text-white translate-x-1"
                              : "text-gray-400 group-hover:text-red-600 group-hover:translate-x-1"
                          }
                        `}
                      />

                      {isSelected && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen size={32} className="text-gray-400" />
              </div>
              <p className="font-medium">No topics available</p>
              <p className="text-sm text-gray-400 mt-1">Check back later</p>
            </div>
          )}
        </nav>
      </aside>

    </div>
  );
}