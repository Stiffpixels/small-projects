
const controlBtn = document.querySelector(".control-btn");

const backVid = document.querySelector(".back-vid");

const preLoader = document.querySelector(".pre-loader");

window.addEventListener('load', function(){
  preLoader.style.display = "none";
});


controlBtn.addEventListener("click", function (){
    if(controlBtn.classList.contains("slide")){
        controlBtn.classList.remove("slide");
        backVid.play();
    }else{
        controlBtn.classList.add("slide");
        backVid.pause();
    }
});


