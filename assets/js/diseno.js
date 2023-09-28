// APRENDE CON NOSOTROS
const Player = videojs("my-video", {
    "controls": true,
    // controlBar: {
    //     pictureInPictureToggle: false,
    // },
    "preload": "none",
    //"poster": "http://vjs.zencdn.net/v/oceans.png",
    "fluid": true,
    "language": "es",
    // sources: [
    //     { src: 'https://www.youtube.com/watch?v=Wikz02b3mqY', type: 'video/youtube'},
    //     // { src: '/assets/img/344124035_1412613889542260_6276821794803856151_n.mp4', type: 'video/mp4'},
    // ],
    "youtube": {
        "ytControls": 2,
    }
});

Player.controlBar.hide();

Player.playlist([
    {
        name: 'Evita estos errores',
        description: 'Desc de prueba',
        duration: 353,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=uEWM7oGaZ4w',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                // srcset: '../assets/img/bg/bg-navbar.jpg',
                src: 'https://img.youtube.com/vi/uEWM7oGaZ4w/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            // {
            //     src: '../assets/img/bg/bg-servicio-diseno.jpg'
            // }
        ],
        // poster: 'https://img.youtube.com/vi/Wikz02b3mqY/maxresdefault.jpg'
    },
    {
        name: 'No gastes de más',
        description: 'Desc de prueba',
        duration: 171,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=Wikz02b3mqY',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                // srcset: '../assets/img/bg/bg-navbar.jpg',
                src: 'https://img.youtube.com/vi/Wikz02b3mqY/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            // {
            //     src: '../assets/img/bg/bg-servicio-diseno.jpg'
            // }
        ],
        // poster: 'https://img.youtube.com/vi/Wikz02b3mqY/maxresdefault.jpg'
    },
    {
        name: 'Ahorra en tu cimentación',
        description: 'Desc de prueba',
        duration: 165,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=TKo8igacFUY',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/TKo8igacFUY/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            // {
            //     src: '../assets/img/bg/bg-servicio-diseno.jpg'
            // }
        ],
        // poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    },
    {
        name: 'Tipos de cimentación',
        description: 'Desc de prueba',
        duration: 147,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=G6HXi5g0ip4',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/G6HXi5g0ip4/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
            // {
            //     src: '../assets/img/bg/bg-servicio-diseno.jpg'
            // }
        ],
        // poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    }
]);

// Initialize the playlist-ui plugin with no option (i.e. the defaults).
Player.playlistUi();

// Iniciarlo en horizontal
// Player.playlistUi({horizontal: true});
// Play through the playlist automatically.
// chance y después
// Player.playlist.autoadvance(0);

// APRENDE CON NOSOTROS
const Player2 = videojs("my-video-2", {
    "controls": true,
    "preload": "none",
    "fluid": true,
    "language": "es",
    "youtube": {
        "ytControls": 2,
    }
});

Player2.controlBar.hide();

Player2.playlist([
    {
        name: 'Casa Trascender',
        description: 'Desc de prueba',
        duration: 46,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=DF7jrgaS7C0',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/DF7jrgaS7C0/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
        ],
    },
    {
        name: 'Casa Sauce',
        description: 'Desc de prueba',
        duration: 54,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=aYZSrdKXBKQ',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/aYZSrdKXBKQ/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
        ],
    },
    {
        name: 'Casa Los Cisnes',
        description: 'Desc de prueba',
        duration: 51,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=7qVFZNV2dkw',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/7qVFZNV2dkw/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
        ],
    },
    {
        name: 'Casa Libertad',
        description: 'Desc de prueba',
        duration: 115,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=DO6z2pH-mi0',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/DO6z2pH-mi0/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
        ],
    },
    {
        name: 'Casa Los Olivos',
        description: 'Desc de prueba',
        duration: 137,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=4uaqunykS7Y',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/4uaqunykS7Y/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
        ],
    },
    {
        name: 'Casa Cárdenas',
        description: 'Desc de prueba',
        duration: 78,
        sources: [
            {
                src: 'https://www.youtube.com/watch?v=sUZsYWv2mV8',
                type: 'video/youtube'
            }
        ],
        thumbnail: [
            {
                src: 'https://img.youtube.com/vi/sUZsYWv2mV8/maxresdefault.jpg',
                type: 'image/jpeg',
                media: '(min-width: 400px;)'
            },
        ],
    }
]);

