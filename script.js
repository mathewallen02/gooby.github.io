// messages.js
const messages = [
    "I love you Gooby, have fun in Texas!!!",
    "Message 2 for my girlfriend",
    "Message 3 for my girlfriend",
    // Add more messages as needed
];

// Function to get today's message
function getTodaysMessage() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return messages[dayOfYear % messages.length];
}

// Display the message
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("message-of-the-day").textContent = getTodaysMessage();
});