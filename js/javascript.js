let slides=document.getElementsByClassName("slides");
let dot=document.getElementsByClassName("dot")
let currentslide=0;



document.getElementById("next").addEventListener("click",()=>{
changeslide(currentslide+1);
});
document.getElementById("prev").addEventListener("click",()=>{
changeslide(currentslide-1);
});

function changeslide(moveto){
    if(moveto>=slides.length){

     moveto=0;
    }
    if(moveto<0){
       
        moveto=slides.length-1;
    }
    slides[currentslide].classList.toggle("active");
    dot[currentslide].classList.toggle("activedot");
    slides[moveto].classList.toggle("active");
    dot[moveto].classList.toggle("activedot");
    currentslide=moveto;
}

//    change by dot
document.querySelectorAll(".dot").forEach((bullet,bulletindex)=>{
    bullet.addEventListener("click",()=>{
        if(currentslide !== bulletindex){
            changeslide(bulletindex);
        }
    });
});

// autoslide
window.onload=setInterval(function(){
    changeslide(currentslide+1)
},3000);

