document.addEventListener("DOMContentLoaded", function() {
  function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  const projectIndex = getURLParameter("projectIndex");

  if (projectIndex !== null && !isNaN(projectIndex)) {
    // Scroll to the "Other Projects" section
    window.location.hash = "other-projects";

    window.onload = function() {
      // Adding a slight delay to ensure carousel is initialized
      setTimeout(function() {
        // Navigate to the specific slide
        $("#projectsCarousel").carousel(parseInt(projectIndex));
      }, 1000); // Delay
    };
  }
});
