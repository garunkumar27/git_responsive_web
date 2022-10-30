let navi=document.getElementsByClassName("navigation")[0];
document.addEventListener("scroll",move);
function move(){
    let y = window.scrollY;
    if(y >= 1){
        navi.classList.add("header-scrolled");
    }else{
        navi.classList.remove("header-scrolled");
    }

}