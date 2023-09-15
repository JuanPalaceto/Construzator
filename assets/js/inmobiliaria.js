/*********************** Generador contenido dinámicamente ***********************/
// Igual podría investigar como llevarme esto a otro archivo (o una bd más adelante...)
const proyectos_casas = [
    {
        id:"casa-1",
        nombre: "CASA COL. MODERNA",
        src: "assets/img/CASA COL. MODERNA/pre venta (1).png",
        precio: "",
        ubicacion: "Margen del Río, Moderna, 87134 Cd Victoria, Tamps.",
        lote: "desde 130m2 (6.5X20)",
        construccion: "",
        habitaciones: "2 habitaciones",
        banos: "1 baño",
        caracteristicas: [
            "2 habitaciones",
            "Sala",
            "Cocina",
            "Comedor",
            "Patio frontal",
            "Baño"
        ],
        urls: [
            "assets/img/CASA COL. MODERNA/pre venta (1).png",
        ]
    },
    {
        id:"casa-2",
        nombre: "CASA VIENTO HUASTECO",
        src: "assets/img/CASA VIENTO HUASTECO/VENTA DE CASA!.png",
        precio: "$1,250,000.00",
        ubicacion: "Viento Huasteco, esquina con calle Cdad. Victoria y Calle Estado de Veracruz, frente al área verde.",
        lote: "126.89m2",
        construccion: "106m2",
        habitaciones: "3 habitaciones",
        banos: "2 baños",
        caracteristicas: [
            "3 habitaciones",
            "Sala",
            "Comedor",
            "Cocina",
            "Cochera",
            "2 baños",
        ],
        urls: [
            "assets/img/CASA VIENTO HUASTECO/VENTA DE CASA!.png",
            "assets/img/CASA VIENTO HUASTECO/7b0f9381-8362-40eb-9449-27c92f2fe5ec.jpg",
            "assets/img/CASA VIENTO HUASTECO/202f3741-95e5-48b5-8a7f-2d535e421e87.jpg",
            "assets/img/CASA VIENTO HUASTECO/2075d9d7-663f-40e2-a1ea-4b68da9cfe2a.jpg",
            "assets/img/CASA VIENTO HUASTECO/d2aac6ba-d392-4149-bf3b-33b87e50c5c2.jpg",
        ]
    },
    {
        id:"casa-3",
        nombre: "FRACCIONAMIENTO JARDINES DEL SAUCE",
        src: "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/1.png",
        precio: "$1,800,000.00",
        ubicacion: "Lic. Ciro de La Garza 959, Sin Nombre de Col 7, 87030 Cd Victoria, Tamps.",
        lote: "desde 144m2 (8x18)",
        construccion: "140m2",
        habitaciones: "3 habitaciones",
        banos: "3 1/2 baños",
        caracteristicas: [
            "Barda perimetral",
            "Acceso controlado",
            "Instalaciones eléctricas subterráneas",
            "Área verde",
            "Alberca con salón",
            "Calles pavimentadas",
            "Juegos infantiles",
            "Asadores y palapa común",
            "Régimen de condominio",
            "Lotes desde 144m2 (8x18)",
            "Construcción 140m2",
            "2 habitaciones en planta alta",
            "1 habitación en planta baja",
            "Sala",
            "Cocina",
            "Comedor",
            "Patio frontal",
            "Cochera para dos vehículos",
            "3 1/2 baños",
            "Pasillo de servicio",
            "Área de lavandería techada",
            "Preparación para minisplits",
            "Balcón"
        ],
        urls: [
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/1.png",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/4.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/6.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/7.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/9.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/11.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/12.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/12.png",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/13.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/14.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/15.jpeg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/317719421_5446418665487688_5453997659802290101_n.jpg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/WhatsApp Image 2023-05-16 at 10.36.38.jpeg",
            "assets/img/FRACCIONAMIENTO JARDINES DEL SAUCE/WhatsApp Image 2023-05-16 at 10.36.39.jpeg",
        ]
    },
]

const proyectos_terrenos = [
    {
        id:"terreno-1",
        nombre: "PEDREGAL",
        src: "assets/img/PEDREGAL/342729176_783125086583308_6161645058872096818_n.jpg",
        precio: "$560,000.00",
        ubicacion: "Lib. Guadalupe Victoria 925, 87084 Tamps.",
        lote: "200m2",
        caracteristicas: [
            "Barda perimetral a 2.5 mts.",
            "Acceso controlado",
            "Instalaciones eléctricas subterráneas",
            "Área verde",
            "Alberca con salón",
            "Calles pavimentadas",
            "Juegos infantiles",
            "Circuito de cámaras",
            "Asadores y palapa común",
            "Régimen de condominio"
        ],
        urls: [
            "assets/img/PEDREGAL/342729176_783125086583308_6161645058872096818_n.jpg",
            "assets/img/PEDREGAL/Diseno sin titulo (22).png",
            "assets/img/PEDREGAL/WhatsApp Image 2022-12-09 at 11.05.04 AM (1).jpeg",
            "assets/img/PEDREGAL/WhatsApp Image 2022-12-09 at 11.05.04 AM.jpeg",
            "assets/img/PEDREGAL/WhatsApp Image 2022-12-09 at 11.05.05 AM.jpeg",
        ]
    },
]

