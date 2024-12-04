// Function to change language
function changeLanguage(language) {
  // Store the selected language in localStorage (so it persists across page reloads)
  localStorage.setItem('selectedLanguage', language);

  // Update content based on selected language
  updateContent(language);
  // Highlight the selected language in the dropdown
  highlightSelectedLanguage(language);
}

// Function to update the page content
function updateContent(language) {
  const elements = document.querySelectorAll('[data-translate]'); // Find all elements with data-translate
  elements.forEach(element => {
    // If the element is a checkbox (input type="checkbox"), we use closest to find the label
    if (element.tagName.toLowerCase() === 'input' && element.type === 'checkbox') {
      const label = element.closest('label'); // Find the label that is the parent of the input
      if (label) {
        const translation = label.getAttribute(`data-${language}`); // Translation for the label
        if (translation) {
          // We only change the text in the label, but do not modify the checkbox
          const labelText = label.querySelector('span'); // We recommend placing the text inside a <span> element
          if (labelText) {
            labelText.textContent = translation; // Set the translation inside the <span> tag
          }
        }
      }
    } else {
      // If it's not a checkbox, we will use the same approach as before for other elements
      const translation = element.getAttribute(`data-${language}`);
      if (translation) {
        element.textContent = translation; // Set the new text based on the language
      }
    }
  });
}

 // Function to highlight the selected language in the dropdown
 function highlightSelectedLanguage(language) {
  // Remove 'active' class from both language options
  document.getElementById('rsLang').classList.remove('active');
  document.getElementById('enLang').classList.remove('active');
  // Add 'active' class to the selected language option
  document.getElementById(`${language}Lang`).classList.add('active');
}
// Set the language when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the selected language from localStorage (defaults to 'en' if not found)
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  updateContent(selectedLanguage);
});