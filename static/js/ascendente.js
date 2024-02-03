let array = [];
const contenedor = document.getElementById('co');
const myform = document.querySelector('.myform');
const puntuacionUsuario = document.querySelector('.filtroCalificaciones');
const productos = document.querySelectorAll('.productooo');
const ordenarBtn = document.getElementById('ordenarBtn');

ordenarBtn.addEventListener('click', () => {
  const productosConCalificacion = Array.from(productos).map(producto => {
    const puntuacionTotal = producto.querySelectorAll('.puntuacion');
    const puntuaciones = Array.from(puntuacionTotal).map(puntuacion => parseFloat(puntuacion.getAttribute('data-puntuacion')));
    const calificacionPromedio = puntuaciones.reduce((total, puntuacion) => total + puntuacion, 0) / puntuaciones.length;

    return { producto, calificacion: calificacionPromedio };
  });

  productosConCalificacion.sort((a, b) => a.calificacion - b.calificacion);

  array = productosConCalificacion.map(producto => producto.producto);

  contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar los productos ordenados

  for (let g = 0; g < array.length; g++) {
    array[g].style.margin = '2rem';
    contenedor.style='display:flex;flex-wrap:wrap;height:auto;margin-left:1.8rem';
    contenedor.appendChild(array[g]);
    
  }
});