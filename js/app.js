function mostrar() {
    let texto = document.getElementById("comentario").value;
    document.getElementById("resultado").innerText = texto;
}

// Animación al hacer scroll
window.addEventListener("scroll", function () {
    let elementos = document.querySelectorAll(".fade");

    elementos.forEach(el => {
        let posicion = el.getBoundingClientRect().top;
        let pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            el.classList.add("visible");
        }
    });
});
