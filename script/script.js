let menuContainers = document.querySelectorAll('.menuContainers');
let itemsMenu = document.querySelectorAll('.itemsMenu');

for (let x = menuContainers.length - 1; x >= 0; x--){
    menuContainers[x].onmouseenter = () => {
      itemsMenu[x].classList.add("flex");  
      itemsMenu[x].classList.remove("none");  
    };
    menuContainers[x].onmouseleave = () => {
      itemsMenu[x].classList.add("none");  
      itemsMenu[x].classList.remove("flex");  
    };
}
let eventCards = document.querySelectorAll('.card');
console.log(eventCards);
for (let i = 0; i <= eventCards.length; i++){
    if (eventCards[i].classList.contains('conference') !== -1){
        console.log(i)
    }
}
// import {myFunc} from './events-section';
// myFunc();