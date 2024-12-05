document.addEventListener('DOMContentLoaded', function () {
  // Check if cookies are accepted
  if (getCookie('cookiesAccepted') !== 'true') {
    // If not accepted, show the banner
    document.getElementById('cookieConsent').style.display = 'block';
  } else {
    // If cookies are already accepted, run functionalities dependent on cookies
    enableCookies();
  }

  // Accept cookies after the user clicks the button
  document.getElementById('acceptCookies').addEventListener('click', function () {
    const necessary = document.getElementById('necessaryCookies').checked;
    const preferences = document.getElementById('preferencesCookies').checked;
    const analytics = document.getElementById('analyticsCookies').checked;

    // Set cookies based on user selection
    setCookie('cookiesAccepted', 'true', 365);
    setCookie('necessaryCookies', necessary ? 'true' : 'false', 365);
    setCookie('preferencesCookies', preferences ? 'true' : 'false', 365);
    setCookie('analyticsCookies', analytics ? 'true' : 'false', 365);

    // Hide the banner
    document.getElementById('cookieConsent').style.display = 'none';

    // Enable cookies based on the user's choice
    enableCookies();
  });
});

// Function to enable cookies
function enableCookies() {
  if (getCookie('necessaryCookies') === 'true') {
    console.log("Neophodni kolačići omogućeni.");
    // Add code here to enable necessary cookies
  }

  if (getCookie('preferencesCookies') === 'true') {
    console.log("Kolačići za podešavanja omogućeni.");
    // Add code here to enable preference cookies
  }

  if (getCookie('analyticsCookies') === 'true') {
    console.log("Analitički kolačići omogućeni.");
    // Add code here to enable analytical cookies
  }
}

// Function to set cookies
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Calculate cookie expiration
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get cookie value
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