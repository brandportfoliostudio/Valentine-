window.onload = function(){
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2000);
};

const popup=document.getElementById('popup');
const yesBtn=document.getElementById('yesBtn');
const noBtn=document.getElementById('noBtn');
const content=document.getElementById('mainContent');
const music=document.getElementById('bgMusic');

noBtn.addEventListener('click',()=>{
noBtn.style.display='none';
yesBtn.style.transform='scale(1.3)';
});

yesBtn.addEventListener('click',()=>{
popup.style.display='none';
content.style.opacity='1';
music.play();
});

/* Scroll Reveal */
const memories=document.querySelectorAll('.memory');

window.addEventListener('scroll',()=>{
memories.forEach(mem=>{
const position=mem.getBoundingClientRect().top;
if(position<window.innerHeight-100){
mem.classList.add('show');
}
});
});

/* Cursor Glow */
const cursor=document.getElementById("cursorGlow");
document.addEventListener("mousemove",(e)=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
