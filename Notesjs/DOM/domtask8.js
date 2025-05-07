const headers = document.querySelectorAll(".header");

    headers.forEach(header => {
      header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        // Toggle between "none" and "block"
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    });