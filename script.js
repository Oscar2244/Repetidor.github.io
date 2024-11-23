// Seleccionar elementos
const titulo = document.getElementById("titulo");
const boton = document.getElementById("cambiarTexto");
const entrada = document.getElementById("entradaTexto");
const vecesInput = document.getElementById("veces");
const botonActualizar = document.getElementById("actualizarTexto");
const botonLimpiar = document.getElementById("limpiarTexto"); // Seleccionar el botón de limpiar
const contenedor = document.getElementById("contenedor");

// Evento para cambiar el texto del título y su color
boton.addEventListener("click", () => {
    titulo.innerText = "Texto cambiado por JavaScript!";
    titulo.style.color = "#A2DFF7";  // Pastel amarillo
});

// Evento para actualizar el contenido
botonActualizar.addEventListener("click", () => {
    const texto = entrada.value.trim(); // Obtener texto ingresado (eliminar espacios extra)
    const veces = parseInt(vecesInput.value, 10); // Obtener número de repeticiones

    if (texto && veces > 0) { // Validar que el texto no esté vacío y que el número sea válido
        const repeticiones = Array(veces).fill(texto); // Crear un array con `veces` elementos iguales
        mostrarResultado(repeticiones); // Mostrar las repeticiones
        entrada.value = ""; // Limpiar el campo de texto
        vecesInput.value = ""; // Limpiar el campo de repeticiones
    } else {
        alert("Por favor ingresa una palabra y un número válido mayor a 0.");
    }
});

// Evento para limpiar los campos y el contenido impreso
botonLimpiar.addEventListener("click", () => {
    entrada.value = ""; // Limpiar el campo de texto
    vecesInput.value = ""; // Limpiar el campo de repeticiones
    contenedor.innerHTML = ""; // Limpiar el contenedor de resultados
});

// Función para mostrar las repeticiones en el contenedor
function mostrarResultado(repeticiones) {
    contenedor.innerHTML = ""; // Limpiar el contenedor

    // Usar map para crear y agregar elementos <h2>
    repeticiones.map(texto => {
        const h2 = document.createElement("h2"); // Crear un nuevo <h2>
        h2.innerText = texto; // Asignar el texto
        contenedor.appendChild(h2); // Agregar el <h2> al contenedor
    });
}

// Seleccionar elementos para el modo oscuro
const modoOscuroBtn = document.getElementById("modoOscuro");
const body = document.body;
const container = document.querySelector(".container");
const botones = document.querySelectorAll(".pastel-button");
const inputs = document.querySelectorAll(".pastel-input");

// Evento para cambiar entre modo oscuro y claro
modoOscuroBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
    titulo.classList.toggle("dark-mode");
    botones.forEach(btn => btn.classList.toggle("dark-mode"));
    inputs.forEach(input => input.classList.toggle("dark-mode"));
    contenedor.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        modoOscuroBtn.innerText = "🌞";  // Cambiar ícono a sol
    } else {
        modoOscuroBtn.innerText = "🌙";  // Cambiar ícono a luna
    }
});
