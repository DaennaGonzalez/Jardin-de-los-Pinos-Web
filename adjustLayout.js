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



document.addEventListener('DOMContentLoaded', () => {
  // MENÚ MÓVIL
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });


    
  }// Verifica que la librería ya esté cargada
if (!window.supabase) {
  console.error("❌ Supabase no está definido. Asegúrate de cargar el script de supabase-js antes que este.");
}

// Inicializar cliente Supabase
const supabase = window.supabase.createClient(
  'https://uqgioswtmkjdjuadoncn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2lvc3d0bWtqZGp1YWRvbmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTYzMTcsImV4cCI6MjA2NTY3MjMxN30.vCLNRGVseLkR1RclsFanDUWYJXkib_X9Xx4kMNSBudM'
);

const form = document.getElementById('formCotiza');
const mensaje = document.getElementById('mensajeCotiza');
const spinner = document.getElementById('spinnerCotiza');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombreCotiza').value.trim();
    const correo = document.getElementById('correoCotiza').value.trim();
    const telefono = document.getElementById('telefonoCotiza').value.trim();

    // Mostrar spinner, ocultar mensaje
    spinner.classList.remove('oculto');
    mensaje.classList.add('oculto');

    try {
      const { data, error } = await supabase
        .from('tabla_cotizaplan')
        .insert([{ 
          nombre: nombre, 
          correo_electronico: correo, 
          telefono_celular: telefono 
        }]);

      spinner.classList.add('oculto');

      if (error) {
        console.error("❌ Error al insertar en Supabase:", error);
        mensaje.textContent = "❌ Error al guardar. Intenta más tarde.";
        mensaje.className = "mensaje-estado error";
      } else {
        console.log("✅ Datos enviados:", data);
        mensaje.textContent = "✅ ¡Gracias! Un asesor te contactará.";
        mensaje.className = "mensaje-estado exito";
        form.reset();
      }
    } catch (err) {
      spinner.classList.add('oculto');
      console.error("❌ Error inesperado:", err);
      mensaje.textContent = "❌ Error inesperado. Intenta más tarde.";
      mensaje.className = "mensaje-estado error";
    }

    mensaje.classList.remove('oculto');
  });
}


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
});