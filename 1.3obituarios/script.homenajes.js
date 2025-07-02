import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Conexión a Supabase
const supabaseUrl = 'https://uqgioswtmkjdjuadoncn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZ2lvc3d0bWtqZGp1YWRvbmNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTYzMTcsImV4cCI6MjA2NTY3MjMxN30.vCLNRGVseLkR1RclsFanDUWYJXkib_X9Xx4kMNSBudM'
const supabase = createClient(supabaseUrl, supabaseKey)

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedorHomenajes')
  const inputBuscar = document.getElementById('buscarHomenaje')
  const selectCantidad = document.getElementById('cantidadHomenajes')
  const btnIzq = document.querySelector('.btn-carrusel.izq')
  const btnDer = document.querySelector('.btn-carrusel.der')
  const btnAbrir = document.getElementById('abrirModalHomenaje')
  const modal = document.getElementById('modalHomenaje')
  const btnCerrar = document.getElementById('cerrarModalHomenaje')
  const btnEnviar = document.getElementById('btnEnviarHomenaje')
  const inputTexto = document.getElementById('inputHomenaje')
  const inputAutor = document.getElementById('inputAutor')
  const inputDirigido = document.getElementById('inputDirigido')

  let datosHomenajes = []

  async function cargarHomenajes() {
  const { data, error } = await supabase
    .from('tabla_homenajes')
    .select('*')
    .order('id', { ascending: false })

  console.log('✅ Datos obtenidos de Supabase:', data)  // 👈 Agrega esto

  if (error) {
    console.error('❌ Error al obtener homenajes:', error.message)
    return
  }

  datosHomenajes = data || []
  renderizarHomenajes()
}


  function renderizarHomenajes() {
    contenedor.innerHTML = ''

    const filtro = inputBuscar.value.toLowerCase()
    const cantidad = selectCantidad.value
    const filtrados = datosHomenajes.filter(h =>
      h.frase_homenaje?.toLowerCase().includes(filtro) ||
      h.autor_homenaje?.toLowerCase().includes(filtro) ||
      h.aquiensedirige_homenaje?.toLowerCase().includes(filtro)
    )

    const aMostrar = cantidad === 'todos' ? filtrados : filtrados.slice(0, parseInt(cantidad))

    aMostrar.forEach(h => {
      const tarjeta = document.createElement('div')
      tarjeta.className = 'tarjeta-homenaje'
      tarjeta.innerHTML = `
        “${h.frase_homenaje}”
        <br><span class="autor">— ${h.autor_homenaje || 'Anónimo'}, dedicado a ${h.aquiensedirige_homenaje || 'Desconocido'}</span>
      `
      contenedor.appendChild(tarjeta)
    })
  }

  // Eventos
  inputBuscar.addEventListener('input', renderizarHomenajes)
  selectCantidad.addEventListener('change', renderizarHomenajes)

  btnIzq.addEventListener('click', () => {
    contenedor.scrollBy({ left: -300, behavior: 'smooth' })
  })

  btnDer.addEventListener('click', () => {
    contenedor.scrollBy({ left: 300, behavior: 'smooth' })
  })

  btnAbrir.addEventListener('click', () => {
    modal.classList.add('activo')
    inputTexto.value = ''
    inputAutor.value = ''
    inputDirigido.value = ''
  })

  btnCerrar.addEventListener('click', () => {
    modal.classList.remove('activo')
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('activo')
    }
  })

  btnEnviar.addEventListener('click', async () => {
    const texto = inputTexto.value.trim()
    const autor = inputAutor.value.trim() || 'Anónimo'
    const dirigido = inputDirigido.value.trim() || 'Desconocido'

    if (texto === '') {
      alert('Por favor, escribe un homenaje.')
      return
    }

    const { error } = await supabase
      .from('tabla_homenajes')
      .insert([{ frase_homenaje: texto, autor_homenaje: autor, aquiensedirige_homenaje: dirigido }])

    if (error) {
      alert('Error al enviar homenaje: ' + error.message)
      return
    }

    modal.classList.remove('activo')
    await cargarHomenajes()
  })

  cargarHomenajes()
})
