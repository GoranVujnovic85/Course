const IMAGES = new ImagesClass();

function ImagesClass() {

  // Method for dynamically loading images
 this.loadImages = function () {
  const imageContainer = document.querySelector('.image-text-container'); // Find the container for the images
  const infoText = document.getElementById('info-text'); // Find the text to display

  // Filter active images from CONFIG
  const images = CONFIG.machines.results.filter(item => item.active === true);

  // If there are no active images, do nothing
  if (images.length === 0) {
    return;
  }

  let row; // Variable for new row of images

  // Loop through active images
  images.forEach((image, index) => {
    // Create a new row every 3 images
    if (index % 3 === 0) {
      row = document.createElement('div'); // Create a new div for the row
      row.classList.add('image-row'); // Add class for the row
      imageContainer.appendChild(row); // Append the row to the container
    }

    // Create a div for each image
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item'); // Add class for image item

    // Create img element for the image
    const imgElement = document.createElement('img');
    imgElement.src = image.image; // Set the image URL
    imgElement.alt = 'Gym equipment'; // Set the alt text for the image
    imgElement.classList.add('image-thumbnail'); // Add class for styling

    // Add event listener to open the image in the modal
    imgElement.addEventListener('click', function() {
      openModal(image.image); // Open modal and display the image
    });

    // Append the image to the div with class 'image-item'
    imageItem.appendChild(imgElement);
    row.appendChild(imageItem); // Append the image item to the row
  });

  // Append the info text after images are loaded
  imageContainer.appendChild(infoText);
};

// Function to open the modal with the enlarged image
function openModal(imageSrc) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  modal.style.display = 'block'; // Show the modal
  modalImg.src = imageSrc; // Set the image source in the modal
}

// Add event listener to close the modal when clicking on the X
document.querySelector('.close').addEventListener('click', function() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none'; // Hide the modal
});

// Add event listener to close the modal when clicking outside the image
document.getElementById('image-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.style.display = 'none'; // Hide the modal if clicked outside the image
  }
});
}
// Call the function to load images when the page loads
document.addEventListener('DOMContentLoaded', function() {
  IMAGES.loadImages(); // Call the loadImages method on the object
});