const data = {
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


// Funkcija koja dinamički učitava slike
function loadImages() {
  const imageContainer = document.querySelector('.image-text-container'); // Pronađi kontejner za slike
  const infoText = document.getElementById('info-text'); // Pronađi tekst koji treba da prikažeš

  // Filtriraj aktivne slike
  const images = data.results.filter(item => item.active === true);

  // Ako nema aktivnih slika, ne radimo ništa
  if (images.length === 0) {
    return;
  }

  let row; // Varijabla za novi red sa slikama

  // Iteriraj kroz aktivne slike
  images.forEach((image, index) => {
    // Kreiraj novi red svakih 3 slike
    if (index % 3 === 0) {
      row = document.createElement('div'); // Kreiraj novi div za red
      row.classList.add('image-row'); // Dodaj klasu za red
      imageContainer.appendChild(row); // Dodaj red u kontejner
    }

    // Kreiraj div za svaku sliku
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item'); // Dodaj klasu za stavku slike

    // Kreiraj img element za sliku
    const imgElement = document.createElement('img');
    imgElement.src = image.image; // Postavi URL slike
    imgElement.alt = 'Gym equipment'; // Postavi alt tekst za sliku

    // Dodaj sliku u div sa klasom 'image-item'
    imageItem.appendChild(imgElement);
    row.appendChild(imageItem); // Dodaj sliku u odgovarajući red
  });

  // Dodaj tekst nakon što su slike učitane
  imageContainer.appendChild(infoText);
}

// Pozovi funkciju da učita slike kada se stranica učita
document.addEventListener('DOMContentLoaded', loadImages);