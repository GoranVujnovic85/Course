document.addEventListener('DOMContentLoaded', function () {
  // Provera da li su kolačići prihvaćeni
  if (getCookie('cookiesAccepted') !== 'true') {
    // Ako nisu prihvaćeni, prikazujemo banner
    document.getElementById('cookieConsent').style.display = 'block';
  } else {
    // Ako su kolačići već prihvaćeni, pokrećemo funkcionalnosti koje zavise od kolačića
    enableCookies();
  }

  // Prihvatamo kolačiće nakon što korisnik klikne na dugme
  document.getElementById('acceptCookies').addEventListener('click', function () {
    const necessary = document.getElementById('necessaryCookies').checked;
    const preferences = document.getElementById('preferencesCookies').checked;
    const analytics = document.getElementById('analyticsCookies').checked;

    // Setujemo kolačiće na osnovu odabira korisnika
    setCookie('cookiesAccepted', 'true', 365);
    setCookie('necessaryCookies', necessary ? 'true' : 'false', 365);
    setCookie('preferencesCookies', preferences ? 'true' : 'false', 365);
    setCookie('analyticsCookies', analytics ? 'true' : 'false', 365);

    // Sakrijemo banner
    document.getElementById('cookieConsent').style.display = 'none';

    // Omogućavamo kolačiće prema odabiru korisnika
    enableCookies();
  });
});

// Funkcija za omogućavanje kolačića
function enableCookies() {
  if (getCookie('necessaryCookies') === 'true') {
    console.log("Neophodni kolačići omogućeni.");
    // Ovdje dodajte kod za omogućavanje neophodnih kolačića
  }

  if (getCookie('preferencesCookies') === 'true') {
    console.log("Kolačići za podešavanja omogućeni.");
    // Ovdje dodajte kod za omogućavanje kolačića za podešavanja
  }

  if (getCookie('analyticsCookies') === 'true') {
    console.log("Analitički kolačići omogućeni.");
    // Ovdje dodajte kod za omogućavanje analitičkih kolačića
  }
}

// Funkcija za postavljanje kolačića
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Računanje isteka kolačića
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Funkcija za dobijanje vrednosti kolačića
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name + "=") == 0) return c.substring(name.length + 1, c.length);
  }
  return "";
}