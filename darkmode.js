const toggleSwitch = document.getElementById("darkmodeSwitch");

var theme = localStorage.getItem('data-theme');    
    
   if(theme=='light'){
    toggleSwitch.innerText = "Tmavý režim";
     document.documentElement.setAttribute('data-theme', 'light');
   }else if(theme==''){
     toggleSwitch.innerText = "Světlý režim";       
     document.documentElement.setAttribute('data-theme', 'dark');
   }else if(theme=='dark'){
     toggleSwitch.innerText = "Světlý režim";       
     document.documentElement.setAttribute('data-theme' , 'dark');
   }
 



toggleSwitch.onclick = function() {    
    if (toggleSwitch.innerText == "Světlý režim") { //Přepni do světlého režimu
        toggleSwitch.innerText = "Tmavý režim";        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');          
    }
    else { //Přepni do tmavého režimu
        toggleSwitch.innerText = "Světlý režim";
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');              
    }    
