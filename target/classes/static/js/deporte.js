const productos = [
  {
    id: 1,
    marca: "GAMS",
    nombre: "Alianza Lima - Temporada 1997",
    precio: 84.9,
    precioAnterior: null,
    descuento: "15%",
    imagen: "https://retrofc.pe/cdn/shop/files/IMG_6329-1.jpg?v=1684447068",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 2,
    marca: "GAMS",
    nombre: "Universitario - Temporada 2000",
    precio: 84.9,
    precioAnterior: null,
    descuento: null,
    imagen: "https://retrofc.pe/cdn/shop/files/P7_3.jpg?v=1698263101",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 3,
    marca: "GAMS",
    nombre: "Sporting Cristal - Alterna - Temporada 1997",
    precio: 84.9,
    precioAnterior: null,
    descuento: "15%",
    imagen: "https://retrofc.pe/cdn/shop/files/IMG_6141-1.jpg?v=1684445150",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 4,
    marca: "GAMS",
    nombre: "Barcelona - Temporada 2014/15",
    precio: 89.9,
    precioAnterior: null,
    descuento: null,
    imagen: "https://retrofc.pe/cdn/shop/files/IMG_6245-1.jpg?v=1684446243",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 5,
    marca: "GAMS",
    nombre: "Real Madrid - Temporada 2016/17",
    precio: 79.9,
    precioAnterior: null,
    descuento: null,
    imagen: "https://retrofc.pe/cdn/shop/files/retrofc-real1.jpg?v=1707964521",
    nuevo: true,
    envioGratis: true,
  },
  {
    id: 6,
    marca: "GAMS",
    nombre: "Italia - Mundial Alemania 2006",
    precio: 89.9,
    precioAnterior: null,
    descuento: null,
    imagen: "https://retrofc.pe/cdn/shop/files/IMG_5953-1.jpg?v=1684421092",
    nuevo: false,
    envioGratis: true,
  },
];

function renderizarProductos() {
  const contenedor = document.getElementById("product-container");
  contenedor.innerHTML = ""; // Limpiamos el contenedor primero

  productos.forEach((producto) => {
    const productoHTML = `
          <div class="col">
              <div class="card product-card h-100 border-0 shadow-sm">
                  <div class="position-relative">
                      ${
                        producto.descuento
                          ? `<div class="discount-badge">-${producto.descuento}</div>`
                          : ""
                      }
                      <div class="product-img-container">
                          <img src="${producto.imagen}" alt="${
      producto.nombre
    }" class="product-img">
                      </div>
                      ${
                        producto.nuevo
                          ? `<div class="position-absolute new-badge">
                          <span class="badge bg-danger">NUEVO</span>
                      </div>`
                          : ""
                      }
                  </div>
                  <div class="card-body d-flex flex-column">
                      <div class="brand text-uppercase">${producto.marca}</div>
                      <h5 class="product-title mb-2">${producto.nombre}</h5>
                      ${
                        producto.envioGratis
                          ? `<div class="mb-2">
                          <span class="free-shipping"><i class="bi bi-truck"></i>Envío gratis en APP</span>
                      </div>`
                          : ""
                      }
                      <div class="d-flex align-items-center mb-3">
                          <span class="price me-2">S/ ${producto.precio.toFixed(
                            2
                          )}</span>
                          ${
                            producto.precioAnterior
                              ? `<span class="old-price">S/ ${producto.precioAnterior.toFixed(
                                  2
                                )}</span>`
                              : ""
                          }
                      </div>
                      <div class="mt-auto d-flex flex-column">
                          <button class="btn btn-action mb-2 btn-add-cart" data-id="${
                            producto.id
                          }"><i class="bi bi-cart-plus me-1"></i>Añadir al carrito</button>
                          <button class="btn btn-action btn-comprar" data-id="${
                            producto.id
                          }">Comprar</button>
                      </div>
                  </div>
              </div>
          </div>
      `;

    contenedor.innerHTML += productoHTML;
  });

  document.querySelectorAll(".btn-comprar").forEach((button) => {
    button.addEventListener("click", abrirModalCompra);
  });
}

function abrirModalCompra(event) {
  const productoId = parseInt(event.currentTarget.getAttribute("data-id"));
  const producto = productos.find((p) => p.id === productoId);

  if (producto) {
    document.getElementById("modal-product-img").src = producto.imagen;
    document.getElementById("modal-product-name").textContent = producto.nombre;
    document.getElementById("modal-product-brand").textContent = producto.marca;
    document.getElementById("modal-product-price").textContent =
      producto.precio.toFixed(2);

    document.getElementById("quantity").value = 1;
    document.getElementById("product-size").selectedIndex = 0;
    document.getElementById("delivery-address").value = "";

    const modal = new bootstrap.Modal(document.getElementById("comprarModal"));
    modal.show();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderizarProductos();

  document
    .getElementById("btn-confirmar-compra")
    .addEventListener("click", function () {
      const cantidad = document.getElementById("quantity").value;
      const talla = document.getElementById("product-size").value;
      const direccion = document.getElementById("delivery-address").value;

      if (!talla) {
        alert("Por favor, selecciona una talla");
        return;
      }

      if (!direccion) {
        alert("Por favor, ingresa una dirección de entrega");
        return;
      }

      alert(
        `¡Compra realizada con éxito!\nTalla: ${talla}\nCantidad: ${cantidad}\nDirección: ${direccion}`
      );

      const modalElement = document.getElementById("comprarModal");
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance.hide();
    });
});