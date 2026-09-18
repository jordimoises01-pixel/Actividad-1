document.getElementById('btnCalcular').addEventListener('click', calcular);

function calcular() {
  const inputTexto = document.getElementById('numerosInput').value.trim();
  const inputMayor = document.getElementById('mayor');
  const inputMenor = document.getElementById('menor');
  const inputPromedio = document.getElementById('promedio');
  const mensajeError = document.getElementById('mensajeError');

  // Limpieza de estados previos
  mensajeError.textContent = '';
  inputMayor.value = '';
  inputMenor.value = '';
  inputPromedio.value = '';

  // Validar que el campo no esté vacío
  if (inputTexto === '') {
    mensajeError.textContent = 'Por favor ingresa al menos un número.';
    return;
  }

  // Convertir texto a arreglo utilizando split y map
  const arregloCadenas = inputTexto.split(',');
  const numeros = arregloCadenas
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(Number);

  // Validar si existen elementos no numéricos
  if (numeros.length === 0 || numeros.some(isNaN)) {
    mensajeError.textContent = 'Asegúrate de ingresar solo números separados por comas.';
    return;
  }

  // 1. Obtener número mayor y menor usando Math y Spread Operator (...)
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);

  // 2. Obtener el promedio usando reduce()
  const suma = numeros.reduce((acc, valor) => acc + valor, 0);
  const promedio = suma / numeros.length;

  // Mostrar resultados en los campos bloqueados (readonly)
  inputMayor.value = maximo;
  inputMenor.value = minimo;
  inputPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
}