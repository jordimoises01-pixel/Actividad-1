const estudiantes = [];

document.getElementById("btnAgregar").addEventListener("click", agregarEstudiante);
document.getElementById("btnCalcular").addEventListener("click", calcularResultados);

function agregarEstudiante() {
  const inputNombre = document.getElementById("nombre");
  const inputCalificacion = document.getElementById("calificacion");
  const mensajeEstado = document.getElementById("mensajeEstado");

  const nombre = inputNombre.value.trim();
  const calificacionStr = inputCalificacion.value.trim();

  if (nombre === "" || calificacionStr === "") {
    mensajeEstado.className = "error";
    mensajeEstado.textContent = "Por favor, completa ambos campos";
    return;
  }

  const calificacion = Number(calificacionStr);

  if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
    mensajeEstado.className = "error";
    mensajeEstado.textContent = "Ingresa una calificación válida (0 a 100)";
    return;
  }

  estudiantes.push({ nombre, calificacion });

  // Corregido: uso de backticks ``
  mensajeEstado.className = "info";
  mensajeEstado.textContent = `¡${nombre} registrado! Total: ${estudiantes.length}`;
  inputNombre.value = "";
  inputCalificacion.value = "";
  inputNombre.focus();
}

function calcularResultados() {
  const inputPromedio = document.getElementById("promedio");
  const inputMasAlta = document.getElementById("masAlta");
  const inputMasBaja = document.getElementById("masBaja");
  const mensajeEstado = document.getElementById("mensajeEstado");

  if (estudiantes.length === 0) {
    mensajeEstado.className = "error";
    mensajeEstado.textContent = "Agrega al menos un estudiante primero";
    return;
  }

  const sumaTotal = estudiantes.reduce((total, est) => total + est.calificacion, 0);
  const promedio = sumaTotal / estudiantes.length;

  const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

  const estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
  const estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);

  inputPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);

  // Corregido: uso de backticks ``
  inputMasAlta.value = `${estudianteMax.nombre} (${estudianteMax.calificacion})`;
  inputMasBaja.value = `${estudianteMin.nombre} (${estudianteMin.calificacion})`;

  mensajeEstado.className = "info";
  mensajeEstado.textContent = "Cálculos realizados correctamente";
}