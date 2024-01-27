import "bootstrap";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import {
  applyPaddingOnLoad,
  navigateCarouselOnLoad,
} from "./scripts/customNavigation";

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal(targetElements, defaultProps);
  initTiltEffect();
  applyPaddingOnLoad();
  navigateCarouselOnLoad();
});
