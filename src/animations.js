// Import GSAP and its plugins (if needed)
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin (optional)
gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes GSAP animations.
 * 
 * Usage:
 * - Use this function to initialize your custom animations.
 * - Add elements in Webflow with data attributes like `data-animate`, `data-duration`, or custom attributes.
 * - Use `gsap` methods directly or create functions for specific animations.
 */
export function initializeAnimations() {
  console.log('GSAP initialized and ready for custom animations.');

  // Example: Basic usage of gsap to animate elements
  // Uncomment the following line and customize as needed:
  // gsap.to('.element-class', { opacity: 1, duration: 1 });
}

/**
 * Future Recommendations:
 * - Add custom functions for specific animations like `fadeIn`, `slideIn`, or `scaleUp`.
 * - Use data attributes or direct class/ID selectors to target elements.
 * - Integrate `ScrollTrigger` for scroll-based animations.
 */
