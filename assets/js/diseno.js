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
const proyectos = [
    {
        id:"elemento-1",
        nombre: "Arevalo",
        src: "../assets/img/projects/arevalo/arevalo (2).jpg",
        urls: [
            "../assets/img/projects/arevalo/arevalo (1).jpg",
            "../assets/img/projects/arevalo/arevalo (2).jpg",
            "../assets/img/projects/arevalo/arevalo (6).jpg",
            "../assets/img/projects/arevalo/AREVALO_2 - Foto.jpg",
            "../assets/img/projects/arevalo/AREVALO_5 - Foto.jpg",
            "../assets/img/projects/arevalo/AREVALO_6 - Foto.jpg",
            "../assets/img/projects/arevalo/AREVALO_8 - Foto.jpg",
            "../assets/img/projects/arevalo/AREVALO_9 - Foto.jpg",
            "../assets/img/projects/arevalo/banos_12 - Foto.jpg",
            "../assets/img/projects/arevalo/banos_13 - Foto.jpg",
        ]
    },
    {
        id:"elemento-2",
        nombre: "unnamed",
        src: "../assets/img/projects/casa 23.05.22/1d5a5d14-935f-493a-8e0f-10a5cf040719.jpg",
        urls: [
            "../assets/img/projects/casa 23.05.22/1d5a5d14-935f-493a-8e0f-10a5cf040719.jpg",
            "../assets/img/projects/casa 23.05.22/2a8c1e23-dbe4-4ed2-be7a-3733d64478fe.jpg",
            "../assets/img/projects/casa 23.05.22/4e3da50b-4a10-44e7-a821-f3180a632b7b.jpg",
            "../assets/img/projects/casa 23.05.22/8b4b9cd3-01cd-4647-8953-2a09163c859e.jpg",
            "../assets/img/projects/casa 23.05.22/8f0746bd-c787-4339-9b89-622ad2364983.jpg",
        ]
    },
    {
        id:"elemento-3",
        nombre: "Cesar",
        src: "../assets/img/projects/CASA CESAR/casa cesar op c (1).jpg",
        urls: [
            "../assets/img/projects/CASA CESAR/casa cesar op c (1).jpg",
            "../assets/img/projects/CASA CESAR/casa cesar op c (3).jpg",
            "../assets/img/projects/CASA CESAR/casa cesar op c (5).jpg",
            "../assets/img/projects/CASA CESAR/casa cesar op c (6).jpg",
            "../assets/img/projects/CASA CESAR/casa cesar op c (7).jpg",
            "../assets/img/projects/CASA CESAR/casa cesar op c (8).jpg",
        ]
    },
    {
        id:"elemento-4",
        nombre: "Idalia",
        src: "../assets/img/projects/Casa Idalia/272148809_2995030480749541_3236795485946543195_n.png",
        urls: [
            "../assets/img/projects/Casa Idalia/272139332_2995031900749399_9147269156200784118_n.jpg",
            "../assets/img/projects/Casa Idalia/272148809_2995030480749541_3236795485946543195_n.png",
            "../assets/img/projects/Casa Idalia/272199983_2995031890749400_4841066434289201751_n.jpg",
            "../assets/img/projects/Casa Idalia/272274392_2995031917416064_3407292345995980040_n.jpg",
        ]
    },
    {
        id:"elemento-5",
        nombre: "Los Cisnes",
        src: "../assets/img/projects/CASA LOS CISNES/272621264_2999890223596900_8583503361040532005_n.jpg",
        urls: [
            "../assets/img/projects/CASA LOS CISNES/272276479_2999895793596343_8218012103566385816_n.jpg",
            "../assets/img/projects/CASA LOS CISNES/272619606_2999890276930228_4673236196061011039_n.jpg",
            "../assets/img/projects/CASA LOS CISNES/272621264_2999890223596900_8583503361040532005_n.jpg",
            "../assets/img/projects/CASA LOS CISNES/272664022_2999890256930230_4992339015992948394_n.jpg",
            "../assets/img/projects/CASA LOS CISNES/272730688_2999890246930231_6630633594766212666_n.jpg",
        ]
    },
    {
        id:"elemento-6",
        nombre: "Oscar",
        src: "../assets/img/projects/CASA OSCAR (Infonavit)/oscar (1).jpg",
        urls: [
            "../assets/img/projects/CASA OSCAR (Infonavit)/oscar (1).jpg",
            "../assets/img/projects/CASA OSCAR (Infonavit)/oscar (5).jpg",
            "../assets/img/projects/CASA OSCAR (Infonavit)/oscar (6).jpg",
            "../assets/img/projects/CASA OSCAR (Infonavit)/oscar (7).jpg",
            "../assets/img/projects/CASA OSCAR (Infonavit)/oscar (8).jpg",
        ]
    },
    {
        id:"elemento-7",
        nombre: "Ronquillo",
        src: "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.54 (1).jpeg",
        urls: [
            "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.54 (1).jpeg",
            "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.54.jpeg",
            "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.55 (1).jpeg",
            "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.55 (2).jpeg",
            "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.55.jpeg",
            "../assets/img/projects/casa ronquillo/WhatsApp Image 2023-05-19 at 14.21.56.jpeg",
        ]
    },
    {
        id:"elemento-8",
        nombre: "unnamed",
        src: "../assets/img/projects/ok/d_9 - Foto(1).jpg",
        urls: [
            "../assets/img/projects/ok/c_16 - Foto2.jpg",
            "../assets/img/projects/ok/c_18 - Foto2.jpg",
            "../assets/img/projects/ok/d_4 - Foto(1).jpg",
            "../assets/img/projects/ok/d_6 - Foto(1).jpg",
            "../assets/img/projects/ok/d_9 - Foto(1).jpg",
        ]
    },
    {
        id:"elemento-9",
        nombre: "unnamed",
        src: "../assets/img/projects/propuesta 7/AA (1).jpg",
        urls: [
            "../assets/img/projects/propuesta 7/AA (1).jpg",
            "../assets/img/projects/propuesta 7/propuesta zator 7_Photo - 4.jpg",
            "../assets/img/projects/propuesta 7/propuesta zator 7_Photo - 8.jpg",
            "../assets/img/projects/propuesta 7/zator 7 noche_Photo - 5.jpg",
            "../assets/img/projects/propuesta 7/zator 7 noche_Photo - 6.jpg",
            "../assets/img/projects/propuesta 7/zator 7 noche_Photo - 7.jpg",
            "../assets/img/projects/propuesta 7/zator 7 noche_Photo - 8.jpg",
        ]
    },
    {
        id:"elemento-10",
        nombre: "unnamed",
        src: "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.41.jpeg",
        urls: [
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.40.jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.41 (1).jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.41 (2).jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.41.jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.42 (1).jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.42 (2).jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.42.jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.43 (1).jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.43 (2).jpeg",
            "../assets/img/projects/PROYECTO/WhatsApp Image 2023-06-01 at 09.17.43 (3).jpeg",
        ]
    },
    {
        id:"elemento-11",
        nombre: "Puerto de Manzanillo",
        src: "../assets/img/projects/PUERTO DE MANZANILLO/274257194_3015385352047387_7561788735401663446_n.jpg",
        urls: [
            "../assets/img/projects/PUERTO DE MANZANILLO/274218299_3015385582047364_1210266291621771944_n.jpg",
            "../assets/img/projects/PUERTO DE MANZANILLO/274257194_3015385352047387_7561788735401663446_n.jpg",
            "../assets/img/projects/PUERTO DE MANZANILLO/274266783_3015385578714031_8608477530330495841_n.jpg",
            "../assets/img/projects/PUERTO DE MANZANILLO/274290210_3015385568714032_1862746207070414506_n.jpg",
            "../assets/img/projects/PUERTO DE MANZANILLO/274313408_3015385592047363_8960796445594941282_n.jpg",
        ]
    },
]

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
        a.href = "#inline-content";
        a.id = proyecto.id;
        a.classList.add("glightbox4", "boton-modal");
        a.textContent = "Ver más";

        galleryItemInfo.appendChild(h4);
        galleryItemInfo.appendChild(a);

        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-4", "col-sm-6", "col-12", "hover-gallery", "d-flex", "flex-column", "justify-content-end");
        colDiv.appendChild(galleryItemContainer);
        colDiv.appendChild(galleryItemInfo);

        contenido.appendChild(colDiv);
    });
}

