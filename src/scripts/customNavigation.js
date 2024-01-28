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

// Function to control carousel navigation based on URL parameter
export function navigateCarouselOnLoad() {
  function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  const projectIndex = getURLParameter("projectIndex");
  if (projectIndex !== null && !isNaN(projectIndex)) {
    scrollToElementWithPadding("carouselAnchor", "100px");

    setTimeout(() => {
      $("#projectsCarousel").carousel(parseInt(projectIndex));
    }, 500);
  }
}
