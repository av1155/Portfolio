import "bootstrap";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Function to scroll to an element with temporary padding
function scrollToElementWithPadding(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: "smooth" });

        // Apply temporary padding to center the content
        element.style.paddingTop = "50px";
    }
}

// Function to apply padding when the page loads for all anchor links
function applyPaddingOnLoad() {
    const anchorLinks = [
        "flaskkeyring-project",
        "dotfiles-project",
        "gpa-calculator-project",
        "pypassmanager-project",
        "mastermindai-project",
        "stockfoliohub-project",
        "planetpath-project",
        "weather-alert-program-project",
    ];

    // Get the current URL
    const currentURL = window.location.href;

    // Check if there is a specific URL parameter
    const hasSpecificParameter = anchorLinks.some((link) =>
        currentURL.includes(`#${link}`),
    );

    // Scroll to the appropriate element or the top of the page based on the parameter
    if (hasSpecificParameter) {
        anchorLinks.forEach((link) => {
            scrollToElementWithPadding(link);
        });
    } else {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }
}

// Listen for the "DOMContentLoaded" event to ensure the page is ready
document.addEventListener("DOMContentLoaded", () => {
    initScrollReveal(targetElements, defaultProps);
    initTiltEffect();
    applyPaddingOnLoad(); // Call the function when the page is loaded
});
