var TEMPLATE = new templateClass()
function templateClass() {
  this.init = () => {
    // Check if we are on the login page first
    document.getElementsByTagName('nav')[0].innerHTML = this.render('common', 'header', []);
    document.getElementsByTagName('footer')[0].innerHTML = this.render('common', 'footer', []);
  

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
      document.getElementById('image-info').innerHTML = this.render('index', 'image', []);
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
    if (window.location.pathname.includes('about.html')) {
      // If it's about.html, load specific content
      document.getElementById('title-info').innerHTML = this.render('about', 'title', []);
      document.getElementById('about-gym').innerHTML = this.render('about', 'info', []);
    }
    if (window.location.pathname.includes('contactUs.html')) {
      // If it's contactus.html, load specific content
      document.getElementById('Contact-container').innerHTML = this.render('contact', 'form', []);
      document.getElementById('Locations-container').innerHTML = this.render('contact', 'locations', []);
    }
    if (window.location.pathname.includes('login.html')) {
      // If it's login.html, load specific content for login page
      document.getElementById('login-form').innerHTML = this.render('login', 'form', []);
    }
  }
  this.templates = {
    common: {
      header: `
                <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><img src="../Assets/img/indexgymlogo.jfif" alt="logo firme"></a>
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
                            data-rs="Početna"></a>
                        </p>
                        <p>
                            <a href="about.html" class="text-reset" data-translate="About us" data-en="About us" data-rs="O nama"></a>
                        </p>
                        <p>
                            <a href="news.html" class="text-reset" data-translate="News" data-en="News" data-rs="Vesti"></a>
                        </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Useful links" data-en="Useful links"
                            data-rs="Korisni linkovi">
                        </h6>
                        <p>
                            <a href="https://www.pansport.rs/tekstoteka/zdravlje/saveti-za-pocetnike-u-teretani" class="text-reset"
                            data-translate="Useful advices" data-en="Useful advices" data-rs="Korisni saveti"></a>
                        </p>
                        <p>
                            <a href="https://supplementstore.rs/" class="text-reset" data-translate="Suplements"
                            data-en="Suplements" data-rs="Suplementi"></a>
                        </p>
                        <p>
                            <a href="https://rzsport.gov.rs/usluge/sportsko-medicinski-pregledi/" class="text-reset"
                            data-translate="Sports medical" data-en="Sports Medical Check-ups"
                            data-rs="Sportski pregledi"></a>
                        </p>
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <!-- Links -->
                        <h6 class="text-uppercase fw-bold mb-4" data-translate="Contact" data-en="Contact" data-rs="Kontakt">
                            </h6>
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
                    data-rs="Copyright © 2024 Golden boys. Sva prava zadržana.">
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
            ,image:`
            <p id="info-text" class="info-text" data-translate="info" data-en="Our gym offers a wide range of equipment to meet all your needs, whether you're a beginner or an experienced athlete. We have 12 treadmills, 3 bench press stations, 8 spinning bikes, and 5 step machines for cardio workouts. Additionally, there are 4 back machines, 6 different leg machines, 4 shoulder machines, and 10 muscle isolation machines. For weightlifting enthusiasts, we have 20 sets of weights in various sizes, including Olympic bars and dumbbells, as well as 5 power racks and 3 leg press machines. All of our equipment is top-quality and regularly maintained, ensuring a safe and effective experience. Whether you want to improve endurance, strength, or muscle mass, our facility is equipped for anyone striving to achieve exceptional results." data-rs="Naša teretana nudi širok spektar opreme koja zadovoljava sve vaše potrebe, bilo da ste početnik ili iskusni sportista. Na raspolaganju imamo 12 traka za trčanje, 3 klupe za benč, 8 bicikala za spinning, kao i 5 stepera za kardio treninge. Takođe, tu su 4 mašine za leđa, 6 različitih sprava za noge, 4 mašine za ramena, kao i 10 mašina za izolaciju mišića. Za ljubitelje treninga sa tegovima, imamo 20 setova tegova različitih težina, uključujući olimpijske i dumbbells, kao i 5 power rack-ova i 3 leg press mašine. Svi naši uređaji su vrhunskog kvaliteta i redovno se održavaju, pružajući vam sigurno i efikasno iskustvo. Bilo da želite da poboljšate izdržljivost, snagu ili mišićnu masu, naš prostor je opremljen za svakoga ko želi da postigne vrhunske rezultate."></p>
            `
      , membership: `
         <div class="container">
        <h2 class="text-center" style="margin-bottom: 30px; font-size: 36px; font-weight: bold;" data-translate="Membership" data-en="Choose your membership" data-rs="Izaberite članarinu"></h2>
        <div class="row">
          <!-- Basic membership -->
          <div class="col-md-4">
            <div class="card" style="border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <img src="../Assets/img/indexbasic.jfif" class="card-img-top" alt="Basic" style="width: 100%; height: 200px; object-fit: cover;">
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
              <img src="../Assets/img/indexpremium.jfif" class="card-img-top" alt="Premium" style="width: 100%; height: 200px; object-fit: cover;">
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
              <img src="../Assets/img/indexplatinum.jfif" class="card-img-top" alt="Platinum" style="width: 100%; height: 200px; object-fit: cover;">
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
      <img src="../Assets/img/indexGymBar.jfif" class="gymbar-img" alt="GymBar">
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
      about:{
        info:`
        <p data-translate="massage" data-en="The first Mega Gym fitness center was opened in June 2016 in New Belgrade.

Mega Gym is the only regional chain of fitness clubs located in seven locations in Serbia and one in Bosnia and Herzegovina (Dorćol, Novi Beograd, Zemun, Zemun Polje, Batajnica, Smederevo, Trebinje and Novi Sad).
The concept of Mega Gym was created on the basis of many years of experience of the owner in the field of sports management, fitness and recreation. It is a perfect combination of superior space design and latest generation equipment. The result is a completely different place for recreation compared to everything that has been seen so far in the offer of fitness clubs in Serbia. Mega Gym is a place where you will find refuge from everyday stress and feel the energy of our Mega team." data-rs="Prvi Mega Gym fitnes centar otvoren je u junu 2016. godine na Novom Beogradu.
Mega Gym je jedini regionalni lanac fitnes klubova koji se nalazi na sedam lokacija u Srbiji i jednoj na teritoriji Bosne i Hercegovine (Dorćol, Novi Beograd, Zemun, Zemun Polje, Batajnica, Smederevo, Trebinje i Novi Sad).
Koncept Mega Gym-a nastao je na osnovu višegodišnjeg iskustva vlasnika u oblasti sportskog menadžmenta, fitnesa i rekreacije. U pitanju je savršen spoj vrhunskog dizajna prostora i opreme poslednje generacije.  Rezultat je potpuno drugačije mesto za rekreaciju u odnosu na sve što je do sada viđeno u ponudi fitnes klubova u Srbiji.  Mega Gym je mesto na kojem ćete naći utočište od svakodnevnog stresa i osetiti energiju našeg Mega tima."></p>
<p data-translate="About Us" data-en="Mega Gym fitness centers are equipped with the best cardio machines and a large number of places for exercise. They have multifunctional halls (integrated exercise space), monitors for watching TV programs, changing rooms with a large number of wardrobes, showers and toilets. Each location has plenty of natural light, as well as state-of-the-art ventilation systems. Special attention is paid to the sound system and the selection of adequate music, which will motivate you to give your best on the way to achieving results." data-rs="Fitnes centri Mega Gym opremljeni su najboljim kardio mašinama i velikim brojem mesta za vežbanje. Poseduju multifunkcionalne sale (integrisan prostor za vežbanje), monitore za praćenje TV programa, svlačionice sa velikim brojem garderobnih ormarića, tuševa i toaleta. Svaka lokacija ima dosta prirodnog svetla, ali i najsavremenije sisteme ventilacije. Posebna pažnja je posvećena ozvučenju i odabiru adekvatne muzike, koja će vas motivisati da date najbolje od sebe na putu ka ostvarenju rezultata."></p>
        
        <a href="login.html" class="joinNow" data-translate="Join" data-en="Join now" data-rs="Prijavi se"></a>
        `
      ,title:`
      <h1 class="title" data-translate="About Us" data-en="About Us" data-rs="O nama"></h1>
    <div class="about-content">
    <div class="image">
      <img src="../Assets/img/aboutn1.webp">
    </div>  
      <div class="content" id="about-gym">  
      </div>
    </div> 
      `},
  contact: {
      form:`
        <h1 data-translate="Get in Touch" data-en="Get in Touch" data-rs="Kontaktirajte nas">Get in Touch</h1>
      <p data-translate="Fill up the form to get in touch with us." data-en="Fill up the form to get in touch with us." data-rs="Popunite formu da biste stupili u kontakt sa nama."></p>
      <!--=============== FILL THE FORM ===============-->
      <div class="contact-box">
        <div class="container-left">
          <h3 data-translate="Fill the Form" data-en="Fill the Form" data-rs="Popunite formu"></h3>
          <div id="contactForm">
            <div class="input-row">
              <div class="input-group">
                <label data-translate="Name" data-en="Name" data-rs="Ime"></label>
                <input type="text" id="name" name="name" placeholder="Enter your Name" data-translate="" data-en="Enter your Name" data-rs="Unesite svoje ime" required>
              </div>
              <div class="input-group">
                <label data-translate="Phone" data-en="Phone" data-rs="Telefon"></label>
                <input type="text" id="phone" name="phone" placeholder="+381 21 332243" required>
              </div>
            </div>
            <div class="input-row">
            <div class="input-group">
              <label data-translate="Email" data-en="Email" data-rs="Email"></label>
              <input type="email" id="email" name="email" data-translate="" placeholder="example@example.com" data-en="example@example.com" data-rs="primer@primer.com" required>
            </div>
            <div class="input-group">
              <label data-translate="Subject" data-en="Subject" data-rs="Predmet"></label>
              <input type="text" id="subject" name="subject" data-translate="" placeholder="Inquiry" data-en="Inquiry" data-rs="Upit">
            </div>
          </div>
          <label data-translate="Message" data-en="Message" data-rs="Poruka"></label>
          <textarea rows="10" id="message" name="message" placeholder="Enter your Message" data-translate="Message" data-en="Enter your Message" data-rs="Unesite svoju poruku" required></textarea>
          <button type="button" id="submit" class="btn-submit" onclick="submitForm()" data-translate="SEND MESSAGE" data-en="SEND MESSAGE" data-rs="POŠALJITE PORUKU">SEND MESSAGE</button>
          <!--<button type="submit" id="submit" class="btn-submit" data-translate="SEND MESSAGE" data-en="SEND MESSAGE" data-rs="POŠALJITE PORUKU">SEND MESSAGE</button>-->
        </div>
      </div>
      <!--=============== /FILL THE FORM ===============-->

      <!--=============== INFO CONTAINER ===============-->
      <div class="container-right">
        <h3 data-translate="Reach Us" data-en="Reach Us" data-rs="Kontaktirajte nas"></h3>
        <table>
          <tr>
            <td data-translate="Email" data-en="Email" data-rs="Email"></td>
            <td>megagymNS@gmail.com</td>
          </tr>
          <tr>
            <td data-translate="Phone" data-en="Phone" data-rs="Telefon"></td>
            <td>+381 21 555 333</td>
          </tr>
          <tr>
            <td data-translate="Address" data-en="Address" data-rs="Adresa"></td>
            <td>Mega Gym Novi Sad <br> Temerinska 95, Novi Sad <br> Serbia</td>
          </tr>
        </table>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.829673047405!2d19.838563876202517!3d45.27145374627858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1158c4e50b23%3A0xfe3822cedd7d0308!2sMega%20Gym%20Novi%20Sad!5e0!3m2!1ssr!2srs!4v1732103410152!5m2!1ssr!2srs"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <!--=============== /INFO CONTAINER ===============-->
    </div>
      `
    ,locations:`
     <h3 data-translate="Other Locations" data-en="Other Locations:" data-rs="Ostale Lokacije:"></h3>
      <div class="row"id="gym-locations">
        <!--------------------------------------------------------->
        <!--Other Locations are called from the config.json file-->
        <!--------------------------------------------------------->
      </div>
    `},
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
            <h5 data-translate="bicycle" data-en="Training bicycle" data-rs="Trenažni bicikli"></h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://t4.ftcdn.net/jpg/01/71/23/49/240_F_171234990_cSNErNz2LkXTP7YxMNzRY3jDhz0laMa2.jpg"
            class="d-block w-100" alt="slika2">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="Treadmills" data-en="Tread mills" data-rs="Trake za trčanje"></h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://t3.ftcdn.net/jpg/00/93/55/88/240_F_93558844_zsJSg3nGtgXX0HSToxWJeBjEt1OIyTHo.jpg"
            class="d-block w-100" alt="slika3">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="dumbbells" data-en="Weights and dumbbells" data-rs="Tegovi i bučice"></h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="1000">
          <img src="https://t3.ftcdn.net/jpg/01/62/91/42/240_F_162914286_O4BwMXsYDASlf49pe69tbUwgT9O7LqNa.jpg"
            class="d-block w-100" alt="slika3">
          <div class="carousel-caption d-none d-md-block">
            <h5 data-translate="ambience" data-en="Pleasant ambience" data-rs="Prijatan ambijent"></h5>
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
      raspolaganju imate bogat asortiman najnovije opreme za vežbanje. Naši zaposleni Vam stoje na raspolaganju i rado će Vam pomoći oko svih vaših pitanja."></h1>`
      , datarow: `
                <p class="{{selectedTranslations.tagId}}"><strong>{{TranslatedTagId}}:</strong> {{tagId}}</p>
      <p class="{{selectedTranslations.name}}"><strong>{{TranslatedName}}:</strong> {{tagName}}</p>
            `
    },
    login:{
      form:`
       <div class="login">
            <div class="login__content">
              <img class="login__img" src="../Assets/img/loginimage.jpg" alt="Login image" />
              <!--=============== LOG IN FORM ===============-->
              <div class="login__form">
                <div>
                  <h1 class="login__title">
                    <span data-translate="Welcome" data-en="Welcome" data-rs="Dobrodošli"></span> 
                    <span data-translate="Back" data-en="Back" data-rs="Nazad"></span>
                  </h1>
                  <p class="login__description" data-translate="Welcome! Please login to continue." data-en="Welcome! Please login to continue." data-rs="Dobrodošli! Molimo vas prijavite se da nastavite."></p>
                </div>
                <div>
                  <div class="login__inputs">
                    <div>
                      <label for="email" class="login__label" data-translate="Email" data-en="Email" data-rs="Email"></label>
                      <input class="login__input" type="email" id="email" placeholder="Enter your email address" data-en="Enter your email address" data-rs="Unesite vašu email adresu" required autocomplete="new-password"/>
                    </div>
                    <div>
                      <label for="password" class="login__label" data-translate="Password" data-en="Password" data-rs="Lozinka"></label>
                      <div class="login__box">
                        <input class="login__input" type="password" id="password" placeholder="Enter your password" data-en="Enter your password" data-rs="Unesite vašu lozinku" required autocomplete="new-password"/>
                        <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                      </div>
                    </div>
                  </div>
                  <div class="login__check">
                    <label class="login__check-label" for="check">
                      <input class="login__check-input" type="checkbox" id="check" />
                      <i class="ri-check-line login__check-icon"></i>
                      <span data-translate="Remember me" data-en="Remember me" data-rs="Zapamti me"></span>
                    </label>
                  </div>
                </div>
              <div>
              <div class="login__buttons">
                <button class="login__button" id="login__button_ID" data-translate="Log In" data-en="Log In" data-rs="Prijavi se"></button>
                <button type="button" id="signup__button_ID" class="login__button login__button-ghost" data-translate="Sign Up" data-en="Sign Up" data-rs="Registruj se">
                </button>
              </div>
              <a class="login__forgot" href="#" data-translate="Forgot Password?" data-en="Forgot Password?" data-rs="Zaboravljena lozinka?"></a>
            </div>
            <!--=============== /LOG IN FORM ===============--> 
            </div>
            </div>
          </div>
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