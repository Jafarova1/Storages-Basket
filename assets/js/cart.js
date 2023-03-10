"use strict"

{/* <tr> 
<td><img src="" style="width: 100px; height: 100px;" alt=""></td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */}
let tableBody = document.querySelector("tbody")

let productAlert=document.querySelector(".alert alert-warning")


let products = JSON.parse(localStorage.getItem("basket"));

if(products!=null){
    products.forEach(product => {

        tableBody.innerHTML += `
    <tr> 
    <td><img src="${product.image}" style="width: 100px; height: 100px;" alt=""></td>
    <td>${product.name}</td>
    <td>${product.description}</td>
    <td>${product.count}</td>
    </tr>
    `
    
    
    
    });
}
else{
    tableBody.parentNode.classList.add("d-none");
    productAlert.classList.remove("d-none")

}

if(products!=null){
    getBasketCount(products);
}



function getBasketCount(arr){
    let count=0;
    for (const item of arr) {
        count+=item.count;

    }
    document.querySelector("sup").innertext=count;

}