Player2.playlistUi();

Player2.playlist.autoadvance(3);

// Add a listener to handle changes in screen width
window.addEventListener("resize", handleResize);

function handleResize() {
    const playlistContainers = document.querySelectorAll(".vjs-playlist");

    playlistContainers.forEach(playlistContainer => {
      if (window.innerWidth <= 767) {
        playlistContainer.classList.remove("vjs-playlist-vertical");
        playlistContainer.classList.add("vjs-playlist-horizontal");
      } else {
        playlistContainer.classList.remove("vjs-playlist-horizontal");
        playlistContainer.classList.add("vjs-playlist-vertical");
      }
    });
  }

// Call the function initially to apply the appropriate class
handleResize();


/*********************** Generador contenido dinámicamente ***********************/
$.ajax({
    type: 'POST',
    url: '../Scripts/galeriaDiseno.php',
    dataType: 'json',
    contentType: 'application/json',
    success: function(res) {
        insertaProyectos(res);

        // El listener hace que cada que se mueva la pantalla se ajuste el height de cada div
        // Este bloque ir en todos los js que usen glithbox !!!! CON DIFERENTES PORCENTAJES DE HEIGHT SEGUN LAS IMGS
        // OJO DEPENDE MUCHO DE LA IMAGEN QUE PONGAN COMO THUMB
        // MUY IMPORTANTE ASÍ QUE NO DEJAR A LA LIGERA ESO
        window.addEventListener('resize', () => {
            const container = document.querySelectorAll('.gallery-item-container');
            container.forEach(element => {
                const width = element.offsetWidth;

                // Calcular el height (el porcentaje lo saqué de hacerlo manualmente)
                const height = (width * 56.25) / 100;

                // Se coloca el height adecuado
                element.style.height = `${height}px`;
            });
        });

        // Ejecuta el evento al comenzar
        window.dispatchEvent(new Event('resize'));
    },
    error: function(xhr, status, error) {
        console.error('AJAX request failed:', status, error);
    }
});

const insertaProyectos = (proyectos) => {
    const contenido = document.getElementById("contenido-proyectos");

    proyectos.forEach(proyecto => {
        const galleryItemContainer = document.createElement("div");
        galleryItemContainer.classList.add("gallery-item-container");

        const img = document.createElement("img");
        img.src = proyecto.src;
        img.alt = proyecto.nombre;

        galleryItemContainer.appendChild(img);

        const galleryItemInfo = document.createElement("div");
        galleryItemInfo.classList.add("gallery-item-info");

        const h4 = document.createElement("h4");
        h4.textContent = proyecto.nombre;

        const a = document.createElement("a");
        a.id = proyecto.id;
        a.classList.add("glightbox4", "boton-modal", "btn-lightbox");
        a.textContent = "Ver más";
        a.addEventListener('click', event => {
            handleButtonClick(event, proyecto.id);
        });

        galleryItemInfo.appendChild(h4);
        galleryItemInfo.appendChild(a);

        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-4", "col-sm-6", "col-12", "hover-gallery", "d-flex", "flex-column", "justify-content-end");
        colDiv.appendChild(galleryItemContainer);
        colDiv.appendChild(galleryItemInfo);

        contenido.appendChild(colDiv);
    });
}

