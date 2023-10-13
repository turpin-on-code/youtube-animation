const imgEle = document.querySelector('.image-container img')
const imgContainer = document.querySelector('.image-container')
const h1Ele = document.querySelector('.wrapper h1')

window.onload = function() {
    imgEle.classList.add('rotate-logo')
    h1Ele.classList.add('slide-text')
}

setTimeout(function() {
    h1Ele.classList.add('slide-more')
    imgContainer.classList.add('slide-img-container')
}, 4500)



