document.addEventListener("DOMContentLoaded", function () {
  function waitForJQuery() {
    if (window.jQuery) {
      // jQuery is loaded, now run the carousel code
      runCarouselSwitch();
    } else {
      // Wait a bit more if jQuery isn't loaded yet
      setTimeout(waitForJQuery, 50);
    }
  }

  function runCarouselSwitch() {
    function getURLParameter(name) {
      return new URLSearchParams(window.location.search).get(name);
    }

    const projectIndex = getURLParameter("projectIndex");

    if (projectIndex !== null && !isNaN(projectIndex)) {
      // Scroll to the "Other Projects" section
      window.location.hash = "other-projects";

      window.onload = function () {
        // Adding a slight delay to ensure carousel is initialized
        setTimeout(function () {
          // Navigate to the specific slide
          $("#projectsCarousel").carousel(parseInt(projectIndex));
        }, 350); // Delay
      };
    }
  }

  // Start the check for jQuery
  waitForJQuery();
});
