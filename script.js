document.addEventListener("DOMContentLoaded", function () {
    renderProducts();
    renderCart();
});

function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.desc}</p>
                        <p><strong>$${product.price.toFixed(2)}</strong></p>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                    </div>
                </div>
            </div>`;
    });
}

function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItems.innerHTML += `
            <li class="list-group-item">
                ${item.name} ($${item.price}) x ${item.quantity}
                <div>
                    <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${item.id}, this.value)">
                    <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </li>`;
    });

    cartCount.textContent = `(${cart.length})`;
    totalPrice.textContent = total.toFixed(2);
}
