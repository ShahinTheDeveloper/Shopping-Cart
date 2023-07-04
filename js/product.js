let productItems = document.getElementById("product-items");

let productList = [
    {
        Id: "product1",
        Name: "Adidas T-Shirt",
        price: 25,
        Image: "../img/product1.jpg",
    },
    {
        Id: "product2",
        Name: "Wireless Eearbuds",
        price: 100,
        Image: "../img/product2.jpg",
    },
    {
        Id: "product3",
        Name: "Hoddie Jacket",
        price: 200,
        Image: "../img/product3.jpg",
    },
    {
        Id: "product4",
        Name: "Metal Water Bottle",
        price: 20,
        Image: "../img/product4.jpg",
    },
    {
        Id: "product5",
        Name: "Metal Sunglasses",
        price: 30,
        Image: "../img/product5.jpg",
    },
    {
        Id: "product6",
        Name: "Adidas Cap",
        price: 40,
        Image: "../img/product6.jpg",
    },
    {
        Id: "product7",
        Name: "Adidas Backpack",
        price: 70,
        Image: "../img/product7.jpg",
    },
    {
        Id: "product8",
        Name: "Adidas Sneakers",
        price: 90,
        Image: "../img/product8.jpg",
    },
];

let productDisplay = () => {
    return (productItems.innerHTML = productList
        .map((item) => {
            return `<div class="p-3 col-md-6 col-lg-4">
                            <div class="product-item p-3 border">
                                <img
                                    src=${item.Image}
                                    width="100%"
                                    alt=""
                                />
                                <h3 class="product-name text-uppercase my-2">
                                    ${item.Name}
                                </h3>
                                <div
                                    class="d-flex justify-content-between align-items-center"
                                >
                                    <p class="fs-4">$ ${item.price}</p>
                                    <button class="cart-icon border-0 p-3">
                                        <i
                                            class="fa-solid fa-cart-plus fa-xl"
                                        ></i>
                                    </button>
                                </div>
                            </div>
                        </div>`;
        })
        .join(""));
};
productDisplay();
