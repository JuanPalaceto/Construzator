var swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        //pauseOnMouseEnter: true,
    },
    slidesPerView: 5,
    direction: getDirection(),
    allowTouchMove: false,
    spaceBetween: 20,    
    rewind: true,
    breakpoints: {
        768: {
            slidesPerView: "auto",
            allowTouchMove: true,
            // grabCursor: true,
            centeredSlides: true,
            // Lo dejé con slide en la 3 y con rewind en vez de usar loop porque al usar loop y cambiar entre resoluciones se rompe el flujo original y cambia el orden de los slides
            initialSlide: "2",
        }
    },
    navigation: {
        nextEl: '.swiper-button-next', // Clase CSS para el botón de siguiente
        prevEl: '.swiper-button-prev', // Clase CSS para el botón anterior
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 767 ? 'vertical' : 'horizontal';

    return direction;
};