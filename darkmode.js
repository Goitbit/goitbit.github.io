const toggleSwitch = document.getElementById('darkmodeSwitch');

toggleSwitch.onclick = function() {
    if (toggleSwitch.innerText == "Světlý režim") {
        toggleSwitch.innerText = "Tmavý režim";        
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        toggleSwitch.innerText = "Světlý režim";
        document.documentElement.setAttribute('data-theme', 'dark');
    }    
}
