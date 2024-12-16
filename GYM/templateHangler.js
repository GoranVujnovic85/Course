var TEMPLATE = new templateClass()
function templateClass() {
  this.init = () => {
    // Check if we are on the login page first
    if (window.location.pathname.includes('login.html')) {
      // If it's login.html, only load the header from the 'common' section
      document.getElementsByTagName('nav')[0].innerHTML = this.render('common', 'header', []);
    } else {
      // If it's not login.html, load both header and footer
      document.getElementsByTagName('footer')[0].innerHTML = this.render('common', 'footer', []);
      document.getElementsByTagName('nav')[0].innerHTML = this.render('common', 'header', []);
    }

    // Check which page is currently loaded and apply specific changes
    const currentPage = window.location.pathname.split('/').pop();  // Get only page name (etc. "index.html")

    // Remove 'active' class from all links in navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add 'active' class on current page
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href').split('/').pop();  // Extract only the page name from the href
      if (linkHref === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page'); // Add aria-current for accessibility
      }
    });

    if (window.location.pathname.includes('index.html')) {
      // If it's index.html, load the carousel
      document.getElementById('carouselExampleControls').innerHTML = this.render('index', 'carousel', []);
      document.getElementById('membership-info').innerHTML = this.render('index', 'membership', []);
      document.getElementById('WorkTime-info').innerHTML = this.render('index', 'worktime', []);
      document.getElementById('GymBar-info').innerHTML = this.render('index', 'gymbar', []);
      document.getElementById('cookieConsent').innerHTML = this.render('index', 'cookies', []);
    }

    if (window.location.pathname.includes('space.html')) {
      // If it's space.html, load a specific carousel
      document.getElementById('carouselExampleControls').innerHTML = this.render('locker', 'carousel', []);
      document.getElementById('membership-info').innerHTML = this.render('index', 'membership', []);
      document.getElementById('containertext').innerHTML = this.render('locker', 'container', []);
      // Modify language links for the space page
      let languageLinks = document.querySelectorAll('.dropdown-item');
      languageLinks.forEach(link => {
        if (link.id === 'rsLang') {
          link.setAttribute('onclick', "LOCKER.changeLanguage('rs')");
        } else if (link.id === 'enLang') {
          link.setAttribute('onclick', "LOCKER.changeLanguage('en')");
        }
      });
    }
  }
  this.templates = {
    common: {
      header: `
                <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="./assets_for_Index/IndexImages/gymlogo.jfif" alt="logo firme"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html" data-translate="Start Page" data-en="Start page"
                        data-rs="Početna">Početna</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html" data-translate="about" data-en="About us" data-rs="O nama">O nama</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html" data-translate="news" data-en="News" data-rs="Vesti">Vesti</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="space.html" data-translate="space" data-en="Space"
                        data-rs="Prostor">Prostor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contactUs.html" data-translate="contact" data-en="Contact page"
                        data-rs="Kontakt">Kontakt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html" data-translate="login" data-en="Login" data-rs="Prijavi se">Prijavi
                        se</a>
                    </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" data-translate="language" data-en="Language" data-rs="Jezik">
                        Jezik
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" id="rsLang" onclick="LANGUAGE.changeLanguage('rs')">RS</a>
                        <a class="dropdown-item" href="#" id="enLang" onclick="LANGUAGE.changeLanguage('en')">EN</a>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            `
      , footer: `<!-- Section: Links  -->
                <section class="container">
                    <div class="container text-center text-md-start mt-5">
                    <!-- Grid row -->
                    <div class="row mt-3">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <!-- Content -->
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3"></i>MEGA GYM FITNES CENTAR
                        </h6>
                        <p data-translate="Description"
                            data-en="Take the first step towards a healthier and stronger version of yourself with our unbeatable offers. Together, we will work hard, achieve our goals, and succeed!"
                            data-rs="Napravi prvi korak ka zdravijoj i jačoj verziji sebe uz naše nenadmašne ponude.
                        Zajedno ćemo se truditi, postići ciljeve i pobediti!">
                            Napravi prvi korak ka zdravijoj i jačoj verziji sebe uz naše nenadmašne ponude.
                            Zajedno ćemo se truditi, postići ciljeve i pobediti!
                        </p>
                        </div>

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Company" data-en="Company" data-rs="Kompanija">
                            Kompanija
                        </h6>
                        <p>
                            <a href="index.html" class="text-reset" data-translate="Start Page" data-en="Start Page"
                            data-rs="Početna">Početna</a>
                        </p>
                        <p>
                            <a href="about.html" class="text-reset" data-translate="About us" data-en="About us" data-rs="O nama">O
                            nama</a>
                        </p>
                        <p>
                            <a href="news.html" class="text-reset" data-translate="News" data-en="News" data-rs="Vesti">Vesti</a>
                        </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Useful links" data-en="Useful links"
                            data-rs="Korisni linkovi">
                            Korisni linkovi
                        </h6>
                        <p>
                            <a href="https://www.pansport.rs/tekstoteka/zdravlje/saveti-za-pocetnike-u-teretani" class="text-reset"
                            data-translate="Useful advices" data-en="Useful advices" data-rs="Korisni saveti">Korisni saveti</a>
                        </p>
                        <p>
                            <a href="https://supplementstore.rs/" class="text-reset" data-translate="Suplements"
                            data-en="Suplements" data-rs="Suplementi">Suplementi</a>
                        </p>
                        <p>
                            <a href="https://rzsport.gov.rs/usluge/sportsko-medicinski-pregledi/" class="text-reset"
                            data-translate="Sports medical" data-en="Sports Medical Check-ups"
                            data-rs="Sportski pregledi">Sportski pregledi</a>
                        </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Contact" data-en="Contact" data-rs="Kontakt">
                            Kontakt</h6>
                        <p><i class="fas fa-home me-3"></i> Temerinska 95, Novi Sad Serbia</p>
                        <p>
                            <i class="fas fa-envelope me-3"></i>
                            megagymNS@gmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i>+381 21 555 333</p>
                        </div>
                        <!-- Grid column -->
                    </div>
                    <!-- Grid row -->
                    </div>
                </section>
                <!-- Copyright -->
                <p class="text-center text-body-secondary" data-translate="Copyright"
                    data-en="Copyright © 2024 Golden boys. All rights reserved."
                    data-rs="Copyright © 2024 Golden boys. Sva prava zadržana.">Copyright © 2024 Golden boys. All rights reserved.
                </p>
        `
    },
    index: {
      carousel: `
            <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://img.freepik.com/free-photo/portrait-fitness-influencer_23-2151564844.jpg" class="d-block w-100" alt="slika1">
        <div class="carousel-caption d-none d-md-block">
          <h5 data-translate="Transformation" data-en="Start your transformation!" data-rs="Započni svoju transformaciju!"></h5>
          <p data-translate="Transformation" data-en="Whether you're looking to increase strength, boost endurance, or achieve the perfect physique, our team is here to support you every step of the way. Visit us and choose the workout that suits you!" data-rs="Bilo da želiš da povećaš snagu, povećaš izdržljivost ili postigneš savršen izgled, naš tim je tu da te podrži na svakom koraku. Poseti nas i izaberi trening koji ti odgovara!">
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://www.masterslider.com/wp-content/uploads/sites/5/2016/08/fitness-man-body-slide2.jpg" class="d-block w-100" alt="slika2">
        <div class="carousel-caption d-none d-md-block">
          <h5 data-translate="Training" data-en="Training for everybody!" data-rs="Trening za svakog!"></h5>
          <p data-translate="Training" data-en="From cardio machines to strength equipment, we have everything you need for a complete fitness experience. Join our community and achieve results you'll be proud of!" data-rs="Od kardio aparata do sprava za snagu, imamo sve što ti je potrebno za potpuno fitnes iskustvo. Pridruži se našem društvu i postigni rezultate na kojima ćeš biti ponosan!">
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://img.freepik.com/premium-photo/man-gym-with-barbell-his-back_780838-593.jpg" class="d-block w-100" alt="slika3">
        <div class="carousel-caption d-none d-md-block">
          <h5 data-translate="Performances" data-en="Enhance your performance!" data-rs="Poboljšaj svoje performanse!"></h5>
          <p data-translate="Performances" data-en="In our gym, you'll find the most modern equipment and a team of expert trainers who will help you push the limits of your potential. Join us and achieve the goals you've always wanted!" data-rs="U našoj teretani ćeš pronaći najmoderniju opremu i stručni tim trenera koji će ti pomoći da prevaziđeš granice svojih mogućnosti. Pridruži se i postigni ciljeve koje si uvek želeo!">
          </p>
        </div>
      </div>
      <div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
            `
      , membership: `
         <div class="container">
        <h2 class="text-center" style="margin-bottom: 30px; font-size: 36px; font-weight: bold;" data-translate="Membership" data-en="Choose your membership" data-rs="Izaberite članarinu"></h2>
        <div class="row">
          <!-- Basic membership -->
          <div class="col-md-4">
            <div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <img src="./assets_for_Index/IndexImages/basic.jfif" class="card-img-top" alt="Basic" style="width: 100%; height: 200px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title" style="font-size: 22px; font-weight: bold;" data-translate="Membership" data-en="Basic membership" data-rs="Basic članarina"></h5>
                <p class="card-text" style="font-size: 16px; color: #555;" data-translate="Membership" data-en="The Basic membership is ideal for those who want to focus on strength training. This membership includes access to all weights and weightlifting equipment, such as dumbbells, strength training weights, and muscle-building machines." data-rs="Basic članarina je idealna za one koji žele da se fokusiraju na trening snage. Ova članarina uključuje pristup svim tegovima i spravama sa tegovima, kao što su bučice, tegovi za vežbe snage i sprave za trening mišića."></p>
                <a href="login.html" class="btn btn-primary" style="background-color: #ff6f00; border: none; font-size: 16px; padding: 10px 20px; border-radius: 5px;" data-translate="Membership" data-en="Login" data-rs="Prijavi se"></a>
              </div>
            </div>
          </div>
          <!--/Basic membership -->
          <!-- Premium membership -->
          <div class="col-md-4">
            <div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <img src="./assets_for_Index/IndexImages/premium.jfif" class="card-img-top" alt="Premium" style="width: 100%; height: 200px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title" style="font-size: 22px; font-weight: bold;" data-translate="Membership" data-en="Premium membership" data-rs="Premium članarina"></h5>
                <p class="card-text" style="font-size: 16px; color: #555;" data-translate="Membership" data-en="The Premium membership offers full access to all gym facilities, including weights and weightlifting equipment, as well as all cardio machines. It is perfect for those who want to combine strength training with aerobic exercises." data-rs="Premium članarina nudi kompletan pristup svim sadržajima u teretani, uključujući tegovima i spravama sa tegovima, kao i svim kardio aparatima. Idealna je za one koji žele da kombinuju trening snage sa aerobnim vežbama."></p>
                <a href="login.html" class="btn btn-primary" style="background-color: #ff6f00; border: none; font-size: 16px; padding: 10px 20px; border-radius: 5px;" data-translate="Membership" data-en="Login" data-rs="Prijavi se"></a>
              </div>
            </div>
          </div>
          <!--/Premium membership -->
          <!-- Platinum membership -->
          <div class="col-md-4">
            <div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <img src="./assets_for_Index/IndexImages/platinum.jfif" class="card-img-top" alt="Platinum" style="width: 100%; height: 200px; object-fit: cover;">
              <div class="card-body">
                <h5 class="card-title" style="font-size: 22px; font-weight: bold;" data-translate="Membership" data-en="Platinum membership" data-rs="Platinum članarina"></h5>
                <p class="card-text" style="font-size: 16px; color: #555;" data-translate="Membership" data-en="The Platinum membership includes all the benefits of the Premium membership, with full access to weights, weightlifting equipment, and all cardio machines. Additionally, it offers the extra privilege of complimentary shakes at the bar." data-rs="Platinum članarina uključuje sve pogodnosti Premium članarine, sa potpunim pristupom tegovima, spravama sa tegovima i svim kardio aparatima, a uz to, pruža vam i dodatnu privilegiju besplatnih šejkova u baru."></p>
                <a href="login.html" class="btn btn-primary" style="background-color: #ff6f00; border: none; font-size: 16px; padding: 10px 20px; border-radius: 5px;" data-translate="Membership" data-en="Login" data-rs="Prijavi se"></a>
              </div>
            </div>
          </div>
          <!--/Platinum membership -->
        </div>
      </div> 
        `
      , worktime: `
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: rgb(255, 224, 224); font-size: 42px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); text-align: center; background-color: rgba(0, 0, 0, 0.5); padding: 20px; border-radius: 10px;">
        <h2 id="work-time-title"></h2>
        <p id="work-time-info"></p>
        <p id="saturday-info"></p>
        <p id="sunday-info"></p>
        <p id="notice-info"></p>
      </div>
      `
      , gymbar: `
      <img src="./assets_for_Index/IndexImages/GymBar.jfif" class="gymbar-img" alt="GymBar">
      <div class="gymbar-overlay">
        <h5 class="gymbar-title" data-translate="GymBar" data-en="GymBar - Energy and Recovery" data-rs="GymBar - Energija i oporavak"></h5>
        <p class="gymbar-text" data-translate="GymBar" data-en="At our GymBar, we offer a wide selection of refreshing drinks, including healthy protein shakes and energy drinks. You can also enjoy delicious protein meals that will help you recover after an intense workout and achieve your fitness goals." data-rs="U našem GymBaru nudi se veliki izbor osvežavajućih pića, uključujući zdrave proteinske šejkove i energetske napitke. Takođe, uživajte u ukusnim proteinskim obrocima koji će vam pomoći da se oporavite nakon napornog treninga i postignete svoje fitnes ciljeve."></p>
      </div>
      `
      , cookies: `
        <p style="margin: 0;" data-translate="Cookies" data-en="This website uses cookies to enhance the user experience. By clicking Accept,you agree to the use of cookies." data-rs="Ova stranica koristi kolačiće za poboljšanje korisničkog iskustva. Klikom na ''Prihvatam''', slažete se sa korišćenjem kolačića."></p>
      <label for="necessaryCookies" data-en="Necessary Cookies" data-rs="Neophodni kolačići">
        <input type="checkbox" id="necessaryCookies" data-translate="CookiesAccept">
        <span></span>
      </label>
      <label for="preferencesCookies" data-en="Preference Cookies" data-rs="Kolačići za podešavanja">
        <input type="checkbox" id="preferencesCookies" data-translate="CookiesAccept">
        <span></span>
      </label>
      <label for="analyticsCookies" data-en="Analytical Cookies" data-rs="Analitički kolačići">
        <input type="checkbox" id="analyticsCookies" data-translate="CookiesAccept">
        <span></span>
      </label>
      <br>
      <button id="acceptCookies" style="background-color: #007bff; border: none; color: white; padding: 8px 16px; font-size: 14px; cursor: pointer; margin-top: 5px;" data-translate="CookiesAccept" data-en="Accept" data-rs="Prihvatam"></button>
      `},
    contact: {},
    locker: {
      carousel: `
             <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="1000">
          <img src="https://t3.ftcdn.net/jpg/02/62/10/64/240_F_262106415_YAGm6VXylwGHZhOUQMUIYekQ3Mq9xRdL.jpg"
            class="d-block w-100" alt="slika1">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="bicycle" data-en="Training bicycle" data-rs="Trenažni bicikli">Trenažni bicikli</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://t4.ftcdn.net/jpg/01/71/23/49/240_F_171234990_cSNErNz2LkXTP7YxMNzRY3jDhz0laMa2.jpg"
            class="d-block w-100" alt="slika2">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="Treadmills" data-en="Tread mills" data-rs="Trake za trčanje">Trake za trčanje</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://t3.ftcdn.net/jpg/00/93/55/88/240_F_93558844_zsJSg3nGtgXX0HSToxWJeBjEt1OIyTHo.jpg"
            class="d-block w-100" alt="slika3">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="dumbbells" data-en="Weights and dumbbells" data-rs="Tegovi i bučice">Tegovi i bučice
            </h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://t3.ftcdn.net/jpg/01/62/91/42/240_F_162914286_O4BwMXsYDASlf49pe69tbUwgT9O7LqNa.jpg"
            class="d-block w-100" alt="slika3">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="ambience" data-en="Pleasant ambience" data-rs="Prijatan ambijent">Prijatan ambijent</h5>
          </div>
        </div>
        <div>
          <!-- Left and right controls -->
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
            `
      ,
      container: `    
      <h1 style="color:orange;text-align: center;" data-translate="h1content"
      data-en="In our gym you will enjoy a pleasant environment where 
      you'll find a wide range of the latest exercise equipment at your disposal. Our employees are at your disposal and will be happy to help you with all your questions."
      data-rs="U našoj teratani uživaćete u prijatnom ambijentu gde na
      raspolaganju imate bogat asortiman najnovije opreme za vežbanje. Naši zaposleni Vam stoje na raspolaganju i rado će Vam pomoći oko svih vaših pitanja."> U našoj teratani uživaćete u prijatnom ambijentu gde na
      raspolaganju imate bogat asortiman najnovije opreme za vežbanje. Naši zaposleni Vam stoje na raspolaganju i rado
      će Vam pomoći oko svih vaših pitanja. </h1>`
      , datarow: `
                <p class="{{selectedTranslations.tagId}}"><strong>{{TranslatedTagId}}:</strong> {{tagId}}</p>
      <p class="{{selectedTranslations.name}}"><strong>{{TranslatedName}}:</strong> {{tagName}}</p>
            `
    }
  }

  this.render = (templateRegion, templateName, translate) => {
    let dataReturn = this.templates[templateRegion][templateName];

    translate.forEach((translateObject) => {
      dataReturn = dataReturn.replace('{{' + translateObject.key + '}}', translateObject.value);
    });

    return dataReturn;
  }
}


// Set the language on page load
document.addEventListener('DOMContentLoaded', () => {
  TEMPLATE.init(); // Initialize the language when the page is loaded
});