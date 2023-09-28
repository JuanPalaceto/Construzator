/*********************** Generador contenido dinámicamente ***********************/
/* Genera la galería inicial */
$.ajax({
    type: 'POST',
    url: '../Scripts/galeriaInmobiliaria.php',
    dataType: 'json',
    contentType: 'application/json',
    success: function(res) {
        insertaProyectos(res.Casas, "contenido-casas");
        insertaProyectos(res.Terrenos, "contenido-terrenos");
        
        // El listener hace que cada que se mueva la pantalla se ajuste el height de cada div
        // Está mejor explicado en el de diseño
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
    },
    error: function(xhr, status, error) {
        console.error('AJAX request failed:', status, error);
    }
});

const insertaProyectos = (array, idContainer) => {
    // Obtiene el div que dejé en el html donde irá todo
    const contenido = document.getElementById(idContainer);

    array.forEach(proyecto => {        
        // Aquí se crean los componentes y se anidan (no tocar esto por las clases !!)
        // Esto es hasta las imagenes
        const galleryItemContainer = document.createElement("div");
        galleryItemContainer.classList.add("gallery-item-container", "btn-lightbox");
        galleryItemContainer.setAttribute("id-proyecto", proyecto.id);
        // galleryItemContainer.setAttribute("data-array", array);

        // Añade la función al botón
        galleryItemContainer.addEventListener('click', event => {
            handleButtonClick(event, proyecto.id, idContainer);
        });

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
        // h4.setAttribute("data-array", array);

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

/*********************** GLIGHTBOX ***********************/
/* Contenido de lightbox */
// Función genérica para manejar el clic en cualquier botón
const handleButtonClick = (event, idProyecto, tipoPropiedad) => {
    let tipo = 0;
    if (tipoPropiedad.includes('casas')) {
        tipo = 1;
    } else {
        tipo = 2;
    }

    const obj = {
        idProyecto: idProyecto,
        tipo: tipo
    }

    $.ajax({
        type: 'POST',
        url: '../Scripts/traeArrayImagenes.php',
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
    title.textContent = datos.nombre;

    const ubicacion = document.createElement("p");
    ubicacion.textContent = datos.ubicacion;
    ubicacion.classList.add("lightbox-ubi");

    const precio = document.createElement("p");
    precio.textContent = datos.precio;
    precio.classList.add("lightbox-precio");

    // Las caracteristicas a resaltar
    const highlights = document.createElement("ul");
    highlights.classList.add("lightbox-highlights");
    if (datos.lote) {
        const lote = document.createElement("li");
        lote.textContent = datos.lote;
        lote.classList.add("lightbox-highlights-area");
        highlights.appendChild(lote);
    }

    if (datos.construccion) {
        const construccion = document.createElement("li");
        construccion.textContent = datos.construccion;
        construccion.classList.add("lightbox-highlights-building");
        highlights.appendChild(construccion);
    }

    if (datos.habitaciones) {
        const habitaciones = document.createElement("li");
        habitaciones.textContent = datos.habitaciones;
        habitaciones.classList.add("lightbox-highlights-rooms");
        highlights.appendChild(habitaciones);
    }

    if (datos.banos) {
        const banos = document.createElement("li");
        banos.textContent = datos.banos;
        banos.classList.add("lightbox-highlights-restrooms");
        highlights.appendChild(banos);
    }

    // Empezamos a generar el body
    const contenedorCaracteristicas = document.createElement("div");
    contenedorCaracteristicas.classList.add("lightbox-caracteristicas");
    const caracteristicas = document.createElement("ul");
    if(datos.caracteristicas) {
        datos.caracteristicas.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            caracteristicas.appendChild(li);
        });
    }
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
    datos.urls.forEach(item => {
        const galleryItemsCol = document.createElement("div");
        galleryItemsCol.classList.add("col-sm-6", "col-md-4", "col-12", "d-flex", "flex-column", "justify-content-end");

        const anchor = document.createElement("a");
        // anchor.href = `${item}`;
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
