/*----------------------------------------------*/
/*======= OOP programming - Using Class ========*/
/*--------------------------------------------- */

class LocationLoader {
  constructor(locations) {
    this.locations = locations;
  }

  loadLocations() {
    const container = document.querySelector('.light-blue-container .row');

    // Clear previous content
    container.innerHTML = '';

    this.locations.forEach(location => {
      // Check if the location is visible
      if (!location.visible) {
        return; // If not visible, skip this location
      }

      const col = document.createElement('div');
      col.classList.add('col-md-4');

      const locationElement = document.createElement('div');
      locationElement.classList.add('location');

      const addressElement = document.createElement('div');
      addressElement.textContent = location.address;

      const linkElement = document.createElement('a');
      linkElement.href = location.mapLink;
      linkElement.target = '_blank';
      linkElement.textContent = 'View on Map';

      // Add content to the column
      locationElement.appendChild(addressElement);
      locationElement.appendChild(linkElement);
      col.appendChild(locationElement);

      // Add a column to the main container
      container.appendChild(col);
    });
  }
}

// When the DOM is loaded we continue
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // URL to your JSON file
    const jsonUrl = `http://localhost/Course/GYM/assets/json/contactusconfig.json?timestamp=${Date.now()}`;

    // Loading the JSON file
    const response = await fetch(jsonUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Initialize the class and load the locations
    const loader = new LocationLoader(data.locations);
    loader.loadLocations();
  } 
  catch (error) {
    console.error('Error loading JSON:', error);
  }
});