const Show = document.getElementById("hamburguer");
const Close = document.getElementById("close");
const Nav_hide = document.getElementById("nav_hide");

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