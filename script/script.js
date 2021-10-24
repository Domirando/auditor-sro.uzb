function showItemMenu(){
    let firstItemMenu = document.getElementsByClassName("first");
    if(firstItemMenu.style.display=="none"){
        firstItemMenu.style.display="flex";
    }else{
        firstItemMenu.style.display="none";
    }
}