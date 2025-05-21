// ============================
// AJUSTES RESPONSIVOS
// ============================
function applyResponsiveAdjustments() {
  const windowWidth = window.innerWidth;

  const logo = document.getElementById('logoAnim');
  const pinos = document.getElementById('pinos');
  const cruz = document.getElementById('cruz');
  const panteon = document.getElementById('panteon');
  const cielo = document.getElementById('cielo');

  // Valores por defecto (pantalla grande)
  logo.style.transform = 'scale(1)';
  logo.style.top = '13%';
  pinos.style.top = '24%';
  cruz.style.top = '29%';
  panteon.style.transform = 'scale(1.0)';
  panteon.style.top = 'auto';
  cielo.style.width = '200%';
  cielo.style.left = '40%';
  cielo.style.top = '40%';
  cielo.style.transform = 'scale(3)';

  // Ajustes móviles progresivos
  if (windowWidth < 576) {
    logo.style.transform = 'scale(1.2)';
    logo.style.top = '60%';
    pinos.style.top = '72%';
    cruz.style.top = '74%';
    panteon.style.transform = 'scale(1.4)';
    panteon.style.top = '61%';
    cielo.style.top = '70%';
    cielo.style.transform = 'scale(3.2)';
  } else if (windowWidth < 720) {
    logo.style.transform = 'scale(1.1)';
    logo.style.top = '48%';
    pinos.style.top = '45%';
    cruz.style.top = '50%';
    panteon.style.transform = 'scale(1.3)';
    panteon.style.top = '42%';
    cielo.style.top = '70%';
    cielo.style.transform = 'scale(3.2)';
  }
}

// ============================
// AJUSTAR MARGEN SECCIÓN ANIMADA
// ============================
function ajustarMargenSeccionAnimada() {
  const header = document.querySelector('header');
  const seccion = document.querySelector('.seccion-mariposa');
  if (header && seccion) {
    const altoHeader = header.offsetHeight;
    seccion.style.marginTop = `${altoHeader}px`;
  }
}

// ============================
// EVENTOS
// ============================
window.addEventListener('load', () => {
  applyResponsiveAdjustments();
  ajustarMargenSeccionAnimada();
  setTimeout(applyResponsiveAdjustments, 500); // Para asegurar ajuste visual post-render
});

window.addEventListener('resize', () => {
  applyResponsiveAdjustments();
  ajustarMargenSeccionAnimada();
});

// ============================
// ANIMACIÓN CON GSAP
// ============================
gsap.to("#cielo", {
  y: -913,
  scrollTrigger: {
    trigger: "#seccionAnimada",
    start: "top top",
    end: "+=100vh",
    scrub: true,
    pin: true,
    immediateRender: true
  }
});

// ============================
// MODAL DE EMERGENCIAS
// ============================
document.addEventListener('DOMContentLoaded', function () {
  const abrirEmergencias = document.getElementById('abrirModalEmergencias');
  const modalEmergencias = document.getElementById('modalEmergencias');
  const cerrarEmergencias = document.getElementById('cerrarModalEmergencias');

  if (abrirEmergencias && modalEmergencias && cerrarEmergencias) {
    abrirEmergencias.addEventListener('click', (e) => {
      e.preventDefault();
      modalEmergencias.classList.add('activo');
    });

    cerrarEmergencias.addEventListener('click', () => {
      modalEmergencias.classList.remove('activo');
    });

    modalEmergencias.addEventListener('click', (e) => {
      if (e.target === modalEmergencias) {
        modalEmergencias.classList.remove('activo');
      }
    });
  } else {
    console.warn('No se encontró el modal de emergencias o sus elementos.');
  }
});
