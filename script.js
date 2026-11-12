// 1. Obtener elementos del DOM
const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");
const botonReset = document.getElementById("btn-reset");
const tablaCuerpo = document.getElementById("tabla-cuerpo");

let likes = 0;

// Función para obtener la hora actual formateada (HH:MM:SS)
function obtenerHoraActual() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

// 2. Escuchar el evento 'click' en el botón principal
botonLike.addEventListener("click", () => {
    likes++;
    textoContador.textContent = likes;

    // Reto 2: Si supera los 10 likes, cambia el color del contador a rojo o naranja brillante
    if (likes > 10) {
        textoContador.style.color = "#e67e22";
    }

    // Registrar hora actual
    const horaExacta = obtenerHoraActual();

    // Crear fila nueva para la tabla
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${likes}</td>
        <td>${horaExacta}</td>
    `;

    // Insertar al inicio de la tabla (para que el más reciente salga arriba)
    tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
});

// Reto 1: Botón para reiniciar a cero
botonReset.addEventListener("click", () => {
    likes = 0;
    textoContador.textContent = likes;
    textoContador.style.color = "#3498db"; // Color original
    tablaCuerpo.innerHTML = ""; // Limpiar tabla
});