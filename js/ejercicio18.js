const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    agregarElemento();
  }
});

function agregarElemento() {
  const texto = input.value.trim();

  if (texto !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const span = document.createElement('span');
    span.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'btn btn-danger btn-sm';

    botonEliminar.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(span);
    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = '';
    input.focus();
  } else {
    alert('Escribe algo para agregar a la lista.');
  }
}