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


/*---------------------------------------------------------------------*/
/*================== OOP programming - Using Class ====================*/
/*-------------------------------------------------------------------- */   
/*-- Maintenance mode is activated using boolean logic true or false.--*/
/*-- The change is made in the config.json file. ----------------------*/
/*--------------- TRUE = Maintenance Mode Enable; -------------------- */
/*--------------- FALSE = Maintenance Mode Disable.------------------- */

class MaintenanceChecker {
  constructor(configUrl) {
      this.configUrl = configUrl;
  }

  async fetchConfig() {
      try {
          const response = await fetch(this.configUrl);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const config = await response.json();
          this.handleMaintenance(config);
      }   catch (err) {
              alert("There was a problem loading the site configuration.");
          }
  }

  handleMaintenance(config) {
      const currentPage = window.location.href;

      if (config.maintenance) {
          if (!currentPage.includes("maintenance.html")) {
              window.location.href =  "http://localhost/Course/GYM/pages/maintenance.html";
          }
      } 
      else {
          if (currentPage.includes("maintenance.html")) {
              window.location.href = "http://localhost/Course/GYM/pages/index.html";
          }
      }
  }
}

// URL to your JSON file
const jsonUrl = `http://localhost/Course/GYM/assets/json/contactusconfig.json?timestamp=${Date.now()}`;

//Creating instances of the class and calling the method to load the configuration.
const maintenanceChecker = new MaintenanceChecker(jsonUrl);
maintenanceChecker.fetchConfig();

/* The file autoRefresh.js provides functionality for automatically refreshing HTML pages. 
The interval is a global variable that can only be modified within this file. 
The AutoRefresh class is imported into all HTML files except for the ContactUs page. 
On the ContactUs page, autoRefresh.js is invoked by the function from config.js. */
class AutoRefresh {
  constructor() {
    this.interval = AutoRefresh.globalInterval;
    this.timerId = null;
  }
  // Static variable for global interval
  static globalInterval = 10000; 

  start() {
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        window.location.reload();
      }, this.interval);
      console.log(`Auto-refresh started with an interval of ${this.interval}ms.`);
    } 
    else {
      console.log("Auto-refresh is already running.");
    }
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log("Auto-refresh stopped.");
    } 
    else {
      console.log("Auto-refresh is not running.");
    }
  }
  
  updateInterval(newInterval) {
    // Updates the static variable for the global interval.
    AutoRefresh.globalInterval = newInterval; 
    this.stop();
    this.start();
    console.log(`Auto-refresh interval updated to ${newInterval}ms.`);
  }
}

// Create an instance of AutoRefresh and start the refresh
const autoRefresh = new AutoRefresh();
autoRefresh.start();