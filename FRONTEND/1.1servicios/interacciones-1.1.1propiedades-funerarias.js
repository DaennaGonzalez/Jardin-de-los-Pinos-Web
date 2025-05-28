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





// COMIENZA JAVASCRIPT DE PROPIEDADES FUNERARIAS: SELECCIÓN DE SUCURSALES + REDIRECCIÓN

document.addEventListener('DOMContentLoaded', () => {
  const estadoSelect = document.getElementById('estado');
  const ciudadSelect = document.getElementById('ciudad');
  const propiedadesContainer = document.getElementById('propiedades-container');

  const estadoSucursales = {
    "Nuevo León": ["Cumbres", "San Bernabé", "Apodaca", "Guadalupe", "Escobedo"],
    "Coahuila": ["Saltillo", "Torreón"]
  };

  const propiedadesPorSucursal = {
    "Cumbres": ["Terreno Americano", "Capilla Elevada", "Nicho", "Terreno Estilo Tradicional"],
    "San Bernabé": ["Terreno Americano", "Capilla Elevada", "Nicho", "Terreno Estilo Tradicional"],
    "Apodaca": ["Terreno Americano", "Capilla Elevada", "Nicho", "Terreno Estilo Tradicional"],
    "Guadalupe": ["Terreno Americano", "Capilla Elevada", "Nicho", "Terreno Estilo Tradicional"],
    "Escobedo": ["Terreno Americano", "Nicho", "Terreno Estilo Tradicional"],
    "Saltillo": ["Terreno Americano", "Capilla Elevada", "Nicho", "Terreno Estilo Tradicional"],
    "Torreón": ["Terreno Americano", "Capilla Elevada", "Nicho", "Terreno Estilo Tradicional"]
  };

  const propiedadImagenes = {
    "Terreno Americano": "../1.6imagenes/propiedad-terrenoamericano.jpg",
    "Capilla Elevada": "../1.6imagenes/propiedad-capillaelevada.jpg",
    "Nicho": "../1.6imagenes/propiedad-nicho.jpg",
    "Terreno Estilo Tradicional": "../1.6imagenes/propiedad-terrenotradicional.jpg"
  };

  const rutasRedireccion = {
    "Terreno Americano": "../1.1servicios/1.1.1.1terreno-americano.html",
    "Capilla Elevada": "../1.1servicios/1.1.1.2capilla-elevada.html",
    "Nicho": "../1.1servicios/1.1.1.3nicho.html",
    "Terreno Estilo Tradicional": "../1.1servicios/1.1.1.4terreno-estilo-tradicional.html"
  };

  // EVENTO: Cambiar estado → cargar sucursales
  estadoSelect.addEventListener('change', () => {
    const estado = estadoSelect.value;
    ciudadSelect.innerHTML = '<option value="">-- Selecciona una sucursal --</option>';
    propiedadesContainer.innerHTML = '';

    if (estadoSucursales[estado]) {
      estadoSucursales[estado].forEach(sucursal => {
        const option = document.createElement('option');
        option.value = sucursal;
        option.textContent = sucursal;
        ciudadSelect.appendChild(option);
      });
    }
  });

  // EVENTO: Cambiar ciudad → generar propiedades
  ciudadSelect.addEventListener('change', () => {
    const sucursal = ciudadSelect.value;
    propiedadesContainer.innerHTML = '';

    if (!sucursal || !propiedadesPorSucursal[sucursal]) return;

    const propiedades = propiedadesPorSucursal[sucursal];

    propiedades.forEach((nombre, i) => {
      const div = document.createElement('div');
      div.classList.add('propiedad-funeraria', 'aparecer');
      div.innerHTML = `
        <img src="${propiedadImagenes[nombre]}" alt="${nombre}">
        <h4>${nombre}</h4>
      `;

      // Eliminar clase animación después del rebote
      setTimeout(() => {
        div.classList.remove('aparecer');
      }, 700 + i * 100);

      // Redirigir al hacer clic
      div.addEventListener('click', () => {
        const destino = rutasRedireccion[nombre];
        if (destino) {
          window.location.href = destino;
        }
      });

      propiedadesContainer.appendChild(div);
    });
  });
});

// EFECTO GELATINA EN APARICIÓN: (debes tener .aparecer en CSS con @keyframes)











// AQUI TERMINA EL JAVASCRIPT DE PROPIEDADES FUNERARIAS ESPECIALMENTE PARA LA SELECCION DE SUCURSALES//



