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

const memories=document.querySelectorAll('.memory');

window.addEventListener('scroll',()=>{
memories.forEach(mem=>{
const position=mem.getBoundingClientRect().top;
const screen=window.innerHeight;
if(position<screen-100){
mem.classList.add('show');
}
});
});
