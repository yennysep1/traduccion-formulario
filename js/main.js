var cambiarTitulo = document.getElementById("form-signin-heading");
cambiarTitulo.textContent = "Por favor inica sesión";

var input = document.getElementById ("inputEmail");
input.placeholder = "Correo electrónico";

var input = document.getElementById ("inputPassword");
input.placeholder = "Contraseña";

document.querySelector('span').innerHTML='Recordarme'; 

var boton = document.getElementsByClassName("btn") [0];
boton.innerHTML = "Iniciar Sesión";