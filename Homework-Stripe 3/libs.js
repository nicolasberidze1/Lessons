const openBtn = document.querySelector(".mobile-menu")
const burgerMenu = document.querySelector("#burgermenu")
const nav = document.querySelector("nav")
const ul = document.querySelector("ul")
const li = document.querySelector("li")
openBtn.addEventListener("click",() => {
    if(openBtn.classList.contains('active')){
        openBtn.classList.remove('active') 
        burgerMenu.classList.remove('active')
        nav.classList.remove('active')
        ul.classList.remove('active')
        li.classList.remove('active')
    }else{
        openBtn.classList.add('active') 
        openBtn.classList.add('active')
        nav.classList.add('active')
        ul.classList.add('active')
        li.classList.add('active')
    }
})