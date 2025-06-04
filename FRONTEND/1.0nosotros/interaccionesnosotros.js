// interacciones-1.1.1.1terreno-americano.js

document.addEventListener('DOMContentLoaded', () => {

  // === AJUSTE DE HEADER ===
  const header = document.querySelector('header');
  const seccionesConEspacio = document.querySelectorAll('.con-espacio-encabezado');

  function ajustarEspacioEncabezado() {
    const alturaHeader = header.offsetHeight;
    seccionesConEspacio.forEach(seccion => {
      seccion.style.paddingTop = `${alturaHeader + 70}px`;
    });
  }

  ajustarEspacioEncabezado();
  window.addEventListener('resize', ajustarEspacioEncabezado);

  // === MENÚ MÓVIL ===
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }

  // === MODAL EMERGENCIAS ===
  const btnEmergencias = document.getElementById('botonEmergencias');
  const overlayEmergencias = document.getElementById('modalEmergencias');
  const cerrarEmergencias = document.getElementById('cerrarModalEmergencias');

  if (btnEmergencias && overlayEmergencias && cerrarEmergencias) {
    btnEmergencias.addEventListener('click', () => {
      overlayEmergencias.classList.add('activo');
      document.body.style.overflow = 'hidden';
    });

    cerrarEmergencias.addEventListener('click', () => {
      overlayEmergencias.classList.remove('activo');
      document.body.style.overflow = '';
    });

    overlayEmergencias.addEventListener('click', e => {
      if (e.target === overlayEmergencias) {
        overlayEmergencias.classList.remove('activo');
        document.body.style.overflow = '';
      }
    });
  }

});


  // === MODAL CARRITO ===
  const btnCarrito = document.querySelector('.boton-carrito');
  const overlayCarrito = document.getElementById('modalCarrito');
  const cerrarCarrito = document.getElementById('cerrarModalCarrito');
  if (btnCarrito && overlayCarrito && cerrarCarrito) {
    btnCarrito.addEventListener('click', e => {
      e.preventDefault();
      overlayCarrito.classList.add('activo');
      document.body.style.overflow = 'hidden';
    });
    cerrarCarrito.addEventListener('click', () => {
      overlayCarrito.classList.remove('activo');
      document.body.style.overflow = '';
    });
    overlayCarrito.addEventListener('click', e => {
      if (e.target === overlayCarrito) {
        overlayCarrito.classList.remove('activo');
        document.body.style.overflow = '';
      }
    });
  }

  // === REDIRECCIÓN COMPRA EN LÍNEA ===
  const btnCompraOnline = document.querySelector('.btn-compra-online');
  if (btnCompraOnline) {
    btnCompraOnline.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = "../1.13compras/1.13.1carritodecompras.html";
    });
  }

  // === MODAL ASESOR ===
  const btnAsesor = document.getElementById('abrirModalCotiza');
  const overlayAsesor = document.getElementById('modalCotiza');
  const cerrarAsesor = document.getElementById('cerrarModalCotiza');
  if (btnAsesor && overlayAsesor && cerrarAsesor) {
    btnAsesor.addEventListener('click', e => {
      e.preventDefault();
      if (overlayCarrito) overlayCarrito.classList.remove('activo');
      overlayAsesor.classList.add('activo');
      document.body.style.overflow = 'hidden';
    });
    cerrarAsesor.addEventListener('click', () => {
      overlayAsesor.classList.remove('activo');
      document.body.style.overflow = '';
    });
    overlayAsesor.addEventListener('click', e => {
      if (e.target === overlayAsesor) {
        overlayAsesor.classList.remove('activo');
        document.body.style.overflow = '';
      }
    });
  }


  /*collage nosotros*/
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.fade-slide');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let current = 0;
  let interval = setInterval(showNextSlide, 4000);

  function showSlide(index) {
    slides[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
  }

  function showNextSlide() {
    showSlide(current + 1);
  }

  function showPrevSlide() {
    showSlide(current - 1);
  }

  nextBtn.addEventListener('click', () => {
    showNextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    showPrevSlide();
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(showNextSlide, 4000);
  }
});


 // === CARRUSEL DE TESTIMONIOS ===
document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedorTarjetas');
  const tarjetas   = Array.from(contenedor.children);
  const btnPrev    = document.getElementById('btn-prev');
  const btnNext    = document.getElementById('btn-next');
  const carrusel   = document.querySelector('.carrusel-testimonios');

  let indice = Math.floor(tarjetas.length / 2);

  const GAP = 35; // margen horizontal total entre tarjetas (16px a cada lado)

  // Calcula el ancho completo de una tarjeta (incluyendo margen horizontal)
  function anchoTarjeta() {
    const estilo = getComputedStyle(tarjetas[0]);
    return tarjetas[0].offsetWidth +
           parseInt(estilo.marginLeft) + parseInt(estilo.marginRight);
  }

  // Posiciona las tarjetas y aplica estilos a la activa
function dibujar() {
  const w = anchoTarjeta();
  const carruselRect = carrusel.getBoundingClientRect();
  const contenedorRect = contenedor.getBoundingClientRect();

  // Desplazamiento para centrar la tarjeta activa
  const centroCarrusel = carrusel.offsetWidth / 2;
  const desplazamiento = centroCarrusel - (w / 2) - (indice * w);

  contenedor.style.transform = `translateX(${desplazamiento}px)`;

  tarjetas.forEach((card, i) => {
    const activa = i === indice;
    card.style.transform = `scale(${activa ? 1.15 : 0.78})`;
    card.style.opacity   = activa ? '1' : '0.35';
    card.style.zIndex    = activa ? '5' : '1';
    card.classList.toggle('activa', activa);
  });
}

  // Botón siguiente
  btnNext.addEventListener('click', () => {
    indice = (indice + 1) % tarjetas.length;
    dibujar();
  });

  // Botón anterior
  btnPrev.addEventListener('click', () => {
    indice = (indice - 1 + tarjetas.length) % tarjetas.length;
    dibujar();
  });

  // Al hacer clic en cualquier tarjeta
  tarjetas.forEach((card, i) => {
    card.addEventListener('click', () => {
      indice = i;
      dibujar();
    });
  });

  // Redibujar en cambio de tamaño de pantalla
   window.addEventListener('resize', dibujar);
  dibujar(); // primera vez que se dibuja

  // AUTOPLAY cada 5 segundos
  setInterval(() => {
    indice = (indice + 1) % tarjetas.length;
    dibujar();
  }, 3500); /*3500 milisegundos o sea 3.5 seg*/
});

