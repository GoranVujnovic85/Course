var TEMPLATE = new templateClass()
function templateClass() {
    this.init = () => {
        document.getElementsByTagName('footer')[0].innerHTML = this.render('common', 'footer', []);
        document.getElementsByTagName('nav')[0].innerHTML = this.render('common', 'header', []);
    
        // Proveri koja je stranica i izvrši specifične promene
        const currentPage = window.location.pathname.split('/').pop();  // Uzmi samo ime stranice (npr. "index.html")
        
        // Ukloni klasu 'active' sa svih linkova u navbaru
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => link.classList.remove('active'));
    
        // Dodaj klasu 'active' na trenutnu stranicu
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href').split('/').pop();  // Uzimamo samo ime stranice sa href-a
            if (linkHref === currentPage) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page'); // Dodaj aria-current za pristupačnost
            }
        });
    
        if (window.location.pathname.includes('index.html')) {
            // Ako je index.html, učitaj karusel
            document.getElementById('carouselExampleControls').innerHTML = this.render('index', 'carousel', []);
        }
    
        if (window.location.pathname.includes('space.html')) {
            // Ako je space.html, učitaj specifičan karusel
            document.getElementById('carouselExampleControls').innerHTML = this.render('locker', 'carousel', []);
            
            // Promeni jezičke linkove za space stranicu
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
            header:`
                <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="./IndexImages/gymlogo.jfif" alt="logo firme"></a>
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
            ,footer: `<!-- Section: Links  -->
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
            carousel:`
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
        },
        contact: {},
        locker: {
            carousel:`
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
            ,datarow: `
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