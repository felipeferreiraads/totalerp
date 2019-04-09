import 'waypoints/lib/jquery.waypoints'
import 'jquery.animate-number/jquery.animateNumber'

const benefits = $('.benefits li').waypoint(direction => {
    $('.benefits li').css('visibility', 'visible').addClass('animated slideInRight')
}, {
    offset: '95%'
})

const numbers = $('.stats').waypoint(direction => {
    const cards = document.getElementsByClassName('value-stat')
    const cardsArr =  Array.from(cards)
    cardsArr.forEach(e => {
        const number = e.getAttribute('value')
        console.log(number)
        $(e).animateNumber({ number }, 800)
    })
    
}, {
    offset: '80%'
})