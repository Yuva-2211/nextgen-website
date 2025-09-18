// Engineer's Day Celebration 2025 - Interactive Features with FIXED Easter Egg

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Engineer\'s Day website loaded - Tech by Yuva Shankar Narayana');
    
    // Initialize all features
    initEasterEgg();
    initSmoothScrolling();
    initScrollAnimations();
    initNavbarScrollEffect();
    initIntersectionObserver();
    initRegistrationTracking();
    initHeroAnimation();
    initInteractiveElements();
    
    console.log('✅ All features initialized');
});

// Easter Egg Implementation - FIXED VERSION
let clickCount = 0;
const maxClicks = 7;
let easterEggTriggered = false;

function initEasterEgg() {
    console.log('🥚 Initializing Easter Egg functionality...');
    
    // Wait a bit to ensure DOM is fully loaded
    setTimeout(() => {
        setupEasterEggListeners();
    }, 100);
}

function setupEasterEggListeners() {
    // Get all clickable logo elements
    const logoElements = document.querySelectorAll('.clickable-logo');
    const clickCounter = document.getElementById('click-counter');
    const clickCountSpan = document.getElementById('click-count');
    const modal = document.getElementById('easter-egg-modal');
    const closeBtn = document.getElementById('easter-egg-close');
    
    console.log(`Found ${logoElements.length} clickable logo elements:`, logoElements);
    console.log('Modal element:', modal);
    console.log('Close button:', closeBtn);
    
    if (logoElements.length === 0) {
        console.error('❌ No clickable logo elements found!');
        return;
    }
    
    if (!modal) {
        console.error('❌ Easter egg modal not found!');
        return;
    }
    
    // Show click counter for debugging
    if (clickCounter) {
        clickCounter.classList.remove('hidden');
        console.log('📊 Click counter visible for debugging');
    }
    
    // Add click listeners to all logo elements
    logoElements.forEach((logo, index) => {
        // Remove any existing listeners
        logo.removeEventListener('click', handleLogoClick);
        
        // Add new listener
        logo.addEventListener('click', handleLogoClick);
        
        // Add visual feedback
        logo.style.cursor = 'pointer';
        logo.style.userSelect = 'none';
        
        console.log(`✅ Event listener added to logo: ${logo.id || 'logo-' + index}`);
    });
    
    // Close button functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('❌ Closing easter egg modal via close button');
            closeEasterEgg();
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                console.log('🖱️ Clicked outside modal - closing');
                closeEasterEgg();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            console.log('⌨️ Escape key pressed - closing modal');
            closeEasterEgg();
        }
    });
    
    console.log('🥚 Easter Egg setup complete!');
}

function handleLogoClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (easterEggTriggered) {
        console.log('🥚 Easter egg already triggered, ignoring click');
        return;
    }
    
    clickCount++;
    console.log(`🖱️ Logo clicked! Count: ${clickCount}/${maxClicks}`);
    
    // Update click counter display
    const clickCountSpan = document.getElementById('click-count');
    if (clickCountSpan) {
        clickCountSpan.textContent = clickCount;
    }
    
    // Add click feedback
    const logo = e.currentTarget;
    logo.style.transform = 'scale(0.9)';
    logo.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        logo.style.transform = 'scale(1.05)';
        setTimeout(() => {
            logo.style.transform = '';
        }, 100);
    }, 100);
    
    // Visual feedback for progress
    if (clickCount >= maxClicks - 2) {
        logo.style.boxShadow = '0 0 20px rgba(224, 101, 59, 0.6)';
    }
    
    // Check if easter egg should be triggered
    if (clickCount >= maxClicks) {
        console.log('🎉 Easter egg triggered!');
        easterEggTriggered = true;
        triggerEasterEgg();
    }
}

