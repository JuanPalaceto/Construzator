var splide = new Splide(".splide", {
  // type   : 'loop',
  gap: "1em",
  padding: "4em",
  pagination: (boolean = false), //Quita los puntos de abajo del slide
  perPage: 3,
  perMove: 3,
  theme: "skyblue",
  classes: {
    arrows: "splide__arrows flechas-splide",
  },
  breakpoints: {
    991: {
      perPage: 2,
      perMove: 2,
    },

    767: {
      autoplay: true,
      interval: 8000,
      perPage: 1,
      perMove: 1,
      padding: "0.5em",
      rewind: true,
      rewindByDrag: true,
    },
  },
});

splide.mount();
