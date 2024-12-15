/*======================================================================================================*/
/*-- OOP programming using a class that directs to the appropriate pages with the help of a JSON file.--*/
/*======================================================================================================*/

class UserManager {

    constructor(users) {
        // Load user from JSON
        this.users = users; 
    }
  
    login(email, password) {
      // Check user data
        for (let user of this.users) {

            if (user.email === email && user.password === password) {

                if (user.redirectTo) {
                    alert('Successful login! Redirecting...');
                    // Redirect to appropriate page
                    window.location.href = user.redirectTo; 
                } 
                else {
                    alert('Login successful, but no redirect page.');
                }
                return true;
            }
        }
        alert('Invalid login credentials!');
        return false;
    }
    // Method to find Sing Up page.
    findSignUpPage() {
        return this.users.find(user => user.purpose === 'signUp');
    }
    // Method to find Forgot password page.
    findForgotPasswordPage() {
        return this.users.find(user => user.purpose === 'forgotPassword');
    }
}
  
// JSON data
const data = {
    results: [
        {
            email: 'darkoivandencic@gmail.com',
            password: 'test123',
            redirectTo: 'index.html', // --> Local Server open '/index.html'
        },
        {
            email: 'darkoivandencic1@gmail.com',
            password: 'test1231',
            redirectTo: 'space.html',
        },
        {
            email: 'darkoivandencic2@gmail.com',
            password: 'test1232',
            redirectTo: 'contactUs.html',
        },
        {
            email: 'darkoivandencic3@gmail.com',
            password: 'test1233',
        },
        {
            email: null,
            password: null,
            redirectTo: './assets_for_LogIn/html/sing_up.html',
            purpose: 'signUp'
        },
        {
            email: null,
            password: null,
            redirectTo: './assets_for_LogIn/html/reset_password.html',
            purpose: 'forgotPassword'
        },
    ],
};
  
// Initialization of the user manager
const userManager = new UserManager(data.results);

// Function for Sign Up redirect
function redirectToSignUp() {
    const signUpEntry = userManager.findSignUpPage();
    if (signUpEntry && signUpEntry.redirectTo) {
        window.location.href = signUpEntry.redirectTo;
    } 
    else {
        alert('Sign Up page not found!');
    }
}
// Function for Forgot Password redirect
function setForgotPasswordLink() {
    const forgotPasswordEntry = userManager.findForgotPasswordPage();
    const forgotPasswordLink = document.querySelector('.login__forgot');

    if (forgotPasswordEntry && forgotPasswordEntry.redirectTo) {
        forgotPasswordLink.href = forgotPasswordEntry.redirectTo;
    } else {
        console.error('Forgot Password page not found in JSON.');
    }
}
  
// Function for user login
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    // User login
    userManager.login(email, password); 
}
  
  // Add an event listener for the button
window.addEventListener('load', () => {
    setForgotPasswordLink(); 
    document.getElementById('login__button_ID').onclick = loginUser;
    document.getElementById('signup__button_ID').onclick = redirectToSignUp;
});
  
