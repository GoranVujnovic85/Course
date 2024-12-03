
/* Using this code, the active page is highlighted. */

document.addEventListener("DOMContentLoaded", () => 
{
    const navLinks = document.querySelectorAll(".nav-link");
    const currentPage = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link =>
    {
        if (link.getAttribute("href") === currentPage) 
        {
            link.classList.add("active");
        } 
        else 
        {
            link.classList.remove("active");
        }
    });
});