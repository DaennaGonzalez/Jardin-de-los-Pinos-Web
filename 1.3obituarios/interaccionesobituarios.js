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


//OBITUARIOS *//

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedorObituarios');
  const inputBuscar = document.getElementById('buscarNombre');
  const selectMostrar = document.getElementById('cantidadMostrar');

  let datosObituarios = [];

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

  function renderizarObituarios() {
    contenedor.innerHTML = '';

    const filtro = inputBuscar.value.toLowerCase();
    const cantidad = selectMostrar.value;

    const filtrados = datosObituarios.filter(d =>
      `${d.nombre_fallecido} ${d.apellido_familia}`.toLowerCase().includes(filtro)
    );

    const aMostrar = cantidad === 'todos' ? filtrados : filtrados.slice(0, parseInt(cantidad));

    aMostrar.forEach(dato => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'obituario';

      const tarjetaInterna = document.createElement('div');
      tarjetaInterna.className = 'tarjeta-obituario';

      const canvas = document.createElement('canvas');
      canvas.width = 1440;
      canvas.height = 725;

      const ctx = canvas.getContext('2d');
      const img1 = new Image();
      const img2 = new Image();

      img1.src = '../1.6imagenes/plantilla-obituarios-cara1.jpg';
      img2.src = '../1.6imagenes/plantilla-obituarios-cara2.jpg';

      img2.onload = () => {
        ctx.drawImage(img1, 0, 0, 720, 725);
        ctx.drawImage(img2, 720, 0, 720, 725);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 40px Montserrat';
        ctx.fillText(dato.nombre_fallecido, 200, 275);
        ctx.fillText(dato.apellido_familia, 200, 510);

        ctx.font = 'bold 19px Montserrat';
        ctx.fillText(dato.num_sala, 925, 245);
        ctx.fillText(dato.hr_ingr, 1209, 248);
        ctx.fillText(dato.fecha_salida, 970, 360);
        ctx.fillText(dato.hr_salida, 1220, 360);

        ctx.font = 'bold 24px Montserrat';
        ctx.fillText(dato.nom_parquefuneral, 940, 520);

        const imgFinal = document.createElement('img');
        imgFinal.src = canvas.toDataURL('image/png');
        imgFinal.alt = `Obituario de ${dato.nombre_fallecido}`;
        imgFinal.className = 'img-obituario';

        imgFinal.addEventListener('click', () => {
          mostrarModal(imgFinal.src, `Obituario de ${dato.nombre_fallecido}`);
        });

        tarjetaInterna.appendChild(imgFinal);
        tarjeta.appendChild(tarjetaInterna);
        contenedor.appendChild(tarjeta);
      };
    });
  }

  function mostrarModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'modal-obituario';

    const modalContenido = document.createElement('div');
    modalContenido.className = 'contenido-modal';

    const cerrar = document.createElement('span');
    cerrar.className = 'cerrar-modal';
    cerrar.innerHTML = '&times;';
    cerrar.addEventListener('click', () => modal.remove());

    const imagen = document.createElement('img');
    imagen.src = src;
    imagen.alt = alt;

    const botonDescarga = document.createElement('a');
    botonDescarga.href = src;
    botonDescarga.download = `${alt}.png`;
    botonDescarga.className = 'btn-descargar';
    botonDescarga.textContent = 'Descargar';

    modalContenido.appendChild(cerrar);
    modalContenido.appendChild(imagen);
    modalContenido.appendChild(botonDescarga);
    modal.appendChild(modalContenido);
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }

  inputBuscar.addEventListener('input', renderizarObituarios);
  selectMostrar.addEventListener('change', renderizarObituarios);

  cargarCSV();
});



document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedorHomenajes');
  const inputBuscar = document.getElementById('buscarHomenaje');
  const selectCantidad = document.getElementById('cantidadHomenajes');
  const btnIzq = document.querySelector('.btn-carrusel.izq');
  const btnDer = document.querySelector('.btn-carrusel.der');

  let datosHomenajes = [];

  async function cargarCSV() {
    const response = await fetch('../1.3obituarios/basededatos_homenajes.csv');
    const texto = await response.text();
    const lineas = texto.trim().split('\n');
    const encabezados = lineas[0].split(',');

    datosHomenajes = lineas.slice(1).map(linea => {
      const valores = linea.split(',');
      const obj = {};
      encabezados.forEach((key, i) => {
        obj[key.trim()] = valores[i]?.trim();
      });
      return obj;
    });

    renderizarHomenajes();
  }

  function renderizarHomenajes() {
    contenedor.innerHTML = '';

    const filtro = inputBuscar.value.toLowerCase();
    const cantidad = selectCantidad.value;

    const filtrados = datosHomenajes.filter(d =>
      d.frase_homenaje.toLowerCase().includes(filtro) ||
      d.autor_homenaje.toLowerCase().includes(filtro) ||
      d.aquiensedirige_homenaje.toLowerCase().includes(filtro)
    );

    const aMostrar = cantidad === 'todos' ? filtrados : filtrados.slice(0, parseInt(cantidad));

    aMostrar.forEach(h => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'tarjeta-homenaje';
      tarjeta.innerHTML = `“${h.frase_homenaje}”<br>
        <span class="autor">— ${h.autor_homenaje || 'Anónimo'}, dedicado a ${h.aquiensedirige_homenaje}</span>`;
      contenedor.appendChild(tarjeta);
    });
  }

  // Eventos de filtrado y cantidad
  inputBuscar.addEventListener('input', renderizarHomenajes);
  selectCantidad.addEventListener('change', renderizarHomenajes);

  // Modal de nuevo homenaje
  const btnAbrir = document.getElementById('abrirModalHomenaje');
  const modal = document.getElementById('modalHomenaje');
  const btnCerrar = document.getElementById('cerrarModalHomenaje');
  const btnEnviar = document.getElementById('btnEnviarHomenaje');
  const inputTexto = document.getElementById('inputHomenaje');
  const inputAutor = document.getElementById('inputAutor');
  const inputDirigido = document.getElementById('inputDirigido');

  btnAbrir.addEventListener('click', () => {
    modal.classList.add('activo');
    inputTexto.value = '';
    inputAutor.value = '';
    inputDirigido.value = '';
  });

  btnCerrar.addEventListener('click', () => modal.classList.remove('activo'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('activo');
  });

  btnEnviar.addEventListener('click', () => {
    const texto = inputTexto.value.trim();
    const autor = inputAutor.value.trim() || 'Anónimo';
    const dirigido = inputDirigido.value.trim() || 'Desconocido';

    if (texto === '') {
      alert('Por favor, escribe un homenaje.');
      return;
    }

    const nuevo = {
      frase_homenaje: texto,
      autor_homenaje: autor,
      aquiensedirige_homenaje: dirigido
    };

    datosHomenajes.unshift(nuevo);
    renderizarHomenajes();
    modal.classList.remove('activo');
  });

  // Botones carrusel (opcional scroll)
  btnIzq.addEventListener('click', () => {
    contenedor.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnDer.addEventListener('click', () => {
    contenedor.scrollBy({ left: 300, behavior: 'smooth' });
  });

  cargarCSV();
});

