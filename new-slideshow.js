window.addEventListener('DOMContentLoaded', function(){
var containerEm = document.getElementById("slajdshow");
var imgEm = document.getElementById("slajdimg");
var overlay = document.getElementById("slajdoverlay");
var slideIndex = 0;
var slideDescription = document.getElementById("slajddescription");
var slideCircles = document.getElementById("slajdcircles");
var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");
var transitionColor = "brightness(0.6)";


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
    
for (var i = 0; i < slides.length; i++){
    var elem = document.createElement("img");
    var idName = "img" + i.toString() + ".jpg";
    elem.setAttribute("id", idName);
    elem.setAttribute("class", "slideimg fade");
    elem.setAttribute("src", slides[i].src);
    containerEm.appendChild(elem);
}
    
    
rightArrow.addEventListener("click", () => {
    if (slideIndex < slides.length - 1) {
    slideIndex += 1;
    showSlides();
    } else {
    slideIndex = 0;
    showSlides();
    }
});
    
        // always checking if the element is clicked, if so, do alert('hello')
leftArrow.addEventListener("click", () => {
    if (slideIndex > 0) {
    slideIndex -= 1;
    showSlides();
    } else {
    slideIndex = slides.length - 1;
    showSlides();
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

function showSlides(){
    for (var i = 0; i < slides.length; i++){
        document.getElementById("img" + i + ".jpg").style.display = "none"; 
        }
    document.getElementById("img" + slideIndex + ".jpg").style.display = "block";
    slideDescription.innerText = slides[slideIndex].text;
    changeCircles();
}

showSlides();

});    