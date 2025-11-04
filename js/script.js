// ===================================
// Initialize AOS (Animate On Scroll) Library
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });
});

// ===================================
// Smooth Scrolling for Scroll Indicator
// ===================================
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const welcomeSection = document.querySelector('.welcome-section');
        welcomeSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// ===================================
// Parallax Effect on Hero Section
// ===================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const mandala = document.querySelector('.mandala-design');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    if (mandala && scrolled < window.innerHeight) {
        mandala.style.transform = `rotate(${scrolled * 0.2}deg) scale(${1 - scrolled * 0.0005})`;
    }
});

// ===================================
// Surprise Animation: Confetti Burst on Page Load
// ===================================
function createConfetti() {
    const colors = ['#FFD700', '#C41E3A', '#50C878', '#FF69B4', '#FFA500'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -20px;
            opacity: ${Math.random() * 0.7 + 0.3};
            z-index: 10000;
            pointer-events: none;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Add confetti animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Trigger confetti after a short delay
setTimeout(createConfetti, 500);

// ===================================
// Surprise Animation: Hearts on Couple Photos Hover
// ===================================
const coupleCards = document.querySelectorAll('.couple-card');
coupleCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        createHearts(this);
    });
});

function createHearts(element) {
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: 50%;
            opacity: 0;
            pointer-events: none;
            z-index: 100;
            animation: heartFloat ${Math.random() * 2 + 2}s ease-out forwards;
        `;
        element.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }
}

// Add heart animation CSS
const heartStyle = document.createElement('style');
heartStyle.textContent = `
    @keyframes heartFloat {
        0% {
            transform: translateY(0) scale(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyle);

// ===================================
// Surprise Animation: Sparkle Effect on Event Cards
// ===================================
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        createSparkles(this);
    });
});

