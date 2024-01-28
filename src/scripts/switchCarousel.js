export function navigateCarouselOnLoad() {
  document.addEventListener("DOMContentLoaded", function () {
    function getURLParameter(name) {
      return new URLSearchParams(window.location.search).get(name);
    }

    const projectIndex = getURLParameter("projectIndex");
    if (projectIndex !== null && !isNaN(projectIndex)) {
      // Scroll to the "Other Projects" section
      const otherProjectsSection = document.querySelector("#other-projects");
      if (otherProjectsSection) {
        otherProjectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Then navigate to the specific slide
      $("#projectsCarousel").carousel(parseInt(projectIndex));
    }
  });
}
