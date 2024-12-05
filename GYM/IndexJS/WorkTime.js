const workTimeData = {
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
    "active": false // Add the notification activity
  }
};

// Function to update work hours and notifications on the page
function updateWorkTimeContent(language) {
  // Get the elements that need to be updated
  const workTimeTitle = document.getElementById('work-time-title');
  const workTimeInfo = document.getElementById('work-time-info');
  const saturdayInfo = document.getElementById('saturday-info');
  const sundayInfo = document.getElementById('sunday-info');
  const noticeInfo = document.getElementById('notice-info');
  
  // Reset the previous content (if needed)
  workTimeTitle.textContent = ''; 
  workTimeInfo.innerHTML = '';
  saturdayInfo.innerHTML = '';
  sundayInfo.innerHTML = '';
  noticeInfo.textContent = '';

  // Update the content based on the selected language
  workTimeInfo.innerHTML = `${workTimeData.workTime.mondayFriday[language]} <br>${workTimeData.workTime.saturday[language]} <br>${workTimeData.workTime.sunday[language]}`;
  
  // Update the notification if needed
  if (workTimeData.notice && workTimeData.notice.active) {
    noticeInfo.textContent = workTimeData.notice[language];
    noticeInfo.classList.add('active'); // Add 'active' class
  } else {
    noticeInfo.classList.remove('active'); // Remove 'active' class
  }
}

function changeLanguage(language) {
  // Change the language in local storage
  localStorage.setItem('selectedLanguage', language);
  updateContent(language); // Update translations
  updateWorkTimeContent(language); // Update work hours on the page
  highlightSelectedLanguage(language);
}
// Call this function immediately on page load
document.addEventListener('DOMContentLoaded', () => {
  const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  updateWorkTimeContent(selectedLanguage);  // Update work hours
});