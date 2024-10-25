document.querySelectorAll('h2').forEach(header => {
  header.addEventListener('click', () => {
      const nextElement = header.nextElementSibling;
      if (nextElement.style.display === "none") {
          nextElement.style.display = "block";
      } else {
          nextElement.style.display = "none";
      }
  });
});