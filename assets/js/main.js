function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                menuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            
            // Close menu when a link is clicked
            document.querySelectorAll('.nav-links li a').forEach(link => {
                link.addEventListener('click', () => {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }
}

// Scroll Reveal
        document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
            const reveals = document.querySelectorAll(".reveal");
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            reveals.forEach(element => observer.observe(element));
        });

        


