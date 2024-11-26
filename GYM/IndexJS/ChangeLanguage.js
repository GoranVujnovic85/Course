// Function to change language
function changeLanguage(language) {
  // Store the selected language in localStorage (so it persists across page reloads)
  localStorage.setItem('selectedLanguage', language);

  // Update content based on selected language
  updateContent(language);
}

// Function to update the page content
function updateContent(language) {
  const elements = document.querySelectorAll('[data-translate]'); // Find all elements with data-translate
  elements.forEach(element => {
    const translationKey = element.getAttribute('data-translate');
    const translation = element.getAttribute(`data-${language}`); // Get translation for selected language

    if (translation) {
      element.textContent = translation; // Set the new text content
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