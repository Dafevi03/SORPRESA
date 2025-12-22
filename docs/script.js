// Función para comprobar login
function comprobar() {
  const usuarioCorrecto = "talycual";
  const passCorrecta = "250825dcn";

  const user = document.getElementById("user").value.toLowerCase();
  const pass = document.getElementById("pass").value.toLowerCase();

  if (user === usuarioCorrecto && pass === passCorrecta) {
    // Oculta todo el login + pistas
    document.getElementById("login-container").style.display = "none";

    // Muestra solo el contenido
    document.getElementById("contenido").style.display = "block";

    // Crear gatos flotando en el contenido
    crearGatos();
  } else {
    const errorMsg = document.getElementById("error");
    errorMsg.innerText = "❌ Va Aimara piensa, espabila.";
    setTimeout(() => location.reload(), 1200);
  }
}

// Crear gatos flotando en el fondo
function crearGatos() {
  const container = document.querySelector('.emojis-container');

  for(let i=0; i<20; i++) {
    const gato = document.createElement('span');
    gato.classList.add('gato');
    gato.innerText = '🐱';
    gato.style.left = Math.random() * 90 + 'vw';
    gato.style.animationDuration = (5 + Math.random()*5) + 's';
    gato.style.fontSize = (20 + Math.random()*50) + 'px';
    container.appendChild(gato);
  }
}

// Mostrar/ocultar acertijos en recuadro al click
document.querySelectorAll('.ver-pista').forEach((btn) => {
  btn.addEventListener('click', () => {
    const text = btn.nextElementSibling;
    if (text.style.display === 'block') {
      text.style.display = 'none';
      btn.innerText = btn.innerText.replace('Ocultar', 'Ver');
    } else {
      text.style.display = 'block';
      btn.innerText = btn.innerText.replace('Ver', 'Ocultar');
    }
  });
});

// Crear gatos animados en login al inicio
window.addEventListener('load', () => {
  const container = document.querySelector('.emojis-container');
  for(let i=0; i<15; i++) {
    const gato = document.createElement('span');
    gato.classList.add('gato');
    gato.innerText = '🐱';
    gato.style.left = Math.random() * 90 + 'vw';
    gato.style.animationDuration = (6 + Math.random()*6) + 's';
    gato.style.fontSize = (20 + Math.random()*50) + 'px';
    container.appendChild(gato);
  }
});
