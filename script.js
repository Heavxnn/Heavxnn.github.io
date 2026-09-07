// ============================
// ABRIR EL REGALO
// ============================

function abrirRegalo() {

    document.getElementById("inicio").style.display = "none";

    const contenido =
        document.getElementById("contenido");

    contenido.classList.remove("oculto");

    mostrarSeccion("historia");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ============================
// CAMBIAR DE SECCIÓN
// ============================

function mostrarSeccion(id) {

    const secciones =
        document.querySelectorAll(".seccion");


    secciones.forEach(function(seccion) {

        seccion.classList.remove("activa");

    });


    const seleccionada =
        document.getElementById(id);


    if (seleccionada) {

        seleccionada.classList.add("activa");

        seleccionada.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}



// ============================
// CONTINUAR NUESTRA HISTORIA
// ============================

function continuarHistoria() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        crearCorazon();

    }


    setTimeout(function() {

        alert(
            "Entonces sigamos escribiendo nuestra historia juntos. ❤️"
        );

    }, 800);

}



// ============================
// CREAR CORAZÓN
// ============================

function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.classList.add(
        "corazon-caida"
    );


    const corazones = [

        "❤️",
        "💗",
        "💖",
        "💕",
        "💞",
        "💓",
        "💘"

    ];


    corazon.innerHTML =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.animationDuration =
        (3 + Math.random() * 3) + "s";


    corazon.style.fontSize =
        (20 + Math.random() * 25) + "px";


    document.body.appendChild(
        corazon
    );


    setTimeout(function() {

        corazon.remove();

    }, 6000);

}