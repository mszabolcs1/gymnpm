window.addEventListener('load', (event) => {
    document.getElementById('settingsbtn').addEventListener('click', openSettings)

    readDurations()
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
        //document.getElementById("settingspanel").parentElement.removeChild(settingsDiv)
       document.getElementById("settingspanel").style.visibility = "hidden"
    }
}

function readDurations() {
    document.getElementById("switchdurmin").value = Math.floor((switchDuration - (switchDuration % (1000 * 60))) / 60000)
    document.getElementById("switchdursec").value = Math.floor(switchDuration % (1000 * 60) / 1000)
    document.getElementById("setdurmin").value = Math.floor((setDuration - (setDuration % (1000 * 60))) / 60000)
    document.getElementById("setdursec").value = Math.floor(setDuration % (1000 * 60) / 1000)
}


function saveSettings() {
    if (document.getElementById("switchdurmin").value == "") switchMin = 0
    else switchMin = document.getElementById("switchdurmin").value
    if (document.getElementById("switchdursec").value == "") switchSec = 0
    else switchSec = document.getElementById("switchdursec").value
    if (document.getElementById("setdurmin").value == "") setMin = 0
    else setMin = document.getElementById("setdurmin").value
    if (document.getElementById("setdursec").value == "") setSec = 0
    else setSec = document.getElementById("setdursec").value

    console.log("switchDuration set to: " + (parseInt(60*switchMin)+parseInt(switchSec))*1000)
    console.log("setDuration set to: " + (parseInt(60*setMin)+parseInt(setSec))*1000)

    switchDuration = (parseInt(60*switchMin)+parseInt(switchSec))*1000
    setDuration = (parseInt(60*setMin)+parseInt(setSec))*1000
    
    readDurations()
}