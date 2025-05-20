const products = [
    { 
      id : 1,
      title : Keyboard,
      category : Electronics,
      price : 1299,
      brand : ABC
    },
    {
      id : 2,
      title : Watch,
      category : Gadgets,
      price : 3499,
      brand : DFGH
    },
     {
      id : 3,
      title : Stove,
      category : Home,
      price : 5499,
      brand : EDF
    },
     {
      id : 4,
      title : Bag,
      category : College,
      price : 7499,
      brand : SDDHJ
    }
];

const productsList = document.getElementById("ProductList");

// display products -to display the we use functions
function displayProducts() {
productsList.innerHTML = "";  //to clear the existing content

// let specify to create html to each product
products.forEach(products => {
    const productItem = document.createElement("div");
    productItem.className = "product-item"
    productItem.innerHTML =  `
     <h3>${product.title}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <hr>
        ;`
        productsList.appendChild(productItem);
});
}
displayProducts()