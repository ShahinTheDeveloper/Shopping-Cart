let cartIcon = document.querySelector(".cart-bag");
let cart = document.querySelector(".cart-section");
let cartClose = document.querySelector(".cart-close");

cartIcon.onclick = () => {
    cart.classList.add("active");
};
cartClose.onclick = () => {
    cart.classList.remove("active");
};
