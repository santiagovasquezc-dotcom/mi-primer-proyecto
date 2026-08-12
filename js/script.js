// ========================================
// 1. DATOS DEL EMPRENDIMIENTO
// ========================================

const negocio = {

  nombre: "TERRA PSCJ",

  eslogan: "El territorio, bien construido",

  descripcion:
    "Inmobiliaria en Rionegro, Antioquia: venta de casas, lotes y fincas, asesoría en construcción y diseño 3D de proyectos.",

  direccion:
    "Km 5, Vía Rionegro - El Carmen de Viboral (Vereda Garzonas)",

  telefono:
    "3134499816",

  horario:
    "Lunes a sábado, 8:00 a.m. a 5:00 p.m.",

  // WhatsApp: Colombia = 57
  whatsapp:
    "573134499816",

  instagram:
    "Próximo",

  tiktok:
    "Próximo",

  facebook:
    "Próximo",

  servicios: [

    {
      nombre: "Casas",
      descripcion:
        "Casas urbanas y en conjuntos cerrados, listas para habitar o remodelar.",
      icono: "bi-house-door",
      precio: "Consultar precio"
    },

    {
      nombre: "Lotes",
      descripcion:
        "Lotes urbanos y rurales con estudio de norma urbanística.",
      icono: "bi-geo-alt",
      precio: "Consultar precio"
    },

    {
      nombre: "Fincas",
      descripcion:
        "Fincas de recreo y de producción en el Oriente antioqueño.",
      icono: "bi-tree",
      precio: "Consultar precio"
    },

    {
      nombre: "Diseño 3D y construcción",
      descripcion:
        "Planos, renders y acompañamiento en obra hasta la entrega.",
      icono: "bi-badge-3d",
      precio: "Consultar precio"
    }

  ]
};


// ========================================
// 2. MOSTRAR INFORMACIÓN
// ========================================

document.getElementById("nombreNegocio")
  .textContent = negocio.nombre;

document.getElementById("eslogan")
  .textContent = negocio.eslogan;

document.getElementById("descripcion")
  .textContent = negocio.descripcion;

document.getElementById("direccion")
  .textContent = "Dirección: " + negocio.direccion;

document.getElementById("telefono")
  .textContent = "WhatsApp: " + negocio.telefono;

document.getElementById("horario")
  .textContent = "Horario: " + negocio.horario;


// ========================================
// 3. WHATSAPP
// ========================================

const mensaje = encodeURIComponent(
  "Hola, quiero información sobre los servicios de "
  + negocio.nombre
);

document.getElementById("botonWhatsApp").href =
  "https://wa.me/"
  + negocio.whatsapp
  + "?text="
  + mensaje;


// ========================================
// 4. REDES SOCIALES
// ========================================

document.getElementById("instagram").textContent =
  negocio.instagram;

document.getElementById("tiktok").textContent =
  negocio.tiktok;

document.getElementById("facebook").textContent =
  negocio.facebook;


// ========================================
// 5. SERVICIOS
// ========================================

const contenedor =
  document.getElementById("listaServicios");

negocio.servicios.forEach((servicio) => {

  contenedor.innerHTML += `

    <div class="col-md-6 col-lg-3">

      <div class="card service-card p-4">

        <div class="card-body text-center">

          <i class="bi ${servicio.icono} fs-1" style="color: var(--verde);"></i>

          <h3 class="h5 mt-3">
            ${servicio.nombre}
          </h3>

          <p>
            ${servicio.descripcion}
          </p>

          <p class="price">
            ${servicio.precio}
          </p>

          <a href="#contacto"
             class="btn btn-primary">
            Más información
          </a>

        </div>

      </div>

    </div>

  `;
});