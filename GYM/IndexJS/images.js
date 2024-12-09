const IMAGES = new ImagesClass();

function ImagesClass() {
  // Sadržaj slika (koji ostaje nepromenjen)
  this.data = {
    results: [
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTHfnEchYsyIq0gszHjw_YlnHOQZgwJi7H1g&s",
        active: true,
        createdAt: "Mon Nov 25 2024 11:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEDWXN2HCrILDZs7KohSkWSrlFjjy7pQ8gw&s",
        active: true,
        createdAt: "Mon Nov 25 2024 12:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYbc3UIpc890hsef7pXt5ss1aKDJKZsmF73Q&s",
        active: true,
        createdAt: "Mon Nov 25 2024 10:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWrcRwq19nWTNmT5XeXLzgj7NRGnvoQuYWA&s",
        active: false,
        createdAt: "Mon Nov 25 2024 13:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdvVHQNHVLXbHNSGzyYNykt5tmSn9dog42Q&s",
        active: true,
        createdAt: "Mon Nov 25 2024 14:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://nwscdn.com/media/catalog/product/cache/h265xw265/c/o/commercial_dumbbell_rack_main.jpg",
        active: false,
        createdAt: "Mon Nov 25 2024 15:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://cdn.prod.website-files.com/6463557675a28f1b150ff1b2/6554e34f69897531f9d5c3ac_Gym-2-M.png",
        active: true,
        createdAt: "Mon Nov 25 2024 16:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://j6q3t7s5.delivery.rocketcdn.me/wordpress/wp-content/uploads/2022/03/health-club-commercial-gym-design.jpg",
        active: true,
        createdAt: "Mon Nov 25 2024 17:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://www.thirdspace.london/wp-content/uploads/2024/09/Third_Space_Mayfair_25.11.21_Main-Floor_005.jpg",
        active: false,
        createdAt: "Mon Nov 25 2024 18:26:46 GMT+0100 (Central European Standard Time)"
      },
      {
        image: "https://cdn.prod.website-files.com/6463557675a28f1b150ff1b2/6525150e689a245e52a0d8a6_Soho%20-%20gym%20(1).png",
        active: false,
        createdAt: "Mon Nov 25 2024 19:26:46 GMT+0100 (Central European Standard Time)"
      }
    ]
  };

  // Method for dynamically loading images
this.loadImages = function () {
  const imageContainer = document.querySelector('.image-text-container'); // Find the container for the images
  const infoText = document.getElementById('info-text'); // Find the text to display

  // Filter active images
  const images = this.data.results.filter(item => item.active === true);

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