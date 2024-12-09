// Kreiramo objekat COOKIES kao instancu objekta klase cookiesClass
var COOKIES = new cookiesClass();

function cookiesClass() {
  // Metoda koja se poziva prilikom učitavanja stranice
  this.init = function () {
    // Proveravamo da li su kolačići već prihvaćeni
    if (this.getCookie('cookiesAccepted') !== 'true') {
      // Ako nisu prihvaćeni, prikazujemo baner
      document.getElementById('cookieConsent').style.display = 'block';
    } else {
      // Ako su kolačići već prihvaćeni, omogućavamo funkcionalnosti
      this.enableCookies();
    }

    // Dodajemo event listener za prihvatanje kolačića
    document.getElementById('acceptCookies').addEventListener('click', this.acceptCookies.bind(this));
  };

  // Metoda za prihvatanje kolačića
  this.acceptCookies = function () {
    const necessary = document.getElementById('necessaryCookies').checked;
    const preferences = document.getElementById('preferencesCookies').checked;
    const analytics = document.getElementById('analyticsCookies').checked;

    // Postavljamo kolačiće na osnovu izbora korisnika
    this.setCookie('cookiesAccepted', 'true', 365);
    this.setCookie('necessaryCookies', necessary ? 'true' : 'false', 365);
    this.setCookie('preferencesCookies', preferences ? 'true' : 'false', 365);
    this.setCookie('analyticsCookies', analytics ? 'true' : 'false', 365);

    // Sakrivamo baner
    document.getElementById('cookieConsent').style.display = 'none';

    // Omogućavamo kolačiće na osnovu izbora korisnika
    this.enableCookies();
  };

  // Metoda za omogućavanje kolačića
  this.enableCookies = function () {
    if (this.getCookie('necessaryCookies') === 'true') {
      console.log("Neophodni kolačići omogućeni.");
      // Dodajte kod za omogućavanje neophodnih kolačića
    }

    if (this.getCookie('preferencesCookies') === 'true') {
      console.log("Kolačići za podešavanja omogućeni.");
      // Dodajte kod za omogućavanje kolačića za podešavanja
    }

    if (this.getCookie('analyticsCookies') === 'true') {
      console.log("Analitički kolačići omogućeni.");
      // Dodajte kod za omogućavanje analitičkih kolačića
    }
  };

  // Metoda za postavljanje kolačića
  this.setCookie = function (name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Računanje isteka kolačića
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  // Metoda za dobijanje vrednosti kolačića
  this.getCookie = function (name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name + "=") == 0) return c.substring(name.length + 1, c.length);
    }
    return "";
  };
}

// Inicijalizujemo objekat pri učitavanju stranice
document.addEventListener('DOMContentLoaded', function () {
  COOKIES.init(); // Inicijalizujemo kolačiće prilikom učitavanja stranice
});