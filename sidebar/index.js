const menuBtn= document.querySelector(".side-menu");
const sidebar= document.querySelector("aside");
const exitBtn= document.querySelector(".exit-btn");


let count= 0
menuBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-menu");
});

exitBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-menu")
});