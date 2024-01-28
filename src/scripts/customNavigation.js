// Function to scroll to an element with temporary padding
export function scrollToElementWithPadding(elementId, padding = "50px") {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    element.style.paddingTop = padding;
  }
}

// Function to apply padding when the page loads for all anchor links
export function applyPaddingOnLoad() {
  const anchorLinks = [
    "flaskkeyring-project",
    "dotfiles-project",
    "gpa-calculator-project",
    "pypassmanager-project",
    "mastermindai-project",
    "stockfoliohub-project",
    "planetpath-project",
    "weather-alert-program-project",
    "carouselAnchor",
  ];

  const currentURL = window.location.href;
  const hasSpecificParameter = anchorLinks.some((link) =>
    currentURL.includes(`#${link}`),
  );

  if (hasSpecificParameter) {
    anchorLinks.forEach((link) => {
      scrollToElementWithPadding(link);
    });
  } else {
    window.scrollTo(0, 0);
  }
}

export function navigateCarouselOnLoad() {
  function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  const projectIndex = getURLParameter("projectIndex");
  if (projectIndex !== null && !isNaN(projectIndex)) {
    // Scroll to the carousel section first
    scrollToElementWithPadding("carouselAnchor", "100px");

    // Use an interval to check if the scroll has reached the carousel section
    const scrollInterval = setInterval(() => {
      const carouselElement = document.getElementById("carouselAnchor");
      if (window.scrollY >= carouselElement.offsetTop - 100) {
        // 100px is the padding offset
        clearInterval(scrollInterval);
        // Update the carousel to the specified project index
        $("#projectsCarousel").carousel(parseInt(projectIndex));
      }
    }, 100); // Check every 100ms
  }
}
