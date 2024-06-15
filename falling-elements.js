// falling-elements.js

const maxHearts = 15; // Maximum number of hearts at a time
let activeHearts = 0; // Counter for active hearts

function createFallingElement(src, size) {
    if (activeHearts >= maxHearts) return; // Do not create more if limit is reached

    const element = document.createElement('img');
    element.src = `images/${src}`;
    element.className = 'falling';
    element.style.width = size + 'px';
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.animationDuration = (5 + Math.random() * 5) + 's';
    element.style.animationDelay = Math.random() * 5 + 's';

    element.addEventListener('animationstart', function() {
        activeHearts++; // Increment counter when animation starts
    });

    element.addEventListener('animationend', function() {
        element.remove();
        activeHearts--; // Decrement counter when animation ends
    });

    document.getElementById('falling-elements').appendChild(element);
}

function createFallingElements() {
    const src = 'heart.png'; // Only use heart graphic
    const sizes = [20, 30, 40, 50, 60]; // Different sizes for variety
    setInterval(() => {
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        createFallingElement(src, size);
    }, 1000); // Adjust frequency as needed
}

// Start creating elements immediately
document.addEventListener('DOMContentLoaded', () => {
    createFallingElements();
    for (let i = 0; i < 10; i++) { // Create a few initial elements for immediate effect
        const size = [20, 30, 40, 50, 60][Math.floor(Math.random() * 5)];
        createFallingElement('heart.png', size);
    }
});
