
window.addEventListener('load', (event) => {
    console.log('dwdwdwwd')
    document.getElementById('startbtn').addEventListener('click', setOrStart)
})

running = false
function setOrStart() {
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





green = [144, 238, 144]
yellow = [255, 210, 76]
red = [255, 73, 70]