// Estado del juego: almacena la eleccion del jugador
let pick = null;

// Referencia a la seccion de narrativa
const story = document.getElementById('narrativa');

// Funcion para manejar la eleccion y mostrar la narrativa
function pickRoute(route) {
  pick = route;
  // Cambia la narrativa con animacion
  //innerHTML permite leer o modificar el contenido HTML de un elemento.
  story.innerHTML = `<p class="fade-in">${crudymessages[route]}</p>`;
}

// Asignar eventos a los botones
// Los ids de los botones corresponden a las rutas
// Se asume que texts.js ya cargo y define crudymessages en el scope global

document.getElementById('btn-logica').addEventListener('click', () => pickRoute('logic'));
document.getElementById('btn-simulacion').addEventListener('click', () => pickRoute('sim'));
document.getElementById('btn-corrupto').addEventListener('click', () => pickRoute('corrupt')); 