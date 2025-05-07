const toggle = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");

    toggle.addEventListener("change", () => {
      passwordField.type = toggle.checked ? "text" : "password";
    });