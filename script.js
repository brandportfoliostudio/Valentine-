const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

noBtn.addEventListener("click",()=>{
  noBtn.style.display="none";
  yesBtn.style.transform="scale(1.5)";
});

yesBtn.addEventListener("click",()=>{
  popup.style.display="none";
  mainContent.style.display="block";
  music.play();
});

/* Scroll animation */

const containers = document.querySelectorAll(".container");

window.addEventListener("scroll",()=>{
  containers.forEach(container=>{
    const top = container.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      container.classList.add("show");
    }
  });
});
