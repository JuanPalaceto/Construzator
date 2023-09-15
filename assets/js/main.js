/**
* Template Name: Dewi
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/dewi-free-multi-purpose-html-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
        document.getElementById('navInicio').classList.remove('active');
      } else {
        navbarlink.classList.remove('active')
        document.getElementById('navInicio').classList.add('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 50) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  // let backtotop = select('.back-to-top')
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add('active')
  //     } else {
  //       backtotop.classList.remove('active')
  //     }
  //   }
  //   window.addEventListener('load', toggleBacktotop)
  //   onscroll(document, toggleBacktotop)
  // }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')

    const body = document.querySelector('body');
    body.classList.toggle('no-scroll');
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Dropdown icono
   */
  on('click', '.drop-mobile', function(e) {
    if (window.innerWidth <= 991) {
      select('.bi-chevron-down').classList.toggle('chevron-up-drop-mobile');
    }
  });


  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  // Inicia todos los tooltip de una
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

// Para el botón de whatsapp
// var wppDeskElement = document.querySelector('.sticky-wpp-desk');
// var afterSectionElement = document.querySelector('.after-section');

// wppDeskElement.addEventListener('click', function(event) {
//   window.open(
//     "https://wa.me/528341890501",
//     "_blank"
//   );
// });

// afterSectionElement.addEventListener('click', function(event) {
//   event.stopPropagation();
//   return false;
// });

/* Formulario Contacto */
const btnCorreo = document.getElementById("btnEnviarCorreo");
btnCorreo.addEventListener("click", (e) => {
  e.preventDefault();
  enviaCorreo();
});

// función para validar
const validarDatosCorreo = () => {
  const regexCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

  const campos = [
    {
      elemento: document.getElementById("name"),
      valor: document.getElementById("name").value,
      mensaje: "El nombre es demasiado corto",
      tipo: 1,
      valido: function() {
        return this.valor.length >= 2;
      },
    },
    {
      elemento: document.getElementById("email"),
      valor: document.getElementById("email").value,
      mensaje: "Por favor introduce un correo electrónico válido",
      tipo: 1,
      valido: function() {
        return regexCorreo.test(this.valor);
      },
    },
    {
      elemento: document.getElementById("subject"),
      valor: document.getElementById("subject").value,
      mensaje: "El asunto es demasiado corto",
      tipo: 1,
      valido: function() {
        return this.valor.length >= 5;
      },
    },
    {
      elemento: document.getElementById("message"),
      valor: document.getElementById("message").value,
      mensaje: "El mensaje es demasiado corto",
      tipo: 1,
      valido: function() {
        return this.valor.length >= 10;
      },
    },
  ]
  
  for (let i = 0; i < campos.length; i++) {
    if (!campos[i].valido()) {
      campos[i].elemento.focus();
      alertaCorreo.generaAlerta(campos[i].mensaje, campos[i].tipo);
      return;
    }
  }

  return campos;
}

// función para enviar el correo
const enviaCorreo = () => {
  const datos = validarDatosCorreo();

  // valida que recibiera un array de objetos
  if (datos !== undefined) {
    llamadaAjax(datos);
  } else {
    return;
  }
}

const llamadaAjax = (array) => {
  const obj = {
    nombre: array[0].valor,
    correo: array[1].valor,
    asunto: array[2].valor,
    mensaje: array[3].valor,
  }

  $.ajax({
    type: 'POST',
    url: '/Scripts/correo.php',
    data: JSON.stringify(obj),
    contentType: 'application/json',
    success: function(res) {
      if (parseInt(res) === 1) {
        let alerta = "¡Mensaje enviado correctamente, gracias! Nos pondremos en contacto con usted a la brevedad.";
        alertaCorreo.generaAlerta(alerta, 3);
        // resetea los campos
        for(let i = 0; i < array.length; i++){
          array[i].elemento.value = '';
        }
      } else {
        let alerta = "Ocurrió un error al enviar su mensaje, si el problema persiste por favor inténtelo más tarde, o póngase en contacto con nosotros a través de WhatsApp.";
        alertaCorreo.generaAlerta(alerta, 2);
      }
    },
    error: function(res) {
      let alerta = "Ocurrió un error de nuestra parte, si el problema persiste por favor inténtelo más tarde, o póngase en contacto con nosotros a través de WhatsApp.";
      alertaCorreo.generaAlerta(alerta, 2);
    }
  });
}

// Objeto alerta
const alertaCorreo = {
  contenedorPadre: document.getElementById('confirmacionCorreo'),
  contenido: '',
  generaAlerta: function(alerta, tipo){
    this.eliminaAlerta();
    this.contenido = alerta;
    if (!this.contenedorPadre.firstChild) {
      const divAlerta = document.createElement('div');
      divAlerta.classList.add('alert', 'd-flex', 'align-items-center');
      divAlerta.setAttribute('role', 'alert');

      const icono = document.createElement('i');
      icono.classList.add('bi', 'me-2');

      const divContenido = document.createElement('div');
      divContenido.textContent = `${this.contenido}`;

      // Error en los campos
      if (tipo === 1) {
        divAlerta.classList.add('alert-warning');
        icono.classList.add('bi-exclamation-triangle-fill');
      // Error en el Ajax
      } else if (tipo === 2){
        divAlerta.classList.add('alert-danger');
        icono.classList.add('bi-x-circle-fill');
      // Mensaje enviado correctamente
      } else {
        divAlerta.classList.add('alert-success', 'alert-dismissible', 'fade', 'show');
        icono.classList.add('bi-check-circle-fill');
      }

      divAlerta.appendChild(icono);
      divAlerta.appendChild(divContenido);
      if (tipo === 3) {
        const botonCerrar = document.createElement('a');
        botonCerrar.classList.add('btn-close', 'btn-lightbox');
        botonCerrar.setAttribute('type', 'button');
        botonCerrar.setAttribute('data-bs-dismiss', 'alert');
        botonCerrar.setAttribute('aria-label', 'Close');
        
        divAlerta.appendChild(botonCerrar);
      }
      this.contenedorPadre.appendChild(divAlerta);
    }
  },
  eliminaAlerta: function() {
    this.contenido = '';
    if (this.contenedorPadre.firstChild) {
      this.contenedorPadre.removeChild(this.contenedorPadre.firstChild);
    }
  }
}

// botón de contacto de whatsapp
// Esto está fallando porque no en todas las pantallas está ese botón
// Es el de contacto del banner en los servicios
// Posiblemente todo lo que esté debajo de el falle
// Por el momento dejarlo hasta el ultimo SIMEPRE !!!
const boton_whatsapp = document.getElementById("btn-contacto");
boton_whatsapp.onclick = function() {
  window.open("https://wa.me/528341890501", "_blank");
};



