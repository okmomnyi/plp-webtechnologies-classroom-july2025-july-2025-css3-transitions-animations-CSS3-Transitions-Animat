// Select the button and the box
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

// Function to toggle animation on the box
function toggleAnimation() {
    // Toggle the 'animate' class to trigger CSS transition
    box.classList.toggle("animate");
}

// Function to start a pulsing animation
function startPulse() {
    box.classList.add("pulse");
}

// Function to stop pulsing animation
function stopPulse() {
    box.classList.remove("pulse");
}

// Event listener for the button
animateBtn.addEventListener("click", function() {
    toggleAnimation();

    // Bonus: add a pulsing animation for fun
    startPulse();
    
    // Stop pulsing after 3 seconds
    setTimeout(stopPulse, 3000);
});
