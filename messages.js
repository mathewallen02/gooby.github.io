// messages.js
const messages = [
    "Heading to KC, I miss you so much and I'm always thinking about you"
    // Add more messages as needed
];

// Function to get today's message
function getTodaysMessage() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return messages[dayOfYear % messages.length];
}

// Function to display the current date
function displayCurrentDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = today.toLocaleDateString(undefined, options);
    document.getElementById("current-date").textContent = currentDate;
}

// Function to start the countdown to the next message
function startCountdown() {
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date();
        const nextMidnight = new Date(now);
        nextMidnight.setHours(24, 0, 0, 0); // Set to the next midnight

        const timeRemaining = nextMidnight - now;
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `Next message in ${hours}h ${minutes}m ${seconds}s`;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            location.reload(); // Reload the page at midnight
        }
    }

    updateCountdown(); // Initial call
    const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
}

// Display the message when the letter is clicked
document.addEventListener("DOMContentLoaded", function() {
    displayCurrentDate();
    startCountdown();

    const closedLetter = document.getElementById("closed-letter");
    const messageBox = document.getElementById("message-box");
    const messageElement = document.getElementById("message-of-the-day");

    closedLetter.addEventListener("click", function() {
        messageElement.textContent = getTodaysMessage();
        messageBox.style.visibility = "visible";
        messageBox.style.opacity = "1";
        closedLetter.style.visibility = "hidden";
        closedLetter.style.animation = "none"; // Stop the bounce animation
    });
});
