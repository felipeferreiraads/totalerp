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
        $(e).animateNumber({ number }, 800)
    })
    
}, {
    offset: '80%'
})

$(window).scroll(() => {
    if($(window).scrollTop() > 0) {
        if(!$('header').hasClass('scrolled')) {
            $('header .logo img').attr('src', 'assets/img/logo-blue.svg')
            
            $('header').animate({
                height: 70
            }, 200).css({
                background: '#fff',
                boxShadow: '0 0 3px rgba(0,0,0,0.2)'
            }).addClass('scrolled')

            $('.open-menu').css('color', '#1a293f')
        }
    } else {
        if($('header').hasClass('scrolled')) {
            $('header .logo img').attr('src', 'assets/img/logo.svg')

            $('header').animate({
                height: 100
            }, 200).css({
                background: 'transparent',
                boxShadow: 'none'
            }).removeClass('scrolled')

            $('.open-menu').css('color', '#fff')
        }
    }
})