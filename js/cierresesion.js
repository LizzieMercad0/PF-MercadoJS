// CODIGO CIERRE SESION

const botonCerrarSesion = document.querySelector('#cierreSesion'); // Crea el botón de cerrar sesión

botonCerrarSesion.addEventListener('click', () => {
  localStorage.removeItem('sesionIniciada'); // Elimina los datos
  window.location = '../index.html'; // Redirige a index.html
})