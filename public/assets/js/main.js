/* ==========================================================================
   L'ESPRIT VOYAGES — LUXURY INTERACTIVE JAVASCRIPT ENGINE
   Includes: Web Audio Soundscape, Hero Particle Canvas, Dual Split Canvas,
             Scroll Reveal, Services Filter, Bespoke Form Modal System
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initHeroSlideshow();
    initHeroParticles();
    initAudioSoundscape();
    initScrollReveal();
    initDualSplitCanvas();
    initServicesFilter();
    initBespokeForm();
});

/* ==========================================================================
   1. NAVBAR & NAVIGATION CONTROLLER
   ========================================================================== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(7, 21, 38, 0.98)';
                navLinks.style.padding = '2rem';
                navLinks.style.borderBottom = '1px solid var(--c-gold-border)';
            }
        });
    }
}

/* ==========================================================================
   2. HERO SLIDESHOW CROSSFADE ENGINE
   ========================================================================== */
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 6000);
}

/* ==========================================================================
   3. HERO AMBIENT GOLD DUST PARTICLE CANVAS
   ========================================================================== */
function initHeroParticles() {
    const canvas = document.getElementById('hero-particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
    });

    const numParticles = 45;
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 0.5,
            color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(197, 168, 128, ',
            alpha: Math.random() * 0.5 + 0.1,
            speedY: - (Math.random() * 0.4 + 0.1),
            speedX: Math.random() * 0.4 - 0.2,
            pulse: Math.random() * 0.02
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.y += p.speedY;
            p.x += p.speedX;
            p.alpha += Math.sin(Date.now() * p.pulse) * 0.005;

            if (p.y < 0) p.y = height;
            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color + Math.max(0.05, Math.min(0.8, p.alpha)) + ')';
            ctx.shadowBlur = 8;
            ctx.shadowColor = '#D4AF37';
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/* ==========================================================================
   4. WEB AUDIO SYNTHESIZED NATURE SOUNDSCAPE ENGINE
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let noiseNode = null;
let gainNode = null;
let filterNode = null;

function initAudioSoundscape() {
    const btn = document.getElementById('soundscape-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        if (!isAudioPlaying) {
            startSoundscape();
            btn.classList.add('playing');
            btn.querySelector('.sound-text').textContent = 'Soundscape: Active';
            isAudioPlaying = true;
        } else {
            stopSoundscape();
            btn.classList.remove('playing');
            btn.querySelector('.sound-text').textContent = 'Ambient Soundscape';
            isAudioPlaying = false;
        }
    });
}

function startSoundscape() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!audioCtx) audioCtx = new AudioContext();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        // Create pink noise buffer for soft ocean waves & wind
        const bufferSize = audioCtx.sampleRate * 3;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
            let white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            data[i] *= 0.03; // Gentle ambient volume
            b6 = white * 0.115926;
        }

        noiseNode = audioCtx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        filterNode = audioCtx.createBiquadFilter();
        filterNode.type = 'lowpass';
        filterNode.frequency.setValueAtTime(320, audioCtx.currentTime);

        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.3, audioCtx.currentTime + 2);

        // Subtle LFO modulation for swell effect
        const lfo = audioCtx.createOscillator();
        lfo.frequency.value = 0.12; // 8-second wave cycle
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 150;
        lfo.connect(lfoGain);
        lfoGain.connect(filterNode.frequency);
        lfo.start();

        noiseNode.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        noiseNode.start();
    } catch (e) {
        console.log('Web Audio setup notice:', e);
    }
}

function stopSoundscape() {
    if (gainNode && audioCtx) {
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        setTimeout(() => {
            if (noiseNode) {
                noiseNode.stop();
                noiseNode.disconnect();
            }
        }, 850);
    }
}

/* ==========================================================================
   5. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. DUAL PARADISE SPLIT CANVAS INTERACTION
   ========================================================================== */
function initDualSplitCanvas() {
    const panels = document.querySelectorAll('.split-panel');
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', () => {
            panels.forEach(p => p.classList.remove('active-expanded'));
            panel.classList.add('active-expanded');
        });
    });
}

