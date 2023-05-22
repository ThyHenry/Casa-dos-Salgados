
let modalKey = 0;
let index = 0;
let Show = document.getElementById("hamburguer");
let Close = document.getElementById("close");
let Nav_hide = document.getElementById("nav_hide");
let modal = document.getElementById("modal");
let close_modal = document.getElementById("close_modal");
let add = document.getElementById("add");
let remove = document.getElementById("remove");
let content = document.querySelector(".content")
let numberOfQuantity = document.getElementById("numberOfQuantity");
let shopping = document.getElementById("shoppingCart");
let modalAdress = document.getElementById("templateAdress");
let adress = document.getElementById("inputAdress");
let finish = document.getElementById("finish");
let quantity = 1;
let cart = [];
let removeDuplicates = [];



const select = (element) => document.querySelector(element);
const selectId = (element) => document.getElementById(element);

const productData = (product, item) => {
   product.querySelector(".content .food").innerHTML = item.food_name;
   product.querySelector(".content .ingredients").innerHTML = item.description;
   product.querySelector(".content .price").innerHTML = "R$ " + item.price;
   product.querySelector(".img .image_product").src = item.image;
}

const modalData = (item) => {
    select("#product_information #name").innerHTML = item.food_name;
    select("#product_information #food_info").innerHTML = item.description;
    select("#product_information #modal_price").innerHTML = "R$ " + item.price;
    select("#picture #img").src = item.image;
}

porcoesIndividuais.map((item) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("individualPortions").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

    let myProduct = porcoesIndividuais[item.id -1];

    console.log("meu produto clicado", myProduct);

    // let identificador = cart.findIndex((item) => item.id == item.id)
    
    
    selectId("addCart").onclick = (e) => {
        e.preventDefault();

        cart.push(myProduct);

        removeDuplicates = [...new Set(cart)];
        
        console.log("item adicionado", removeDuplicates);

        console.log(quantity);

        let totalQuantity = quantity * parseFloat(item.price);

        item.option = selectId("commentary").value;
        
        Object.defineProperty(item, "quantity",{
            value: quantity,
            writable: true,
            enumerable: true,
            configurable: true,
    }) 

         Object.defineProperty(item, "total",{
                value: totalQuantity,
                writable: true,
                enumerable: true,
                configurable: true,
        }) 

        console.log(item);

        modal.style.display = "none";

        quantity = 1;

        shopping.style.display = "block";

        let identificador = porcoesIndividuais[index].id;

        let key = removeDuplicates.findIndex((item) => item.identificador == identificador)

        console.log("identificador", key);

        selectId("cartContent").innerHTML = "";

        removeDuplicates.map((item) => {
            let cartProduct = document.querySelector("#clone .cartProduct").cloneNode(true);

            let index = cart.findIndex(i => i.id === item.id);

        console.log("index", index);

            console.log(cartProduct);
            selectId("cartContent").append(cartProduct);

            // if(identificador > -1) {
            //     cart[identificador].quantity += quantity;
            // } else {
            //    let portion = {
            //         identificador,
            //         id: porcoesIndividuais[item].id,
            //         quantity: quantity,
            //         price: porcoesIndividuais[item].price,
            //     }
            // }


            cartProduct.querySelector(".cart_info .cart_name_product").innerHTML = item.food_name;
            cartProduct.querySelector(".cart_info .quantity_cart").innerHTML = item.quantity + "un";
            cartProduct.querySelector(".button_quantity_price .cart_price_product").innerHTML = "R$ " + item.total + ",00";
            cartProduct.querySelector(".cart_input_value .input_value").innerHTML = item.option;


            let sum = removeDuplicates.reduce((accumulator, object) => {
                return accumulator + object.total;
            },0);

            console.log(sum);

            selectId("total").innerHTML = "R$ " + sum + ",00";

            
            // selectId("removeCart").addEventListener("click", () => {
            //     console.log(removeDuplicates);
            //     // removeDuplicates.splice(0, 1);
            //     // console.log(removeDuplicates);
            // })

            

            
selectId("button_conclude").onclick = () => {
   let radios = document.querySelector("input[name='card']:checked");
   
   if (!!radios) {
       selectId("validationRadios").textContent =  "";
       modalAdress.style.display = "flex";
   }
   else {
    selectId("validationRadios").textContent =  "Selecione uma forma de pagamento";
    modalAdress.style.display = "none";
   }
}
            let messageContent = [];

            for (i in removeDuplicates) {
                let name = removeDuplicates[i].food_name;
                let qt = removeDuplicates[i].quantity.toString();
                let coment = removeDuplicates[i].option;
            
                let newMessage = name + " / " + qt + "un " + " / " + "comentário: " + coment;
            
                messageContent.push(newMessage);
            }
            
                    console.log(messageContent);               
            
            finish.onclick =  () => {
                if(adress.value == "") {
                    selectId("validation").textContent = "O endereço é obrigatório"
                } else {
                    loading();
                    selectId("validation").textContent = ""
                    let params = {
                        name: "Nova compra",
                        email: "novacompraqdeliciacasasalgados@gmail.com",
                        message: messageContent + " /" + " total: R$ " + sum.toString() + ",00  " + "/ " + "Forma de pagmento: " +    document.querySelector("input[name='card']:checked").value  + " / " +" entrega: " + adress.value
                    }
                
                    
                const serviceId = "service_kq1pcuf";
                const templateId = "template_cjs9iem";
                
                emailjs.send(serviceId, templateId, params).then(
                    res =>{
                        alert("sua compra foi realizada");
                        hideLoading();
                        location.reload();
                    }
                ).catch( error => {
                    hideLoading();
                    console.log("erro", error);
                })
                }
                }
            

        })
    }

   selectId("modal").style.display = "flex";

   modalData(item);
   })



})

