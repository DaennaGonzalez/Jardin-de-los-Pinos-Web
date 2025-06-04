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
      seccion.style.paddingTop = `${alturaHeader + 60}px`; // 60px extra para respiro, para que el inicio de la seccion empiece un poco más abajo del encabezado*/
    });
  }

  ajustarEspacioEncabezado(); // Ejecutar al cargar

  // Reajustar si la ventana cambia (modo responsivo)
  window.addEventListener("resize", ajustarEspacioEncabezado);
});

//AQUI TERMINA EL JAVASCRIPT BASE MAQUETA */


document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedorObituarios');
  const inputBuscar = document.getElementById('buscarNombre');
  const selectMostrar = document.getElementById('cantidadMostrar');

  let datosObituarios = [];

  // Función para cargar el CSV
  async function cargarCSV() {
    const response = await fetch('../1.3obituarios/basededatos_obituarios.csv');
    const texto = await response.text();
    const lineas = texto.trim().split('\n');
    const encabezados = lineas[0].split(',');

    datosObituarios = lineas.slice(1).map(linea => {
      const valores = linea.split(',');
      const obj = {};
      encabezados.forEach((key, i) => {
        obj[key.trim()] = valores[i]?.trim();
      });
      return obj;
    });

    renderizarObituarios();
  }

  // Función para renderizar tarjetas
  function renderizarObituarios() {
    contenedor.innerHTML = ''; // Limpia antes de renderizar

    const filtro = inputBuscar.value.toLowerCase();
    const cantidad = selectMostrar.value;

    const filtrados = datosObituarios.filter(d =>
      `${d.nombre_fallecido} ${d.apellido_familia}`.toLowerCase().includes(filtro)
    );

    const aMostrar = cantidad === 'todos' ? filtrados : filtrados.slice(0, parseInt(cantidad));

    aMostrar.forEach(dato => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'obituario';

      // Imagen base combinada: cara1 + cara2
      const canvas = document.createElement('canvas');
      canvas.width = 1440;
      canvas.height = 725;

      const ctx = canvas.getContext('2d');
      const img1 = new Image();
      const img2 = new Image();

      img1.src = '../1.6imagenes/plantilla-obituarios-cara1.jpg';
      img2.src = '../1.6imagenes/plantilla-obituarios-cara2.jpg';

      img2.onload = () => {
        ctx.drawImage(img1, 0, 0, 720, 725); // Cara 1
        ctx.drawImage(img2, 720, 0, 720, 725); // Cara 2

        // Texto dinámico
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px Montserrat';
        ctx.fillText(dato.nombre_fallecido, 80, 228);
        ctx.font = 'bold 28px Montserrat';
        ctx.fillText(dato.apellido_familia, 80, 330);

        ctx.font = 'bold 22px Montserrat';
        ctx.fillText(dato.num_sala, 918, 230);
        ctx.fillText(dato.hr_ingr + ' hrs', 1209, 230);
        ctx.fillText(dato.fecha_salida, 955, 340);
        ctx.fillText(dato.hr_salida + ' hrs', 1225, 340);
        ctx.font = 'bold 24px Montserrat';
        ctx.fillText(dato.nom_parquefuneral, 941, 540);

        const imgFinal = document.createElement('img');
        imgFinal.src = canvas.toDataURL('image/png');
        imgFinal.alt = `Obituario de ${dato.nombre_fallecido}`;
        tarjeta.appendChild(imgFinal);
      };

      contenedor.appendChild(tarjeta);
    });
  }

  inputBuscar.addEventListener('input', renderizarObituarios);
  selectMostrar.addEventListener('change', renderizarObituarios);

  cargarCSV();
});






