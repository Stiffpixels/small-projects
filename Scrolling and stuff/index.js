const navEl = document.querySelector("nav");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const exitBtn = document.querySelector(".exit-btn");
const linksContainer = document.querySelector(".links");
const dateYear =document.querySelector(".year");
const date = new Date();
const scrollLink = document.querySelectorAll(".scroll-link");

dateYear.innerHTML = date.getFullYear();

const navBarHeight = navBar.getBoundingClientRect().height;
window.onscroll = function(){
  if(window.pageYOffset>navBarHeight){
    //navBar.style.background= "#2c2c2c";
    navBar.style.position= "fixed";
  }else{
    navBar.style.position= "absolute";
  }
}

menuBtn.addEventListener("click", function(){
  navEl.classList.add("show-menu");
  const linksHeight = linksContainer.getBoundingClientRect().height;
  navEl.style.height= `${linksHeight + 45}px`;
});

exitBtn.addEventListener("click", function(){
  navEl.classList.remove("show-menu");
});

scrollLink.forEach(function (link) {
  link.addEventListener("click", function(e){
    navEl.classList.remove("show-menu");
    e.preventDefault();
  });
});