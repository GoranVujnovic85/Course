/*== The function retrieves data from the JSON file and redirects to the appropriate page ==*/
/*==========================================================================================*/
/*=========================== OOP programming - Using Class ================================*/
class UserManager {

    constructor(users) {

        this.users = users; // Load user from JSON
    }
  
    login(email, password) {
      // Check user data
        for (let user of this.users) {

            if (user.email === email && user.password === password) {

                if (user.redirectTo) {
                    alert('Successful login! Redirecting...');
                    window.location.href = user.redirectTo; // Redirect to appropriate page
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
    ],
};
  
// Initialization of the user manager
const userManager = new UserManager(data.results);
  
// Function for user login
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    userManager.login(email, password); // User login
}
  
  // Add an event listener for the button
window.addEventListener('load', () => {
    document.getElementById('login__button_ID').onclick = loginUser;
});
  
// Example of printing all emails after loading
//userManager.printEmails();