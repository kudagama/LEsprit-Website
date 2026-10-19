"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileText, CheckCircle2, AlertCircle, Scale, Printer } from "lucide-react";

export default function TermsModal({ isOpen, onClose }) {
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

  const termsSections = [
    {
      id: "01",
      title: "Booking and Confirmation",
      paragraphs: [
        "All booking details must be provided by the traveler or by a designated representative booking on behalf of a group. By making a group booking, the representative confirms that they have the authority of the other group members to make the reservation and accept these Terms & Conditions on their behalf.",
        "Upon receiving the booking request, L’ESPRIT LANKA will make reasonable efforts to confirm the requested travel arrangements as soon as possible. A booking will generally become contractually binding once a booking confirmation or confirmation invoice has been issued by our company for the services arranged directly or through third-party suppliers.",
        "Certain travel services, including hotel accommodation, excursions, transportation, and other arrangements, may be subject to availability or additional confirmation from the relevant supplier. Where a service is marked as being subject to confirmation, that service will only be considered confirmed once we have provided specific written confirmation, even if an initial or provisional booking confirmation has already been issued.",
        "The client is responsible for carefully reviewing all details stated in the booking confirmation or invoice, including travel dates, passenger information, itinerary, accommodation, and other requested services. Any errors or discrepancies must be reported to L’ESPRIT LANKA promptly so that corrections can be made where possible."
      ]
    },
    {
      id: "02",
      title: "Your Contract",
      paragraphs: [
        "This contract and the services provided by L’ESPRIT LANKA are governed by the laws of Sri Lanka.",
        "Unless otherwise stated, L’ESPRIT LANKA acts as an agent for third-party service providers, including hotels, airlines, transport operators, and tour or activity providers. While we make reasonable efforts to work with reliable suppliers, we do not directly manage their operations, staff, or equipment.",
        "To the extent permitted by applicable law, L’ESPRIT LANKA shall not be liable for any loss, injury, damage, delay, or inconvenience arising from the acts, omissions, negligence, or failures of independent service providers or other parties outside our reasonable control.",
        "The applicable suppliers’ terms and conditions are available upon request or may be provided with the relevant booking voucher."
      ]
    },
    {
      id: "03",
      title: "Payment Policy",
      paragraphs: [
        "Unless otherwise agreed in writing, full payment is required upon booking confirmation or within the timeframe specified in the booking confirmation email.",
        "L’ESPRIT LANKA reserves the right to withhold services or cancel the booking, subject to applicable cancellation charges and law, if payment is not received by the due date."
      ]
    },
    {
      id: "04",
      title: "Amendments to the Itinerary by the Passenger",
      paragraphs: [
        "Requests to amend confirmed bookings must be submitted through L’ESPRIT LANKA and are subject to availability and additional charges, which shall be borne by the Client.",
        "No refunds or credits will be provided for unused services or missed tour arrangements, subject to applicable law."
      ]
    },
    {
      id: "05",
      title: "Cancellation by the Passenger",
      paragraphs: [
        "Cancellations must be submitted in writing by the lead Client using the email address provided at booking or through our official online channels.",
        "Applicable cancellation charges will be determined by the cancellation policy communicated at the time of booking confirmation."
      ]
    },
    {
      id: "06",
      title: "Changes to the Itinerary by L’ESPRIT LANKA",
      paragraphs: [
        "L’ESPRIT LANKA reserves the right to make necessary changes to confirmed itineraries and will notify the Client as soon as reasonably possible.",
        "We shall not be liable for additional expenses arising from changes beyond our reasonable control, subject to applicable law."
      ]
    },
    {
      id: "07",
      title: "Complaints and Disputes",
      paragraphs: [
        "Any complaints regarding our services or those of our suppliers must be reported to the relevant supplier and L’ESPRIT LANKA as soon as possible, preferably during the tour, to allow an opportunity for resolution. Complaints should be submitted in writing with the booking reference and relevant details.",
        "Unresolved disputes may be referred to a single arbitrator in accordance with the ICC Rules of Arbitration, with English as the language of arbitration and Colombo, Sri Lanka, as the seat of arbitration, subject to applicable law."
      ]
    },
    {
      id: "08",
      title: "L’ESPRIT LANKA’s Liability",
      paragraphs: [
        "To the extent permitted by applicable law, L’ESPRIT LANKA’s total liability shall be limited to the price paid for the specific service concerned by the affected Client(s), excluding insurance premiums and amendment charges. This limitation does not apply to liability that cannot legally be excluded or limited."
      ]
    },
    {
      id: "09",
      title: "Passenger Responsibilities",
      paragraphs: [
        "Clients are responsible for their own health, safety, conduct, and personal expenses, including medical treatment and emergency transportation. Comprehensive travel and medical insurance, including trip cancellation coverage, is strongly recommended.",
        "Clients must ensure they meet all applicable visa, immigration, passport, and health requirements before travelling.",
        "Clients use facilities and services at their own risk, subject to applicable law. Clients are responsible for damage caused by their negligent or reckless conduct and must reimburse L’ESPRIT LANKA or its suppliers for resulting losses, where legally required. Nothing in this clause excludes liability arising from our own negligence or other liability that cannot legally be excluded."
      ]
    },
    {
      id: "10",
      title: "Other Conditions & Safari Activities",
      paragraphs: [
        "Optional excursions and additional services are available at an additional cost.",
        "Wildlife parks visits and safari activities are subject to inherent risks, and Clients must follow all safety instructions provided by guides and operators.",
        "Safari vehicles may be basic, non-air-conditioned, and covered by limited insurance. Clients are advised to confirm the available insurance coverage before participating."
      ]
    }
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
            aria-labelledby="terms-modal-title"
          >
            {/* Top Ornamental Header */}
            <div className="relative px-6 py-6 sm:px-10 sm:py-7 border-b border-gold-primary/20 bg-gradient-to-r from-[#07101B] via-[#0E1A29] to-[#07101B] shrink-0">
              {/* Subtle Gold Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-80" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gold-primary/10 border border-gold-primary/30 flex items-center justify-center text-gold-primary shadow-inner shrink-0">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-cinzel text-[10px] sm:text-xs text-gold-primary uppercase tracking-[0.25em] font-semibold block">
                      Official Travel Agreement
                    </span>
                    <h2
                      id="terms-modal-title"
                      className="font-serif text-xl sm:text-2xl text-white font-bold tracking-wide mt-0.5"
                    >
                      L’ESPRIT LANKA <span className="text-gold-primary">—</span> Terms & Conditions
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gold-primary/20 text-gold-warm/80 hover:text-gold-primary hover:border-gold-primary/50 text-xs transition-colors"
                    title="Print Terms"
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

              {/* Scope & Payment Policy Note */}
              <div className="mt-4 p-3.5 rounded-xl bg-gold-primary/5 border border-gold-primary/20 flex items-start gap-3 text-xs text-ivory-sacred/85 font-sans leading-relaxed">
                <AlertCircle className="w-4 h-4 text-gold-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-gold-primary font-semibold">Payment & Service Policy:</strong> All services provided by <strong>L’ESPRIT LANKA</strong> are subject to these terms. “Services” refers to: <em>(a) Transport</em>, <em>(b) Accommodation</em>, and <em>(c) Other tourist services</em>.
                </p>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="px-6 py-6 sm:px-10 sm:py-8 overflow-y-auto space-y-6 text-sm text-ivory-sacred/80 font-sans leading-relaxed scrollbar-thin scrollbar-thumb-gold-primary/30 scrollbar-track-transparent">
              {termsSections.map((sec) => (
                <div
                  key={sec.id}
                  className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-gold-primary/15 hover:border-gold-primary/35 transition-colors relative group"
                >
                  <div className="flex items-start gap-3.5 mb-3">
                    <span className="font-cinzel text-xs font-bold text-gold-primary/90 bg-gold-primary/10 border border-gold-primary/25 rounded-md px-2.5 py-1 tracking-wider shrink-0 mt-0.5">
                      {sec.id}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-gold-warm font-bold tracking-wide">
                      {sec.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5 pl-0 sm:pl-10 text-xs sm:text-sm text-ivory-sacred/75">
                    {sec.paragraphs.map((p, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Regulatory Seal & Notice */}
              <div className="pt-4 border-t border-gold-primary/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-sacred/60">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-primary" />
                  <span>Official SLTDA Registration: <strong>SLTDA/SQA/TA/01954</strong></span>
                </div>
                <span>Colombo, Sri Lanka — Governed by Sri Lankan Jurisdiction</span>
              </div>
            </div>

            {/* Modal Bottom Bar */}
            <div className="px-6 py-4 sm:px-10 sm:py-4 border-t border-gold-primary/20 bg-[#07101B] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] text-ivory-sacred/50 text-center sm:text-left">
                By booking travel arrangements with L’ESPRIT LANKA, you agree to these Terms.
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-gold-primary to-gold-dark text-indigo-deep font-cinzel text-xs font-bold uppercase tracking-wider rounded-lg shadow-gold hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>I Understand & Accept</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
