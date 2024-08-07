const signupForm = document.querySelector('#signupForm')

signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = document.querySelector('#name').value
    const email = document.querySelector ('#email').value
    const password = document.querySelector ('#password').value

    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistered = Users.find(user => user.email === email)

    if (isUserRegistered){ //Creo un alerta utilizando libreria de SweatAlert2
        return Swal.fire({
            title: '¡Perfecto!',
            text: '¡Este usuario ya esta registrado!',
            icon: 'success',
            confirmButtonText: 'Continuar',
            confirmButtonColor: "#658354"
        }).then(() => {
            window.location = "./login.html"
        });
    }
    Users.push({name:name, email:email, password:password})
    localStorage.setItem('users', JSON.stringify(Users))
    Swal.fire({ 
        title: '¡Perfecto!',
        text: '¡Usuario registrado exitosamente!',
        icon: 'success',
        confirmButtonText: 'Continuar',
        confirmButtonColor: "#658354"
    });
    window.location = "./login.html" //Re dirijo a la pagina de inicio sesion 
})
