
let aa11 = null

// Define translations object with default values for English and Serbian
const translations = {
  en: {
    freeLockers: "Free Lockers",
    freeLockersMessage: "The following lockers are free:",
    noFreeLockersMessage: "No free lockers available.",
    lockersPlaceholder: "Lockers will be displayed here",
    tagId: "Locker number",
    name: "User name",
  },
  rs: {
    freeLockers: "Slobodni ormarići",
    freeLockersMessage: "Sledeći ormarići su slobodni:",
    noFreeLockersMessage: "Nema slobodnih ormarića.",
    lockersPlaceholder: "Ormarići će biti prikazani ovde",
    tagId: "Broj ormarića",
    name: "Ime korisnika",
  }
};


// Create LOCKER object as an instance of lockerClass
var LOCKER = new lockerClass();

function lockerClass(data) {
  // Function to change language
  this.changeLanguage = function (language) {
    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Use the LANGUAGE object to change language and update content
    LANGUAGE.changeLanguage(language);  // Call the function from ChangeLanguage.js

    // Update the page content immediately after changing the language
    this.updateContent(language); // Call updateContent immediately
    this.locker(data);
    this.displayInactiveIds();
    this.datarows(data);

    console.log("changelanguage function:", localStorage.getItem('selectedLanguage'));
  };

  this.updateContent = function (language) {
    LANGUAGE.updateContent(language); // Calling function from ChangeLanguage.js

    // Setting translations for placeholder fields
    const placeholders = document.querySelectorAll('input[data-translate]'); // Use data-translate instead of placeholder
    placeholders.forEach(input => {
      const placeholderKey = input.getAttribute('data-translate'); // Get the key from the data-translate attribute
      const translatedText = this.getTranslation(placeholderKey, language); // Get the translated text using the key and language
      input.setAttribute('placeholder', translatedText); // Set the translated text as the placeholder
    });
  };

  // Locker function to calculate count and update the result display
  this.locker = function (data) {
    console.log("Running locker function..."); // Debugging line
    let count = 0;
    data.results.tags.forEach(tag => {
      if (tag.is_active === false) {
        count++;
      }
    });
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    console.log("Selected language from localStorage:", selectedLanguage); // Debugging line
    this.updateResultDisplay(count, selectedLanguage); // Update the display with the correct language and count
  }

  // Function to update the result display with the translated text and dynamic count
  this.updateResultDisplay = function (count, language) {
    const staticText = this.getTranslation('freeLockers', language);
    const resultText = `${staticText}: ${count}`;
    document.getElementById('resultDisplay').value = resultText;
  }

  // Get inactive IDs from tags
  this.getInactiveIdsFromTags = function (data) {
    let inactiveIds = [];

    if (data && data.results && Array.isArray(data.results.tags)) {
      data.results.tags.forEach(tag => {
        if (tag.is_active === false) {
          inactiveIds.push(tag.id);
        }
      });

      inactiveIds.sort((a, b) => a - b);
    } else {
      console.error("No free locker");
    }

    return inactiveIds;
  }
  this.activeClass = function (page) {
    const currentPage = window.location.pathname.split('/').pop(); // Uzmi ime trenutne stranice iz URL-a
    return currentPage === page ? 'active' : ''; // Ako je trenutna stranica ta koja je u parametru, dodaj klasu 'active'
  };

  // Function to display inactive IDs in the input field
  this.displayInactiveIds = function () {
    const data = aa11;
    const inactiveIds = this.getInactiveIdsFromTags(data);
    const resultDisplay = document.getElementById('resultDisplay2');

    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    const inactiveLockersText = this.getTranslation('freeLockersMessage', selectedLanguage);
    const noInactiveLockersText = this.getTranslation('noFreeLockersMessage', selectedLanguage);

    if (inactiveIds.length > 0) {
      resultDisplay.value = `${inactiveLockersText} ${inactiveIds.join(', ')}`;
    } else {
      resultDisplay.value = noInactiveLockersText;
    }
    this.locker(data);
    this.datarows(data);
  }

  // Function to get all active IDs from tags
  this.getActiveIdsFromTags = function (data) {
    let activeIds = [];

    if (data && data.results && Array.isArray(data.results.tags)) {
      data.results.tags.forEach(tag => {
        if (tag.is_active === true) {
          activeIds.push(tag.id);
        }
      });

      activeIds.sort((a, b) => a - b);
    } else {
      console.error("No active locker");
    }

    return activeIds;
  }

  // Function to handle the display of data rows based on active tags
  this.datarows = function (data) {

    const activeIds = this.getActiveIdsFromTags(data);
    const tags = data.results.tags;
    const activeTags = tags.filter(tag => activeIds.includes(tag.id));
    activeTags.sort((a, b) => a.id - b.id);
    console.log("Inactive IDs:", activeIds); // Log inactive IDs

    const container = document.querySelector('.data-container');
    container.innerHTML = '';

    let row;
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const selectedTranslations = translations[selectedLanguage]; // Use translations where necessary

    activeTags.forEach((tag, index) => {
      if (index % 5 === 0) {
        row = document.createElement('div');
        row.classList.add('tag-row');
        container.appendChild(row);
      }

      const tagDiv = document.createElement('div');
      tagDiv.classList.add('tag-item');
      // bottom - up
      // --------------------------------------------------------------------------
      // top - down
      tagDiv.innerHTML = TEMPLATE.render('locker', 'datarow', [
        {
          key: 'TranslatedTagId',
          value: selectedTranslations.tagId
        },
        {
          key: 'TranslatedName',
          value: selectedTranslations.name
        },
        {
          key: 'tagId',
          value: tag.id
        },
        {
          key: 'tagName',
          value: tag.name
        },
      ])
      row.appendChild(tagDiv);
    });
  }

  // Function to get the translated text based on a key
  this.getTranslation = function (key, language) {
    // Fallback to translations object for non-LANGUAGE supported keys
    const languageTranslations = translations[language];
    if (languageTranslations && languageTranslations[key]) {
      return languageTranslations[key];
    }
    return translations['en'][key]; // Fallback to English
  }

  // Event listener for language changes
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (event) {
      const newLanguage = event.target.getAttribute('data-lang');
      console.log("Language changed to:", newLanguage);

      localStorage.setItem('selectedLanguage', newLanguage);
      console.log("Language saved to localStorage:", newLanguage);

      LANGUAGE.changeLanguage(newLanguage);
      LOCKER.locker(data);
      LOCKER.displayInactiveIds();
      LOCKER.datarows(data);
    });
  });

  // Call locker and datarows when page loads
  document.addEventListener('DOMContentLoaded', function () {
    const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    LOCKER.updateContent(selectedLanguage);
    LOCKER.locker(data);
    LOCKER.displayInactiveIds();
  });
}





document.addEventListener('DOMContentLoaded', async function () {
  try {
    debugger
    // URL to your JSON file with a timestamp to avoid caching
    const jsonUrl = `http://localhost/GYM/assets/json/locker.json`;

    // Loading the JSON file
    const response = await fetch(jsonUrl);
    console.log("fetck OK");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    aa11 = data;

    // Initialize the LOCKER object after data is fetched
    LOCKER = new lockerClass(data);  // Pass data to the lockerClass constructor

    // Call locker and datarows after the LOCKER instance is ready
    LOCKER.updateContent(localStorage.getItem('selectedLanguage') || 'en');
    
    LOCKER.displayInactiveIds();

  } catch (error) {
    console.error('Error loading JSON:', error);
  }
});