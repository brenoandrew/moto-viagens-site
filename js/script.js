// Main JavaScript functionality for Moto Viagens website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeVideo();
    initializeEmailForm();
    initializeAnimations();
    initializeContactLinks();
});

// Video Background Initialization
function initializeVideo() {
    const video = document.getElementById('bg-video');
    const videoContainer = document.querySelector('.video-background');

    // Handle video loading
    video.addEventListener('loadstart', function() {
        console.log('Video loading started');
    });

    video.addEventListener('canplay', function() {
        console.log('Video can start playing');
        video.style.opacity = '1';
    });

    video.addEventListener('error', function() {
        console.log('Video failed to load, using fallback background');
        videoContainer.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
    });

    // Ensure video plays on mobile devices
    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        }
    });
}

// Email Form Functionality
function initializeEmailForm() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');

    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            // Simulate form submission
            showFormMessage('Obrigado! Você será notificado quando estivermos prontos.', 'success');
            emailInput.value = '';

            // Here you would normally send the email to your backend
            // fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({email}) })

        } else {
            showFormMessage('Por favor, insira um e-mail válido.', 'error');
        }
    });

    // Real-time email validation
    emailInput.addEventListener('input', function() {
        const email = emailInput.value.trim();
        if (email && !validateEmail(email)) {
            emailInput.style.borderColor = '#f44336';
        } else {
            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
}

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form messages
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
}

// Initialize scroll animations
function initializeAnimations() {
    // Add intersection observer for animations
    const animatedElements = document.querySelectorAll('.feature-item, .contact-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Initialize contact links
function initializeContactLinks() {
    // WhatsApp link with custom message
    const whatsappLink = document.querySelector('a[href*="wa.me"]');
    if (whatsappLink) {
        const message = encodeURIComponent('Olá! Vi o site da Moto Viagens e gostaria de saber mais sobre o lançamento.');
        whatsappLink.href = `https://wa.me/5511985584314?text=${message}`;
    }

    // Track social media clicks (for analytics)
    const socialLinks = document.querySelectorAll('.social-link, .contact-item');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkType = this.querySelector('i').className;
            console.log(`Social link clicked: ${linkType}`);
            // Here you would send analytics data
            // gtag('event', 'click', { event_category: 'social', event_label: linkType });
        });
    });
}

// Smooth scroll functionality (if needed for future sections)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Utility function to handle form submissions to different services
function submitToService(email, service = 'default') {
    switch(service) {
        case 'mailchimp':
            // Mailchimp integration
            break;
        case 'sendinblue':
            // Sendinblue integration
            break;
        case 'custom':
            // Custom backend integration
            break;
        default:
            // Default handling (localStorage for now)
            localStorage.setItem('moto-viagens-email', email);
            console.log('Email saved locally:', email);
    }
}

// Handle window resize for video responsiveness
window.addEventListener('resize', function() {
    const video = document.getElementById('bg-video');
    // Ensure video maintains aspect ratio on resize
    video.style.width = window.innerWidth + 'px';
    video.style.height = window.innerHeight + 'px';
});

// Preload critical assets
function preloadAssets() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
}

// Performance monitoring (optional)
function monitorPerformance() {
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    });
}

// Initialize performance monitoring
monitorPerformance();

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateEmail,
        showFormMessage,
        submitToService
    };
}