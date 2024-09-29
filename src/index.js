// src/index.js
import { initializeAnimations } from './animations.js';
import { initializeInteractions } from './interactions.js';
import { webflowInit } from './webflow-utils.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Webflow JS Template Initialized');

  // Initialize Webflow-specific functions
  webflowInit();
  
  // Set up animations
  initializeAnimations();

  // Set up interactions
  initializeInteractions();
});
