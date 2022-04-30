const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn=document.getElementById("btn");
const color=document.querySelector('.color');

btn.addEventListener("click",function(){
    hexval='#';
    for(i=0;i<6;i++){
        hexval+=hex[randomval()];
    }
    document.body.style.backgroundColor=hexval;
    color.textContent=hexval;
})

function randomval(){
    return Math.floor(Math.random()*hex.length);
}