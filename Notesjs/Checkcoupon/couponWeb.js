let currentCoupon = "";

    function generateCoupon() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let coupon = "";
      for (let i = 0; i < 8; i++) {
        coupon += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      currentCoupon = coupon;
      document.getElementById("generated-coupon").textContent = coupon;
      document.getElementById("result").textContent = ""; 
    }

    function checkCoupon() {
      const userInput = document.getElementById("userInput").value.trim().toUpperCase();
      const result = document.getElementById("result");

      if (userInput === "") {
        result.textContent = "❗ Please enter a coupon code.";
        result.style.color = "orange";
      } else if (userInput === currentCoupon) {
        result.textContent = "✅ Congratulations! Coupon matched.";
        result.style.color = "limegreen";
      } else {
        result.textContent = "❌ Invalid coupon. Try again!";
        result.style.color = "red";
      }
    }