document.getElementById("btnVerificar").addEventListener("click", verificarVotacion);

function verificarVotacion() {
  const inputEdad = document.getElementById("edad").value.trim();
  const inputResultado = document.getElementById("resultado");
  const mensajeError = document.getElementById("mensajeError");

  mensajeError.textContent = "";
  inputResultado.value = "";

  if (inputEdad === "") {
    mensajeError.textContent = "Por favor ingresa tu edad";
    return;
  }

  const edad = Number(inputEdad);
  if (isNaN(edad) || edad < 0 || !Number.isInteger(edad)) {
    mensajeError.textContent = "Ingresa una edad válida (número entero positivo)";
    return;
  }

  if (edad >= 18) {
    inputResultado.value = "Puedes votar";
  } else {
    inputResultado.value = "No puedes votar";
  }
}