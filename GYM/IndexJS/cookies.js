// Create the COOKIES object as an instance of the cookiesClass
var COOKIES = new cookiesClass();

function cookiesClass() {
  // Method called on page load
  this.init = function () {
    // Check if cookies have already been accepted
    if (this.getCookie('cookiesAccepted') !== 'true') {
      // If not accepted, display the banner
      document.getElementById('cookieConsent').style.display = 'block';
    } else {
      // If cookies are already accepted, enable functionalities
      this.enableCookies();
    }

    // Add an event listener for accepting cookies
    document.getElementById('acceptCookies').addEventListener('click', this.acceptCookies.bind(this));
  };

  // Method for accepting cookies
  this.acceptCookies = function () {
    const necessary = document.getElementById('necessaryCookies').checked;
    const preferences = document.getElementById('preferencesCookies').checked;
    const analytics = document.getElementById('analyticsCookies').checked;

    // Set cookies based on user selection
    this.setCookie('cookiesAccepted', 'true', 365);
    this.setCookie('necessaryCookies', necessary ? 'true' : 'false', 365);
    this.setCookie('preferencesCookies', preferences ? 'true' : 'false', 365);
    this.setCookie('analyticsCookies', analytics ? 'true' : 'false', 365);

    // Hide the banner
    document.getElementById('cookieConsent').style.display = 'none';

    // Enable cookies based on user selection
    this.enableCookies();
  };

  // Method to enable cookies
  this.enableCookies = function () {
    if (this.getCookie('necessaryCookies') === 'true') {
      console.log("Necessary cookies enabled.");
      // Add code to enable necessary cookies
    }

    if (this.getCookie('preferencesCookies') === 'true') {
      console.log("Preferences cookies enabled.");
      // Add code to enable preferences cookies
    }

    if (this.getCookie('analyticsCookies') === 'true') {
      console.log("Analytics cookies enabled.");
      // Add code to enable analytics cookies
    }
  };

  // Method to set a cookie
  this.setCookie = function (name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Calculate cookie expiration time
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  };

  // Method to retrieve a cookie value
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

// Initialize the object on page load
document.addEventListener('DOMContentLoaded', function () {
  COOKIES.init(); // Initialize cookies on page load
});