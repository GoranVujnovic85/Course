

function changeLanguage(language) {
  // Store the selected language in localStorage (so it persists across page reloads)
  localStorage.setItem('selectedLanguage', language);

  // Update content based on selected language
  updateContent(language);
}

function updateContent(language) {
  // Find all elements with data-translate
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    // Update the text content for translatable elements
    const translation = element.getAttribute(`data-${language}`);
    if (translation) {
      element.textContent = translation; // Set the new text content
    }

    // Also update placeholder attributes for input and textarea elements
    if (element.hasAttribute('placeholder')) {
      const placeholderTranslation = element.getAttribute(`data-placeholder-${language}`);
      if (placeholderTranslation) {
        element.setAttribute('placeholder', placeholderTranslation); // Update placeholder
      }
    }
  });
}

// Set the language when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the selected language from localStorage (defaults to 'en' if not found)
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  updateContent(selectedLanguage);
  
  // Optionally highlight the selected language in the dropdown
  document.getElementById(`${selectedLanguage}Lang`).classList.add('active');
});


