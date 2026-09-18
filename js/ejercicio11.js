document.getElementById("btnConvertir").addEventListener("click", convertirAMillas);

function convertirAMillas() {
  const inputKm = document.getElementById("kilometros").value.trim();
  const inputMillas = document.getElementById("millas");
  const mensajeError = document.getElementById("mensajeError");

  mensajeError.textContent = "";
  inputMillas.value = "";

  if (inputKm === "") {
    mensajeError.textContent = "Por favor, ingresa una distancia";
    return;
  }

  const km = Number(inputKm);
  if (isNaN(km) || km < 0) {
    mensajeError.textContent = "Ingresa un número positivo";
    return;
  }

  const resultado = km * 0.621371;

  inputMillas.value = resultado;
}