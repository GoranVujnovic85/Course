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
    // Ako je element checkbox (input type="checkbox"), koristimo closest da nađemo label
    if (element.tagName.toLowerCase() === 'input' && element.type === 'checkbox') {
      const label = element.closest('label'); // Nađemo label koji je roditelj inputa
      if (label) {
        const translation = label.getAttribute(`data-${language}`); // Prevod za label
        if (translation) {
          // Menjamo samo tekst u label, ali ne diramo checkbox
          const labelText = label.querySelector('span'); // Preporučujemo da stavite tekst unutar <span> elementa
          if (labelText) {
            labelText.textContent = translation; // Postavimo prevod unutar span tag-a
          }
        }
      }
    } else {
      // Ako nije checkbox, koristićemo kao ranije za druge elemente
      const translation = element.getAttribute(`data-${language}`);
      if (translation) {
        element.textContent = translation; // Postavimo novi tekst na osnovu jezika
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
  // Highlight the selected language in the dropdown
  highlightSelectedLanguage(selectedLanguage);

// Set the language when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the selected language from localStorage (defaults to 'en' if not found)
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  updateContent(selectedLanguage);
});