const proyectos_arrays = {
    proyectos_casas,
    proyectos_terrenos
};

// Para ajustar la altura
// YA NO SE USA, CREO
const mideHeights = (elementos) => {
    let minHeight = 9999;

    elementos.forEach((item) => {
        const infoHeight = item.offsetHeight;

        if (infoHeight < minHeight) {
            minHeight = infoHeight;
        }
    });

    elementos.forEach((item) => {
        item.style.height = `${minHeight}px`;
    })
}

const insertaProyectos = (array, proyectos, id) => {
    // Obtiene el div que dejé en el html donde irá todo
    const contenido = document.getElementById(id);

    proyectos.forEach(proyecto => {
        // Aquí se crean los componentes y se anidan (no tocar esto por las clases !!)
        // Esto es hasta las imagenes
        const galleryItemContainer = document.createElement("div");
        galleryItemContainer.classList.add("gallery-item-container", "btn-lightbox");
        galleryItemContainer.setAttribute("id-proyecto", proyecto.id);
        galleryItemContainer.setAttribute("data-array", array);

        const img = document.createElement("img");
        img.src = proyecto.src;
        img.alt = proyecto.nombre;

        galleryItemContainer.appendChild(img);

        // Aquí comienza lo de abajo de cada imagen(igual no tocarlo por el tema de las clases !!)
        const galleryItemInfo = document.createElement("div");
        galleryItemInfo.classList.add("gallery-item-info");

        const h4 = document.createElement("h4");
        h4.textContent = proyecto.nombre;
        h4.classList.add("btn-lightbox");
        h4.setAttribute("id-proyecto", proyecto.id);
        h4.setAttribute("data-array", array);

        const h5 = document.createElement("h5");
        h5.textContent = proyecto.precio;

        galleryItemInfo.appendChild(h4);
        galleryItemInfo.appendChild(h5);

        // Según yo aquí se comienzan a generar lso elementos. (Falta un row?)
        const colDiv = document.createElement("div");
        colDiv.classList.add("col-lg-4", "col-sm-6", "col-12", "hover-gallery", "d-flex", "flex-column");
        // Quité estas clases de arriba "d-flex", "flex-column", "justify-content-between"
        colDiv.appendChild(galleryItemContainer);
        colDiv.appendChild(galleryItemInfo);

        contenido.appendChild(colDiv);
    });
}

insertaProyectos("proyectos_casas", proyectos_casas, "contenido-casas");
insertaProyectos("proyectos_terrenos", proyectos_terrenos, "contenido-terrenos");

