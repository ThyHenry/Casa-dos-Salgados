const Show = document.getElementById("hamburguer");
const Nav_hide = document.getElementById("nav_hide");
const Close = document.getElementById("close");

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

// document.getElementById("linkJs").addEventListener("click", ()=> {
//     document.getElementById("linkJs").href = "https://www.instagram.com/cr7cristianoronaldo/";
//   })