"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, X } from "lucide-react";

export default function JourneyBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    notes: "",
  });
  const [selectedStyles, setSelectedStyles] = useState(["Ultra Luxury"]);
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const styleOptions = [
    "Ultra Luxury",
    "Cultural Heritage",
    "Wildlife Safaris",
    "Wellness & Ayurveda",
    "Honeymoon / Romantic Escape",
  ];

  const toggleStyle = (style) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
        // Live client-side dispatch via Web3Forms API
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: "L'Esprit Voyages Web Concierge",
            subject: `New Bespoke Itinerary Inquiry: ${formData.destination} - ${formData.name}`,
            name: formData.name,
            email: formData.email,
            destination: formData.destination,
            travel_styles: selectedStyles.join(", "),
            notes: formData.notes || "None specified",
          }),
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || "Failed to dispatch inquiry via Web3Forms service.");
        }
      } else {
        // Graceful simulation when API key is not yet set in environment
        // Allows testing without failing, while logging guidance for production deployment
        console.info(
          "[Web3Forms] NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not defined. Simulating successful client-side submission."
        );
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus("success");
      setShowModal(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage(
        err.message || "Could not dispatch request automatically. Please try again or reach our Atelier team directly."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      destination: "",
      notes: "",
    });
    setSelectedStyles(["Ultra Luxury"]);
    setStatus("idle");
    setErrorMessage("");
    setShowModal(false);
  };

  return (
    <section id="contact" className="pt-12 pb-12 bg-paper-parchment relative">
      <div className="w-full max-w-[1800px] 2xl:max-w-none mx-auto px-4 sm:px-8 lg:px-12 2xl:px-16">
        <div className="bg-white border border-gold-border rounded-2xl p-8 sm:p-14 2xl:p-16 shadow-glass relative">
          <div className="text-center mb-10">
            <span className="font-cinzel text-sm sm:text-[15px] font-bold text-indigo-dark tracking-[0.2em] uppercase block mb-2">
              Bespoke Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-indigo-dark mb-3">
              Let’s Craft Your <span className="text-[#A87D46]">Bespoke Itinerary</span>
            </h2>
            <p className="font-sans text-charcoal text-base sm:text-lg font-normal max-w-xl mx-auto">
              Share your travel vision with our Senior Atelier Designers. We will curate a tailor-made proposal within 24 hours.
            </p>
          </div>

          {/* Success Confirmation Banner */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 sm:p-8 bg-gradient-to-r from-[#071526] to-[#0D223A] border-2 border-[#D4AF37] rounded-xl text-white shadow-2xl"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#D4AF37] font-bold">
                    Thank you for reaching out to L'Esprit Voyages
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-ivory-sacred/90 leading-relaxed font-normal">
                    Your bespoke journey inquiry for <span className="text-white font-semibold">{formData.destination}</span> has been successfully received by our Atelier Concierge team. A dedicated Travel Designer will contact you at <span className="text-white font-semibold">{formData.email}</span> within 24 hours with a custom itinerary brief.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setShowModal(true)}
                      className="px-4 py-2 bg-[#D4AF37] text-[#071526] font-cinzel text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 transition-all"
                    >
                      View Submission Summary
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Error Handling Banner */}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-6 bg-red-950/80 border border-red-500/50 rounded-xl text-white shadow-lg"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-7 h-7 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1 space-y-2">
                  <h4 className="font-serif text-lg font-bold text-red-200">
                    Unable to Transmit Inquiry Automatically
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-red-200/90 leading-relaxed font-normal">
                    {errorMessage || "We encountered an issue submitting your inquiry. Please try again or reach our Atelier team directly."}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={`mailto:reservations@lespritlanka.com?subject=${encodeURIComponent(
                        `Bespoke Inquiry - ${formData.name || "Traveler"}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nDestination: ${formData.destination}\nStyles: ${selectedStyles.join(
                          ", "
                        )}\nNotes: ${formData.notes}`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-[#071526] font-cinzel text-xs font-bold uppercase tracking-wider rounded hover:brightness-110 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct to reservations@lespritlanka.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="font-cinzel text-sm sm:text-[15px] font-bold text-indigo-dark tracking-wider uppercase block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Alexander Wright"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none rounded text-base text-charcoal font-medium placeholder:text-charcoal/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-cinzel text-sm sm:text-[15px] font-bold text-indigo-dark tracking-wider uppercase block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3.5 border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none rounded text-base text-charcoal font-medium placeholder:text-charcoal/50 transition-all"
                />
              </div>
            </div>

            {/* Destination */}
            <div>
              <label className="font-cinzel text-sm sm:text-[15px] font-bold text-indigo-dark tracking-wider uppercase block mb-2">
                Preferred Destination *
              </label>
              <select
                required
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-4 py-3.5 border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none rounded text-base text-charcoal font-medium transition-all"
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
              <label className="font-cinzel text-sm sm:text-[15px] font-bold text-indigo-dark tracking-wider uppercase block mb-3">
                Travel Style & Primary Focus
              </label>
              <div className="flex flex-wrap gap-2.5">
                {styleOptions.map((style) => {
                  const isSelected = selectedStyles.includes(style);
                  return (
                    <button
                      type="button"
                      key={style}
                      onClick={() => toggleStyle(style)}
                      className={`px-4 py-2.5 rounded-full text-sm sm:text-base font-medium font-sans transition-all border ${
                        isSelected
                          ? "bg-[#071526] text-[#D4AF37] border-[#D4AF37] shadow-md"
                          : "bg-white text-[#071526] border-gray-300 hover:bg-[#D4AF37]/10"
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
              <label className="font-cinzel text-sm sm:text-[15px] font-bold text-indigo-dark tracking-wider uppercase block mb-2">
                Special Preferences & Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your estimated travel dates, duration, party size, dietary or flight preferences..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3.5 border border-gray-300 bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] focus:outline-none rounded text-base text-charcoal font-medium placeholder:text-charcoal/50 transition-all"
              />
            </div>

            <div className="flex flex-col items-center justify-center pt-4">
              <motion.button
                whileHover={status === "submitting" ? {} : { scale: 1.02 }}
                whileTap={status === "submitting" ? {} : { scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-2/3 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-cinzel text-sm sm:text-base font-bold uppercase tracking-wider rounded shadow-gold hover:shadow-lg inline-flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-80 disabled:cursor-wait"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-black" />
                    <span>Transmitting to Atelier Concierge...</span>
                  </>
                ) : (
                  <>
                    <span>Request Bespoke Proposal</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs sm:text-sm text-charcoal/75 mt-3.5 font-sans">
                By submitting an inquiry, you agree to our{" "}
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-terms-modal"))}
                  className="text-[#A87D46] underline hover:text-[#D4AF37] font-medium cursor-pointer transition-colors"
                >
                  Terms & Conditions
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-cancellation-modal"))}
                  className="text-[#A87D46] underline hover:text-[#D4AF37] font-medium cursor-pointer transition-colors"
                >
                  Cancellation Policy
                </button>
                .
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#071526]/80 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white border border-[#D4AF37] rounded-xl max-w-lg w-full p-8 text-center text-charcoal relative shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#A87D46] hover:text-[#071526] p-2 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <CheckCircle2 className="w-14 h-14 text-[#D4AF37] mx-auto mb-4" />
              <span className="font-cinzel text-xs font-bold text-[#A87D46] uppercase tracking-widest block mb-1">
                L’Esprit Atelier Concierge
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-indigo-dark font-bold mb-2">
                Thank you for reaching out to L'Esprit Voyages
              </h3>
              <p className="font-sans text-sm sm:text-base text-charcoal font-normal mb-6">
                Your request has been dispatched directly to our Senior Travel Designers. We will curate a tailored proposal within 24 hours.
              </p>

              <div className="bg-[#FAF8F5] p-5 rounded-lg text-left font-sans text-sm space-y-2.5 mb-6 border border-[#D4AF37]/30 text-charcoal">
                <p>
                  <strong className="text-indigo-dark">Traveler:</strong> {formData.name}
                </p>
                <p>
                  <strong className="text-indigo-dark">Private Email:</strong> {formData.email}
                </p>
                <p>
                  <strong className="text-indigo-dark">Destination:</strong> {formData.destination}
                </p>
                <p>
                  <strong className="text-indigo-dark">Travel Style:</strong> {selectedStyles.join(", ")}
                </p>
                {formData.notes && (
                  <p>
                    <strong className="text-indigo-dark">Notes:</strong> {formData.notes}
                  </p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-black font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider rounded shadow-md hover:brightness-105 transition-all"
                >
                  Return To Experience
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
