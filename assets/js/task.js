"use strict"



let basketBtns = document.querySelectorAll(".add-basket")

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) != null) {

    basket = JSON.parse(localStorage.getItem("basket"))
}

basketBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let productDesc = this.previousElementSibling.innerText


        let productImage = this.parentNode.previousElementSibling.getAttribute("src")


    
        let productName = this.parentNode.firstElementChild.innerText


        let productId = parseInt(this.closest(".card").getAttribute("data-id"))


        let productPrice = this.nextElementSibling.innerText;


        let existProduct = basket.find(m => m.id == productId);


        if (existProduct != undefined) {
            existProduct.count += 1

        }
        else {

            basket.push({
                description: productDesc,
                image: productImage,
                name: productName,
                id: productId,
                count: 1,
                price: productPrice
            })
        }



        localStorage.setItem("basket", JSON.stringify(basket))
        getBasketCount(basket);

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your product has been added',
            showConfirmButton: false,
            timer: 1500
        })
    })
});


getBasketCount(basket);

function getBasketCount(arr) {
    let count = 0;
    for (const item of arr) {
        count += item.count;


    }
    document.querySelector("sup").innerText = count;

}




