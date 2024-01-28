// Function to adjust scroll behavior
export function adjustScrollForAbout() {
    if (location.hash === "#about") {
        document.documentElement.style.scrollPaddingTop = "0";
    } else {
        document.documentElement.style.scrollPaddingTop = "3rem";
    }
}

// Add event listener for the "Know More" button
function setupKnowMoreButton() {
    const knowMoreBtn = document.getElementById("knowMoreBtn");
    if (knowMoreBtn) {
        knowMoreBtn.addEventListener("click", () => {
            document.documentElement.style.scrollPaddingTop = "0";
        });
    }
}

// Event listener for hash changes
window.addEventListener("hashchange", adjustScrollForAbout);

// Event listener for initial page load
document.addEventListener("DOMContentLoaded", function() {
    adjustScrollForAbout();
    setupKnowMoreButton();
});
