
window.addEventListener('load', (event) => {
    console.log('dwdwdwwd')
    document.getElementById('startbtn').addEventListener('click', setOrStart)
})

running = false
function setOrStart() {
    if (swiping == false) {
        if (running == false) {
            running = true
            document.getElementById('startbtn').innerHTML = 'END'
            switchPage(false)
        }
        else if (running == true) {
            running = false
            document.getElementById('startbtn').innerHTML = 'START'
            switchPage(true)
        }
    }
}




///////////////////////////////////////////////
///////////////////////////////////////////////

setDuration = 12000
warningTime = setDuration/4
refreshInterval = 100
setInterval(function() {
    if (running == true) {

        // SET TIME
        currentTime = new Date().getTime()
        setTime = endOfSet - currentTime

        setMinutes = Math.floor((setTime % (1000 * 60 * 60)) / (1000 * 60)), 2
        setSeconds = Math.abs(Math.floor((setTime % (1000 * 60)) / 1000)), 2

        if (document.getElementsByClassName('timer').length == 1) {
            //continue countdown if new page not present
            document.getElementsByClassName('timer')[0].innerHTML = pad(setMinutes) + ":" + pad(setSeconds)
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
                    Math.round((1-(setTime/warningTime)) * (red[2]-yellow[2])+yellow[2]) + 
                ");"
            }
            else {
                document.getElementsByClassName('page')[0].style = "background-color: rgb("+
                    Math.round((1-((setTime-warningTime)/(setDuration-warningTime))) * (yellow[0]-green[0])+green[0]) + ", " +
                    Math.round((1-((setTime-warningTime)/(setDuration-warningTime))) * (yellow[1]-green[1])+green[1]) + ", " +
                    Math.round((1-((setTime-warningTime)/(setDuration-warningTime))) * (yellow[2]-green[2])+green[2]) + 
                ");"
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