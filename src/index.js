import "bootstrap";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { adjustScrollForAbout } from "./scripts/adjustScroll.js";
import { navigateCarouselOnLoad } from "./scripts/switchCarousel";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
adjustScrollForAbout();
navigateCarouselOnLoad();
