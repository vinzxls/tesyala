// ===== BACKGROUND PARTICLES =====
function createParticles() {
    const container = document.getElementById('particles');
    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.bottom = '-10px';

        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 15;
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';

        // Random color variants
        const colors = [
            'rgba(255, 182, 193, 0.6)',
            'rgba(255, 105, 180, 0.5)',
            'rgba(255, 192, 203, 0.5)',
            'rgba(255, 255, 255, 0.3)',
            'rgba(255, 215, 0, 0.3)',
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = `radial-gradient(circle, ${color}, transparent)`;

        container.appendChild(particle);
    }
}

// ===== FALLING PETALS =====
function createFallingPetals() {
    const container = document.getElementById('fallingPetals');
    const count = 20;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');

        petal.style.left = Math.random() * 100 + '%';

        const size = Math.random() * 10 + 10;
        petal.style.width = size + 'px';
        petal.style.height = (size * 1.3) + 'px';

        const duration = Math.random() * 8 + 7;
        const delay = Math.random() * 20 + 3;
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = delay + 's';

        // Vary petal colors
        const hue = Math.random() * 30 + 325; // Pink range
        const saturation = Math.random() * 30 + 70;
        const lightness = Math.random() * 20 + 65;
        petal.style.background = `radial-gradient(ellipse at 30% 30%, 
            hsl(${hue}, ${saturation}%, ${lightness}%), 
            hsl(${hue}, ${saturation}%, ${lightness - 15}%))`;

        container.appendChild(petal);
    }
}

// ===== FLOATING HEARTS =====
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['♥', '♡', '❤', '💕'];
    const count = 12;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 16 + 10) + 'px';

        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 20 + 5;
        heart.style.animationDuration = duration + 's';
        heart.style.animationDelay = delay + 's';

        // Vary opacity
        const opacity = Math.random() * 0.3 + 0.15;
        heart.style.color = `rgba(255, 20, 147, ${opacity})`;

        container.appendChild(heart);
    }
}

// ===== CLICK SPARKLE EFFECT =====
function addClickSparkle() {
    const wrapper = document.getElementById('flowerWrapper');

    wrapper.addEventListener('click', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY;

        for (let i = 0; i < 12; i++) {
            createSparkle(x, y);
        }
    });
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = '6px';
    sparkle.style.height = '6px';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '100';

    const colors = ['#ff69b4', '#ffb6c1', '#ffd700', '#ff1493', '#fff'];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.boxShadow = `0 0 6px ${sparkle.style.background}`;

    document.body.appendChild(sparkle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 80 + 40;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;

    sparkle.animate([
        {
            transform: 'translate(0, 0) scale(1)',
            opacity: 1
        },
        {
            transform: `translate(${dx}px, ${dy}px) scale(0)`,
            opacity: 0
        }
    ], {
        duration: 800 + Math.random() * 400,
        easing: 'cubic-bezier(0, 0.5, 0.5, 1)',
        fill: 'forwards'
    }).onfinish = () => sparkle.remove();
}

// ===== CONTINUOUS PETAL SPAWNER =====
function startContinuousPetals() {
    setInterval(() => {
        const container = document.getElementById('fallingPetals');
        const petal = document.createElement('div');
        petal.classList.add('falling-petal');
        petal.style.left = Math.random() * 100 + '%';

        const size = Math.random() * 10 + 10;
        petal.style.width = size + 'px';
        petal.style.height = (size * 1.3) + 'px';

        const duration = Math.random() * 6 + 6;
        petal.style.animationDuration = duration + 's';
        petal.style.animationDelay = '0s';

        const hue = Math.random() * 30 + 325;
        const saturation = Math.random() * 30 + 70;
        const lightness = Math.random() * 20 + 65;
        petal.style.background = `radial-gradient(ellipse at 30% 30%, 
            hsl(${hue}, ${saturation}%, ${lightness}%), 
            hsl(${hue}, ${saturation}%, ${lightness - 15}%))`;

        container.appendChild(petal);

        // Remove after animation
        setTimeout(() => petal.remove(), duration * 1000);
    }, 2000);
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createFallingPetals();
    createFloatingHearts();
    addClickSparkle();

    // Start continuous petals after initial animation completes
    setTimeout(() => {
        startContinuousPetals();
    }, 5000);
});
