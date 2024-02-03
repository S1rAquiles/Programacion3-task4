let array2 = [];
const contenedor2 = document.getElementById('co');
const puntuacionUsuario2 = document.querySelector('.filtroCalificaciones');
const productos2 = document.querySelectorAll('.productooo');
const ordenarBtn2 = document.getElementById('ordenarBtn2');

ordenarBtn2.addEventListener('click', () => {
  const productos2ConCalificacion = Array.from(productos2).map(producto => {
    const puntuacionTotal2 = producto.querySelectorAll('.puntuacion');
    const puntuaciones2 = Array.from(puntuacionTotal2).map(puntuacion => parseFloat(puntuacion.getAttribute('data-puntuacion')));
    const calificacionPromedio2 = puntuaciones2.reduce((total, puntuacion) => total + puntuacion, 0) / puntuaciones2.length;

    return { producto, calificacion: calificacionPromedio2 };
  });

  productos2ConCalificacion.sort((a, b) => b.calificacion - a.calificacion);

  array2 = productos2ConCalificacion.map(producto => producto.producto);

  contenedor2.innerHTML = ''; // Limpiar el contenedor2 antes de agregar los productos2 ordenados

  for (let g = 0; g < array2.length; g++) {
    array2[g].style.margin = '2rem';
    contenedor2.style='display:flex;flex-wrap:wrap;height:auto;margin-left:1.8rem';
    contenedor2.appendChild(array2[g]);
    
  }
});