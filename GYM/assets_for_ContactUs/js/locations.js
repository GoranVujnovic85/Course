
   
/*======= Procedural programming ========*/  
/*
const locationData = {
  locations: [
    {
      address: "Petra Kocica 14b, Zemun, Serbia",
      mapLink: "https://www.google.com/maps/place/Mega+Gym+Zemun,+Zelena+Avenija+-+Najbolja+Teretana+i+Fitnes+Centar/@44.8385307,20.4038976,17.29z/data=!4m6!3m5!1s0x475a656573d80bd1:0x52ea786d5d0dd3c8!8m2!3d44.8381614!4d20.4043769!16s%2Fg%2F11fnxv_ydv?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      address: "Omladinskih brigada 65a, Novi Beograd, Serbia",
      mapLink: "https://www.google.com/maps/place/Mega+Gym+Novi+Beograd/@44.8002934,20.4023666,17z/data=!3m1!4b1!4m6!3m5!1s0x475a6f9745555555:0xa6c1806f5dc591c2!8m2!3d44.8002934!4d20.4023666!16s%2Fg%2F11c545wzd5?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
    },
    {
      address: "Kralja Mihaila Zetskog 6, Batajnica, Serbia",
      mapLink: "https://www.google.com/maps/place/Mega+Gym+Batajnica/@44.8944677,20.295322,19z/data=!4m6!3m5!1s0x475a678d9a9810cf:0x5d7d4bc10320b32d!8m2!3d44.894534!4d20.2955426!16s%2Fg%2F11fph42h09?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
    }
  ]
};

function loadLocations() {
  const container = document.querySelector('.light-blue-container .row');

  locationData.locations.forEach(location => {
    const col = document.createElement('div');
    col.classList.add('col-md-4');

    const addressElement = document.createElement('td');
    addressElement.textContent = location.address;

    const linkElement = document.createElement('a');
    linkElement.href = location.mapLink;
    linkElement.target = '_blank';
    linkElement.textContent = 'View on Map';

    col.appendChild(addressElement);
    col.appendChild(document.createElement('div').appendChild(linkElement));

    container.appendChild(col);
  });
}

document.addEventListener('DOMContentLoaded', loadLocations);
*/


 
/*======= OOP programming - Using Class ========*/

class LocationManager {
  constructor() {
    this.locations = [
      {
        address: "Petra Kocica 14b, Zemun, Serbia",
        mapLink: "https://www.google.com/maps/place/Mega+Gym+Zemun,+Zelena+Avenija+-+Najbolja+Teretana+i+Fitnes+Centar/@44.8385307,20.4038976,17.29z/data=!4m6!3m5!1s0x475a656573d80bd1:0x52ea786d5d0dd3c8!8m2!3d44.8381614!4d20.4043769!16s%2Fg%2F11fnxv_ydv?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      },
      {
      address: "Omladinskih brigada 65a, Novi Beograd, Serbia",
      mapLink: "https://www.google.com/maps/place/Mega+Gym+Novi+Beograd/@44.8002934,20.4023666,17z/data=!3m1!4b1!4m6!3m5!1s0x475a6f9745555555:0xa6c1806f5dc591c2!8m2!3d44.8002934!4d20.4023666!16s%2Fg%2F11c545wzd5?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      },
      {
      address: "Kralja Mihaila Zetskog 6, Batajnica, Serbia",
      mapLink: "https://www.google.com/maps/place/Mega+Gym+Batajnica/@44.8944677,20.295322,19z/data=!4m6!3m5!1s0x475a678d9a9810cf:0x5d7d4bc10320b32d!8m2!3d44.894534!4d20.2955426!16s%2Fg%2F11fph42h09?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      }
    ];
  }
    
  loadLocations() {
    const container = document.querySelector('.light-blue-container .row');
    
    this.locations.forEach(location => {
      const col = document.createElement('div');
      col.classList.add('col-md-4');
    
      const addressElement = document.createElement('td');
      addressElement.textContent = location.address;
    
      const linkElement = document.createElement('a');
      linkElement.href = location.mapLink;
      linkElement.target = '_blank';
      linkElement.textContent = 'View on Map';
    
      col.appendChild(addressElement);
      col.appendChild(document.createElement('div').appendChild(linkElement));
    
      container.appendChild(col);
    });
  }
}
    
// Initialization and method invocation
document.addEventListener('DOMContentLoaded', () => {
    const locationManager = new LocationManager();
    locationManager.loadLocations();
});

   
    