function triggerEasterEgg() {
    const modal = document.getElementById('easter-egg-modal');
    const clickCounter = document.getElementById('click-counter');
    
    if (!modal) {
        console.error('❌ Modal not found when trying to trigger easter egg!');
        return;
    }
    
    console.log('🎊 Showing easter egg modal...');
    
    // Make sure modal is visible
    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    
    // Add celebration class
    modal.classList.add('celebration');
    
    // Hide click counter after triggering
    if (clickCounter) {
        clickCounter.classList.add('hidden');
    }
    
    // Prevent page scrolling
    document.body.style.overflow = 'hidden';
    
    // Add special effects to all logos
    const logos = document.querySelectorAll('.clickable-logo');
    logos.forEach(logo => {
        logo.style.animation = 'celebrate 1s ease-in-out';
        logo.style.boxShadow = '0 0 30px rgba(224, 101, 59, 0.8)';
    });
    
    // Focus on modal for accessibility
    modal.focus();
    
    console.log('✅ Easter egg modal should now be visible');
}

function closeEasterEgg() {
    const modal = document.getElementById('easter-egg-modal');
    
    if (!modal) {
        console.error('❌ Modal not found when trying to close easter egg!');
        return;
    }
    
    console.log('🚪 Closing easter egg modal...');
    
    // Hide modal
    modal.classList.add('hidden');
    modal.style.display = 'none';
    modal.classList.remove('celebration');
    
    // Re-enable page scrolling
    document.body.style.overflow = '';
    
    // Reset click count and state
    clickCount = 0;
    easterEggTriggered = false;
    
    // Update click counter
    const clickCountSpan = document.getElementById('click-count');
    if (clickCountSpan) {
        clickCountSpan.textContent = '0';
    }
    
    // Show click counter again for debugging
    const clickCounter = document.getElementById('click-counter');
    if (clickCounter) {
        clickCounter.classList.remove('hidden');
    }
    
    // Reset logo styles
    const logos = document.querySelectorAll('.clickable-logo');
    logos.forEach(logo => {
        logo.style.animation = '';
        logo.style.boxShadow = '';
    });
    
    console.log('✅ Easter egg closed and reset');
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const elementPosition = element.offsetTop - navbarHeight - 20;
        
        console.log(`📍 Scrolling to section: ${sectionId}`);
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    } else {
        console.warn(`⚠️ Section not found: ${sectionId}`);
    }
}

// Initialize smooth scrolling for internal anchor links
function initSmoothScrolling() {
    console.log('🔗 Initializing smooth scrolling...');
    
    // Handle the Learn More button specifically
    const learnMoreButton = document.querySelector('button[onclick*="scrollToSection"]');
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('overview');
        });
        console.log('✅ Learn More button configured');
    }
    
    // Handle other internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]:not([target="_blank"])');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    console.log(`✅ Smooth scrolling configured for ${internalLinks.length} internal links`);
}

// Handle registration button tracking without interfering with navigation
function initRegistrationTracking() {
    console.log('📝 Initializing registration tracking...');
    
    const registerButtons = document.querySelectorAll('a[href*="forms.gle"]');
    
    registerButtons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            // Don't prevent default - let the link work normally
            const buttonText = this.textContent.trim();
            const buttonUrl = this.href;
            
            console.log(`🔗 Registration button clicked: "${buttonText}" -> ${buttonUrl}`);
            
            // Track button click (if analytics is available)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    event_category: 'Registration',
                    event_label: buttonText,
                    value: 1
                });
            }
            
            // Add visual feedback without preventing navigation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    console.log(`✅ Registration tracking configured for ${registerButtons.length} buttons`);
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    console.log('📱 Initializing navbar scroll effects...');
    
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    if (!navbar) {
        console.warn('⚠️ Navbar element not found');
        return;
    }
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove backdrop blur based on scroll position
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 2px 20px rgba(20, 35, 97, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    
    console.log('✅ Navbar scroll effects configured');
}

// Scroll animations using Intersection Observer
function initIntersectionObserver() {
    console.log('👁️ Initializing intersection observer for animations...');
    
    const animatedElements = document.querySelectorAll('.card, .overview-card, .workshop-card, .online-event-card, .info-card, .timeline-item');
    
    if (animatedElements.length === 0) {
        console.warn('⚠️ No animated elements found');
        return;
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
    
    console.log(`✅ Intersection observer configured for ${animatedElements.length} elements`);
}

// Initialize scroll animations for sections
function initScrollAnimations() {
    console.log('🎬 Initializing scroll animations...');
    
    const sections = document.querySelectorAll('.section');
    
    if (sections.length === 0) {
        console.warn('⚠️ No sections found for animation');
        return;
    }
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    sections.forEach((section) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        sectionObserver.observe(section);
    });
    
    console.log(`✅ Scroll animations configured for ${sections.length} sections`);
}

