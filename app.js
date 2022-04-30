const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");
const color=document.querySelector('.color');

btn.addEventListener('click',function(){
    let bagcol=colors[randomcol()];
    document.body.style.backgroundColor=bagcol;
    color.textContent=bagcol;
})

function randomcol(){
    return Math.floor(Math.random()*colors.length);
}