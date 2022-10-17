window.addEventListener('load', (event) => {
    document.getElementById('settingsbtn').addEventListener('click', openSettings)
})

settingsVisible = false
function openSettings() {
    if (!settingsVisible) {
        settingsVisible = true
        //
        settingsDiv = document.createElement("div")
        settingsDiv.setAttribute('id', 'settingspanel')
        settingsDiv.innerHTML = '<div class="setting">  <div class="settingtitle">SWITCH DURATION:</div><input id="switchdurmin" placeholder="SEC" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"><input id="switchdursec" placeholder="MIN" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"></div><div class="setting"><div class="settingtitle">SET DURATION:</div><input id="setdurmin" placeholder="SEC" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"><input id="setdursec" placeholder="MIN" oninput="if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength);" type = "number" maxlength = "2"></div>'
        document.getElementById('container').appendChild(settingsDiv)

    }
    else {
        settingsVisible = false
        saveSettings()
        document.getElementById("settingspanel").parentElement.removeChild(settingsDiv)
    }
}

function saveSettings() {
    switchMin = ""
    switchSec = ""
    setMin = ""
    setSec = ""
}