"use client";
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import { sections } from './constant';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    console.log("Toggling dropdown for section ID:", id);
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Define Red Color Palette for consistency
  const COLOR_PRIMARY_GRADIENT = 'from-red-600 to-red-700';
  const COLOR_LIGHT_GRADIENT = 'from-red-50/80 via-white/80 to-red-50/80';
  const COLOR_TEXT_ACTIVE = 'text-red-600';
  const COLOR_BG_ACTIVE = 'bg-gradient-to-r from-red-50 to-red-100';
  const COLOR_RING = 'ring-red-300';
  const COLOR_HOVER_BG = 'hover:bg-red-50';

  return (
    <header className={`${COLOR_LIGHT_GRADIENT} backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-red-200/30`}>
      {/* Main Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo and Brand - Horizontal Layout for Better Space Usage */}
          <a href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              {/* Circular glow effect (Red) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${COLOR_PRIMARY_GRADIENT} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
              {/* Circular logo container (Red Ring) */}
              <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform overflow-hidden ring-4 ${COLOR_RING} group-hover:ring-red-400`}>
                {/* Replace the src below with your actual logo path */}
                <img 
                  src="images/logo.png" 
                  alt="Java Academy Logo" 
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                {/* Fallback SVG Logo (Red) */}
                <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 hidden">
                  <path d="M30 40 L30 70 Q30 75 35 75 L65 75 Q70 75 70 70 L70 40 Z" fill="#D946EF" />
                  <rect x="25" y="35" width="50" height="8" rx="2" fill="#4A5568" />
                  <path d="M40 25 Q42 20 40 15" stroke="#D946EF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M50 25 Q52 20 50 15" stroke="#D946EF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M60 25 Q62 20 60 15" stroke="#D946EF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                {/* Brand Name (Red Accent) */}
                <span className={`bg-gradient-to-r ${COLOR_PRIMARY_GRADIENT} bg-clip-text text-transparent`}>Java</span>
                <span className="text-gray-700"> Academy</span>
              </h1>
              <p className="text-xs text-gray-500 font-medium">Master Java Development</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-end">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeDropdown === section.id;
              return (
                <div key={section.id} className="relative">
                  <button
                    onMouseEnter={() => setActiveDropdown(section.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all font-medium text-sm whitespace-nowrap group ${
                      isActive 
                        ? `${COLOR_BG_ACTIVE} ${COLOR_TEXT_ACTIVE} shadow-sm` 
                        : `text-gray-600 ${COLOR_HOVER_BG}`
                    }`}
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? COLOR_TEXT_ACTIVE : 'text-gray-400'
                    }`} />
                    <span>{section.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${isActive ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isActive && (
                    <div 
                      className={`absolute mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 ${
                        section.id === 'apis' || section.id === 'build-tools' ? 'left-auto right-0' : 'left-1/2 -translate-x-1/2'
                      }`}
                      onMouseLeave={() => setActiveDropdown(null)}
                      style={{
                        maxHeight: 'calc(100vh - 100px)',
                        overflowY: 'auto'
                      }}
                    >
                      {/* Dropdown Header - Section color is now Red */}
                      <div className={`bg-gradient-to-r ${COLOR_PRIMARY_GRADIENT} px-5 py-4`}>
                        <div className="flex items-center gap-3 text-white">
                          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{section.name}</h3>
                            <p className="text-xs text-white/80 font-medium">{section.topics.length} Topics to Master</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Topics List */}
                      <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-2 grid grid-cols-2 gap-1">
                        {section.topics.map((topic, idx) => (
                          <a
                            key={idx}
                            href={topic.url}
                            className={`flex items-start gap-2 px-2 py-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent rounded-xl transition-all group my-1`}
                          >
                            {/* Topic Index Circle (Red) */}
                            <span className={`w-6 h-6 flex items-center justify-center rounded-lg bg-gray-100 text-xs font-bold text-gray-500 group-hover:bg-gradient-to-br group-hover:${COLOR_PRIMARY_GRADIENT} group-hover:text-white transition-all flex-shrink-0 shadow-sm`}>
                              {idx + 1}
                            </span>
                            <span className={`text-xs font-medium group-hover:${COLOR_TEXT_ACTIVE} transition-colors leading-tight`}>{topic.topic}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 text-gray-600 transition-all flex-shrink-0 active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-lg animate-in slide-in-from-top duration-200">
          <div className="w-full px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
            {/* Home Link (Red) */}
            <a
              href="/"
              className={`flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-transparent rounded-xl transition-all group`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-red-100 group-hover:to-red-200 transition-all">
                <Home className={`w-5 h-5 text-gray-600 group-hover:${COLOR_TEXT_ACTIVE}`} />
              </div>
              <span className={`font-semibold text-gray-800 group-hover:${COLOR_TEXT_ACTIVE} transition-colors`}>Home</span>
            </a>
            
            {sections.map((section) => {
              const Icon = section.icon;
              const isOpen = activeDropdown === section.id;
              return (
                <div key={section.id} className="border-b border-gray-100 last:border-b-0 pb-2">
                  <button
                    onClick={() => toggleDropdown(section.id)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all ${
                      isOpen ? 'bg-gradient-to-r from-red-50 to-transparent' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Section Icon Background (Red) */}
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${COLOR_PRIMARY_GRADIENT} flex items-center justify-center shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800">{section.name}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="mt-2 ml-2 mr-2 bg-gradient-to-br from-gray-50 to-transparent rounded-xl overflow-hidden border border-gray-100">
                      {section.topics.map((topic, idx) => (
                        <a
                          key={idx}
                          href={topic.url}
                          className={`flex items-start gap-3 px-4 py-3 text-sm text-gray-600 group-hover:text-red-600 hover:bg-white transition-all border-b border-gray-100 last:border-b-0 group`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {/* Topic Index Circle (Red) */}
                          <span className={`w-7 h-7 flex items-center justify-center rounded-lg bg-white text-xs font-bold text-gray-500 group-hover:bg-gradient-to-br group-hover:${COLOR_PRIMARY_GRADIENT} group-hover:text-white transition-all shadow-sm flex-shrink-0`}>
                            {idx + 1}
                          </span>
                          <span className={`pt-1 font-medium group-hover:${COLOR_TEXT_ACTIVE}`}>{topic.topic}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;