"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, X } from "lucide-react";

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
    "✨ Ultra Luxury",
    "🏛️ Cultural Heritage",
    "🐆 Wildlife Safaris",
    "🌿 Wellness & Ayurveda",
    "💍 Honeymoon / Romantic Escape",
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
    <section id="contact" className="py-24 bg-paper-parchment relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white border border-gold-border rounded-2xl p-8 sm:p-14 shadow-glass relative">
          <div className="text-center mb-12">
            <span className="font-cinzel text-xs text-gold-dark tracking-widest uppercase block mb-2">
              Bespoke Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-3">
              Let’s Craft Your <span className="gold-gradient-text">Bespoke Itinerary</span>
            </h2>
            <p className="font-sans text-charcoal/70 text-sm sm:text-base max-w-xl mx-auto">
              Share your travel vision with our Senior Atelier Designers. We will curate a tailor-made proposal within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="font-cinzel text-xs text-indigo-dark tracking-wider uppercase block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-ivory-sacred border border-gold-border/40 rounded text-sm text-charcoal focus:outline-none focus:border-gold-primary focus:bg-white transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-cinzel text-xs text-indigo-dark tracking-wider uppercase block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 bg-ivory-sacred border border-gold-border/40 rounded text-sm text-charcoal focus:outline-none focus:border-gold-primary focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="font-cinzel text-xs text-indigo-dark tracking-wider uppercase block mb-2">
                Preferred Destination *
              </label>
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3.5 bg-ivory-sacred border border-gold-border/40 rounded text-sm text-charcoal focus:outline-none focus:border-gold-primary focus:bg-white transition-all"
              >
                <option value="" disabled>
                  Select Destination
                </option>
                <option value="Sri Lanka">Sri Lanka (Cultural & Wildlife Expedition)</option>
                <option value="Maldives">Maldives (Overwater Villa Sanctuary)</option>
                <option value="Sri Lanka & Maldives Combined">
                  Sri Lanka & Maldives Combined (Dual Paradise)
                </option>
              </select>
            </div>

            {/* Style Chips */}
            <div>
              <label className="font-cinzel text-xs text-indigo-dark tracking-wider uppercase block mb-3">
                Travel Style & Primary Focus
              </label>
              <div className="flex flex-wrap gap-2">
                {styleOptions.map((style) => {
                  const isSelected = selectedStyles.includes(style);
                  return (
                    <button
                      type="button"
                      key={style}
                      onClick={() => toggleStyle(style)}
                      className={`px-4 py-2 rounded-full text-xs font-sans transition-all border ${
                        isSelected
                          ? "bg-indigo-dark text-gold-primary border-gold-primary"
                          : "bg-ivory-sacred text-charcoal/70 border-gold-border/40 hover:bg-gold-primary/10"
                      }`}
                    >
                      {style}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="font-cinzel text-xs text-indigo-dark tracking-wider uppercase block mb-2">
                Special Preferences & Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your estimated travel dates, duration, party size, dietary or flight preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3.5 bg-ivory-sacred border border-gold-border/40 rounded text-sm text-charcoal focus:outline-none focus:border-gold-primary focus:bg-white transition-all"
              />
            </div>

            <div className="text-center pt-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-widest rounded shadow-gold inline-flex items-center gap-3"
              >
                <span>Request Bespoke Proposal</span>
                <Send className="w-4 h-4" />
              </motion.button>
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
            className="fixed inset-0 z-50 bg-indigo-deep/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border border-gold-primary rounded-xl max-w-lg w-full p-8 text-center text-charcoal relative shadow-2xl"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute top-4 right-4 text-gold-dark p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <CheckCircle2 className="w-14 h-14 text-gold-primary mx-auto mb-4" />
              <h3 className="font-serif text-3xl text-indigo-dark mb-2">Bespoke Request Received</h3>
              <p className="font-sans text-xs text-charcoal/70 mb-6">
                Thank you for placing your trust in L’ESPRIT VOYAGES.
              </p>

              <div className="bg-ivory-sacred p-4 rounded text-left font-sans text-xs space-y-2 mb-6 border border-gold-border/30">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Destination:</strong> {formData.destination}</p>
                <p><strong>Styles:</strong> {selectedStyles.join(", ")}</p>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="w-full py-3 bg-gold-primary text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded"
              >
                Return To Experience
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
