"use strict"

{/* <tr> 
<td><img src="" style="width: 100px; height: 100px;" alt=""></td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */}

let tableBody = document.querySelector("tbody")

let productAlert = document.querySelector(".alert alert-warning")

let products = JSON.parse(localStorage.getItem("basket"))

let icon1 = document.querySelectorAll(".plus::before")

let icon2 = document.querySelectorAll(".minus:Before")

let input = document.querySelector("input")

let totalPrice = document.querySelector(".total")


if (products != null) {

    products.forEach(product => {
        icon1.forEach(item1 => {
            item1.addEventListener("click", function () {
                product.count = parseInt(this.nextElementSibling.innertext)++;


            })
          
           

        });

        icon2.forEach(item2 => {
            item2.addEventListener("click", function () {
                product.count = parseInt(this.nextElementSibling.innertext)--;

            })
        });

        tableBody.innerHTML += `      
        <tr> 
        <td><img src="${product.image}" style="width: 100px; height: 100px;" alt=""></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td> <i class="fa-solid fa-plus plus"></i>

        <span>${product.count}</span>
        <i class="fa-solid fa-minus minus"></i></td></td>
        <td>${product.price}</td>
        </tr>
        `
    


     
    });

}
else {
    tableBody.parentNode.classList.add("d-none");
    productAlert.classList.remove("d-none")

}
if (products != null) {
    getBasketCount(products);
}



function getBasketCount(arr) {
    let count = 0;
    for (const item of arr) {
        count += item.count;

    }
    document.querySelector("sup").innertext = count;

}

function calculatePrice() {
    let total = 0;


}