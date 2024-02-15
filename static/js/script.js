

function cuadricula(){

let ulTabla3 = document.querySelectorAll('.ULtabla3');
let table = document.querySelector('.table');
let productooo = document.querySelectorAll('.productooo');
console.log(productooo.length);
table.classList.toggle('tableMostrar');//muestro la tabla
for(let k = 0 ; k < productooo.length;k++ ){
productooo[k].classList.toggle('cadaProducto');
ulTabla3[k].classList.toggle('claseTabla3-JS');
}
//--------------------------------
//-
}
//-----------------------------------------------------------------
 function buscarProductos(){
  
  console.log('diste click');
  const searchInput = document.getElementById('buscarPrincipal');
  const valorBusqueda = searchInput.value.trim();
  let galeriaImagenesBusqueda = document.getElementById('galeriaImagenes');
  console.log(valorBusqueda, 'dato del query');
  // Realiza la solicitud al servidor
  fetch("/cliente", {
    method: "POST",
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      busqueda: valorBusqueda
    })
  })
  .then(res=>res.json())
  .then(res=>{
   console.log(res.producto[0],'datos recibidos desde el servidor');
    // Redirige al cliente a la plantilla 'prueba.ejs' con los datos recibidos   "{-_-}" si pude "[-_-]"
   let url =`/ruta?nombre=${res.producto[0].nombre}&codigo=${res.producto[0].codigo}&precio=${res.producto[0].precio}&descripcion=${res.producto[0].descripcion}&cantidad=${res.producto[0].cantidad}&url=${res.producto[0].url}&calidad=${res.producto[0].calidad}&id=${res.producto[0].producto_id}`;
   
  window.location.href = url;
  })
}
