"use strict"

//local storage:

// localStorage.setItem("name","Gultaj");

// localStorage.setItem("name","Resul");

// localStorage.setItem("surname","Hesenov");

// localStorage.setItem("surname","Aslanzade");

// localStorage.clear();

// localStorage.removeItem("name")

// confirm.log(localStorage.getItem("name"))

// let names=["Resul","Gultac","Lale","Novreste","Orxan"]

// localStorage.setItem("students",JSON.stringify("names"))

// let students=console.log(JSON.parse( localStorage.getItem("students")))

// for (const stu of students) {
//     console.log(stu)
// }

// let stu1={
//     name:"Nihad",
//     surname:"Veliyev"
// }

// let stu2={
//     name:"Resul",
//     surname:"Hesenov"
// }


// let stu3={
//     name:"Nicat",
//     surname:"Novruzzade"
// }

// let students=[stu1,stu2,stu3];

// localStorage.setItem("students",JSON.stringify("students"))

// let dbStudents=JSON.parse(localStorage.getItem("students"))

// dbStudents.forEach(stu => {
//     console.log(stu.name+" "+stu.surname)
// });



///session storage:

// sessionStorage.setItem("name","Gultac")


///basket:

let basketBtns=document.querySelectorAll(".add-basket")

let basket=[];

if(JSON.parse(localStorage.getItem("basket"))!=null){

    basket=JSON.parse(localStorage.getItem("basket"))
}

basketBtns.forEach(btn => {
    btn.addEventListener("click",function(e){
         e.preventDefault();

          let productDesc=this.previousElementSibling.innerText

          let productImage=this.parentNode.previousElementSibling.getAttribute("src")

          let productName=this.parentNode.firstElemetChild.innerText;
    
          let productId=parseInt(this.closest(".card").getAttribute("data-id"))

         let existProduct=basket.find(m=>m.id==productId);

         if(existProduct!=undefined){
            existProduct.count+=1
         }
         else{
            basket.push({
                name:productName,
                description:productDesc,
                image:productImage,
                count:1,
                id:productId
    
              })
         }

       

          localStorage.setItem("basket",JSON.stringify(basket))
      
          getBasketCount(basket);

          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    })
});


getBasketCount(basket);

function getBasketCount(arr){
    let count=0;
    for (const item of arr) {
        count+=item.count;

    }
    document.querySelector("sup").innerText=count;

}
