window.addEventListener('DOMContentLoaded', function(){
var imgEm = document.getElementById("slajdimg");
var overlay = document.getElementById("slajdoverlay");
var slideIndex = 0;
var slideDescription = document.getElementById("slajddescription");
var slideCircles = document.getElementById("slajdcircles");
var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");
var transitionColor = "rgb(98 135 145 / 45%)";
    


slides = [
    {
        src: "img1.jpg",
        text: "Západ slunce"
    },
    {
        src: "img2.jpg",
        text: "Kameny a listí"
    },
    {
        src: "img3.jpg",
        text: "Stromy. :-o"
    }
]    
    
slideDescription.innerText = slides[slideIndex].text;
    
    
//Načti obrázky
    
function loadImages(){
for (var i = 0; i < slides.length; i++){
    const img = new Image();   // Create new img element
    img.addEventListener('load', function() {
    return true;
    }, false);
    img.src = slides[i].src; // Set source path
    }
}    
loadImages();
    
    
rightArrow.addEventListener("click", () => {
overlay.style.backgroundColor = transitionColor;  
    if (slideIndex < slides.length - 1) {
    slideIndex += 1;
    changeImg();      
    } else {
    slideIndex = 0;
    changeImg();
    }
});
    
        // always checking if the element is clicked, if so, do alert('hello')
leftArrow.addEventListener("click", () => {
overlay.style.backgroundColor = transitionColor;
    if (slideIndex > 0) {
    slideIndex -= 1;
    changeImg();
    } else {
    slideIndex = slides.length - 1;
    changeImg();
    }
});    
    
    
function changeCircles(){
slideCircles.innerText = "";
for (var i = 0; i < slides.length; i++){
    if (i == slideIndex){
        slideCircles.innerText += "● ";
        } else {
        slideCircles.innerText += "○ ";
        }
    }
}
    
function changeImg(){
imgEm.src = slides[slideIndex].src; 
slideDescription.innerText = slides[slideIndex].text;
changeCircles();
var transition = setTimeout( function() {overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
clearTimeout(transition);                                         }, 1000);
}      
});
            