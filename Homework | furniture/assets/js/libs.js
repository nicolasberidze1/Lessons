const dropdownTrigger = document.querySelector('#dropdown-trigger')
const dropdownMenu = document.querySelector('#dropdown-menu')
let expanded = false

dropdownTrigger.addEventListener('click', function () {
    if(expanded === true){
        dropdownMenu.classList.add('d-none')
        expanded = !expanded
    } else{
        dropdownMenu.classList.remove('d-none')
        expanded = !expanded
    }   
})
