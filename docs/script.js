function comprobar() {
  const usuarioCorrecto = "granada";      // CAMBIA ESTO
  const passCorrecta = "octubre";          // CAMBIA ESTO

  const user = document.getElementById("user").value.toLowerCase();
  const pass = document.getElementById("pass").value.toLowerCase();

  if (user === usuarioCorrecto && pass === passCorrecta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("contenido").style.display = "block";
  } else {
    document.getElementById("error").innerText =
      "❌ Usuario o contraseña incorrectos";
  }
}