/*********************** GLIGHTBOX ***********************/
/* Contenido de lightbox */
// Función genérica para manejar el clic en cualquier botón
const handleButtonClick = (event, array) => {
    const modal = document.createElement("div");
    modal.classList.add("gallery-modal");

    /*const arrayName = button.getAttribute('data-array');*/
    const buttonId = event.target;
    const proyectoId = buttonId.getAttribute("id-proyecto");

    // Encuentra el índice según el id de cada elementos
    const index = array.findIndex(proyecto => proyecto.id === proyectoId);

    // Si el índice no existe en el Array, entonces no existe ese elemento, por lo que detiene la ejecución y básicamente no hace nada el botón
    if (index === -1) {
        return;
    }

    // Crear la estructura de la galería, los array
    // Primero crear el banner
    const galleryItemBanner = document.createElement("div");
    galleryItemBanner.classList.add("gallery-item-banner");
    galleryItemBanner.style.backgroundImage = `url("${array[index].src}")`;

    const img = document.createElement("img");
    img.classList.add("gallery-item-banner-img");
    img.src = array[index].src;
    img.alt = array[index].nombre;

    galleryItemBanner.appendChild(img);

    // Esto es para el titulo del proyecto, descripción y la galería del mismo
    const galleryItemInfo = document.createElement("div");
    galleryItemInfo.classList.add("gallery-item-info");

    const title = document.createElement("h2");
    title.textContent = array[index].nombre;

    const ubicacion = document.createElement("p");
    ubicacion.textContent = array[index].ubicacion;
    ubicacion.classList.add("lightbox-ubi");

    const precio = document.createElement("p");
    precio.textContent = array[index].precio;
    precio.classList.add("lightbox-precio");

    // Las caracteristicas a resaltar
    const highlights = document.createElement("ul");
    highlights.classList.add("lightbox-highlights");
    if (array[index].lote) {
        const lote = document.createElement("li");
        lote.textContent = array[index].lote;
        lote.classList.add("lightbox-highlights-area");
        highlights.appendChild(lote);
    }

    if (array[index].construccion) {
        const construccion = document.createElement("li");
        construccion.textContent = array[index].construccion;
        construccion.classList.add("lightbox-highlights-building");
        highlights.appendChild(construccion);
    }

    if (array[index].habitaciones) {
        const habitaciones = document.createElement("li");
        habitaciones.textContent = array[index].habitaciones;
        habitaciones.classList.add("lightbox-highlights-rooms");
        highlights.appendChild(habitaciones);
    }

    if (array[index].banos) {
        const banos = document.createElement("li");
        banos.textContent = array[index].banos;
        banos.classList.add("lightbox-highlights-restrooms");
        highlights.appendChild(banos);
    }

    // Empezamos a generar el body
    const contenedorCaracteristicas = document.createElement("div");
    contenedorCaracteristicas.classList.add("lightbox-caracteristicas");
    const caracteristicas = document.createElement("ul");
    array[index].caracteristicas.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        caracteristicas.appendChild(li);
    });
    const descripcion = document.createElement("h3");
    descripcion.textContent = "Descripción";
    descripcion.classList.add("lightbox-subtitle")
    
    contenedorCaracteristicas.appendChild(caracteristicas);

    const galeriaTitle = document.createElement("h3");
    galeriaTitle.textContent = "Galería";
    galeriaTitle.classList.add("lightbox-subtitle");

    const galleryItemsRow = document.createElement("div");
    galleryItemsRow.classList.add("row", "gy-3");

    // Esto es para generar la galería interna
    let contador = 1;
    array[index].urls.forEach(item => {
        const galleryItemsCol = document.createElement("div");
        galleryItemsCol.classList.add("col-sm-6", "col-md-4", "col-12", "d-flex", "flex-column", "justify-content-end");

        const anchor = document.createElement("a");
        // anchor.href = `${item}`;
        anchor.id = `${array[index].nombre}-${contador}`;
        anchor.classList.add("glightbox5");

        const imgs = document.createElement("img");
        imgs.src = item;
        imgs.alt = `${array[index].nombre}-${contador}`;

        anchor.appendChild(imgs)
        galleryItemsCol.appendChild(anchor);
        galleryItemsRow.appendChild(galleryItemsCol);

        // IIFE - Immediately Invoked Function Expression) -> Se llaman así porque se invocan inmediatamente después de crearse.
        anchor.addEventListener('click', (function(contador) { // En vez de añadir la acción directamente, se crea una función anónima la cual retorna otra función anónima, que será finalmente la que irá al listener. Esta función recibe de parametro el contador y lo "aisla" dentro de esta misma función.
            return function(event) { // Esta función retornada es la que finalmente se vinculará al listener de cada anchor, en este caso, imagenes.
                lightbox.goToSlide(contador); // Esto es del lightbox.
            };
        })(contador)); // Se invoca la función inmediatamente, es decir que se crea el listener con la función que creé. Esta es única y por eso contador mantiene su valor actual

        contador++;
    });

    galleryItemInfo.appendChild(title);
    galleryItemInfo.appendChild(ubicacion);
    galleryItemInfo.appendChild(precio);
    galleryItemInfo.appendChild(highlights);
    galleryItemInfo.appendChild(descripcion);
    galleryItemInfo.appendChild(contenedorCaracteristicas);
    galleryItemInfo.appendChild(galeriaTitle);
    galleryItemInfo.appendChild(galleryItemsRow);

    // Pegar ambos elementos al 'modal'
    modal.appendChild(galleryItemBanner);
    modal.appendChild(galleryItemInfo);

    /* CONFIGURACIONES DE GLIGHTBOX */
    // Esta parte es la del lightbox realmente
    contadorLightbox = 0;
    const lightbox = GLightbox({
        elements: [
            {
                'content': modal
            },
            ...array[index].urls.map(url => ({
                'href': url,
                'type': 'image',
                'alt': `${array[index].nombre}-${contadorLightbox++}`
            }))
        ],
        preload: false,
    });

    // Destruye el 'modal' al cerrarse'
    lightbox.on('close', () => {
        lightbox.destroy();
    });

    // abre el 'modal' al final de todo
    lightbox.open();
}

// Para abrir/construir los slides al hacer click en la imagen o el titulo
const buttons = document.querySelectorAll('.btn-lightbox');
// Agrega el evento de clic a cada botón
buttons.forEach(button => {
    const arrayName = button.getAttribute('data-array');

    button.addEventListener('click', event => {
        handleButtonClick(event, proyectos_arrays[arrayName]);
    });
});

// El listener hace que cada que se mueva la pantalla se ajuste el height de cada div
window.addEventListener('resize', () => {
    const container = document.querySelectorAll('.gallery-item-container');
    container.forEach(element => {
        const width = element.offsetWidth;

        // Calcular el height (el porcentaje lo saqué de hacerlo manualmente)
        const height = (width * 83.8265) / 100;

        // Se coloca el height adecuado
        element.style.height = `${height}px`;
    });
});

// Ejecuta el evento al comenzar
window.dispatchEvent(new Event('resize'));
