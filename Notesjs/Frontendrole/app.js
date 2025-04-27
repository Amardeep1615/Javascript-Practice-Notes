function calculateOrder() {

   const itemDetails=
{
    "Cake": 200,
    "Icecream": 400,
    "Drinks" : 500,
    "Biscuits" : 300,
    "Buger" : 600
 };
let itemName = prompt("Enter the Item Name: ");
let userName = prompt("Enter your name: ");
let quantity = prompt("Enter the quantity: ");

const itemPrice = itemDetails[itemName];
const totalPrice = itemPrice * quantity;
const discount = totalPrice*0.1;
const finalPrice = totalPrice - discount;
 document.getElementById("items").innerHTML = 
 `
  <h1>Order Summary</h1>
  <p><strong>User:</strong> ${userName}</p>
  <p><strong>Item:</strong> ${itemName}</p>
  <p><strong>Quantity:</strong> ${quantity}</p>
  <p><strong>Total Price:</strong> ₹${totalPrice}</p>
  <p><strong>Discount (10%):</strong> ₹${discount}</p>
  <p><strong>Final Price:</strong> ₹${finalPrice}</p>
`;

document.getElementById("para").textContent = `Hello ${userName}, thanks for your order!`;  
}

// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Button was clicked!");
//   });