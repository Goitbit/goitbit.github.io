window.onload = function(){
var logoId = document.getElementById("logo");
    
setInterval(function(){
if (logoId.innerText == "Matěj Goitka|"){
    logoId.innerText = "Matěj Goitka⠀";
} else {
    logoId.innerText = "Matěj Goitka|";
}
}, 450)    
    
}
