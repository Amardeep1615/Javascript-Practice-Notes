const productsList = document.getElementById("productList");
const loadingIndicator = document.getElementById("loading");

// Fetch products from DummyJSON API using promises
function fetchProducts() {
    return fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.products)
        .catch(error => {
            console.error("Error fetching products:", error);
            productsList.innerHTML = `
                <div class="col-span-full text-center py-8">
                    <p class="text-red-500">Failed to load products. Please try again later.</p>
                </div>
            `;
            return [];
        })
        .finally(() => {
            loadingIndicator.style.display = 'none';
        });
}

// Display products with Tailwind CSS (same as before)
function displayProducts(products) {
    productsList.innerHTML = "";

    if (products.length === 0) {
        productsList.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-500">No products available.</p>
            </div>
        `;
        return;
    }

    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.className = "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col";
        productItem.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${product.thumbnail}" alt="${product.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-4 flex-grow">
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-semibold">${product.title}</h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">${product.brand}</span>
                </div>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
                <div class="flex items-center mt-auto">
                    <span class="text-gray-900 font-bold">$${product.price}</span>
                    <span class="ml-2 text-yellow-500">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5-Math.round(product.rating))}</span>
                    <span class="ml-auto text-sm text-gray-500">${product.stock} left</span>
                </div>
            </div>
            <div class="px-4 pb-4">
                <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                    Add to Cart
                </button>
            </div>
        `;
        productsList.appendChild(productItem);
    });
}

// Initialize the app using promise chaining
function init() {
    fetchProducts()
        .then(products => {
            displayProducts(products);
        });
}

// Start the application
init();