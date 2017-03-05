var title = document.getElementById('form-signin-heading');
var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');
var remember = document.getElementsByTagName('span')[0];
var button = document. getElementsByClassName('btn')[0];

  function translate(){
      title.innerHTML = "Por favor inicia sesión";
      email.placeholder = "Correo Electrónico";
      password.placeholder = "Contraseña";
      remember.innerHTML = "Recordar datos";
      button.innerHTML = "Iniciar sesión";
  }
  translate();

  butt.addEventListener("click", function(){
  document.getElementById('salida').innerHTML = "<h2>Datos de Contenido</h2><br>"
                                                + "<strong>El correo electrónico ingresado es:</strong><br>" + email.value
                                                + "<br><strong>La clave ingresada es:</strong><br>" + password.value;
  event.preventDefault();
});
