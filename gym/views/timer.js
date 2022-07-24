window.addEventListener('load', (event) => {
    document.getElementById('startbtn').addEventListener('click', startSession)
    document.getElementById('pausebtn').addEventListener('click', pauseSession)
    document.getElementById('timer').addEventListener('click', timerClicked)
    document.getElementById('switchbtn').addEventListener('click', switchE)
    document.getElementById('settingsbtn').addEventListener('click', function(){location.replace('settings.html')})
    document.getElementById('setbtn').addEventListener('click', newSet)
})
running = false
paused = false
setNo = -1

switchDur = 300000
setDur = 120000
warningTime = setDur/4

function timerClicked() {
    console.log('timer clicked')
    if (running == false) {
        startSession()
    }
    if (paused == false) {
        newSet()
        console.log('new set')
    }
}


sessionStart = ''
function startSession() {
    if (running == false) {
        running = true
        paused = false
        document.getElementById('startbtn').innerHTML = 'END'
        sessionStart = new Date().getTime();
        newSet()
        console.log('session started')
    }
    else {
        running = false
        paused = false
        setNo = -1
        document.getElementById('startbtn').innerHTML = 'START'
        document.getElementById('timer').innerHTML = 'START'
        document.getElementById('pausebtn').innerHTML = 'PAUSE'
        document.getElementById("totaltime").innerHTML = '00:00:00'
        document.getElementById('sets').innerHTML = ''
        document.getElementById('timer').style = "background-color: lightgreen;"
        console.log('session ended')
    }
}
function pauseSession() {
    if (running == true) {
        if (paused == false) {
            paused = true
            document.getElementById('pausebtn').innerHTML = 'CONTINUE'
            console.log('session paused')
        }
        else {
            paused = false
            document.getElementById('pausebtn').innerHTML = 'PAUSE'
            console.log('session continued')
        }
    }
}


function switchE() {
    if (running == true && paused == false) {
        setStart = new Date().getTime() + switchDur
        setNo = 1
        setSet(1)
    }
}

setStart = ''

function newSet() {
    if (running == true && paused == false) {
        setStart = new Date().getTime() + setDur
        setNo += 1
        setSet(setNo)
    }
}
function setSet(no) {
    if (running == true) {
        document.getElementById('sets').innerHTML = 'SET ' + no
    }
}

refreshInterval = 100
setInterval(function() {
    if (running == true) {

        // SET TIME
        nowSet = new Date().getTime()
        setTime = setStart - nowSet
        if (paused == false) {
            setMinutes = Math.floor((setTime % (1000 * 60 * 60)) / (1000 * 60)), 2
            setSeconds = Math.abs(Math.floor((setTime % (1000 * 60)) / 1000)), 2

            if (setTime > 0) {document.getElementById('timer').innerHTML = pad(setMinutes) + ":" + pad(setSeconds)}
            else {document.getElementById('timer').innerHTML = "-" + pad(Math.abs(setMinutes) - 1) + ":" + pad(setSeconds)}
        }
        else {
            setStart += refreshInterval
        }

        // TOTAL TIME
        nowTotal = new Date().getTime();
        totalTime = nowTotal - sessionStart
        totalHours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        totalMinutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
        totalSeconds = Math.floor((totalTime % (1000 * 60)) / 1000);
        document.getElementById("totaltime").innerHTML = pad(totalHours) + ':' + pad(totalMinutes) + ':' + pad(totalSeconds)
        
        
        // BACKGROUND-COLOR
        if (setTime < 0) {
            //console.log(setTime)
        }
        else if (setTime < warningTime) {
            document.getElementById('timer').style = "background-color: rgb("+
                Math.round((1-(setTime/warningTime)) * (red[0]-yellow[0])+yellow[0]) + ", " +
                Math.round((1-(setTime/warningTime)) * (red[1]-yellow[1])+yellow[1]) + ", " +
                Math.round((1-(setTime/warningTime)) * (red[2]-yellow[2])+yellow[2]) + 
            ");"
        }
        else {
            document.getElementById('timer').style = "background-color: rgb("+
                Math.round((1-((setTime-warningTime)/(setDur-warningTime))) * (yellow[0]-green[0])+green[0]) + ", " +
                Math.round((1-((setTime-warningTime)/(setDur-warningTime))) * (yellow[1]-green[1])+green[1]) + ", " +
                Math.round((1-((setTime-warningTime)/(setDur-warningTime))) * (yellow[2]-green[2])+green[2]) + 
            ");"
        }


        
    }
}, refreshInterval)


green = [144, 238, 144]
yellow = [255, 210, 76]
red = [255, 73, 70]

function pad(num) {
    var s = "000000000" + num;
    return s.substr(s.length - 2);
}