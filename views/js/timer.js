
window.addEventListener('load', (event) => {
    console.log('dwdwdwwd')
    document.getElementById('startbtn').addEventListener('click', setOrStart)
    document.getElementById('pausebtn').addEventListener('click', pauseOrContinue)
})

running = false
function setOrStart() {
    if (!swiping) {
        if (!running) {
            running = true
            document.getElementById('startbtn').innerHTML = 'END'
        }
        else if (running) {
            running = false
            paused = false
            document.getElementById('startbtn').innerHTML = 'START'
            document.getElementById('pausebtn').style.filter = "brightness(" + (50) + "%)"
            document.getElementById('pausebtn').innerHTML = 'PAUSE'
        }
        switchPage(!running)
    }
}

paused = false
remainingSetTime = 0
function pauseOrContinue() {
    if (!paused) { // PAUSE
        paused = true
        document.getElementById('pausebtn').innerHTML = 'CONTINUE'
        remainingSetTime = endOfSet - currentTime
    }
    else { // CONTINUE
        paused = false
        document.getElementById('pausebtn').innerHTML = 'PAUSE'
        endOfSet = new Date().getTime() + remainingSetTime
    }
}




///////////////////////////////////////////////
///////////////////////////////////////////////

setDuration = (1000) * 4
warningTime = setDuration/4
refreshInterval = 10
setInterval(function() {
    if (running && !paused) {

        // SET TIME
        currentTime = new Date().getTime()
        setTime = endOfSet - currentTime

        // set minutes and seconds on timer (DONT TOUCH)
        if (setTime >= 0) {
            setMinutes = Math.floor((Math.abs(setTime) % (1000 * 60 * 60)) / (1000 * 60))
            setSeconds = Math.abs(Math.floor((Math.abs(setTime) % (1000 * 60)) / 1000))
        }
        else {
            setMinutes = Math.floor((Math.abs(setTime - 1000) % (1000 * 60 * 60)) / (1000 * 60))
            setSeconds = Math.abs(Math.floor((Math.abs(setTime - 1000) % (1000 * 60)) / 1000))
        }


        //setup for new excercies page
        if (document.getElementsByClassName('timer').length == 1) {
            //continue countdown if new page not present
            if (setTime >= 0) {
                document.getElementsByClassName('timer')[0].innerHTML = pad(setMinutes) + ":" + pad(setSeconds)
            }
            else {
                document.getElementsByClassName('timer')[0].innerHTML = "-" + pad(setMinutes) + ":" + pad(setSeconds) + "&nbsp;"
            }
        }
        else {
            //
            document.getElementsByClassName('timer')[1].innerHTML = pad(Math.floor(((setDuration+500) % (1000 * 60 * 60)) / (1000 * 60)), 2) + ":" + pad(Math.abs(Math.floor(((setDuration+500) % (1000 * 60)) / 1000)), 2)
            
        }
        

        
        // BACKGROUND-COLOR
        if (document.getElementsByClassName('timer').length == 1) {
            if (setTime < 0) {
                //console.log(setTime)
            }
            else if (setTime < warningTime) {
                document.getElementsByClassName('page')[0].style = "background-color: rgb("+
                    Math.round((1-(setTime/warningTime)) * (red[0]-yellow[0])+yellow[0]) + ", " +
                    Math.round((1-(setTime/warningTime)) * (red[1]-yellow[1])+yellow[1]) + ", " +
                    Math.round((1-(setTime/warningTime)) * (red[2]-yellow[2])+yellow[2]) + ");"
            }
            else {
                document.getElementsByClassName('page')[0].style = "background-color: rgb("+
                    Math.round((1-((setTime-warningTime)/(setDuration-warningTime))) * (yellow[0]-green[0])+green[0]) + ", " +
                    Math.round((1-((setTime-warningTime)/(setDuration-warningTime))) * (yellow[1]-green[1])+green[1]) + ", " +
                    Math.round((1-((setTime-warningTime)/(setDuration-warningTime))) * (yellow[2]-green[2])+green[2]) + ");"
            }
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