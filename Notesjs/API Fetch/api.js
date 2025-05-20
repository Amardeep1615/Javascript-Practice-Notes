const products = [
    { 
      id: 1,
      title: "Keyboard",
      category: "Electronics",
      price: 1299,
      brand: "ABC"
    },
    {
      id: 2,
      title: "Watch",
      category: "Gadgets",
      price: 3499,
      brand: "DFGH"
    },
    {
      id: 3,
      title: "Stove",
      category: "Home",
      price: 5499,
      brand: "EDF"
    },
    {
      id: 4,
      title: "Bag",
      category: "College",
      price: 7499,
      brand: "SDDHJ"
    }
];

const productsList = document.getElementById("productList");

function displayProducts() {
    productsList.innerHTML = "";  // Clear existing content

    products.forEach(product => {  // Fixed variable name from 'products' to 'product'
        const productItem = document.createElement("div");
        productItem.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300";
        productItem.innerHTML = `
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${product.title}</h3>
                <p class="text-gray-600 mb-1"><span class="font-medium">Brand:</span> ${product.brand}</p>
                <p class="text-gray-600 mb-1"><span class="font-medium">Category:</span> ${product.category}</p>
                <p class="text-gray-800 font-bold mt-3">Price: ₹${product.price.toLocaleString()}</p>
            </div>
        `;
        productsList.appendChild(productItem);
    });
}

displayProducts();