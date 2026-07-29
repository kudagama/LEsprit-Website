"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

export default function JourneyBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    notes: "",
  });
  const [selectedStyles, setSelectedStyles] = useState(["Ultra Luxury"]);
  const [submitted, setSubmitted] = useState(false);

  const styleOptions = [
    "Ultra Luxury",
    "Cultural Heritage",
    "Wildlife Safaris",
    "Wellness & Ayurveda",
    "Romantic Escape",
  ];

  const toggleStyle = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-paper-parchment relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white border border-charcoal/5 rounded p-8 sm:p-16 shadow-glass relative">
          <div className="text-center mb-16">
            <span className="font-sans text-[0.65rem] font-semibold text-charcoal/50 tracking-[0.2em] uppercase block mb-4">
              Bespoke Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-charcoal font-medium mb-4">
              Craft Your <span className="text-gold-dark italic font-light">Itinerary</span>
            </h2>
            <p className="font-sans text-charcoal/70 text-sm font-light max-w-xl mx-auto">
              Share your vision with our Atelier Designers. We curate tailor-made proposals within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-10">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  id="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer w-full px-0 py-3 bg-transparent border-b border-charcoal/20 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 text-xs text-charcoal/50 uppercase tracking-widest font-sans font-semibold transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:[font-size:0.6rem] peer-[:not(:placeholder-shown)]:text-charcoal"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer w-full px-0 py-3 bg-transparent border-b border-charcoal/20 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 text-xs text-charcoal/50 uppercase tracking-widest font-sans font-semibold transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:[font-size:0.6rem] peer-[:not(:placeholder-shown)]:text-charcoal"
                >
                  Email Address
                </label>
              </div>
            </div>

            {/* Destination */}
            <div className="relative pt-2">
              <label className="text-[0.6rem] text-charcoal uppercase tracking-widest font-sans font-semibold block mb-2">
                Preferred Destination
              </label>
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-0 py-3 bg-transparent border-b border-charcoal/20 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Select a region...
                </option>
                <option value="Sri Lanka">Sri Lanka (Cultural & Wildlife)</option>
                <option value="Maldives">Maldives (Ocean Sanctuary)</option>
                <option value="Sri Lanka & Maldives Combined">Sri Lanka & Maldives Combined</option>
              </select>
            </div>

            {/* Style Chips */}
            <div className="pt-2">
              <label className="text-[0.6rem] text-charcoal uppercase tracking-widest font-sans font-semibold block mb-4">
                Travel Style & Focus
              </label>
              <div className="flex flex-wrap gap-3">
                {styleOptions.map((style) => {
                  const isSelected = selectedStyles.includes(style);
                  return (
                    <button
                      type="button"
                      key={style}
                      onClick={() => toggleStyle(style)}
                      className={`px-5 py-2.5 rounded-full text-[0.65rem] font-sans font-semibold uppercase tracking-wider transition-all border ${
                        isSelected
                          ? "bg-charcoal text-white border-charcoal"
                          : "bg-transparent text-charcoal/60 border-charcoal/20 hover:border-charcoal"
                      }`}
                    >
                      {style}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div className="relative pt-2">
              <textarea
                rows={3}
                id="notes"
                placeholder=" "
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="peer w-full px-0 py-3 bg-transparent border-b border-charcoal/20 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors placeholder-transparent resize-none"
              />
              <label
                htmlFor="notes"
                className="absolute left-0 top-3 text-xs text-charcoal/50 uppercase tracking-widest font-sans font-semibold transition-all peer-focus:-top-4 peer-focus:text-[0.6rem] peer-focus:text-charcoal peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:[font-size:0.6rem] peer-[:not(:placeholder-shown)]:text-charcoal"
              >
                Special Preferences (Dates, Size, Requirements)
              </label>
            </div>

            <div className="text-center pt-8">
              <button
                type="submit"
                className="px-12 py-4 bg-charcoal text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gold-dark transition-colors inline-flex items-center gap-3"
              >
                <span>Submit Request</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white p-12 max-w-lg w-full text-center relative shadow-2xl border border-charcoal/5"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute top-6 right-6 text-charcoal/50 hover:text-charcoal transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-full border border-gold-dark text-gold-dark flex items-center justify-center mx-auto mb-6">
                <span className="font-serif text-xl italic">L</span>
              </div>
              <h3 className="font-serif text-2xl text-charcoal font-medium mb-3">Request Received</h3>
              <p className="font-sans text-xs text-charcoal/70 font-light mb-8 leading-relaxed">
                Thank you for your interest in L’ESPRIT VOYAGES. Our Atelier Designers will be in touch shortly.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-4 bg-charcoal text-white font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] hover:bg-gold-dark transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
