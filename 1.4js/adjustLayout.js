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

// ============================
// INICIALIZAR SUPABASE
// ============================
var supabase2 = window.supabase.createClient(
  'https://uqgioswtmkjdjuadoncn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2lvc3d0bWtqZGp1YWRvbmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTYzMTcsImV4cCI6MjA2NTY3MjMxN30.vCLNRGVseLkR1RclsFanDUWYJXkib_X9Xx4kMNSBudM'
);

// ============================
// ENVÍO FORMULARIO COTIZA UN PLAN
// ============================
document.addEventListener('DOMContentLoaded', () => {
  const formCotiza = document.getElementById('formCotiza');
  const mensaje = document.getElementById('mensajeCotiza'); // Contenedor del mensaje

  if (formCotiza && mensaje) {
    formCotiza.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombreCotiza').value.trim();
      const correo_electronico = document.getElementById('correoCotiza').value.trim();
      const telefono_celular = document.getElementById('telefonoCotiza').value.trim();

      // Resetear mensaje
      mensaje.textContent = '';
      mensaje.className = 'mensaje-estado'; // Elimina clases anteriores

      const { data, error } = await supabase2
        .from('tabla_cotizaplan')
        .insert([{ nombre, correo_electronico, telefono_celular }]);

      if (error) {
        mensaje.textContent = '❌ Hubo un problema al guardar los datos. Intenta nuevamente.';
        mensaje.classList.add('error', 'mostrado');
      } else {
        mensaje.textContent = '✅ ¡Gracias! Tus datos se guardaron correctamente. Un asesor se pondrá en contacto contigo.';
        mensaje.classList.add('exito', 'mostrado');
        formCotiza.reset();
      }

      // Mostrar y ocultar después de 6 segundos
      mensaje.classList.remove('oculto');
      setTimeout(() => {
        mensaje.classList.add('oculto');
        mensaje.classList.remove('mostrado');
      }, 6000);
    });
  }
});

