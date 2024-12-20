
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