function focusDestination(region) {
    const destSection = document.getElementById('destinations');
    if (destSection) {
        destSection.scrollIntoView({ behavior: 'smooth' });
    }
    const slPanel = document.getElementById('panel-sri-lanka');
    const mvPanel = document.getElementById('panel-maldives');
    
    if (region === 'sri-lanka' && slPanel && mvPanel) {
        slPanel.classList.add('active-expanded');
        mvPanel.classList.remove('active-expanded');
    } else if (region === 'maldives' && slPanel && mvPanel) {
        mvPanel.classList.add('active-expanded');
        slPanel.classList.remove('active-expanded');
    }
}

/* ==========================================================================
   7. SERVICES TAB FILTER
   ========================================================================== */
function initServicesFilter() {
    const filterBtns = document.querySelectorAll('.svc-tab-btn');
    const cards = document.querySelectorAll('.service-glass-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   8. BESPOKE JOURNEY FORM & MODAL CONTROLLER
   ========================================================================== */
function initBespokeForm() {
    const form = document.getElementById('bespoke-journey-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullname = document.getElementById('form-fullname').value;
        const email = document.getElementById('form-email').value;
        const destination = document.getElementById('form-destination').value;
        const notes = document.getElementById('form-notes').value;

        const styleCheckboxes = document.querySelectorAll('input[name="travel_style"]:checked');
        const selectedStyles = Array.from(styleCheckboxes).map(cb => cb.value).join(', ');

        const summaryBox = document.getElementById('success-summary-content');
        if (summaryBox) {
            summaryBox.innerHTML = `
                <p><strong>Guest Name:</strong> ${fullname}</p>
                <p><strong>Email Address:</strong> ${email}</p>
                <p><strong>Selected Destination:</strong> ${destination}</p>
                <p><strong>Travel Styles:</strong> ${selectedStyles || 'Ultra Luxury'}</p>
                ${notes ? `<p><strong>Special Notes:</strong> ${notes}</p>` : ''}
            `;
        }

        openModal('success-modal');
        form.reset();
    });
}

/* ==========================================================================
   9. MODAL HELPER FUNCTIONS
   ========================================================================== */
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

function openDestinationModal(region) {
    const modalTag = document.getElementById('modal-dest-tag');
    const modalTitle = document.getElementById('modal-dest-title');
    const modalBody = document.getElementById('modal-dest-body');

    if (region === 'sri-lanka') {
        modalTag.textContent = 'DESTINATION DEEP-DIVE';
        modalTitle.textContent = 'Sri Lanka: Timeless Cultural Heritage';
        modalBody.innerHTML = `
            <p><strong>Key Highlights & Curated Experiences:</strong></p>
            <ul style="margin: 1rem 0 1.5rem 1.2rem; line-height: 1.8;">
                <li><strong>Sigiriya Rock Fortress & Ancient Polonnaruwa:</strong> Private dawn access led by senior archaeologists.</li>
                <li><strong>Yala & Wilpattu Private Jeep Safaris:</strong> VIP tracking of Sri Lankan leopards, sloth bears, and wild elephant herds.</li>
                <li><strong>Central Tea Highlands (Nuwara Eliya):</strong> Stay in restored colonial planter bungalows with private high-tea service.</li>
                <li><strong>Sacred Ayurveda Wellness Retreats:</strong> Personalized body-mind rejuvenation guided by master Ayurvedic doctors.</li>
                <li><strong>Southern Coastal Gastronomy:</strong> Private beachfront dining with fresh seafood & traditional spice infusion.</li>
            </ul>
        `;
    } else if (region === 'maldives') {
        modalTag.textContent = 'DESTINATION DEEP-DIVE';
        modalTitle.textContent = 'Maldives: The Ocean Sanctuary';
        modalBody.innerHTML = `
            <p><strong>Key Highlights & Curated Experiences:</strong></p>
            <ul style="margin: 1rem 0 1.5rem 1.2rem; line-height: 1.8;">
                <li><strong>Overwater Pool Villas:</strong> Direct ocean access, glass floor viewports, and 24/7 personal island butler service.</li>
                <li><strong>Hanifaru Bay Marine Expeditions:</strong> Snorkel alongside majestic Manta Rays and gentle Whale Sharks.</li>
                <li><strong>Private Yacht Charters:</strong> Island-hopping across 26 untouched natural coral atolls with a private chef.</li>
                <li><strong>Undersea Dining & Spa Treatments:</strong> Submerged multi-course fine dining surrounded by marine life.</li>
                <li><strong>Exclusive Surfing Breaks:</strong> Private speed-boat transfers to uncrowded, world-class reef breaks.</li>
            </ul>
        `;
    }

    openModal('destination-modal');
}

function openPrivacyModal() {
    document.getElementById('info-modal-title').textContent = 'Privacy & Data Protection Guarantee';
    document.getElementById('info-modal-body').innerHTML = `
        <p>L’ESPRIT VOYAGES holds guest privacy in highest reverence. All itinerary requests, personal contact details, and travel preferences are handled with strict confidentiality in compliance with international data privacy standards.</p>
        <p style="margin-top: 1rem;">We never share or disclose guest information to unverified third parties.</p>
    `;
    openModal('info-modal');
}

function openTermsModal() {
    document.getElementById('info-modal-title').textContent = 'L’ESPRIT LANKA — Terms & Conditions';
    document.getElementById('info-modal-body').innerHTML = `
        <div style="font-family: inherit; line-height: 1.6; font-size: 0.85rem; color: #444; max-height: 65vh; overflow-y: auto; padding-right: 8px;">
            <div style="background: rgba(212,175,55,0.08); border-left: 3px solid #D4AF37; padding: 10px 14px; margin-bottom: 16px; border-radius: 4px;">
                <strong style="color: #0B1B2B;">Payment Policy & Scope:</strong> All services provided by L’ESPRIT LANKA are subject to these terms. “Services” refers to (a) Transport, (b) Accommodation, and (c) Other tourist services.
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">1. Booking and Confirmation</h4>
                <p>All booking details must be provided by the traveler or by a designated representative booking on behalf of a group. By making a group booking, the representative confirms that they have the authority of the other group members to make the reservation and accept these Terms & Conditions on their behalf.</p>
                <p style="margin-top: 6px;">Upon receiving the booking request, L’ESPRIT LANKA will make reasonable efforts to confirm the requested travel arrangements as soon as possible. A booking will generally become contractually binding once a booking confirmation or confirmation invoice has been issued by our company for the services arranged directly or through third-party suppliers.</p>
                <p style="margin-top: 6px;">Certain travel services, including hotel accommodation, excursions, transportation, and other arrangements, may be subject to availability or additional confirmation from the relevant supplier. Where a service is marked as being subject to confirmation, that service will only be considered confirmed once we have provided specific written confirmation, even if an initial or provisional booking confirmation has already been issued.</p>
                <p style="margin-top: 6px;">The client is responsible for carefully reviewing all details stated in the booking confirmation or invoice, including travel dates, passenger information, itinerary, accommodation, and other requested services. Any errors or discrepancies must be reported to L’ESPRIT LANKA promptly so that corrections can be made where possible.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">2. Your Contract</h4>
                <p>This contract and the services provided by, L’ESPRIT LANKA are governed by the laws of Sri Lanka.</p>
                <p style="margin-top: 6px;">Unless otherwise stated, L’ESPRIT LANKA acts as an agent for third-party service providers, including hotels, airlines, transport operators, and tour or activity providers. While we make reasonable efforts to work with reliable suppliers, we do not directly manage their operations, staff, or equipment.</p>
                <p style="margin-top: 6px;">To the extent permitted by applicable law, L’ESPRIT LANKA shall not be liable for any loss, injury, damage, delay, or inconvenience arising from the acts, omissions, negligence, or failures of independent service providers or other parties outside our reasonable control.</p>
                <p style="margin-top: 6px;">The applicable suppliers’ terms and conditions are available upon request or may be provided with the relevant booking voucher.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">3. Payment</h4>
                <p>Unless otherwise agreed in writing, full payment is required upon booking confirmation or within the timeframe specified in the booking confirmation email. L’ESPRIT LANKA reserves the right to withhold services or cancel the booking, subject to applicable cancellation charges and law, if payment is not received by the due date.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">4. Amendments to the Itinerary by the Passenger</h4>
                <p>Requests to amend confirmed bookings must be submitted through L’ESPRIT LANKA and are subject to availability and additional charges, which shall be borne by the Client. No refunds or credits will be provided for unused services or missed tour arrangements, subject to applicable law.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">5. Cancellation by the Passenger</h4>
                <p>Cancellations must be submitted in writing by the lead Client using the email address provided at booking or through our official online channels. Applicable cancellation charges will be determined by the cancellation policy communicated at the time of booking confirmation.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">6. Changes to the Itinerary by L’ESPRIT LANKA</h4>
                <p>L’ESPRIT LANKA reserves the right to make necessary changes to confirmed itineraries and will notify the Client as soon as reasonably possible. We shall not be liable for additional expenses arising from changes beyond our reasonable control, subject to applicable law.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">7. Complaints and Disputes</h4>
                <p>Any complaints regarding our services or those of our suppliers must be reported to the relevant supplier and L’ESPRIT LANKA as soon as possible, preferably during the tour, to allow an opportunity for resolution. Complaints should be submitted in writing with the booking reference and relevant details.</p>
                <p style="margin-top: 6px;">Unresolved disputes may be referred to a single arbitrator in accordance with the ICC Rules of Arbitration, with English as the language of arbitration and Colombo, Sri Lanka, as the seat of arbitration, subject to applicable law.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">8. L’ESPRIT LANKA’S Liability</h4>
                <p>To the extent permitted by applicable law, L’ESPRIT LANKA’s total liability shall be limited to the price paid for the specific service concerned by the affected Client(s), excluding insurance premiums and amendment charges. This limitation does not apply to liability that cannot legally be excluded or limited.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">9. Passenger Responsibilities</h4>
                <p>Clients are responsible for their own health, safety, conduct, and personal expenses, including medical treatment and emergency transportation. Comprehensive travel and medical insurance, including trip cancellation coverage, is strongly recommended.</p>
                <p style="margin-top: 6px;">Clients must ensure they meet all applicable visa, immigration, passport, and health requirements before travelling.</p>
                <p style="margin-top: 6px;">Clients use facilities and services at their own risk, subject to applicable law. Clients are responsible for damage caused by their negligent or reckless conduct and must reimburse L’ESPRIT LANKA or its suppliers for resulting losses, where legally required. Nothing in this clause excludes liability arising from our own negligence or other liability that cannot legally be excluded.</p>
            </div>

            <div style="margin-bottom: 14px;">
                <h4 style="color: #0B1B2B; margin-bottom: 4px; font-weight: 700;">10. Other Conditions</h4>
                <p>Optional excursions and additional services are available at an additional cost.</p>
                <p style="margin-top: 6px;">Wildlife parks visits and safari activities are subject to inherent risks, and Clients must follow all safety instructions provided by guides and operators.</p>
                <p style="margin-top: 6px;">Safari vehicles may be basic, non-air-conditioned, and covered by limited insurance. Clients are advised to confirm the available insurance coverage before participating.</p>
            </div>
        </div>
    `;
    openModal('info-modal');
}
