document.addEventListener("DOMContentLoaded", () => {
  const logoImage = document.querySelector('.navbar-brand img'); 
  
  fetch('./assets_for_ContactUs/json/logoConfig.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load JSON file");
      }
      return response.json();
    })
    .then(data => {
      if (data.logoPath) {
        logoImage.src = data.logoPath;
      } else {
        console.error("Logo path not found in JSON");
      }
    })
    .catch(error => {
      console.error("Error loading logo JSON:", error);
    });
});