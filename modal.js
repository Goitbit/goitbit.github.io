var imgEm = document.getElementById("trymodal");
var modalEm = document.getElementById("modalthing");
var modalCross = document.getElementById("modalcross");
var modImg;
var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");
var modalImg = document.getElementById("modalimg");

var imgsArray = document.getElementsByClassName("trymodal");
var modalIndex;

//Přidej do pole větší verze obrázků
for (var i = 0; i < imgsArray.length; i++){
    imgsArray[i].newSrc = imgsArray[i].src.replace("-mini", "");
}

function openModal(x){
modalImg.style.animationName = "zoom";    
modalIndex = x;
var triggerID = event.target;
modalImg.src = imgsArray[x].newSrc;
modalEm.style.display = "block";
//modImg = document.createElement("img");
//modImg.setAttribute("src", triggerID.src);
//modImg.setAttribute("class", "modalimg");
//modalEm.appendChild(modImg);
}



rightArrow.addEventListener("click", () => {
modalImg.style.animationName = undefined;    
modalImg.setAttribute("class", "modalfade");
modalImg.addEventListener("animationend", function() {modalImg.classList.remove("modalfade");}, false);       
    if (modalIndex != imgsArray.length - 1){
    modalImg.src = imgsArray[modalIndex + 1].newSrc;    
    modalIndex += 1;
    } else {
    modalIndex = 0;
    modalImg.src = imgsArray[modalIndex].newSrc;
    }
});
    
        // always checking if the element is clicked, if so, do alert('hello')
leftArrow.addEventListener("click", () => {
modalImg.style.animationName = undefined;    
modalImg.setAttribute("class", "modalfade");
modalImg.addEventListener("animationend", function() {modalImg.classList.remove("modalfade");}, false);     
    if (modalIndex != 0){
    modalImg.src = imgsArray[modalIndex - 1].newSrc;    
    modalIndex -= 1;    
    } else {    
    modalIndex = imgsArray.length - 1;
    modalImg.src = imgsArray[modalIndex].newSrc;    
    }
});  



modalCross.onclick = function(){
//modImg.remove();
modalEm.style.display = "none";
};

