export function initializeInteractions() {
    // Example: Click handler for elements with class 'btn'
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert(`Button clicked: ${button.textContent}`);
      });
    });
  
    console.log('Interactions initialized');
  }
  