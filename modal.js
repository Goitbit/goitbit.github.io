var imgEm = document.getElementById("trymodal");
var modalEm = document.getElementById("modalthing");
var modalCross = document.getElementById("modalcross");
var modImg;
var leftArrow = document.getElementById("leftarrow");
var rightArrow = document.getElementById("rightarrow");

var imgsArray = document.getElementsByClassName("trymodal");
var modalIndex = 0;

//Přidej do pole větší verze obrázků
for (var i = 0; i < imgsArray.length; i++){
    imgsArray[i].newSrc = imgsArray[i].src.replace("-mini", "");
}

function openModal(x){
//modalImg.style.animationName = "zoom";    
modalIndex = x;
modalEm.style.display = "block";
showModal();
}





modalCross.onclick = function(){
//modImg.remove();
modalEm.style.display = "none";
};

// SLIDESHOW KÓD

for (var i = 0; i < imgsArray.length; i++){
    var elem = document.createElement("img");
    var idName = "img" + i.toString() + ".jpg";
    elem.setAttribute("id", idName);
    elem.setAttribute("class", "modalimg modalfade");
    elem.setAttribute("src", imgsArray[i].newSrc);
    if (i == modalIndex){ elem.style.display = "block";} else {
        elem.style.display = "hide";
    } 
    modalEm.appendChild(elem);
}
    
    
rightArrow.addEventListener("click", () => {
    if (modalIndex < imgsArray.length - 1) {
    modalIndex += 1;
    showModal();
    } else {
    modalIndex = 0;
    showModal();
    }
});
    
        // always checking if the element is clicked, if so, do alert('hello')
leftArrow.addEventListener("click", () => {
    if (modalIndex > 0) {
    modalIndex -= 1;
    showModal();
    } else {
    modalIndex = imgsArray.length - 1;
    showModal();
    }
});  
    
function showModal(){
    for (var i = 0; i < imgsArray.length; i++){
        document.getElementById("img" + i + ".jpg").style.display = "none"; 
        }
    document.getElementById("img" + modalIndex + ".jpg").style.display = "block";
}

showModal();   


