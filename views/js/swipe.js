const sleep = ms => new Promise(r => setTimeout(r, ms));


nigga = 1
async function switchPage() {
    newPage = document.createElement('div')
    newPage.setAttribute('class', 'page')
    newPage.setAttribute('style', 'animation: slide 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s 1 normal forwards;')
    newPage.style.background = 'red'
    newPage.innerHTML = nigga
    nigga += 1
    document.getElementById('container').appendChild(newPage)

    document.getElementsByClassName('page')[0].setAttribute('style', 'animation: slide 0.5s cubic-bezier(0.76, 0, 0.24, 1) 0s 1 normal forwards;')
    document.getElementsByClassName('page')[0].style.background = 'red'

    await sleep(500)
    document.getElementsByClassName('page')[0].remove()
    
}