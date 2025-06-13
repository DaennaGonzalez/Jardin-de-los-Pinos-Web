//AQUI ESTA EL JAVASCRIPT BASE MAQUETA */

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

document.getElementById('botonEmergencias').addEventListener('click', () => {
  document.getElementById('modalEmergencias').classList.add('activo');
});

document.getElementById('cerrarModalEmergencias').addEventListener('click', () => {
  document.getElementById('modalEmergencias').classList.remove('activo');
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
      window.location.href = "../1.13compras/1.13.2pagoconfoliocontrato.html";
    });
  }
});


/*CAMBIOS RECIENTES CARRITO*/

// Activar modal de emergencias
document.getElementById('botonEmergencias').addEventListener('click', () => {
  document.getElementById('modalEmergencias').classList.add('activo');
});
document.getElementById('cerrarModalEmergencias').addEventListener('click', () => {
  document.getElementById('modalEmergencias').classList.remove('activo');
});

// Activar modal del carrito
document.querySelector('.boton-carrito').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('modalCarrito').classList.add('activo');
});
document.getElementById('cerrarModalCarrito').addEventListener('click', () => {
  document.getElementById('modalCarrito').classList.remove('activo');
});


    document.addEventListener('DOMContentLoaded', () => {
      const toggle     = document.getElementById('menuToggle');
      const mobileNav  = document.getElementById('mobileMenu');

      if (toggle && mobileNav) {
        toggle.addEventListener('click', () => {
          mobileNav.classList.toggle('show');
        });
      } else {
        console.warn('No encontré #menuToggle o #mobileMenu en el DOM');
      }
    });

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const seccionesConEspacio = document.querySelectorAll(".con-espacio-encabezado");

  function ajustarEspacioEncabezado() {
    const alturaHeader = header.offsetHeight;
    seccionesConEspacio.forEach(seccion => {
      seccion.style.paddingTop = `${alturaHeader + 100}px`; // 60px extra para respiro, para que el inicio de la seccion empiece un poco más abajo del encabezado*/
    });
  }

  ajustarEspacioEncabezado(); // Ejecutar al cargar

  // Reajustar si la ventana cambia (modo responsivo)
  window.addEventListener("resize", ajustarEspacioEncabezado);
});

//AQUI TERMINA EL JAVASCRIPT BASE MAQUETA */


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.promo-img-wrapper');
  const prev = document.getElementById('promo-prev');
  const next = document.getElementById('promo-next');
  let current = 0;

  function showSlide(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  next.addEventListener('click', () => showSlide(current + 1));
  prev.addEventListener('click', () => showSlide(current - 1));
});


document.addEventListener('DOMContentLoaded', () => {
  const promoSlider = document.getElementById('promoSlider');
  const promoImages = promoSlider.querySelectorAll('.promo-img-wrapper');
  const prevBtn = document.getElementById('promo-prev');
  const nextBtn = document.getElementById('promo-next');
  let current = 0;
  let autoplay;

  function updateSlide(index) {
    promoImages.forEach((img, i) => {
      img.classList.remove('active');
      img.style.transform = `translateX(${(i - index) * 100}%)`;
    });
    promoImages[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % promoImages.length;
    updateSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + promoImages.length) % promoImages.length;
    updateSlide(current);
  }

  // Event listeners
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  // Autoplay
  function startAutoplay() {
    autoplay = setInterval(nextSlide, 2000); // cambia cada 5 segundos
  }

  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }

  // Init
  updateSlide(current);
  startAutoplay();
});






