
// Select HTML Elements

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const cartCount = document.getElementById("cartCount");
const cartMessage = document.getElementById("cartMessage");

// Cart Counter

let totalItems = 0;

// Mobile Menu

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

// Close menu after clicking a link

navLinks.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";

    });

});

// Add To Cart Functionality

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        totalItems++;

        cartCount.textContent = totalItems;

        const productName = button.dataset.product;

        cartMessage.textContent =
            productName + " added to your cart! Total items: " + totalItems;

    });

});
