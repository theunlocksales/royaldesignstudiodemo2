// ==================== ROYAL DESIGN STUDIO - PREMIUM JAVASCRIPT ====================

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initParticles();
    initAOS();
    initSmoothScroll();
    initLucideIcons();
    initCounters();
    initBackToTop();
    initContactForm();
    initPortfolioFilters();

    console.log('🏛️ Royal Design Studio Website Loaded Successfully!');
    console.log('📞 Contact: +91 9098329768');
    console.log('📍 Location: Usha Nagar, Mhow Naka Square, Indore');
    console.log('✨ Premium 3D Visualization Services');
});

// ==================== NAVBAR FUNCTIONALITY ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        }
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Active nav link on scroll (desktop only)
    if (window.innerWidth >= 1024) {
        window.addEventListener('scroll', () => {
            let current = '';
            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// ==================== PARTICLES.JS INITIALIZATION ====================
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        const particleCount = window.innerWidth < 768 ? 50 : 100;

        particlesJS('particles-js', {
            particles: {
                number: {
                    value: particleCount,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#D4AF37'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.3,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#D4AF37',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: window.innerWidth >= 1024,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ==================== AOS ANIMATION INITIALIZATION ====================
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100
        });
    }
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ==================== LUCIDE ICONS INITIALIZATION ====================
function initLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ==================== ANIMATED COUNTERS ====================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const countUp = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target + '+';
        }
    };

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counter.innerText = '0';
        observer.observe(counter);
    });
}

// ==================== BACK TO TOP BUTTON ====================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ==================== PORTFOLIO FILTERS ====================
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ==================== CONTACT FORM HANDLING ====================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();

            // Validate phone number
            if (phone.length < 10) {
                showNotification('Please enter a valid 10-digit phone number', 'error');
                return;
            }

            // Create WhatsApp message
            const whatsappMessage = createWhatsAppMessage(name, phone, service, message);

            // Open WhatsApp
            const whatsappURL = `https://api.whatsapp.com/send?phone=919098329768&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');

            // Show success notification
            showNotification('✅ Redirecting to WhatsApp! We\'ll contact you within 24 hours.', 'success');

            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }

    // Phone input validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value.length > 10) {
                this.value = this.value.slice(0, 10);
            }
        });
    }
}

function createWhatsAppMessage(name, phone, service, message) {
    let msg = `*🏛️ New Inquiry - Royal Design Studio*\n\n`;
    msg += `*Name:* ${name}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Service Required:* ${service}\n`;
    if (message) {
        msg += `*Project Details:* ${message}\n`;
    }
    msg += `\n_Sent from Royal Design Studio Website_`;
    return msg;
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    const icons = {
        success: '✅',
        error: '❌',
        info: 'ℹ️'
    };

    const colors = {
        success: 'linear-gradient(135deg, #10B981, #059669)',
        error: 'linear-gradient(135deg, #EF4444, #DC2626)',
        info: 'linear-gradient(135deg, #3B82F6, #2563EB)'
    };

    notification.innerHTML = `
        ${icons[type]}
        ${message}
    `;

    const isMobile = window.innerWidth < 768;
    notification.style.cssText = `
        position: fixed;
        top: ${isMobile ? '80px' : '100px'};
        right: ${isMobile ? '15px' : '30px'};
        left: ${isMobile ? '15px' : 'auto'};
        background: ${colors[type]};
        color: white;
        padding: ${isMobile ? '15px 20px' : '20px 35px'};
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideInRight 0.5s ease, slideOutRight 0.5s ease 2.5s;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: ${isMobile ? '0.9rem' : '1rem'};
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== PAGE VISIBILITY API ====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = '👋 Come Back! - Royal Design Studio';
    } else {
        document.title = 'Royal Design Studio | Premium 3D Visualization Services in Indore';
    }
});

// ==================== PERFORMANCE OPTIMIZATION ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Scroll optimization logic
}, 10);

window.addEventListener('scroll', optimizedScroll, { passive: true });

// ==================== LOADING ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== CONSOLE BRANDING ====================
console.log('%c🏛️ ROYAL DESIGN STUDIO', 'color: #D4AF37; font-size: 40px; font-weight: bold; font-family: Playfair Display;');
console.log('%cTransform Your Vision Into Reality', 'color: #ffffff; font-size: 16px; font-family: Montserrat; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #D4AF37;');
console.log('%c📞 Contact: +91 9098329768', 'color: #10B981; font-size: 14px; font-weight: bold;');
console.log('%c📍 Location: Usha Nagar, Mhow Naka Square, Indore', 'color: #ffffff; font-size: 12px; font-weight: bold;');
console.log('%c✨ Services: Interior | Exterior | Walkthrough', 'color: #D4AF37; font-size: 12px; font-weight: bold;');
console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #D4AF37;');

// ==================== ORIENTATION CHANGE HANDLER ====================
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 300);
});

// ==================== VIEWPORT HEIGHT FIX FOR MOBILE ====================
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', debounce(setVH, 100));

// ==================== PREVENT ZOOM ON INPUT FOCUS (IOS) ====================
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const currentSize = window.getComputedStyle(input).fontSize;
            if (parseFloat(currentSize) < 16) {
                input.style.fontSize = '16px';
            }
        });
    });
}

// ==================== TOUCH OPTIMIZATIONS ====================
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function() {}, { passive: true });
}

// ==================== END OF SCRIPT ====================
console.log('✅ Royal Design Studio initialized successfully!');
console.log('🎯 Premium 3D Visualization | Interior | Exterior | Walkthrough');
console.log('📞 Call/WhatsApp: +91 9098329768');
console.log('📍 Usha Nagar, Mhow Naka Square, Indore');