/*********************** GLIGHTBOX ***********************/
/* Contenido de lightbox */
// Función genérica para manejar el clic en cualquier botón
const handleButtonClick = (event, idProyecto) => {
    const obj = {
        idProyecto: idProyecto,
    }

    $.ajax({
        type: 'POST',
        url: '../Scripts/generaGaleria.php',
        data: JSON.stringify(obj),
        dataType: 'json',
        contentType: 'application/json',
        success: function(res) {
            creaGLightBox(res);
        },
        error: function(xhr, status, error) {
            console.error('AJAX request failed:', status, error);
        }
    });
}

const creaGLightBox = (datos) => {
    const modal = document.createElement("div");
    modal.classList.add("gallery-modal");

    // Crear la estructura de la galería, los array
    // Primero crear el banner
    const galleryItemBanner = document.createElement("div");
    galleryItemBanner.classList.add("gallery-item-banner");
    galleryItemBanner.style.backgroundImage = `url("${datos.src}")`;

    const img = document.createElement("img");
    img.classList.add("gallery-item-banner-img");
    img.src = datos.src;
    img.alt = datos.nombre;

    galleryItemBanner.appendChild(img);

    // Esto es para el titulo del proyecto, descripción y la galería del mismo
    const galleryItemInfo = document.createElement("div");
    galleryItemInfo.classList.add("gallery-item-info");

    const title = document.createElement("h2");
    title.classList.add("pb-4");
    title.textContent = datos.nombre + ' - Galería';

    const galleryItemsRow = document.createElement("div");
    galleryItemsRow.classList.add("row", "gy-3");

    // Esto es para generar la galería interna
    let contador = 1;
    datos.urls.forEach(item => {
        const galleryItemsCol = document.createElement("div");
        galleryItemsCol.classList.add("col-sm-6", "col-md-4", "col-12", "d-flex", "flex-column", "justify-content-end");

        const anchor = document.createElement("a");
        anchor.id = `${datos.nombre}-${contador}`;
        anchor.classList.add("glightbox5");

        const imgs = document.createElement("img");
        imgs.src = item;
        imgs.alt = `${datos.nombre}-${contador}`;

        anchor.appendChild(imgs)
        galleryItemsCol.appendChild(anchor);
        galleryItemsRow.appendChild(galleryItemsCol);

        // IIFE - Immediately Invoked Function Expression) -> Se llaman así porque se invocan inmediatamente después de crearse.
        anchor.addEventListener('click', (function(contador) { // En vez de añadir la acción directamente, se crea una función anónima la cual retorna otra función anónima, que será finalmente la que irá al listener. Esta función recibe de parametro el contador y lo "aisla" dentro de esta misma función.
            return function(event) { // Esta función retornada es la que finalmente se vinculará al listener de cada anchor, en este caso, imagenes.
                instancia.goToSlide(contador); // Esto es del lightbox.
            };
        })(contador)); // Se invoca la función inmediatamente, es decir que se crea el listener con la función que creé. Esta es única y por eso contador mantiene su valor actual

        contador++;
    });

    galleryItemInfo.appendChild(title);
    // galleryItemInfo.appendChild(galeriaTitle);
    galleryItemInfo.appendChild(galleryItemsRow);

    // Pegar ambos elementos al 'modal'
    modal.appendChild(galleryItemBanner);
    modal.appendChild(galleryItemInfo);

    const instancia = gLightBox(datos, modal);

    instancia.open();
}

/* CONFIGURACIONES DE GLIGHTBOX */
// Esta parte es la del lightbox realmente
const gLightBox = (obj, contenido) => {
    contadorLightbox = 0;
    const lightbox = GLightbox({
        elements: [
            {
                'content': contenido
            },
            ...obj.urls.map(url => ({
                'href': url,
                'type': 'image',
                'alt': `${obj.nombre}-${contadorLightbox++}`
            }))
        ],
        preload: false,
    });

    // Destruye el 'modal' al cerrarse'
    lightbox.on('close', () => {
        lightbox.destroy();
    });

    return lightbox;
}
