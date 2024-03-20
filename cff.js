document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartSection = document.getElementById("cart");
    const orderPlacementSection = document.getElementById("order-placement");
    const checkoutSuccessSection = document.getElementById("checkout-success");
    const placeOrderButton = document.getElementById("place-order");
    const checkoutButton = document.getElementById("checkout");

    let cartItems = [];

    // Function to add item to cart
    function addToCart(item) {
        cartItems.push(item);
        renderCart();
    }

    // Function to render cart
    function renderCart() {
        cartItemsList.innerHTML = "";
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItemsList.appendChild(li);
        });
        cartSection.style.display = "block";
    }

    // Add event listeners to add-to-cart buttons
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const drinkName = this.previousElementSibling.previousElementSibling.textContent;
            addToCart(drinkName);
        });
    });

    // Place Order Button Click Event
    placeOrderButton.addEventListener("click", function () {
        cartSection.style.display = "none";
        orderPlacementSection.style.display = "block";
    });

    // Checkout Button Click Event
    checkoutButton.addEventListener("click", function () {
        // Here you can implement the checkout process, handle payment methods, etc.
        // For simplicity, let's just show the checkout success section
        orderPlacementSection.style.display = "none";
        checkoutSuccessSection.style.display = "block";
    });
});
// JavaScript code
// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const cartItemsList = document.getElementById('cart-items');
// let totalPrice = 0;

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const drinkPrice = parseFloat(button.parentElement.querySelector('.price').textContent);
//         const quantity = parseInt(button.parentElement.querySelector('input[type="number"]').value);
//         const itemName = button.parentElement.querySelector('h5').textContent;
//         const itemTotalPrice = drinkPrice * quantity;
//         totalPrice += itemTotalPrice;

//         const newItem = document.createElement('li');
//         newItem.textContent = `${itemName} - $${itemTotalPrice.toFixed(2)}`;
//         cartItemsList.appendChild(newItem);

//         // Update total price display
//         document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const drinkPrice = parseFloat(button.parentElement.querySelector('.price').textContent);
            const quantity = parseInt(button.parentElement.querySelector('input[type="number"]').value);
            const itemName = button.parentElement.querySelector('h5').textContent;
            const itemTotalPrice = drinkPrice * quantity;
            totalPrice += itemTotalPrice;

            const newItem = document.createElement('li');
            newItem.textContent = `${itemName} - $${itemTotalPrice.toFixed(2)}`;
            cartItemsList.appendChild(newItem);

            // Update total price display
            document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
        });
    });
});