const btns = document.querySelectorAll(".tab-btn");

const main = document.querySelector("main");

main.addEventListener("click", function(e){
  btns.forEach(function(btn){
    if(e.target==btn){
      btn.classList.add("active");
    }
  });
  const cls = e.target.dataset.class;
});