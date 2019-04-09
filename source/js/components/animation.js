import 'waypoints/lib/jquery.waypoints'

const waypoints = $('.card-service').waypoint(function(direction) {
    $('.card-service').addClass('animate')
}, {
    offset: '100%'
})