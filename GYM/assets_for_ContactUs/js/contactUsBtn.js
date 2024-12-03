
/* If HTML use <div> */
/*
function submitForm() 
{
    if (validateForm()) 
    {
      alert('Form data is valid and ready to be processed.'); // If the validation is successful, I simulate sending the data.
    }
}
*/

/* Logic that will notify us if a field is not filled */
function submitForm() 
{
    const formElements = document.querySelectorAll("#contactForm input, #contactForm textarea");
  
    let isValid = true;
    formElements.forEach((element) => 
    {
      if (!element.value.trim()) 
      {
        isValid = false;
        element.classList.add("is-invalid"); // Adding a class for an error if the field is empty
      } 
      else   
      {
        element.classList.remove("is-invalid"); // Removing the class if the field is valid
      }
    });
  
    if (isValid) 
    {
      alert("Form data is valid and ready to be processed.");
    } 
    else 
    {
      alert("Please fill out all required fields.");
    }
}
  
/* Adding an event listener to remove the error on value change */
document.querySelectorAll("#contactForm input, #contactForm textarea").forEach((element) => {
    element.addEventListener("input", () => {
      element.classList.remove("is-invalid");
    });
  });
  