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
let eventCardsContainer = document.querySelectorAll('.cards');
for (let i = 0; i <= eventCards.length; i++){
    let type = eventCardsContainer.indexOf(eventCardsContainer[i].classList.contains('conference'));
    if (eventCards[i].classList.contains('conference') !== -1 && type.onclick){
        type.innerHTML+=eventCards[i];
    }
}
// import {myFunc} from './events-section';
// myFunc();