// Counter animation for hackathon hours
function animateCounter() {
    console.log('🔢 Starting counter animation...');
    
    const counter = document.querySelector('.hackathon-badge');
    if (counter && counter.textContent.includes('24')) {
        let count = 0;
        const target = 24;
        const increment = target / 30;
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                count = target;
                clearInterval(timer);
                console.log('✅ Counter animation completed');
            }
            counter.textContent = Math.floor(count) + ' Hours';
        }, 50);
    } else {
        console.warn('⚠️ Counter element not found or doesn\'t contain "24"');
    }
}

// Loading animation for hero section
function initHeroAnimation() {
    console.log('🎭 Initializing hero animations...');
    
    const heroElements = document.querySelectorAll('.hero-logo, .hero-title, .hero-tagline, .hero-university, .hero-dates, .hero-actions');
    
    if (heroElements.length === 0) {
        console.warn('⚠️ No hero elements found for animation');
        return;
    }
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    console.log(`✅ Hero animations configured for ${heroElements.length} elements`);
}

// Enhanced button interactions and card effects
function initInteractiveElements() {
    console.log('🎮 Initializing interactive elements...');
    
    // Enhanced button interactions (for non-link buttons only)
    const buttons = document.querySelectorAll('.btn:not(a)');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.2s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1)';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.workshop-card, .online-event-card, .overview-card, .info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
            this.style.boxShadow = '0 10px 25px rgba(20, 35, 97, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(20, 35, 97, 0.05)';
        });
    });
    
    console.log(`✅ Interactive elements configured: ${buttons.length} buttons, ${cards.length} cards`);
}

// Mobile navigation enhancements
function initMobileEnhancements() {
    console.log('📱 Initializing mobile enhancements...');
    
    // Add touch support for better mobile experience
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Improve button touch targets
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.style.minHeight = '44px';
            button.style.minWidth = '44px';
        });
        
        console.log('✅ Touch device optimizations applied');
    }
}

// Initialize when page loads
window.addEventListener('load', function() {
    console.log('🌟 Page fully loaded - starting final animations...');
    
    initMobileEnhancements();
    
    // Start counter animation after hero loads
    setTimeout(() => {
        animateCounter();
    }, 1000);
    
    console.log('🎉 All initialization complete!');
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Progressive enhancement for older browsers
if (!window.IntersectionObserver) {
    console.warn('⚠️ IntersectionObserver not supported - using fallback');
    
    // Fallback for browsers without Intersection Observer support
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.card, .overview-card, .workshop-card');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('fade-in');
            }
        });
    });
}

// Debug function to manually trigger easter egg (for testing)
window.debugTriggerEasterEgg = function() {
    console.log('🐛 Debug: Manually triggering easter egg');
    clickCount = maxClicks;
    easterEggTriggered = true;
    triggerEasterEgg();
};

// Debug function to reset easter egg
window.debugResetEasterEgg = function() {
    console.log('🐛 Debug: Resetting easter egg');
    clickCount = 0;
    easterEggTriggered = false;
    closeEasterEgg();
};

// Debug function to check easter egg status
window.debugEasterEggStatus = function() {
    console.log(`🐛 Debug: Easter Egg Status - Clicks: ${clickCount}/${maxClicks}, Triggered: ${easterEggTriggered}`);
    const modal = document.getElementById('easter-egg-modal');
    console.log('🐛 Debug: Modal element:', modal);
    console.log('🐛 Debug: Modal hidden?', modal ? modal.classList.contains('hidden') : 'Modal not found');
    const logos = document.querySelectorAll('.clickable-logo');
    console.log(`🐛 Debug: Found ${logos.length} clickable logos:`, logos);
};

// Global smooth scrolling function (can be called from inline onclick)
window.scrollToSection = scrollToSection;

// Console welcome message
console.log(`
🎓 Engineer's Day Celebration 2025
🏫 Takshashila University
💻 Tech designed by Yuva Shankar Narayana

🥚 Easter Egg: Click any university logo 7 times to discover something special!
🐛 Debug Commands Available:
   - debugTriggerEasterEgg()
   - debugResetEasterEgg() 
   - debugEasterEggStatus()
`);