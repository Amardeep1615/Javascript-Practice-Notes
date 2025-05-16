function placeOrder() {
   document.getElementById("status").textContent = "placing your order....."
    document.getElementById("status1").textContent = "order placed....."
setTimeout(function () {
     document.getElementById("status").textContent = "Thank you,Have a good taste!"
}, 3000);
}
