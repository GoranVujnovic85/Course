/*======= Switcher for selecting the code to execute depending on the value of a variable. ========*/

/*----- codeSelector = 1 --> Procedural programming -----*/
/*----- codeSelector = 2 --> OOP programming - Using Object -----*/


let codeSelector = 2; 

switch (codeSelector) {

    case 1:
      /*======= Procedural programming ========*/
      function submitForm() {

        const formElements = document.querySelectorAll("#contactForm input, #contactForm textarea");

        let isValid = true;
        formElements.forEach((element) => {
          if (!element.value.trim()) {
            isValid = false;
            element.classList.add("is-invalid");
          } 
          else {
            element.classList.remove("is-invalid");
          }
        });
        if (isValid) {
          alert("Form data is valid and ready to be processed.");
        } 
        else {
          alert("Please fill out all required fields.");
        }
      }
      
      /* Adding an event listener to remove the error on value change */
      document.querySelectorAll("#contactForm input, #contactForm textarea").forEach((element) => {
        element.addEventListener("input", () => {
          element.classList.remove("is-invalid");
        });
      });

    break;

    case 2:
      /*======= OOP programming - Using Object ========*/
      document.addEventListener('DOMContentLoaded', function() {
        // Create the Submit object
        const Submit = {

          formSelector: "#contactForm",
          formElements: document.querySelectorAll("#contactForm input, #contactForm textarea"),
      
          // Method for form validation
          validateForm: function() {

            let isValid = true;
            this.formElements.forEach((element) => {

              if (!element.value.trim()) {

                isValid = false;
                element.classList.add("is-invalid");
              } 
              else {
                element.classList.remove("is-invalid");
              }
            });
            return isValid;
          },
      
          // Method to handle form submit event
          handleFormSubmit: function() {

            if (this.validateForm()) {
              alert("Form data is valid and ready to be processed.");
            } 
            else {
              alert("Please fill out all required fields.");
            }
          },
      
          // Method to remove 'is-invalid' class on input change
          removeInvalidClassOnInput: function() {

            this.formElements.forEach((element) => {
              element.addEventListener("input", () => {
                element.classList.remove("is-invalid");
              });
            });
          },
      
          // Initialize event listeners
          init: function() {
            this.removeInvalidClassOnInput();
            
            const submitButton = document.querySelector("#submit");
            if (submitButton) {
              submitButton.addEventListener("click", (event) => {
                // Prevents default form submission
                event.preventDefault(); 
                this.handleFormSubmit();
              });
            }
          }
        };
      
        // Initialize the Submit object
        Submit.init();
      });
    
    break;
    
    default:
      console.log("Enter 1 or 2 !");
      
}