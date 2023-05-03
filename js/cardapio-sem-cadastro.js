
let modalKey = 0;
let index = 0;
let Show = document.getElementById("hamburguer");
let Close = document.getElementById("close");
let Nav_hide = document.getElementById("nav_hide");
let modal = document.getElementById("modal");
let close_modal = document.getElementById("close_modal");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let numberOfQuantity = document.getElementById("numberOfQuantity");
let quantity = 1;
let cart = [];


const select = (element) => document.querySelector(element);
const selectId = (element) => document.getElementById(element);

const productData = (product, item) => {
   product.querySelector(".content .food").innerHTML = item.food_name;
   product.querySelector(".content .ingredients").innerHTML = item.description;
   product.querySelector(".content .price").innerHTML = item.price;
   product.querySelector(".img .image_product").src = item.image;
}

const modalData = (item) => {
    select("#product_information #name").innerHTML = item.food_name;
    select("#product_information #food_info").innerHTML = item.description;
    select("#product_information #modal_price").innerHTML = item.price;
    select("#picture #img").src = item.image;
}

const getKey = (e) => {
    let Key = e.target.closest(".product");
    console.log("produto clicado" + Key);
    console.log(porcoesIndividuais[Key]);

    quantity = 1;

    modalKey = Key;

    return getKey;
}

// const addCartIndividual = () => {
//     selectId("continue").addEventListener("click", () => {

//         console.log("adicionar carrinho");

//         console.log("product" + modalKey);

//         let idetify = porcoesIndividuais[modalKey].id;

//         let Key = cart.findIndex((item) => item.idetify == idetify)
//         console.log(Key)

//         if(Key > -1) {
//             cart[Key].
//         }
//     })
// }


porcoesIndividuais.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("individualPortions").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

    getKey(e);

    console.log(modalKey);

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

pizzaBrotinho.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("brattyPizza").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

salgadosMistos.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("savory").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

combos.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("together").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

fritas.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("frenchFries").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

bebidas.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("drinks").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

lanches.map((item, index) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("sandwich").append(product);
   
   productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})


Show.addEventListener("click", () => {
    if(Nav_hide.style.display == "none" || !Nav_hide.style.display) {
        Nav_hide.style.display = "block";
    } else {
        Nav_hide.style.display = "none";
    }
})

Close.addEventListener("click", () => {
    if(Nav_hide.style.display == "block" || !Nav_hide.style.display) {
        Nav_hide.style.display = "none";
    } else {
        Nav_hide.style.display = "block";
    }
})

close_modal.addEventListener("click", () => {
    if(modal.style.display == "flex" || !modal.style.display) {
        modal.style.display = "none";
        numberOfQuantity.innerHTML = 1;
        quantity = 1;
    } else {
        modal.style.display = "flex";
    }
})

add.addEventListener("click", () => { 
    quantity++;
    numberOfQuantity.innerHTML = quantity;

})

remove.addEventListener("click", () => {
    quantity--;
    numberOfQuantity.innerHTML = quantity;

    
    if(numberOfQuantity.innerHTML == 0 ){
        modal.style.display = "none";
        numberOfQuantity.innerHTML = 1;
        quantity = 1;
    } else {
        modal.style.display = "flex";
    }
    
})

addCartIndividual();

