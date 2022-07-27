const sleep = ms => new Promise(r => setTimeout(r, ms));


/////////////////////
// EVENT LISTENERS //
/////////////////////
window.onload = (event) => {
    console.log('niggaa')
    document.getElementById('switchbtn').addEventListener('click', function(){switchPage(false)})
    document.getElementById('setbtn').addEventListener('click', updateSetCounter)

}



pageCount = 0
setCount = 1
swiping = false
async function switchPage(mode) {
    if (swiping == true) {return}
    //disable swiping while swiping
    swiping = true
    
    //create new page
    newPage = document.createElement('div')
    newPage.setAttribute('class', 'page')
    newPage.setAttribute('style', 'animation: slide 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s 1 normal forwards;')

    if (mode == false) {
        pageCount += 1
        running = true
        document.getElementById('startbtn').innerHTML = 'END'
        newPage.style.background = "rgb(144,238,144)"
        newPage.innerHTML = '<div class="excercise">EXCERCISE 1</div><div class="timer">00:20</div><div class="set">SET 1</div>'
        document.getElementById('container').appendChild(newPage)
        updateExcerciseCounter(pageCount)
        
    }
    else if (mode == true) {
        pageCount = 0
        newPage.style.background = 'green'
        newPage.innerHTML = '<div class="excercise"></div><div class="timer">START</div><div class="set"></div>'
        document.getElementById('container').appendChild(newPage)
    }
    
    endOfSet = new Date().getTime() + setDuration + 1000
    
    //document.getElementsByClassName('page')[0].setAttribute('style', 'animation: fade 2s cubic-bezier(0.76, 0, 0.24, 1) 0s 1 normal forwards;')
    
    //add click event listener to new page
    document.getElementsByClassName('page')[1].addEventListener("click", updateSetCounter);
    
    //wtf
    if (pageCount > 1) {
        //fadeOldPage()
    }

    //delete old page
    await sleep(500)
    document.getElementsByClassName('page')[0].remove()
    //reenable swiping
    swiping = false

}

async function fadeOldPage() {
    for (let i = 0; i < 40; i++) {
        document.getElementsByClassName('page')[0].style.filter = "brightness(" + (100-i/1.5) + "%)"
        await sleep(5)
    }
}


function updateExcerciseCounter() {
    document.getElementsByClassName('excercise')[1].innerHTML = 'EXCERCISE ' + pageCount
    setCount = 1
}


//??//??//??//??
document.onload = (event) => {
    console.log('page is fully loaded')
}

function updateSetCounter() {
    setCount += 1
    console.log(setCount)
    document.getElementsByClassName('set')[0].innerHTML = 'SET ' + setCount
    endOfSet = new Date().getTime() + setDuration + 800
}