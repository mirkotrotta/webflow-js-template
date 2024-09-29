export function webflowInit() {
    console.log('Webflow initialized');
  }
  
  export function getWebflowElementById(id) {
    return document.getElementById(id);
  }
  
  export function toggleClassOnElement(element, className) {
    if (element) {
      element.classList.toggle(className);
    }
  }
  