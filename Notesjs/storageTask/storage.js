
  function loginUser() {
    const loginName = document.getElementById("loginName").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    const storedName = localStorage.getItem("userName");
    const storedPassword = localStorage.getItem("password");

    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = ""; // Clear previous messages

    if (loginName === storedName && loginPassword === storedPassword) {
      messageBox.innerHTML = `
        <div class="alert alert-success" role="alert">
          ✅ Login successful!
        </div>
      `;
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Or any page you want
      }, 1000);
    } else {
      messageBox.innerHTML = `
        <div class="alert alert-danger" role="alert">
          ❌ Invalid username or password!
        </div>
      `;
    }

    return false;
  }

