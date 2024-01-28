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
    scrollToElementWithPadding("carouselAnchor", "100px");

    // Wait for the scroll to complete before updating the carousel
    const checkScrollComplete = () => {
      const carouselElement = document.getElementById("carouselAnchor");
      if (window.scrollY >= carouselElement.offsetTop - 100) {
        // 100 is the padding offset
        $("#projectsCarousel").carousel(parseInt(projectIndex));
      } else {
        setTimeout(checkScrollComplete, 100); // Check again after 100ms
      }
    };

    setTimeout(checkScrollComplete, 500); // Initial delay before starting to check
  }
}