pizzaBrotinho.map((item) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("brattyPizza").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

    let myProduct = pizzaBrotinho[item.id -9];

    console.log("meu produto clicado", myProduct);

    selectId("addCart").onclick = (e) => {
        e.preventDefault();

        cart.push(myProduct);

        removeDuplicates = [...new Set(cart)];
        let index = cart.findIndex(i => i.id === item.id);

        console.log("index", index);
        
        console.log("item adicionado", removeDuplicates);

        console.log(quantity);

        let totalQuantity = quantity * parseFloat(item.price);

        item.option = selectId("commentary").value;
        
        Object.defineProperty(item, "quantity",{
            value: quantity,
            writable: true,
            enumerable: true,
            configurable: true,
    }) 

         Object.defineProperty(item, "total",{
                value: totalQuantity,
                writable: true,
                enumerable: true,
                configurable: true,
        }) 

        console.log(item);

        modal.style.display = "none";

        quantity = 1;

        shopping.style.display = "block";

        let identificador = porcoesIndividuais[index].id;

        let key = removeDuplicates.findIndex((item) => item.identificador == identificador)

        console.log("identificador", key);

        selectId("cartContent").innerHTML = "";

        removeDuplicates.map((item) => {
            let cartProduct = document.querySelector("#clone .cartProduct").cloneNode(true);

            console.log(cartProduct);
            selectId("cartContent").append(cartProduct);

            // if(identificador > -1) {
            //     cart[identificador].quantity += quantity;
            // } else {
            //    let portion = {
            //         identificador,
            //         id: porcoesIndividuais[item].id,
            //         quantity: quantity,
            //         price: porcoesIndividuais[item].price,
            //     }
            // }


            cartProduct.querySelector(".cart_info .cart_name_product").innerHTML = item.food_name;
            cartProduct.querySelector(".cart_info .quantity_cart").innerHTML = item.quantity + "un";
            cartProduct.querySelector(".button_quantity_price .cart_price_product").innerHTML = "R$ " + item.total + ",00";
            cartProduct.querySelector(".cart_input_value .input_value").innerHTML = item.option;

            let sum = removeDuplicates.reduce((accumulator, object) => {
                return accumulator + object.total;
            },0);

            console.log(sum);

            selectId("total").innerHTML = "R$ " + sum + ",00";

            selectId("removeCart").onclick = () => {
                cart.splice()
            }

                      
selectId("button_conclude").onclick = () => {
    let radios = document.querySelector("input[name='card']:checked");
  
    if (!!radios) {
        selectId("validationRadios").textContent =  "";
        modalAdress.style.display = "flex";
    }
    else {
     selectId("validationRadios").textContent =  "Selecione uma forma de pagamento";
     modalAdress.style.display = "none";
    }
 }
             let messageContent = [];
 
             for (i in removeDuplicates) {
                let name = removeDuplicates[i].food_name;
                let qt = removeDuplicates[i].quantity.toString();
                let coment = removeDuplicates[i].option;
            
                let newMessage = name + " / " + qt + "un " + " / " + "comentário: " + coment;
            
                messageContent.push(newMessage);
            }
            
                    console.log(messageContent);               
            
            finish.onclick =  () => {
                if(adress.value == "") {
                    selectId("validation").textContent = "O endereço é obrigatório"
                } else {
                    loading();
                    selectId("validation").textContent = ""
                    let params = {
                        name: "Nova compra",
                        email: "novacompraqdeliciacasasalgados@gmail.com",
                        message: messageContent + " /" + " total: R$ " + sum.toString() + ",00  " + "/ " + "Forma de pagmento: " +    document.querySelector("input[name='card']:checked").value  + " / " +" entrega: " + adress.value
                    }
                
                    
                const serviceId = "service_kq1pcuf";
                const templateId = "template_cjs9iem";
                
                emailjs.send(serviceId, templateId, params).then(
                    res =>{
                        alert("sua compra foi realizada");
                        hideLoading();
                        location.reload();
                    }
                ).catch( error => {
                    hideLoading();
                    console.log("erro", error);
                })
                }
                }
            

             
            
        })
    }
   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

salgadosMistos.map((item) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("savory").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

    let myProduct = salgadosMistos[item.id -16];

    console.log("meu produto clicado", myProduct);

    selectId("addCart").onclick = (e) => {
        e.preventDefault();

        cart.push(myProduct);

        removeDuplicates = [...new Set(cart)];
        let index = cart.findIndex(i => i.id === item.id);

        console.log("index", index);
        
        console.log("item adicionado", removeDuplicates);

        console.log(quantity);

        let totalQuantity = quantity * parseFloat(item.price);

        item.option = selectId("commentary").value;
        
        Object.defineProperty(item, "quantity",{
            value: quantity,
            writable: true,
            enumerable: true,
            configurable: true,
    }) 

         Object.defineProperty(item, "total",{
                value: totalQuantity,
                writable: true,
                enumerable: true,
                configurable: true,
        }) 

        console.log(item);

        modal.style.display = "none";

        quantity = 1;

        shopping.style.display = "block";

        let identificador = porcoesIndividuais[index].id;

        let key = removeDuplicates.findIndex((item) => item.identificador == identificador)

        console.log("identificador", key);

        selectId("cartContent").innerHTML = "";

        removeDuplicates.map((item) => {
            let cartProduct = document.querySelector("#clone .cartProduct").cloneNode(true);

            console.log(cartProduct);
            selectId("cartContent").append(cartProduct);

            // if(identificador > -1) {
            //     cart[identificador].quantity += quantity;
            // } else {
            //    let portion = {
            //         identificador,
            //         id: porcoesIndividuais[item].id,
            //         quantity: quantity,
            //         price: porcoesIndividuais[item].price,
            //     }
            // }


            cartProduct.querySelector(".cart_info .cart_name_product").innerHTML = item.food_name;
            cartProduct.querySelector(".cart_info .quantity_cart").innerHTML = item.quantity + "un";
            cartProduct.querySelector(".button_quantity_price .cart_price_product").innerHTML = "R$ " + item.total + ",00";
            cartProduct.querySelector(".cart_input_value .input_value").innerHTML = item.option;

            let sum = removeDuplicates.reduce((accumulator, object) => {
                return accumulator + object.total;
            },0);

            console.log(sum);

            selectId("total").innerHTML = "R$ " + sum + ",00";

                        
selectId("button_conclude").onclick = () => {
    let radios = document.querySelector("input[name='card']:checked");
  
    if (!!radios) {
        selectId("validationRadios").textContent =  "";
        modalAdress.style.display = "flex";
    }
    else {
     selectId("validationRadios").textContent =  "Selecione uma forma de pagamento";
     modalAdress.style.display = "none";
    }
 }
             let messageContent = [];
 
             for (i in removeDuplicates) {
                let name = removeDuplicates[i].food_name;
                let qt = removeDuplicates[i].quantity.toString();
                let coment = removeDuplicates[i].option;
            
                let newMessage = name + " / " + qt + "un " + " / " + "comentário: " + coment;
            
                messageContent.push(newMessage);
            }
            
                    console.log(messageContent);               
            
            finish.onclick =  () => {
                if(adress.value == "") {
                    selectId("validation").textContent = "O endereço é obrigatório"
                } else {
                    loading();
                    selectId("validation").textContent = ""
                    let params = {
                        name: "Nova compra",
                        email: "novacompraqdeliciacasasalgados@gmail.com",
                        message: messageContent + " /" + " total: R$ " + sum.toString() + ",00  " + "/ " + "Forma de pagmento: " +    document.querySelector("input[name='card']:checked").value  + " / " +" entrega: " + adress.value
                    }
                
                    
                const serviceId = "service_kq1pcuf";
                const templateId = "template_cjs9iem";
                
                emailjs.send(serviceId, templateId, params).then(
                    res =>{
                        alert("sua compra foi realizada");
                        hideLoading();
                        location.reload();
                    }
                ).catch( error => {
                    hideLoading();
                    console.log("erro", error);
                })
                }
                }
            

             
        })
    }

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

combos.map((item) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("together").append(product);
   
  productData(product, item);

   product.addEventListener("click", (e) => {
    e.preventDefault();

    let myProduct = combos[item.id -26];

    console.log("meu produto clicado", myProduct);

    selectId("addCart").onclick = (e) => {
        e.preventDefault();

        cart.push(myProduct);

        removeDuplicates = [...new Set(cart)];
        let index = cart.findIndex(i => i.id === item.id);

        console.log("index", index);
        
        console.log("item adicionado", removeDuplicates);

        console.log(quantity);

        let totalQuantity = quantity * parseFloat(item.price);

        item.option = selectId("commentary").value;
        
        Object.defineProperty(item, "quantity",{
            value: quantity,
            writable: true,
            enumerable: true,
            configurable: true,
    }) 

         Object.defineProperty(item, "total",{
                value: totalQuantity,
                writable: true,
                enumerable: true,
                configurable: true,
        }) 

        console.log(item);

        modal.style.display = "none";

        quantity = 1;

        shopping.style.display = "block";

        let identificador = porcoesIndividuais[index].id;

        let key = removeDuplicates.findIndex((item) => item.identificador == identificador)

        console.log("identificador", key);

        selectId("cartContent").innerHTML = "";

        removeDuplicates.map((item) => {
            let cartProduct = document.querySelector("#clone .cartProduct").cloneNode(true);

            console.log(cartProduct);
            selectId("cartContent").append(cartProduct);

            // if(identificador > -1) {
            //     cart[identificador].quantity += quantity;
            // } else {
            //    let portion = {
            //         identificador,
            //         id: porcoesIndividuais[item].id,
            //         quantity: quantity,
            //         price: porcoesIndividuais[item].price,
            //     }
            // }


            cartProduct.querySelector(".cart_info .cart_name_product").innerHTML = item.food_name;
            cartProduct.querySelector(".cart_info .quantity_cart").innerHTML = item.quantity + "un";
            cartProduct.querySelector(".button_quantity_price .cart_price_product").innerHTML = "R$ " + item.total + ",00";
            cartProduct.querySelector(".cart_input_value .input_value").innerHTML = item.option;

            let sum = removeDuplicates.reduce((accumulator, object) => {
                return accumulator + object.total;
            },0);

            console.log(sum);

            selectId("total").innerHTML = "R$ " + sum + ",00";

                       
selectId("button_conclude").onclick = () => {
    let radios = document.querySelector("input[name='card']:checked");
  
    if (!!radios) {
        selectId("validationRadios").textContent =  "";
        modalAdress.style.display = "flex";
    }
    else {
     selectId("validationRadios").textContent =  "Selecione uma forma de pagamento";
     modalAdress.style.display = "none";
    }
 }
             let messageContent = [];
 
             for (i in removeDuplicates) {
                let name = removeDuplicates[i].food_name;
                let qt = removeDuplicates[i].quantity.toString();
                let coment = removeDuplicates[i].option;
            
                let newMessage = name + " / " + qt + "un " + " / " + "comentário: " + coment;
            
                messageContent.push(newMessage);
            }
            
                    console.log(messageContent);               
            
            finish.onclick =  () => {
                if(adress.value == "") {
                    selectId("validation").textContent = "O endereço é obrigatório"
                } else {
                    loading();
                    selectId("validation").textContent = ""
                    let params = {
                        name: "Nova compra",
                        email: "novacompraqdeliciacasasalgados@gmail.com",
                        message: messageContent + " /" + " total: R$ " + sum.toString() + ",00  " + "/ " + "Forma de pagmento: " +    document.querySelector("input[name='card']:checked").value  + " / " +" entrega: " + adress.value
                    }
                
                    
                const serviceId = "service_kq1pcuf";
                const templateId = "template_cjs9iem";
                
                emailjs.send(serviceId, templateId, params).then(
                    res =>{
                        alert("sua compra foi realizada");
                        hideLoading();
                        location.reload();
                    }
                ).catch( error => {
                    hideLoading();
                    console.log("erro", error);
                })
                }
                }
            

        })
    }

   selectId("modal").style.display = "flex";

   modalData(item);
   })


})

bebidas.map((item) =>{
    
    let product = document.querySelector("#clone .product").cloneNode(true);

  selectId("drinks").append(product);
   
   product.querySelector(".content .food").innerHTML = item.food_name;
   product.querySelector(".content .price").innerHTML = "R$ " + item.price;
   product.querySelector(".img .image_product").src = item.image;

   product.addEventListener("click", (e) => {
    e.preventDefault();

    let myProduct = bebidas[item.id -38];

    console.log("meu produto clicado", myProduct);

    selectId("addCart").onclick = (e) => {
        e.preventDefault();

        cart.push(myProduct);

        removeDuplicates = [...new Set(cart)];
        let index = cart.findIndex(i => i.id === item.id);

        console.log("index", index);
        
        console.log("item adicionado", removeDuplicates);

        console.log(quantity);

        let totalQuantity = quantity * parseFloat(item.price);

        item.option = selectId("commentary").value;
        
        Object.defineProperty(item, "quantity",{
            value: quantity,
            writable: true,
            enumerable: true,
            configurable: true,
    }) 

         Object.defineProperty(item, "total",{
                value: totalQuantity,
                writable: true,
                enumerable: true,
                configurable: true,
        }) 

        console.log(item);

        modal.style.display = "none";

        quantity = 1;

        shopping.style.display = "block";

        let identificador = porcoesIndividuais[index].id;

        let key = removeDuplicates.findIndex((item) => item.identificador == identificador)

        console.log("identificador", key);

        selectId("cartContent").innerHTML = "";

        removeDuplicates.map((item) => {
            let cartProduct = document.querySelector("#clone .cartProduct").cloneNode(true);

            console.log(cartProduct);
            selectId("cartContent").append(cartProduct);

            // if(identificador > -1) {
            //     cart[identificador].quantity += quantity;
            // } else {
            //    let portion = {
            //         identificador,
            //         id: porcoesIndividuais[item].id,
            //         quantity: quantity,
            //         price: porcoesIndividuais[item].price,
            //     }
            // }


            cartProduct.querySelector(".cart_info .cart_name_product").innerHTML = item.food_name;
            cartProduct.querySelector(".cart_info .quantity_cart").innerHTML = item.quantity + "un";
            cartProduct.querySelector(".button_quantity_price .cart_price_product").innerHTML = "R$ " + item.total + ",00";
            cartProduct.querySelector(".cart_input_value .input_value").innerHTML = item.option;

            let sum = removeDuplicates.reduce((accumulator, object) => {
                return accumulator + object.total;
            },0);

            console.log(sum);

            selectId("total").innerHTML = "R$ " + sum + ",00";

                        
selectId("button_conclude").onclick = () => {
    let radios = document.querySelector("input[name='card']:checked");
  
    if (!!radios) {
        selectId("validationRadios").textContent =  "";
        modalAdress.style.display = "flex";
    }
    else {
     selectId("validationRadios").textContent =  "Selecione uma forma de pagamento";
     modalAdress.style.display = "none";
    }
 }
             let messageContent = [];
 
             for (i in removeDuplicates) {
                let name = removeDuplicates[i].food_name;
                let qt = removeDuplicates[i].quantity.toString();
                let coment = removeDuplicates[i].option;
            
                let newMessage = name + " / " + qt + "un " + " / " + "comentário: " + coment;
            
                messageContent.push(newMessage);
            }
            
                    console.log(messageContent);               
            
            finish.onclick =  () => {
                if(adress.value == "") {
                    selectId("validation").textContent = "O endereço é obrigatório"
                } else {
                    loading();
                    selectId("validation").textContent = ""
                    let params = {
                        name: "Nova compra",
                        email: "novacompraqdeliciacasasalgados@gmail.com",
                        message: messageContent + " /" + " total: R$ " + sum.toString() + ",00  " + "/ " + "Forma de pagmento: " +    document.querySelector("input[name='card']:checked").value  + " / " +" entrega: " + adress.value
                    }
                
                    
                const serviceId = "service_kq1pcuf";
                const templateId = "template_cjs9iem";
                
                emailjs.send(serviceId, templateId, params).then(
                    res =>{
                        alert("sua compra foi realizada");
                        hideLoading();
                        location.reload();
                    }
                ).catch( error => {
                    hideLoading();
                    console.log("erro", error);
                })
                }
                }
            

             
        })
    }
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
        selectId("commentary").value = "";
    } else {
        modal.style.display = "flex";
    }
})

selectId("molding").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "none" || !shopping.style.display) {
        shopping.style.display = "block";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    } else {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
    }
})

selectId("molding_nav").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "none" || !shopping.style.display) {
        shopping.style.display = "block";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    } else {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
    }
})

selectId("porcoes_individuais_display").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("pizza_brotinho_display").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("salgados_mistos_display").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("com_bos").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("bebi_das").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("porcoes_individuais_hide").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("pizza_brotinho_hide").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("salgados_mistos_hide").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("com_bos_hide").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
    }
})

selectId("bebi_das_hide").addEventListener("click", () => {
    modal.style.display = "none";
    numberOfQuantity.innerHTML = 1;
   if(shopping.style.display == "block" || !shopping.style.display) {
        shopping.style.display = "none";
        modalAdress.style.display = "none";
        selectId("commentary").value = "";
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

function loading() {
    const load = document.getElementById("loading");
    load.style.display = "flex";
  
    setTimeout(() => hideLoading(), 2000);
  }
  
  function hideLoading() {
    const load = document.getElementById("loading");
    load.style.display = "none";
  }


