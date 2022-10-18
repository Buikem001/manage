const div1 = document.querySelector('.div1')
const hamburger = document.querySelector('.hamburger')
const hamburgerClose = document.querySelector('.hamburgerClose')

function openNav(){
    div1.style = 'top: 30%'
    hamburger.style = 'display: none'
    hamburgerClose.style = 'display: block'
}


function closeNav(){
    div1.style = 'top: -30%'
    hamburger.style = 'display: block'
    hamburgerClose.style = 'display: none'
}