function createSparkles(element) {
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 15 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: 0;
            pointer-events: none;
            z-index: 10;
            animation: sparkleAnimation ${Math.random() * 1 + 1}s ease-out forwards;
        `;
        element.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 2000);
    }
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// ===================================
// Surprise Animation: Glowing Border on Gallery Items
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    setTimeout(() => {
        item.style.animation = `glowBorder 2s ease-in-out infinite`;
        item.style.animationDelay = `${index * 0.2}s`;
    }, 1000);
});

// Add glow border animation CSS
const glowStyle = document.createElement('style');
glowStyle.textContent = `
    @keyframes glowBorder {
        0%, 100% {
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        50% {
            box-shadow: 0 10px 40px rgba(255, 215, 0, 0.6), 0 0 20px rgba(196, 30, 58, 0.4);
        }
    }
`;
document.head.appendChild(glowStyle);

// ===================================
// Surprise Animation: Text Reveal Effect on Section Titles
// ===================================
function revealText() {
    const titles = document.querySelectorAll('.section-title');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'textReveal 1.5s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    titles.forEach(title => observer.observe(title));
}

// Add text reveal animation CSS
const textRevealStyle = document.createElement('style');
textRevealStyle.textContent = `
    @keyframes textReveal {
        0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
            filter: blur(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
        }
    }
`;
document.head.appendChild(textRevealStyle);

setTimeout(revealText, 500);

// ===================================
// Surprise Animation: Floating Elements on Scroll
// ===================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const decorativeLines = document.querySelectorAll('.decorative-line');
    
    decorativeLines.forEach((line, index) => {
        const speed = (index + 1) * 0.05;
        line.style.transform = `translateX(${Math.sin(scrolled * speed) * 20}px)`;
    });
});

// ===================================
// Surprise Animation: Pulse Effect on Icons
// ===================================
const eventIcons = document.querySelectorAll('.event-icon');
eventIcons.forEach((icon, index) => {
    setInterval(() => {
        icon.style.animation = 'none';
        setTimeout(() => {
            icon.style.animation = 'iconBounce 2s ease-in-out infinite';
        }, 10);
    }, 5000 + (index * 1000));
});

// ===================================
// Surprise Animation: Rainbow Effect on Hover
// ===================================
const mapButtons = document.querySelectorAll('.map-btn');
mapButtons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
        let hue = 0;
        const interval = setInterval(() => {
            hue = (hue + 5) % 360;
            this.style.filter = `hue-rotate(${hue}deg)`;
        }, 50);
        
        this.addEventListener('mouseleave', function() {
            clearInterval(interval);
            this.style.filter = 'hue-rotate(0deg)';
        }, { once: true });
    });
});

// ===================================
// Surprise Animation: Countdown Timer
// ===================================
function createCountdown() {
    const weddingDate = new Date('2025-11-07T10:28:00');
    
    const countdownSection = document.createElement('section');
    countdownSection.className = 'countdown-section';
    countdownSection.style.cssText = `
        padding: 80px 20px;
        background: linear-gradient(135deg, #C41E3A, #FFD700);
        text-align: center;
        color: white;
    `;
    
    countdownSection.innerHTML = `
        <div class="container">
            <h2 style="font-family: 'Cinzel', serif; font-size: 2.5rem; margin-bottom: 40px; letter-spacing: 3px;">
                Countdown to the Big Day
            </h2>
            <div class="countdown-timer" style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                <div class="time-box" style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); min-width: 120px;">
                    <div id="days" style="font-size: 3rem; font-weight: bold; font-family: 'Playfair Display', serif;">00</div>
                    <div style="font-size: 1.2rem; margin-top: 10px; letter-spacing: 2px;">DAYS</div>
                </div>
                <div class="time-box" style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); min-width: 120px;">
                    <div id="hours" style="font-size: 3rem; font-weight: bold; font-family: 'Playfair Display', serif;">00</div>
                    <div style="font-size: 1.2rem; margin-top: 10px; letter-spacing: 2px;">HOURS</div>
                </div>
                <div class="time-box" style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); min-width: 120px;">
                    <div id="minutes" style="font-size: 3rem; font-weight: bold; font-family: 'Playfair Display', serif;">00</div>
                    <div style="font-size: 1.2rem; margin-top: 10px; letter-spacing: 2px;">MINUTES</div>
                </div>
                <div class="time-box" style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 15px; backdrop-filter: blur(10px); min-width: 120px;">
                    <div id="seconds" style="font-size: 3rem; font-weight: bold; font-family: 'Playfair Display', serif;">00</div>
                    <div style="font-size: 1.2rem; margin-top: 10px; letter-spacing: 2px;">SECONDS</div>
                </div>
            </div>
        </div>
    `;
    
    const mapSection = document.querySelector('.map-section');
    mapSection.parentNode.insertBefore(countdownSection, mapSection);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            countdownSection.querySelector('h2').textContent = 'The Celebration Has Begun! 🎉';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

createCountdown();

// ===================================
// Surprise Animation: Mouse Trail Effect
// ===================================
let mouseTrailTimeout;
document.addEventListener('mousemove', function(e) {
    clearTimeout(mouseTrailTimeout);
    mouseTrailTimeout = setTimeout(() => {
        createMouseTrail(e.clientX, e.clientY);
    }, 100);
});

function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.textContent = '✨';
    trail.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 20px;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        animation: trailFade 1s ease-out forwards;
    `;
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 1000);
}

// Add mouse trail animation CSS
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(0) translateY(0);
        }
        100% {
            opacity: 0;
            transform: scale(1.5) translateY(-50px);
        }
    }
`;
document.head.appendChild(trailStyle);

// ===================================
// Surprise Animation: Gallery Item Click Effect
// ===================================
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            background: rgba(255, 215, 0, 0.6);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: rippleEffect 0.6s ease-out forwards;
            pointer-events: none;
        `;
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        0% {
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===================================
// Performance: Lazy Load Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease-in';
                
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Add Loading Animation
// ===================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🎉 Wedding Invitation Loaded Successfully! 💒');
console.log('💕 Sravani & Sai Krishna - November 7th, 2025 💕');
