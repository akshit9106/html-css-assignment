function hide_nav(){
    let nav = document.getElementById("nav-bar");
    if( nav.style.visibility == "hidden"){
        nav.style.visibility = "visible";
    }
    else{
        nav.style.visibility = "hidden";
    }
}