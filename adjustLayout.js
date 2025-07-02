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

  if (!logo || !pinos || !cruz || !panteon || !cielo) return;

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
// EVENTOS AL CARGAR Y REDIMENSIONAR
// ============================
window.addEventListener('load', () => {
  applyResponsiveAdjustments();
  ajustarMargenSeccionAnimada();
  setTimeout(applyResponsiveAdjustments, 500); // Ajuste visual post-render

  // ============================
  // ANIMACIÓN CON GSAP
  // ============================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const cielo = document.getElementById('cielo');
    const seccionAnimada = document.getElementById('seccionAnimada');

    if (cielo && seccionAnimada) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("#cielo", {
        y: -913,
        scrollTrigger: {
          trigger: "#seccionAnimada",
          start: "top top",
          end: "+=100vh",
          scrub: true,
          pin: true,
          immediateRender: true,
        }
      });
    } else {
      console.warn("⚠️ No se encontró #cielo o #seccionAnimada para la animación.");
    }
  } else {
    console.error("❌ GSAP o ScrollTrigger no están disponibles.");
  }
});

window.addEventListener('resize', () => {
  applyResponsiveAdjustments();
  ajustarMargenSeccionAnimada();
});




const formCotiza = document.getElementById('formCotiza');
const mensaje = document.getElementById('mensajeCotiza');

if (formCotiza) {
  formCotiza.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombreCotiza').value;
    const correo_electronico = document.getElementById('correoCotiza').value;
    const telefono_celular = document.getElementById('telefonoCotiza').value;

    mensaje.classList.remove('exito', 'error', 'mostrado');
    mensaje.textContent = "";

    const { data, error } = await supabase2
      .from('tabla_cotizaplan')
      .insert([{ nombre, correo_electronico, telefono_celular }]);

    if (error) {
      console.error("❌ Error al guardar datos:", error);
      mensaje.textContent = "❌ Hubo un problema al guardar los datos. Intenta nuevamente.";
      mensaje.classList.add("mensaje-estado", "error", "mostrado");
    } else {
      mensaje.textContent = "✅ ¡Gracias! Tus datos se guardaron correctamente.";
      mensaje.classList.add("mensaje-estado", "exito", "mostrado");
      formCotiza.reset();
    }

    // Ocultar el mensaje después de 6 segundos
    setTimeout(() => {
      mensaje.classList.remove('mostrado');
    }, 6000);
  });
}


  



  // ===== MODAL: COTIZA UN PLAN =====
  const abrirModal = document.getElementById('abrirModalCotiza');
  const modal = document.getElementById('modalCotiza');
  const cerrarModal = document.getElementById('cerrarModalCotiza');

  if (abrirModal && modal && cerrarModal) {
    abrirModal.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('activo');
    });

    cerrarModal.addEventListener('click', () => {
      modal.classList.remove('activo');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('activo');
      }
    });
  } else {
    console.warn("No se encontró el botón o el modal de Cotiza.");
  }


// ============================
// FUNCIONAMIENTO DE ABRIR Y CERRAR MENÚ
// ============================
document.addEventListener('DOMContentLoaded', () => {
  // AJUSTES RESPONSIVOS, GSAP, ScrollTrigger…
  applyResponsiveAdjustments();
  ajustarMargenSeccionAnimada();
  // Lógica de menú móvil:
  const toggle    = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileMenu');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  }
  // Cualquier otro listener o inicialización aquí…
});




/*seccion para que se oculten los botones al dar scroll*/
window.addEventListener("scroll", () => {
  const y = window.scrollY;

  if (y < 100) {
    document.querySelectorAll(".boton-flotante").forEach(btn => {
      btn.classList.remove("ocultar-boton");
    });
    hasHidden = false;
    scrollCount = 0;
  }
});


  // MODAL DE EMERGENCIAS
  const botonEmergencias = document.getElementById('botonEmergencias');
  const modalEmergencias = document.getElementById('modalEmergencias');
  const cerrarEmergencias = document.getElementById('cerrarModalEmergencias');

  if (botonEmergencias && modalEmergencias && cerrarEmergencias) {
    botonEmergencias.addEventListener('click', () => {
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
  }


//CAMBIOS POR SUPABASE,


