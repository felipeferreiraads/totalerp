import 'owl.carousel'

$('.solutions .carousel .items').owlCarousel({
    loop: true,
    responsive: {
        1340: {
            items: 4
        },
        1024:  {
            items: 3
        },
        768:  {
            items: 2
        },
        0: {
            items: 1
        }
    }
})

$('.solutions .prev').click(function () {
    $('.solutions .carousel .items').trigger('prev.owl.carousel', [300])
})

$('.solutions .next').click(function () {
    $('.solutions .carousel .items').trigger('next.owl.carousel')
})