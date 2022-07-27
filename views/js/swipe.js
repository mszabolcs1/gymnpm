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
        newPage.style.background = 'red'
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
    
    
    //document.getElementsByClassName('page')[0].setAttribute('style', 'animation: fade 2s cubic-bezier(0.76, 0, 0.24, 1) 0s 1 normal forwards;')
    

    document.getElementsByClassName('page')[1].addEventListener("click", updateSetCounter);
    

    fadeOldPage()

    //delete old page
    await sleep(500)
    document.getElementsByClassName('page')[0].remove()


    swiping = false

}
async function fadeOldPage() {
    for (let i = 0; i < 40; i++) {
        console.log('fade')
        document.getElementsByClassName('page')[0].style.filter = "grayscale(" + i + "%)"
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
}