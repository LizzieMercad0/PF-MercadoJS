// CODIGO LOGIN.JS

const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // No refresco la pagina

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);

    if (!validUser) {
    Swal.fire({     //llamar a SweetAlert2 desde el html
        title: 'Error',
        text: 'Usuario y/o contraseña incorrectos',
        icon: 'error',
        confirmButtonText: 'Reintentar',
        confirmButtonColor: "#658354"
    })
} else {
    Swal.fire({
        title: '¡Bienvenido!',
        text: `Un gusto tenerte acá ${validUser.name}`,
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: "#658354"
    }).then(() => {
        localStorage.setItem('sesionIniciada', 'true') // Almaceno la información

      window.location = '../index.html' // Redirigo al inicio
    })
}
})