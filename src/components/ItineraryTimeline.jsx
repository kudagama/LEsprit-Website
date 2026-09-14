'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function ItineraryTimeline({ days }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDay = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  if (!days || days.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-5xl mx-auto py-12 px-4 md:px-8 font-sans">
      {/* Vertical Line */}
      <div className="absolute left-[23px] md:left-1/2 top-16 bottom-16 w-px bg-[#D4AF37]/40 transform -translate-x-1/2 z-0"></div>

      <div className="space-y-8 md:space-y-12 relative z-10">
        {days.map((day, index) => {
          const isExpanded = expandedIndex === index;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={cn(
                "relative flex flex-col md:flex-row items-start",
                isLeft ? "md:justify-start" : "md:justify-end"
              )}
            >
              {/* Timeline Node (Dot) */}
              <div className="absolute left-[23px] md:left-1/2 transform -translate-x-1/2 top-8 md:top-10 flex items-center justify-center z-20">
                <div
                  className={cn(
                    "w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-all duration-300",
                    isExpanded
                      ? "bg-[#D4AF37] border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                      : "bg-[#F8F4EC] border-[#D4AF37]/80"
                  )}
                />
              </div>

              {/* Content Box */}
              <div
                className={cn(
                  "w-full md:w-1/2 pl-12 md:pl-0",
                  isLeft ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                )}
              >
                <div
                  className={cn(
                    "rounded-xl overflow-hidden transition-all duration-300 cursor-pointer border",
                    isExpanded
                      ? "bg-[#F8F4EC] shadow-md border-[#D4AF37]/40"
                      : "bg-white shadow-sm border-gray-100 hover:shadow-md hover:border-[#D4AF37]/30"
                  )}
                  onClick={() => toggleDay(index)}
                >
                  {/* Header */}
                  <div className="p-5 md:p-6 flex items-center justify-between">
                    <div className="pr-4">
                      <h4 className="text-[#0D2818] font-serif font-bold text-lg md:text-xl tracking-wide">
                        {day.dayNumber}
                      </h4>
                      <h5 className="text-gray-900 font-medium mt-1 text-[15px] md:text-base leading-snug">
                        {day.title}
                      </h5>
                    </div>
                    <div
                      className={cn(
                        "flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-transform duration-300",
                        isExpanded ? "rotate-180 bg-[#D4AF37]/10 text-[#D4AF37]" : ""
                      )}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[#D4AF37]/10 pt-4">
                          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed whitespace-pre-wrap">
                            {day.description}
                          </p>
                          
                          {day.overnight && (
                            <div className="mt-5 pt-4 border-t border-gray-100/50 flex items-center text-sm font-medium text-gray-700">
                              <MapPin size={16} className="text-[#D4AF37] mr-2 shrink-0" />
                              <span className="text-gray-500 mr-2 uppercase tracking-wider text-xs font-semibold">Overnight:</span>
                              <span className="text-gray-800">{day.overnight}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
