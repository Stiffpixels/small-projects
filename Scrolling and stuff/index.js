const navEl = document.querySelector("nav");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const exitBtn = document.querySelector(".exit-btn");
const linksContainer = document.querySelector(".links");
const dateYear =document.querySelector(".year");
const date = new Date();
const scrollLink = document.querySelectorAll(".scroll-link");
const backBtn = document.querySelector(".back-to-top");

dateYear.innerHTML = date.getFullYear();

const navBarHeight = navBar.getBoundingClientRect().height;
window.onscroll = function(){
  if(window.pageYOffset>navBarHeight){
    //navBar.style.background= "#2c2c2c";
    navBar.style.position= "fixed";
    navBar.style.boxShadow = "0 0 10px black";
  }else{
    navBar.style.position= "absolute";
    navBar.style.boxShadow = "none";
  }
  
  if(window.pageYOffset> 500){
    backBtn.style.display= "block";
  }else{
  backBtn.style.display= "none";
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

backBtn.addEventListener("click", function(){
  window.scrollTo({
    left:0, top:0
  });
});

scrollLink.forEach(function (link) {
  link.addEventListener("click", function(e){
    navEl.classList.remove("show-menu");
    e.preventDefault();
    const ident = link.getAttribute("href").slice(1);
    const elem = document.getElementById(ident);
    console.log(elem);
    let pos = elem.offsetTop;
    window.scrollTo({
      left:0, top: pos-navBarHeight
    });
  });
});