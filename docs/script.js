function comprobar() {
  const usuarioCorrecto = "talycual";
  const passCorrecta = "250825dcn";

  const user = document.getElementById("user").value.toLowerCase();
  const pass = document.getElementById("pass").value.toLowerCase();

  if (user === usuarioCorrecto && pass === passCorrecta) {
    document.getElementById("login").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    crearGatos(); // Animaciones de gatos flotando en contenido
  } else {
    const errorMsg = document.getElementById("error");
    errorMsg.innerText = "❌ Va Aimara piensa, espabila.";
    setTimeout(() => {
      location.reload(); // recarga la página después de mostrar error
    }, 1000);
  }
}

// Función para crear gatos flotando aleatoriamente
function crearGatos() {
  const container = document.createElement('div');
  container.classList.add('gatos-container');
  document.body.appendChild(container);

  for(let i=0; i<15; i++) {
    const gato = document.createElement('span');
    gato.classList.add('gato');
    gato.innerText = '🐱';
    gato.style.left = Math.random() * 90 + 'vw';
    gato.style.animationDuration = (5 + Math.random()*5) + 's';
    gato.style.fontSize = (20 + Math.random()*40) + 'px';
    container.appendChild(gato);
  }
}
