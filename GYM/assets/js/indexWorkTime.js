let workTimeData = null; // This will hold the data after fetching it

function WorkTimeClass() {
  // Fetch the work time data from the server when the page loads
  this.fetchWorkTimeData = () => {
    fetch('http://localhost:8080/worktimedata?timestamp=${Date.now()}')
      .then(response => response.json())
      .then(data => {
        workTimeData = data; // Store the data in the workTimeData variable
        // After fetching, update the content based on the language
        const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.updateWorkTimeContent(selectedLanguage);
      })
      .catch(error => console.error('Error fetching work time data:', error));
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
    if (workTimeData) {
      workTimeInfo.innerHTML = `${workTimeData.workTime.mondayFriday[language]} <br>${workTimeData.workTime.saturday[language]} <br>${workTimeData.workTime.sunday[language]}`;
    
      // Display notification if active
      if (workTimeData.notice && workTimeData.notice.active) {
        noticeInfo.textContent = workTimeData.notice[language];
        noticeInfo.classList.add('active'); // Add 'active' class to display notification
      } else {
        noticeInfo.classList.remove('active'); // Remove 'active' class if no notification
      }
    }
  };

  this.changeLanguage = (language) => {
    LANGUAGE.changeLanguage(language); // Change the language for the rest of the content
    this.updateWorkTimeContent(language); // Update work time content based on new language
  };
}

// Immediately update content when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const WORKTIME = new WorkTimeClass();
  WORKTIME.fetchWorkTimeData(); // Fetch work time data and update content on page load
});