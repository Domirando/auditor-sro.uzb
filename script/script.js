let menuContainers = document.querySelectorAll('.menuContainers');
var itemsMenu = document.querySelectorAll('.itemsMenu');
var menuCond = false;

for (let x = menuContainers.length - 1; x >= 0; x--){
    menuContainers[x].onmouseenter = ()=>{
      itemsMenu[x].classList.add("flex");  
      itemsMenu[x].classList.remove("none");  
    };
    menuContainers[x].onmouseleave = ()=>{
      itemsMenu[x].classList.add("none");  
      itemsMenu[x].classList.remove("flex");  
    };
}