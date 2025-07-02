// interacciones-1.1.1.1terreno-americano.js

document.addEventListener('DOMContentLoaded', () => {
  //
  // 1) Ajuste de padding-top para secciones con encabezado fijo
  //
  const header = document.querySelector('header');
  const seccionesConEspacio = document.querySelectorAll('.con-espacio-encabezado');

  function ajustarEspacioEncabezado() {
    const alturaHeader = header.offsetHeight;
    seccionesConEspacio.forEach(seccion => {
      seccion.style.paddingTop = `${alturaHeader + 90}px`;
    });
  }
  ajustarEspacioEncabezado();
  window.addEventListener('resize', ajustarEspacioEncabezado);

  //
  // 2) Menú móvil (hamburguesa)
  //
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }

  //
  // 3) Modal de Emergencias
  //
  const btnEmergencias     = document.getElementById('botonEmergencias');
  const overlayEmergencias = document.getElementById('modalEmergencias');
  const cerrarEmergencias  = document.getElementById('cerrarModalEmergencias');
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

  //
  // 4) Modal de Carrito de Compras
  //
  const btnCarrito     = document.querySelector('.boton-carrito');
  const overlayCarrito = document.getElementById('modalCarrito');
  const cerrarCarrito  = document.getElementById('cerrarModalCarrito');
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


  //
  // 5) Redirección "Compra en línea"
  //
  const btnCompraOnline = document.querySelector('.btn-compra-online');
  if (btnCompraOnline) {
    btnCompraOnline.addEventListener('click', e => {
      e.preventDefault();
      window.location.href = "../1.13compras/1.13.1carritodecompras.html";
    });
  }

  //
  // 6) Modal "Quiero que me contacte un asesor"
  //
  const btnAsesor     = document.getElementById('abrirModalCotiza');
  const overlayAsesor = document.getElementById('modalCotiza');
  const cerrarAsesor  = document.getElementById('cerrarModalCotiza');
  if (btnAsesor && overlayAsesor && cerrarAsesor) {
    btnAsesor.addEventListener('click', e => {
      e.preventDefault();
      // cerrar carrito si estuviera abierto
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
});

