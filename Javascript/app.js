let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for(var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && event.target === document.body) {
    event.preventDefault();
  }
});

const botoes = document.querySelectorAll(".toggle-btn");

  botoes.forEach(botao => {
    botao.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection.style.display === "none" || targetSection.style.display === "") {
        targetSection.style.display = "block";
      } else {
        targetSection.style.display = "none";
      }
    });
  });

  const hamburger =  document.querySelector(".hamburger");

  const nav = document.querySelector("#navbar");
  
  hamburger.addEventListener("click", () => nav.classList.toggle("active"));
