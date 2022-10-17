window.addEventListener('load', (event) => {
    document.getElementById('settingsbtn').addEventListener('click', openSettings)
})

settingsVisible = false
function openSettings() {
    if (!settingsVisible) {
        settingsVisible = true
        //
        /*
        settingsDiv = document.createElement("div")
        settingsDiv.setAttribute('id', 'settingspanel')
        settingsDiv.innerHTML = '<div class="setting">  <div class="settingtitle">SWITCH DURATION:</div><input id="switchdurmin" placeholder="SEC" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"><input id="switchdursec" placeholder="MIN" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"></div><div class="setting"><div class="settingtitle">SET DURATION:</div><input id="setdurmin" placeholder="SEC" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"><input id="setdursec" placeholder="MIN" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"></div>'
        document.getElementById('container').appendChild(settingsDiv)
        */
       document.getElementById("settingspanel").style.visibility = "visible"
    }
    else {
        settingsVisible = false
        saveSettings()
        //document.getElementById("settingspanel").parentElement.removeChild(settingsDiv)
       document.getElementById("settingspanel").style.visibility = "hidden"
    }
}

function saveSettings() {
    switchMin = document.getElementById("switchdurmin").value
    switchMin = document.getElementById("switchdursec").value
    setMin = document.getElementById("setdurmin").value
    setSec = document.getElementById("setdursec").value

    console.log(switchMin)
}