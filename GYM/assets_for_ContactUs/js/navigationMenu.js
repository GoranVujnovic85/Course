document.addEventListener("DOMContentLoaded", () => {
    // Učitaj JSON fajl sa informacijama o meniju
    fetch('./assets_for_ContactUs/json/navigationMenu.json')
      .then(response => response.json())
      .then(data => {
        const menuContainer = document.querySelector('.navbar-nav');
  
        // Generiši HTML za svaki meni dugme
        data.menu.forEach(button => {
          const listItem = document.createElement('li');
          listItem.classList.add('nav-item');
  
          const anchor = document.createElement('a');
          anchor.classList.add('nav-link');
          anchor.href = button.link;
          anchor.setAttribute('data-translate', button.dataTranslate);
          anchor.setAttribute('data-en', button.dataEn);
          anchor.setAttribute('data-rs', button.dataRs);
          anchor.textContent = button.text;
  
          listItem.appendChild(anchor);
          menuContainer.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error loading the menu JSON:', error);
      });
  });