
/*------- This is how we use the DOM to add new locations to the HTML document when the page is loaded.----- */

/* JSON object with locations items */
const locationData = {
    "locations": [
      {
        "address": "Petra Kocica 14b, Zemun, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Zemun,+Zelena+Avenija+-+Najbolja+Teretana+i+Fitnes+Centar/@44.8385307,20.4038976,17.29z/data=!4m6!3m5!1s0x475a656573d80bd1:0x52ea786d5d0dd3c8!8m2!3d44.8381614!4d20.4043769!16s%2Fg%2F11fnxv_ydv?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "address": "Omladinskih brigada 65a, Novi Beograd, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Novi+Beograd/@44.8002934,20.4023666,17z/data=!3m1!4b1!4m6!3m5!1s0x475a6f9745555555:0xa6c1806f5dc591c2!8m2!3d44.8002934!4d20.4023666!16s%2Fg%2F11c545wzd5?hl=sr&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      },
      {
        "address": "Kralja Mihaila Zetskog 6, Batajnica, Serbia",
        "mapLink": "https://www.google.com/maps/place/Mega+Gym+Batajnica/@44.8944677,20.295322,19z/data=!4m6!3m5!1s0x475a678d9a9810cf:0x5d7d4bc10320b32d!8m2!3d44.894534!4d20.2955426!16s%2Fg%2F11fph42h09?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
      }
    ]
  };
  
  /* Function to display locations */
  function loadLocations() {
    /* document.querySelector --> It is used to select an element from the DOM based on a CSS selector. */
    const container = document.querySelector('.light-blue-container .row');
  
    locationData.locations.forEach(location => {
      /* Creating a column for each location. */
      const col = document.createElement('div');
      col.classList.add('col-md-4');
  
      /* Creating the address. */
      const addressElement = document.createElement('td');
      addressElement.textContent = location.address;
  
      /* Creating a link. */
      const linkElement = document.createElement('a');
      linkElement.href = location.mapLink;
      linkElement.target = '_blank';
      linkElement.textContent = 'View on Map';
  
    
      col.appendChild(addressElement);
      col.appendChild(document.createElement('div').appendChild(linkElement));
  
      container.appendChild(col);
    });
  }
  
 

/* Calling the function when the page is loaded */
  document.addEventListener('DOMContentLoaded', loadLocations);