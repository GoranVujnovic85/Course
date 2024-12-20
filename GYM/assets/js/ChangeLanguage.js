// Define the object as a function (factory) that returns an object with methods
var LANGUAGE = new languageClass();

function languageClass() {
  // Initialize the current language (retrieve from localStorage or default to 'en')
  var currentLanguage = localStorage.getItem('selectedLanguage') || 'en';

  // Method to change the language
  this.changeLanguage = function(language) {
    currentLanguage = language;
    localStorage.setItem('selectedLanguage', language); // Save the selected language to localStorage
    this.updateContent(language); // Update the content on the page based on the selected language
    this.highlightSelectedLanguage(language); // Highlight the selected language in the dropdown
  };

 // Method to update the content on the page
this.updateContent = function(language) {
  const elements = document.querySelectorAll('[data-translate]'); // Find all elements with data-translate
  elements.forEach(element => {
    // If the element is a checkbox, use closest to find the label
    if (element.tagName.toLowerCase() === 'input' && element.type === 'checkbox') {
      const label = element.closest('label');
      if (label) {
        const translation = label.getAttribute(`data-${language}`); // Find the translation for the label
        if (translation) {
          const labelText = label.querySelector('span');
          if (labelText) {
            labelText.textContent = translation; // Set the translation inside the <span> tag
          }
        }
      }
    } else {
      // If it's not a checkbox, change the text for other elements
      const translation = element.getAttribute(`data-${language}`);
      if (translation) {
        element.textContent = translation; // Set the new text based on the language
      }
    }

    // Translate placeholder for input, textarea, and similar elements
    if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
      const placeholderTranslation = element.getAttribute(`data-${language}`);
      if (placeholderTranslation) {
        element.setAttribute('placeholder', placeholderTranslation); // Set the placeholder based on the language
      }
    }
  });
};

  // Method to highlight the selected language in the dropdown
  this.highlightSelectedLanguage = function(language) {
    // Remove 'active' class from both languages
    document.getElementById('rsLang').classList.remove('active');
    document.getElementById('enLang').classList.remove('active');
    // Add 'active' class to the selected language
    document.getElementById(`${language}Lang`).classList.add('active');
  };

  // Method for initialization when the page loads
  this.init = function() {
    // Set the default language if it's not found in localStorage
    this.highlightSelectedLanguage(currentLanguage);
    this.updateContent(currentLanguage);
  };
  
}

// Set the language on page load
document.addEventListener('DOMContentLoaded', () => {
  LANGUAGE.init(); // Initialize the language when the page is loaded
});