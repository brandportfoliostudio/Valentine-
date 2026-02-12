const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

noBtn.addEventListener("click",()=>{
  noBtn.style.opacity="0";
  noBtn.style.pointerEvents="none";
  yesBtn.style.transform="scale(1.5)";
});

yesBtn.addEventListener("click",()=>{
  popup.style.display="none";
  mainContent.style.display="block";
  music.play();
});

/* Scroll Animation */

const memories = document.querySelectorAll(".memory");

window.addEventListener("scroll",()=>{
  memories.forEach(mem=>{
    const top = mem.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      mem.classList.add("show");
    }
  });
});
