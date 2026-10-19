"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCcw, AlertTriangle, ShieldCheck, Mail, Printer, CheckCircle2, Calendar, DollarSign } from "lucide-react";

export default function CancellationModal({ isOpen, onClose }) {
  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  const cancellationTiers = [
    { notice: "60 days or more", fee: "10%", risk: "Low", desc: "Covers initial administrative & reservation booking fees." },
    { notice: "30 – 59 days", fee: "25%", risk: "Moderate", desc: "Standard deposit deduction for secured accommodations." },
    { notice: "15 – 29 days", fee: "50%", risk: "Substantial", desc: "Partner hotel & private logistics cancellation period." },
    { notice: "7 – 14 days", fee: "75%", risk: "High", desc: "Late cancellation window for reserved fleet & boutique stays." },
    { notice: "0 – 6 days or no-show", fee: "Up to 100%", risk: "Full", desc: "Non-recoverable charter, villa, and private guide allocations." }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0A121D] text-white border border-gold-primary/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cancellation-modal-title"
          >
            {/* Top Ornamental Header */}
            <div className="relative px-6 py-6 sm:px-10 sm:py-7 border-b border-gold-primary/20 bg-gradient-to-r from-[#07101B] via-[#0E1A29] to-[#07101B] shrink-0">
              {/* Subtle Gold Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-80" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary shadow-inner shrink-0">
                    <RotateCcw className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] sm:text-xs text-gold-primary uppercase tracking-[0.25em] font-semibold block">
                      Booking Flexibility & Protection
                    </span>
                    <h2
                      id="cancellation-modal-title"
                      className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide mt-0.5"
                    >
                      L’ESPRIT LANKA <span className="text-gold-primary">—</span> Cancellation & Refund Policy
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold-primary/20 text-gold-warm/80 hover:text-gold-primary hover:border-gold-primary/50 text-xs transition-colors"
                    title="Print Policy"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-primary hover:text-[#071526] text-gold-warm border border-gold-primary/30 flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Subtitle intro */}
              <p className="mt-3 text-xs sm:text-sm text-ivory-sacred/80 font-sans leading-relaxed">
                At <strong>L’ESPRIT LANKA</strong>, we understand that luxury travel plans may change. The following policy outlines the exact terms applicable to cancellations, itinerary amendments, and refunds.
              </p>
            </div>

            {/* Scrollable Content Body */}
            <div className="px-6 py-6 sm:px-10 sm:py-8 overflow-y-auto space-y-6 text-sm text-ivory-sacred/80 font-sans leading-relaxed scrollbar-thin scrollbar-thumb-gold-primary/30 scrollbar-track-transparent">
              
              {/* Section 1: Cancellation Requests */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    01
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                    Cancellation Requests
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/75 leading-relaxed pl-0 sm:pl-10">
                  All cancellations must be submitted in writing to our Atelier Concierge team at{" "}
                  <a
                    href="mailto:reservations@lespritlanka.com"
                    className="text-gold-primary underline hover:text-gold-warm font-medium"
                  >
                    reservations@lespritlanka.com
                  </a>{" "}
                  (or{" "}
                  <a
                    href="mailto:info1@lespritlanka.com"
                    className="text-gold-primary underline hover:text-gold-warm font-medium"
                  >
                    info1@lespritlanka.com
                  </a>
                  ), including the booking reference, itinerary number, and customer details. The cancellation date will be officially recorded as the date we receive the written request.
                </p>
              </div>

              {/* Section 2: Cancellation Charges Schedule Table */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/25 hover:border-gold-primary/45 transition-colors relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    02
                  </span>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                      Standard Cancellation Charges Schedule
                    </h3>
                    <p className="text-[11px] text-ivory-sacred/60 mt-0.5">
                      Unless otherwise agreed in writing, the following charges apply to standard bookings:
                    </p>
                  </div>
                </div>

                {/* Styled Schedule Table */}
                <div className="pl-0 sm:pl-10 mt-3">
                  <div className="overflow-x-auto rounded-lg border border-gold-primary/25 bg-black/40">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-gold-primary/20 bg-gold-primary/10 text-gold-warm font-cinzel tracking-wider text-[11px] uppercase">
                          <th className="py-3 px-4 sm:px-6">Notice Before Arrival</th>
                          <th className="py-3 px-4 sm:px-6">Cancellation Charge</th>
                          <th className="py-3 px-4 sm:px-6 hidden sm:table-cell">Policy Allocation</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gold-primary/10">
                        {cancellationTiers.map((tier, idx) => (
                          <tr key={idx} className="hover:bg-gold-primary/5 transition-colors">
                            <td className="py-3 px-4 sm:px-6 font-medium text-white flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5 text-gold-primary shrink-0" />
                              <span>{tier.notice}</span>
                            </td>
                            <td className="py-3 px-4 sm:px-6 font-bold text-gold-primary">
                              <span className="px-2.5 py-1 rounded bg-gold-primary/15 border border-gold-primary/30 inline-block">
                                {tier.fee}
                              </span>
                            </td>
                            <td className="py-3 px-4 sm:px-6 text-ivory-sacred/65 text-xs hidden sm:table-cell">
                              {tier.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-3 text-[11px] text-ivory-sacred/60 italic leading-relaxed">
                    * Special bookings, peak-season reservations (e.g. Christmas, New Year, Esala Perahera), and non-refundable supplier services may be subject to separate cancellation terms, which will be communicated before confirmation.
                  </p>
                </div>
              </div>

              {/* Section 3: Refunds */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    03
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                    Refunds & Processing Timeline
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/75 leading-relaxed pl-0 sm:pl-10">
                  Refunds will be calculated after deducting applicable cancellation charges and disclosed, non-recoverable costs, subject to applicable law. Approved refunds will normally be processed to the original payment method within <strong className="text-white">14 business days</strong>, although bank and international card processing times may vary.
                </p>
              </div>

              {/* Section 4: Cancellation by the Company */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    04
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                    Cancellation by L’ESPRIT LANKA
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/75 leading-relaxed pl-0 sm:pl-10">
                  If L’ESPRIT LANKA cancels a confirmed tour, we will offer suitable alternatives of equal or superior standing, or prompt refunds in accordance with the booking agreement and applicable law.
                </p>
              </div>

              {/* Section 5: No-Shows and Unused Services */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    05
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                    No-Shows and Unused Services
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/75 leading-relaxed pl-0 sm:pl-10">
                  No refunds are guaranteed for missed tours, unused accommodation, early departures, or other unused services, subject to applicable law and the confirmed booking terms.
                </p>
              </div>

              {/* Section 6: Delays and Exceptional Circumstances */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    06
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                    Delays & Exceptional Circumstances
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/75 leading-relaxed pl-0 sm:pl-10">
                  Flight disruptions, severe weather, natural disasters, government restrictions, and other unforeseen events may affect travel arrangements. We will make reasonable efforts to arrange alternatives, with any refunds or additional costs handled according to the booking terms and applicable law.
                </p>
              </div>

              {/* Section 7: Travel Insurance Recommendation */}
              <div className="p-5 sm:p-6 rounded-xl bg-gold-primary/5 border border-gold-primary/30 hover:border-gold-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/15 border border-gold-primary/30 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    07
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold-primary" />
                    <span>Travel Insurance Recommendation</span>
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/85 leading-relaxed pl-0 sm:pl-10 font-normal">
                  We strongly recommend comprehensive travel insurance covering trip cancellation, medical emergencies, travel delays, lost baggage, and other relevant luxury travel risks.
                </p>
              </div>

              {/* Section 8: Special and Group Bookings */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0">
                    08
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                    Special and Group Bookings
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-ivory-sacred/75 leading-relaxed pl-0 sm:pl-10">
                  Group tours, customized itineraries, peak-season bookings, and special chartered services may have separate cancellation conditions, which will be communicated before booking confirmation.
                </p>
              </div>

              {/* Regulatory Notice */}
              <div className="pt-4 border-t border-gold-primary/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-sacred/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-primary" />
                  <span>All cancellations and refunds are subject to confirmed booking terms and applicable law.</span>
                </div>
                <span>Official SLTDA Reg: <strong>SLTDA/SQA/TA/01954</strong></span>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-6 py-4 sm:px-10 sm:py-4 border-t border-gold-primary/20 bg-[#07101B] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-ivory-sacred/50 text-center sm:text-left">
                Questions? Inquire directly with our Atelier Concierge team.
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded-lg shadow-gold hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Close Policy</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
