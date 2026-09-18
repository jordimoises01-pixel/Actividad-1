const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

document.getElementById('btnSuma').addEventListener('click', () => calcularOperacion('suma'));
document.getElementById('btnResta').addEventListener('click', () => calcularOperacion('resta'));
document.getElementById('btnMulti').addEventListener('click', () => calcularOperacion('multiplicacion'));
document.getElementById('btnDiv').addEventListener('click', () => calcularOperacion('division'));

const calcularOperacion = (tipoOperacion) => {
  const val1 = document.getElementById('numero1').value.trim();
  const val2 = document.getElementById('numero2').value.trim();
  const inputResultado = document.getElementById('resultado');

  inputResultado.value = '';

  if (val1 === '' || val2 === '') {
    Swal.fire({
      icon: 'error',
      title: 'Campos Incompletos',
      text: 'Por favor, ingresa ambos números para realizar la operación.'
    });
    return;
  }

  const num1 = Number(val1);
  const num2 = Number(val2);

  if (isNaN(num1) || isNaN(num2)) {
    Swal.fire({
      icon: 'error',
      title: 'Valor Inválido',
      text: 'Asegúrate de ingresar únicamente valores numéricos.'
    });
    return;
  }

  let res;

  switch (tipoOperacion) {
    case 'suma':
      res = sumar(num1, num2);
      break;
    case 'resta':
      res = restar(num1, num2);
      break;
    case 'multiplicacion':
      res = multiplicar(num1, num2);
      break;
    case 'division':
      if (num2 === 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Operación no permitida',
          text: 'No es posible dividir un número entre cero.'
        });
        res = 'Error: División por cero';
      } else {
        res = dividir(num1, num2);
      }
      break;
  }

  if (typeof res === 'number') {
    inputResultado.value = Number.isInteger(res) ? res : res.toFixed(2);
  } else {
    inputResultado.value = res;
  }
};