window.addEventListener('DOMContentLoaded', function(){
var imgEm = document.getElementById("slajdimg");
var slideIndex = 0;
var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");


slides = [
    {
        src: "img1.jpg"
    },
    {
        src: "img2.jpg"
    },
    {
        src: "img3.jpg"
    }
]    
    
        // always checking if the element is clicked, if so, do alert('hello')
rightArrow.addEventListener("click", () => {
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
    if (slideIndex > 0) {
    slideIndex -= 1;
    changeImg();
    } else {
    slideIndex = slides.length - 1;
    changeImg();
    }
});    
    
    
function changeImg(){
imgEm.src = slides[slideIndex].src;
}
    
changeImg();    
});
            