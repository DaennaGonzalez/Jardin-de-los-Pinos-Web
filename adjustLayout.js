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
    immediateRender: true,
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const recorridoLinks = document.querySelectorAll('.capilla-card');
  const modalRecorrido = document.getElementById('modalRecorrido');
  const iframeRecorrido = document.getElementById('iframeRecorrido');
  const cerrarModalRecorrido = document.getElementById('cerrarModalRecorrido');

  if (recorridoLinks.length && modalRecorrido && iframeRecorrido && cerrarModalRecorrido) {
    recorridoLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('data-link');
        iframeRecorrido.src = url;
        modalRecorrido.classList.add('activo');
      });
    });

    cerrarModalRecorrido.addEventListener('click', () => {
      modalRecorrido.classList.remove('activo');
      iframeRecorrido.src = '';
    });

    modalRecorrido.addEventListener('click', (e) => {
      if (e.target === modalRecorrido) {
        modalRecorrido.classList.remove('activo');
        iframeRecorrido.src = '';
      }
    });
  }
});




// ============================
// FUNCIONAMIENTO DE ABRIR Y CERRAR MENÚ
// ============================
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ===== MENÚ MÓVIL =====
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
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
});

// 1. Conectar a Supabase
const supabase = supabase.createClient(
  'https://uqgioswtmkjdjuadoncn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2lvc3d0bWtqZGp1YWRvbmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTYzMTcsImV4cCI6MjA2NTY3MjMxN30.vCLNRGVseLkR1RclsFanDUWYJXkib_X9Xx4kMNSBudM'
);

// 2. Capturar envío del formulario en el modal
const formCotiza = document.querySelector('.formulario-modal');

if (formCotiza) {
  formCotiza.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('input[placeholder="Escribe tu nombre"]').value;
    const correo = document.querySelector('input[placeholder="correo@ejemplo.com"]').value;
    const telefono = document.querySelector('input[placeholder="+52..."]').value;

    const { data, error } = await supabase
      .from('tabla_cotizaplan')
      .insert([
        {
          nombre: nombre,
          correo_electronico: correo,
          telefono_celular: telefono
        }
      ]);

    if (error) {
      console.error("❌ Error al guardar en Supabase:", error.message);
      alert("Ocurrió un error al enviar tus datos. Intenta más tarde.");
    } else {
      alert("✅ ¡Gracias! Te contactaremos pronto.");
      formCotiza.reset();
      document.getElementById('modalCotiza')?.classList.remove('activo');
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
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
});

/*CAMBIOS RECIENTES CARRITO*/
document.addEventListener('DOMContentLoaded', () => {
  const abrirCarrito = document.querySelector('.boton-carrito');
  const modalCarrito = document.getElementById('modalCarrito');
  const cerrarCarrito = document.getElementById('cerrarModalCarrito');

  if (abrirCarrito && modalCarrito && cerrarCarrito) {
    abrirCarrito.addEventListener('click', (e) => {
      e.preventDefault();
      modalCarrito.classList.add('activo');
    });

    cerrarCarrito.addEventListener('click', () => {
      modalCarrito.classList.remove('activo');
    });

    modalCarrito.addEventListener('click', (e) => {
      if (e.target === modalCarrito) {
        modalCarrito.classList.remove('activo');
      }
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const btnFolio = document.querySelector('.btn-folio');
  if (btnFolio) {
    btnFolio.addEventListener('click', () => {
      window.location.href = "1.13compras/1.13.2pagoconfoliocontrato.html";
    });
  }
});


/*CAMBIOS RECIENTES CARRITO*/