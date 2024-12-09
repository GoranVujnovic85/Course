
/*======= Switcher for selecting the code to execute depending on the value of a variable. ========*/

/*----- codeSelector = 1 --> Procedural programming -----*/
/*----- codeSelector = 2 --> OOP programming - Using Object -----*/
/*----- codeSelector = 3 --> OOP programming - Using Class -----*/

let codeSelector = 2; 

switch (codeSelector) {

    case 1:
        /*======= Procedural programming ========*/
        document.addEventListener("DOMContentLoaded", () => {

            const navLinks = document.querySelectorAll(".nav-link");
            const currentPage = window.location.pathname.split("/").pop();
      
            navLinks.forEach(link =>{

                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active");
                } 
                else {
                    link.classList.remove("active");
                }
            });
        });
        
    break;

    case 2:
        /*======= OOP programming - Using Object ========*/
        const BoldNavigation = {

            // This is an empty attribute of the object BoldNavigation, something like a local variable. 
            navLinks: null,
            // This is an empty attribute of the object BoldNavigation, something like a local variable. 
            currentPage: "",
    
            // Method of the object BoldNavigation  
            init(navLinkSelector) {
                this.navLinks = document.querySelectorAll(navLinkSelector);
                this.currentPage = window.location.pathname.split("/").pop();
                this.highlightActiveLink();   
            },
    
            highlightActiveLink() {
                this.navLinks.forEach(link => {
                    if (link.getAttribute("href") === this.currentPage) {
                        link.classList.add("active");
                    } 
                    else {
                        link.classList.remove("active");
                    }
                });
            }
        };
        // Initializing the BoldNavigation object and launching its functionality for navigation links.
        BoldNavigation.init(".nav-link");
    
    break;

    case 3:
        /*======= OOP programming - Using Class ========*/
        class BoldNavigationActive {
            // Constructor class Bold
            constructor(navLinkSelector) {

                this.navLinkSelector = navLinkSelector;
                // This is an empty attribute of the class BoldNavigationActive, something like a local variable. 
                this.navLinks = null;
                // This is an empty attribute of the object BoldNavigationActive, something like a local variable. 
                this.currentPage = "";
            }
            // Method of the class Bold  
            init() {

                document.addEventListener("DOMContentLoaded", () => {

                    this.navLinks = document.querySelectorAll(this.navLinkSelector);
                    this.currentPage = window.location.pathname.split("/").pop();
                    this.highlightActiveLink();
                });
            }

            highlightActiveLink() {

                this.navLinks.forEach(link => {

                    if (link.getAttribute("href") === this.currentPage) {
                        link.classList.add("active");
                    } 
                    else {
                        link.classList.remove("active");
                    }
                });
            }
        }

        // Creating an instance of a class and launching functionality.
        const bold = new BoldNavigationActive(".nav-link");
        bold.init();

    break;

    default:
        console.log("Enter 1,2 or 3!");

}





