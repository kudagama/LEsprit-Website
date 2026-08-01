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
    initSmoothScroll();
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
            <ul style="margin: 0.5rem 0 1.5rem 1.2rem; line-height: 1.6; font-size: 0.85rem;">
                <li><strong>Sigiriya Rock Fortress & Ancient Polonnaruwa:</strong> Private dawn access led by senior archaeologists.</li>
                <li><strong>Yala & Wilpattu Private Jeep Safaris:</strong> VIP tracking of Sri Lankan leopards, sloth bears, and wild elephant herds.</li>
                <li><strong>Central Tea Highlands (Nuwara Eliya):</strong> Stay in restored colonial planter bungalows with private high-tea service.</li>
                <li><strong>Sacred Ayurveda Wellness Retreats:</strong> Personalized body-mind rejuvenation guided by master Ayurvedic doctors.</li>
                <li><strong>Southern Coastal Gastronomy:</strong> Private beachfront dining with fresh seafood & traditional spice infusion.</li>
            </ul>
            
            <p style="margin-top: 1.5rem; margin-bottom: 0.5rem;"><strong>Our Curated Tour Packages:</strong></p>
            <div style="display: grid; gap: 1rem;">
                <div style="background: rgba(212, 175, 55, 0.04); border: 1px solid rgba(212, 175, 55, 0.2); padding: 1rem; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                        <span style="font-family: 'Cinzel', serif; font-size: 0.7rem; font-weight: 700; color: #A87D46;">7 DAYS / 6 NIGHTS</span>
                        <span style="font-size: 0.75rem; font-weight: 700; color: #0D2818;">From $3,200</span>
                    </div>
                    <h4 style="font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1B2B; margin: 0 0 0.4rem 0;">Classical Cultural Heritage</h4>
                    <p style="font-size: 0.75rem; line-height: 1.5; color: #444; margin: 0;">Embark on an archaeological voyage through Sri Lanka's cultural triangle. Stay in bespoke luxury jungle villas and enjoy private archaeologist-guided ascents of Sigiriya.</p>
                </div>
                <div style="background: rgba(212, 175, 55, 0.04); border: 1px solid rgba(212, 175, 55, 0.2); padding: 1rem; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                        <span style="font-family: 'Cinzel', serif; font-size: 0.7rem; font-weight: 700; color: #A87D46;">9 DAYS / 8 NIGHTS</span>
                        <span style="font-size: 0.75rem; font-weight: 700; color: #0D2818;">From $4,500</span>
                    </div>
                    <h4 style="font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1B2B; margin: 0 0 0.4rem 0;">Wild Safari & Emerald Highlands</h4>
                    <p style="font-size: 0.75rem; line-height: 1.5; color: #444; margin: 0;">Track leopards in Yala National Park and unwind in tea estate bungalows. Combines thrilling wildlife jeep safaris with the cool colonial charm of tea country.</p>
                </div>
            </div>
        `;
    } else if (region === 'maldives') {
        modalTag.textContent = 'DESTINATION DEEP-DIVE';
        modalTitle.textContent = 'Maldives: The Ocean Sanctuary';
        modalBody.innerHTML = `
            <p><strong>Key Highlights & Curated Experiences:</strong></p>
            <ul style="margin: 0.5rem 0 1.5rem 1.2rem; line-height: 1.6; font-size: 0.85rem;">
                <li><strong>Overwater Pool Villas:</strong> Direct ocean access, glass floor viewports, and 24/7 personal island butler service.</li>
                <li><strong>Hanifaru Bay Marine Expeditions:</strong> Snorkel alongside majestic Manta Rays and gentle Whale Sharks.</li>
                <li><strong>Private Yacht Charters:</strong> Island-hopping across 26 untouched natural coral atolls with a private chef.</li>
                <li><strong>Undersea Dining & Spa Treatments:</strong> Submerged multi-course fine dining surrounded by marine life.</li>
                <li><strong>Exclusive Surfing Breaks:</strong> Private speed-boat transfers to uncrowded, world-class reef breaks.</li>
            </ul>
            
            <p style="margin-top: 1.5rem; margin-bottom: 0.5rem;"><strong>Our Curated Tour Packages:</strong></p>
            <div style="display: grid; gap: 1rem;">
                <div style="background: rgba(212, 175, 55, 0.04); border: 1px solid rgba(212, 175, 55, 0.2); padding: 1rem; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                        <span style="font-family: 'Cinzel', serif; font-size: 0.7rem; font-weight: 700; color: #A87D46;">5 DAYS / 4 NIGHTS</span>
                        <span style="font-size: 0.75rem; font-weight: 700; color: #0D2818;">From $6,400</span>
                    </div>
                    <h4 style="font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1B2B; margin: 0 0 0.4rem 0;">Romantic Overwater Sanctuary</h4>
                    <p style="font-size: 0.75rem; line-height: 1.5; color: #444; margin: 0;">Designed exclusively for couples seeking absolute privacy. Enjoy an overwater villa with a private pool, direct ocean ladder, and dedicated 24/7 personal butler service.</p>
                </div>
                <div style="background: rgba(212, 175, 55, 0.04); border: 1px solid rgba(212, 175, 55, 0.2); padding: 1rem; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                        <span style="font-family: 'Cinzel', serif; font-size: 0.7rem; font-weight: 700; color: #A87D46;">7 DAYS / 6 NIGHTS</span>
                        <span style="font-size: 0.75rem; font-weight: 700; color: #0D2818;">From $8,200</span>
                    </div>
                    <h4 style="font-family: 'Playfair Display', serif; font-size: 1rem; font-weight: 700; color: #0B1B2B; margin: 0 0 0.4rem 0;">Manta & Whale Shark Marine Safari</h4>
                    <p style="font-size: 0.75rem; line-height: 1.5; color: #444; margin: 0;">An extraordinary marine journey in the Baa Atoll. Snorkel alongside majestic Manta Rays and track whale sharks with expert marine biologists.</p>
                </div>
            </div>
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
    document.getElementById('info-modal-title').textContent = 'Terms of Bespoke Craftsmanship';
    document.getElementById('info-modal-body').innerHTML = `
        <p>All L’ESPRIT VOYAGES itineraries are fully bespoke and subject to private concierge terms. Flight and accommodation reservations are secured through verified 5-star partner properties across Sri Lanka and the Maldives.</p>
        <p style="margin-top: 1rem;">Official Tourism Registration: Registered with the Ministry of Tourism Sri Lanka.</p>
    `;
    openModal('info-modal');
}

/* ==========================================================================
   10. KINETIC SMOOTH INERTIAL SCROLL ENGINE (LENIS)
   ========================================================================== */
function initSmoothScroll() {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1.0,
            smoothTouch: false,
            touchMultiplier: 2.0,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Sync internal anchor links to scroll smoothly using Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    lenis.scrollTo(targetEl);
                }
            });
        });
    }
}

