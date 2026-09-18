document.getElementById('btnConvertir').addEventListener('click', convertirAUSD);

function convertirAUSD() {
  const inputMxn = document.getElementById('mxn').value.trim();
  const inputUsd = document.getElementById('usd');
  const mensajeError = document.getElementById('mensajeError');

  mensajeError.textContent = '';
  inputUsd.value = '';

  if (inputMxn === '') {
    mensajeError.textContent = 'Por favor ingresa una cantidad en pesos mexicanos.';
    return;
  }

  const mxn = Number(inputMxn);
  if (isNaN(mxn) || mxn <= 0) {
    mensajeError.textContent = 'Ingresa un número válido mayor a cero.';
    return;
  }

  const tasaCambio = 0.055;
  const usd = mxn * tasaCambio;

  inputUsd.value = `${usd.toFixed(2)} USD`;
}