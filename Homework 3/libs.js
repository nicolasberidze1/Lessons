let subMenu = document.getElementById('submenu');
let subMenuItems = document.getElementById('submenu-items')
console.log(subMenu);
// function (sub-menu)(){
//     document.getElementById("myDropdown")
// }

subMenuItems.style.display = "none"
    

function clickSubMenu(){
    subMenuItems.style.display = "block"
    console.log("clicked")
}



subMenu.addEventListener('click', clickSubMenu);

