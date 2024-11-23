function toggleScale(element) {
    element.classList.toggle("scaled");
  }

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select all <details> elements
  const detailsElements = document.querySelectorAll('details');

  // Loop through each details element
  detailsElements.forEach(details => {
    // Add a toggle event listener to each
    details.addEventListener('toggle', function () {
      if (this.open) {
        // Find the "Click me" element within the summary of this details
        const clickMeText = this.querySelector('.clickMe');
        if (clickMeText) {
          // Remove the "Click me" text permanently
          clickMeText.parentElement.removeChild(clickMeText);
        }
      }
    });
  });
});