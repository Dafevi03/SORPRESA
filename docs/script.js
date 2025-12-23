/* =========================
   LOGIN
========================= */
function comprobar() {
  const usuarioCorrecto = "talycual";
  const passCorrecta = "250825dcn";

  const user = document.getElementById("user").value.toLowerCase();
  const pass = document.getElementById("pass").value.toLowerCase();

  if (user === usuarioCorrecto && pass === passCorrecta) {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    crearGatos(20);
  } else {
    const errorMsg = document.getElementById("error");
    errorMsg.innerText = "❌ Va Aimara piensa, espabila.";
    setTimeout(() => location.reload(), 1200);
  }
}

/* =========================
   GATOS FLOTANDO
========================= */
function crearGatos(cantidad) {
  const container = document.querySelector(".emojis-container");

  for (let i = 0; i < cantidad; i++) {
    const gato = document.createElement("span");
    gato.classList.add("gato");
    gato.innerText = "🐱";
    gato.style.left = Math.random() * 90 + "vw";
    gato.style.animationDuration = 5 + Math.random() * 6 + "s";
    gato.style.fontSize = 20 + Math.random() * 40 + "px";
    container.appendChild(gato);
  }
}

window.addEventListener("load", () => {
  crearGatos(15);
});

/* =========================
   ACERTIJOS
========================= */
document.querySelectorAll(".ver-pista").forEach((btn) => {
  btn.addEventListener("click", () => {
    const texto = btn.nextElementSibling;
    if (texto.style.display === "block") {
      texto.style.display = "none";
      btn.innerText = btn.innerText.replace("Ocultar", "Ver");
    } else {
      texto.style.display = "block";
      btn.innerText = btn.innerText.replace("Ver", "Ocultar");
    }
  });
});

/* =========================
   GALERÍA + LIGHTBOX
========================= */
const imagenes = document.querySelectorAll(".galeria img");
let indiceActual = 0;

// Rotación aleatoria inicial
imagenes.forEach((img, index) => {
  img.style.setProperty('--i', index);
  img.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
});

// Crear lightbox
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
lightbox.className = "lightbox";
lightbox.style.display = "none";

lightbox.innerHTML = `
  <span class="cerrar">&times;</span>
  <img id="lightbox-img">
  <div class="nav prev">&#10094;</div>
  <div class="nav next">&#10095;</div>
`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("#lightbox-img");
const cerrar = lightbox.querySelector(".cerrar");
const prev = lightbox.querySelector(".prev");
const next = lightbox.querySelector(".next");

// Abrir lightbox
imagenes.forEach((img, index) => {
  img.addEventListener("click", () => {
    indiceActual = index;
    mostrarImagen();
  });
});

function mostrarImagen() {
  lightbox.style.display = "flex";
  lightboxImg.src = imagenes[indiceActual].src;
}

// Navegación
prev.addEventListener("click", (e) => {
  e.stopPropagation();
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});

next.addEventListener("click", (e) => {
  e.stopPropagation();
  indiceActual = (indiceActual + 1) % imagenes.length;
  mostrarImagen();
});

// Cerrar
cerrar.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// Tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
