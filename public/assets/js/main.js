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
    document.getElementById('info-modal-title').textContent = 'Terms of Bespoke Craftsmanship';
    document.getElementById('info-modal-body').innerHTML = `
        <p>All L’ESPRIT VOYAGES itineraries are fully bespoke and subject to private concierge terms. Flight and accommodation reservations are secured through verified 5-star partner properties across Sri Lanka and the Maldives.</p>
        <p style="margin-top: 1rem;">Official Tourism Registration: Registered with the Ministry of Tourism Sri Lanka.</p>
    `;
    openModal('info-modal');
}
