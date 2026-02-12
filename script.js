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

/* Scroll Reveal */

const memories = document.querySelectorAll(".memory");

window.addEventListener("scroll",()=>{
  memories.forEach(mem=>{
    const top = mem.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      mem.classList.add("show");
    }
  });
});

/* Typewriter Letter */

const text = `It was just a random app .. befriend.. it was 1st of December 2025 ..
one random right swipe a random profile it felt like something but i didn't know what it was..
but then she accepted my request and we started talking and then each day i started feeling something..
each day sharing snaps chats and random voice notes ..
and also we became comfortable so quick like hume pata bhi nhi chala how it happened
then on Friday, 5th of dec i just thought of telling her i feel something..
but i jst avoided it and thought for 2 days that I'm sure or not ..
or it's jst some sort of attraction..
but it was not jst attraction..
it was something more than love more than what words can't explain..
but i jst gathered the guts of confessing my feelings to her..
and i thought now I'm gone.. khel khatam ..
but idk how but she felt the same
we shared our insta and from there we can say december theory is real..
jst a random hii turned into a lifetime bond..`;

let i = 0;
function typeWriter(){
  if(i < text.length){
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 25);
  }
}

yesBtn.addEventListener("click",()=>{
  setTimeout(typeWriter,1000);
});
