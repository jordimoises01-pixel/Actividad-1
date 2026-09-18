document.getElementById("btnConvertir").addEventListener("click", convertirAFahrenheit);

function convertirAFahrenheit() {
  const inputCelsius = document.getElementById("celsius").value.trim();
  const inputFahrenheit = document.getElementById("fahrenheit");
  const mensajeError = document.getElementById("mensajeError");

  mensajeError.textContent = "";
  inputFahrenheit.value = "";

  if (inputCelsius === "") {
    mensajeError.textContent = "Por favor agregue la temperatura en Celsius";
    return;
  }

  const celsius = Number(inputCelsius);
  if (isNaN(celsius)) {
    mensajeError.textContent = "Ingresa un número válido";
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;

  inputFahrenheit.value = "${fahrenheit} °F";
}