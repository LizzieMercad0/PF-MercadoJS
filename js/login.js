// CODIGO LOGIN.JS

// CONF. FORMULARIO
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // No refresco la pagina

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);

    if (!validUser) {
    Swal.fire({
        title: 'Error',
        text: 'Usuario y/o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Reintentar',
    })
} else {
    Swal.fire({
        title: '¡Bienvenido!',
        text: `Un gusto tenerte acá ${validUser.name}`,
        icon: 'success',
        confirmButtonText: 'Continuar',
    }).then(() => {
        localStorage.setItem('sesionIniciada', 'true') // Almaceno la información de sesión

      window.location = '../index.html' // RedireccionO a index.html
    })
}
})