insertaProyectos(proyectos);

/*********************** GLIGHTBOX ***********************/
/* Contenido de lightbox */
// Obtén una referencia a todos los botones
const buttons = document.querySelectorAll('.boton-modal');
// Función genérica para manejar el clic en cualquier botón
const handleButtonClick = event => {
    const modal = document.createElement("div");
    modal.classList.add("gallery-modal");
    const buttonId = event.target.id;

    // Encuentra el índice según el id de cada elementos
    const index = proyectos.findIndex(proyecto => proyecto.id === buttonId);

    // Si el índice no existe en el Array, entonces no existe ese elemento, por lo que detiene la ejecución y básicamente no hace nada el botón
    if (index === -1) {
        return;
    }

    // Crear la estructura de la galería, los proyectos
    // Primero crear el banner
    const galleryItemBanner = document.createElement("div");
    galleryItemBanner.classList.add("gallery-item-banner");
    galleryItemBanner.style.backgroundImage = `url("${proyectos[index].src}")`;

    const img = document.createElement("img");
    img.classList.add("gallery-item-banner-img");
    img.src = proyectos[index].src;
    img.alt = proyectos[index].nombre;

    galleryItemBanner.appendChild(img);

    // Esto es para el titulo del proyecto y la galería del mismo
    const galleryItemInfo = document.createElement("div");
    galleryItemInfo.classList.add("gallery-item-info");

    const title = document.createElement("h2");
    title.textContent = `${proyectos[index].nombre} - Galería`;

    const galleryItemsRow = document.createElement("div");
    galleryItemsRow.classList.add("row", "gy-3", "mt-3");

    // Esto es para generar la galería interna
    let contador = 1;
    proyectos[index].urls.forEach(item => {
        const galleryItemsCol = document.createElement("div");
        galleryItemsCol.classList.add("col-sm-6", "col-md-4", "col-12", "d-flex", "flex-column", "justify-content-end");

        const anchor = document.createElement("a");
        // anchor.href = `${item}`;
        anchor.id = `${proyectos[index].nombre}-${contador}`;
        anchor.classList.add("glightbox5");

        const imgs = document.createElement("img");
        imgs.src = item;
        imgs.alt = `${proyectos[index].nombre}-${contador}`;

        anchor.appendChild(imgs)
        galleryItemsCol.appendChild(anchor);
        galleryItemsRow.appendChild(galleryItemsCol);

        // IIFE - Immediately Invoked Function Expression) -> La explicación de esto está en inmobiliaria.js
        anchor.addEventListener('click', (function(contador) {
            return function(event) {
                lightboxInlineIframe.goToSlide(contador);
            };
        })(contador));

        contador++;
    });

    galleryItemInfo.appendChild(title);
    galleryItemInfo.appendChild(galleryItemsRow);

    // Pegar ambos elementos al 'modal'
    modal.appendChild(galleryItemBanner);
    modal.appendChild(galleryItemInfo);

    // Lightbox del modal
    contadorLightbox = 0;
    const lightboxInlineIframe = GLightbox({
        elements: [
            {
                'content': modal
            },
            ...proyectos[index].urls.map(url => ({
                'href': url,
                'type': 'image',
                'alt': `${proyectos[index].nombre}-${contadorLightbox++}`
            }))
        ],
        preload: false,
    });

    // Destruye el 'modal' al cerrarse'
    lightboxInlineIframe.on('close', () => {
        lightboxInlineIframe.destroy();
    });

    // abre el 'modal' al final de todo
    lightboxInlineIframe.open();
}

// Agrega el evento de clic a cada botón
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

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
