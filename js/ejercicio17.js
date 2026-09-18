const crearGestorTareas = () => {
  const CLAVE_STORAGE = 'mis_tareas_app';

  const obtenerTareas = () => {
    const datos = localStorage.getItem(CLAVE_STORAGE);
    return datos ? JSON.parse(datos) : [];
  };

  const guardarTareas = (tareas) => {
    localStorage.setItem(CLAVE_STORAGE, JSON.stringify(tareas));
  };

  return {
    obtener: obtenerTareas,
    agregar: (textoTarea) => {
      const tareas = obtenerTareas();
      tareas.push(textoTarea);
      guardarTareas(tareas);
    },
    eliminar: (indice) => {
      const tareas = obtenerTareas();
      tareas.splice(indice, 1);
      guardarTareas(tareas);
    }
  };
};

const gestor = crearGestorTareas();

document.getElementById('btnAgregar').addEventListener('click', agregarNuevaTarea);
document.addEventListener('DOMContentLoaded', renderizarTareas);

function renderizarTareas() {
  const lista = document.getElementById('listaTareas');
  lista.innerHTML = '';
  const tareas = gestor.obtener();

  if (tareas.length === 0) {
    lista.innerHTML = '<li class="sin-tareas">No hay tareas pendientes.</li>';
    return;
  }

  tareas.forEach((tarea, index) => {
    const li = document.createElement('li');
    li.className = 'item-tarea';

    const span = document.createElement('span');
    span.textContent = tarea;

    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => confirmarEliminar(index));

    li.appendChild(span);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

function agregarNuevaTarea() {
  const input = document.getElementById('nuevaTarea');
  const texto = input.value.trim();

  if (texto === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Campo vacío',
      text: 'Por favor, escribe una descripción para la tarea.'
    });
    return;
  }

  gestor.agregar(texto);
  input.value = '';
  renderizarTareas();
}

function confirmarEliminar(index) {
  Swal.fire({
    title: '¿Eliminar tarea?',
    text: 'Esta acción no se podrá deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      gestor.eliminar(index);
      renderizarTareas();
      Swal.fire('¡Eliminada!', 'La tarea ha sido borrada.', 'success');
    }
  });
}