function showItemMenu(item){
    if (item==='mainItem-1') {
        let firstItemMenu = document.getElementById("first");
        if(firstItemMenu.style.display=="none"){
            firstItemMenu.style.display="flex";
        }else{
            firstItemMenu.style.display="none";
        }    
    }else if (item==='mainItem-2') {
        let secondItemMenu = document.getElementById("second");
        if(secondItemMenu.style.display=="none"){
            secondItemMenu.style.display="flex";
        }else{
            secondItemMenu.style.display="none";
        }    
    }
    
}