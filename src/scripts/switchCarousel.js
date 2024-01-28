export function navigateCarouselOnLoad() {
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

        // Then navigate to the specific slide after a short delay to allow for scrolling
        setTimeout(() => {
            $("#projectsCarousel").carousel(parseInt(projectIndex));
        }, 500); // Adjust delay as needed
    }
}
