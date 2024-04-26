document.getElementsByClassName("menuButton")[0].addEventListener("click", ()=>showSideMenu());
document.getElementsByClassName("CloseButton")[0].addEventListener("click", ()=>hideSideMenu());
document.getElementsByClassName("backdrop")[0].addEventListener("click", () => hideSideMenu());

const sideMenu = document.getElementsByClassName("sideMenu")[0];
const backdrop = document.getElementsByClassName("backdrop")[0];
const menu = document.getElementsByClassName("menu")[0];

function hideSideMenu(){
    menu.classList.add("hidden");
}

function showSideMenu(){
    menu.classList.remove("hidden");
}