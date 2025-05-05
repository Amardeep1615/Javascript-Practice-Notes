// !-- JavaScript with inline functions -->

    function 
      const name = document.getElementById("name").value.trim();
      const password = document.getElementById("password").value.trim();

      if (name === "" || password === "") {
        alert("Please fill in all fields!");
        return false; // prevent form submission
      }

      localStorage.setItem("userName", name);
      localStorage.setItem("password", password);

      alert("Registration successful!");

      window.location.href = "login.html";
      return false; // prevent actual form submission
    }

