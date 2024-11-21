document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    let cart = [];
    let total = 0;

    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });
        totalPrice.textContent = total.toFixed(2);
    }

    document.querySelectorAll(".add-to-cart").forEach((button) => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const id = product.dataset.id;
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);

            cart.push({ id, name, price });
            total += price;
            updateCart();
        });
    });
});