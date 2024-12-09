const WORKTIME = new WorkTimeClass();

function WorkTimeClass() {
  // Work time data
  this.workTimeData = {
    "workTime": {
      "mondayFriday": {
        "en": "Monday - Friday: 08:00 - 22:00",
        "rs": "Ponedeljak - Petak: 08:00 - 22:00"
      },
      "saturday": {
        "en": "Saturday: 09:00 - 18:00",
        "rs": "Subota: 09:00 - 18:00"
      },
      "sunday": {
        "en": "Sunday: Closed",
        "rs": "Nedelja: Zatvoreno"
      }
    },
    "notice": {
      "en": "New Year Holidays from 01.01. to 09.01.",
      "rs": "Nova godina neradni dani od 01.01. do 09.01.",
      "active": false // Notification active status
    }
  };

  // Function to update work hours and notifications based on the selected language
  this.updateWorkTimeContent = (language) => {
    const workTimeTitle = document.getElementById('work-time-title');
    const workTimeInfo = document.getElementById('work-time-info');
    const saturdayInfo = document.getElementById('saturday-info');
    const sundayInfo = document.getElementById('sunday-info');
    const noticeInfo = document.getElementById('notice-info');
    
    // Clear previous content (if necessary)
    workTimeTitle.textContent = ''; 
    workTimeInfo.innerHTML = '';
    saturdayInfo.innerHTML = '';
    sundayInfo.innerHTML = '';
    noticeInfo.textContent = '';

    // Update work time information based on selected language
    workTimeInfo.innerHTML = `${this.workTimeData.workTime.mondayFriday[language]} <br>${this.workTimeData.workTime.saturday[language]} <br>${this.workTimeData.workTime.sunday[language]}`;
    
    // Display notification if active
    if (this.workTimeData.notice && this.workTimeData.notice.active) {
      noticeInfo.textContent = this.workTimeData.notice[language];
      noticeInfo.classList.add('active'); // Add 'active' class to display notification
    } else {
      noticeInfo.classList.remove('active'); // Remove 'active' class if no notification
    }
  };

  // Function to change language
  // Instead of implementing language change logic here, we call the LANGUAGE object method
  this.changeLanguage = (language) => {
    LANGUAGE.changeLanguage(language); // Call the language change method from ChangeLanguage.js
    this.updateWorkTimeContent(language); // Update work time content based on new language
  };
}

// Immediately update content when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Get selected language from localStorage (default to 'en' if none exists)
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  WORKTIME.updateWorkTimeContent(selectedLanguage); // Update work time information on page load
});