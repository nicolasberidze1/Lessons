const submenu = document.querySelector("ul");
const buttons = document.querySelector(".buttons")
const opn = document.querySelector(".burger-button")


opn.addEventListener('click', () => {
    if(opn.classList.contains(".dropdown")){
        opn.classList.add('.dropdown')
        submenu.classList.add('.dropdown')
        buttons.classList.add('.dropdown')
    }
    else{
        opn.classList.remove('.dropdown')
        submenu.classList.remove('.dropdown')
        buttons.classList.remove('.dropdown')
    }
    
})
