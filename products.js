const products = [
    { id: 1, name: "Laptop", desc: "HP High performance laptop", price: 999.00, image: "laptop.jpg" },
    { id: 2, name: "Smartphone", desc: "Latest model BenQ smartphone", price: 499.00, image: "smartphone.jpg" },
    { id: 3, name: "Headphones", desc: "Noise-free headphones", price: 199.00, image: "headphones.jpg" }
];
const productContainer = document.getElementById("product-list");

// Fetch products from local JSON file or API
async function fetchProducts(source = "local") {
    try {
        let products;
        if (source === "api") {
            const response = await fetch("https://fakestoreapi.com/products"); // Example API
            products = await response.json();
        } else {
            const response = await fetch("products.json"); // Local JSON file
            products = await response.json();
        }
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        productContainer.innerHTML = "<p class='text-danger'>Failed to load products.</p>";
    }
}

// Display products in the UI
function displayProducts(products) {
    productContainer.innerHTML = ""; // Clear previous content
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" onerror="this.src='images/placeholder.png'" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

// Call function with "local" or "api" to switch source
fetchProducts("local");
