let currentPage = 0;
const pages = document.querySelectorAll(".page");

function openBook(){
document.getElementById("intro").style.display="none";
document.getElementById("book").style.display="block";
document.querySelector(".controls").style.display="block";
showPage();
}

function showPage(){
pages.forEach((page,index)=>{
if(index === currentPage){
page.style.transform="rotateY(0deg)";
page.style.zIndex=10;
}else if(index < currentPage){
page.style.transform="rotateY(-180deg)";
page.style.zIndex=5;
}else{
page.style.transform="rotateY(0deg)";
page.style.zIndex=1;
}
});
}

function nextPage(){
if(currentPage < pages.length-1){
currentPage++;
showPage();
}
}

function prevPage(){
if(currentPage > 0){
currentPage--;
showPage();
}
}
