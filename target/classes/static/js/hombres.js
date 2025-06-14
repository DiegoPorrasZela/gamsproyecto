const productos = [
  {
    id: 1,
    marca: "GAMS",
    nombre: "POLO BASICO DE HOMBRE CORTE CLASICO EN ALGODON 20.1",
    precio: 36.0,
    precioAnterior: 40.0,
    descuento: "10%",
    imagen:
      "https://rematexperu.com/cdn/shop/products/20_8c9291a0-aa70-44e1-9e54-6b8e3be17aa2_1445x.png?v=1695931364",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 2,
    marca: "GAMS",
    nombre: "POLO BASICO DE HOMBRE CORTE OVERSIZE EN ALGODON 24.1",
    precio: 45.0,
    precioAnterior: null,
    descuento: null,
    imagen:
      "https://th.bing.com/th/id/OIP.UJc47OCJbFQ7MVXhH3VRiAHaI4?w=500&h=600&rs=1&pid=ImgDetMain",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 3,
    marca: "GAMS",
    nombre: "POLERA/HODDIE OVERSIZE CON ESTAMPADO DTF EN FRANELA REACTIVA",
    precio: 60.0,
    precioAnterior: 80.0,
    descuento: "25%",
    imagen:
      "https://th.bing.com/th/id/OIP.tpu6fjai-ZKgvBf0yNuwxQHaLH?rs=1&pid=ImgDetMain",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 4,
    marca: "GAMS",
    nombre: "CASACA MODELO BIKER DE CUERO CORTE SLIM",
    precio: 135.0,
    precioAnterior: null,
    descuento: null,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_738035-MPE50203560436_062022-O.webp",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 5,
    marca: "J-DKS",
    nombre: "PANTALON DE HOMBRE CORTE SLIM-FIT EN DRILL",
    precio: 75,
    precioAnterior: null,
    descuento: null,
    imagen:
      "https://th.bing.com/th/id/OIP.u-C3wToG0OBVIuecnAhd2AAAAA?w=314&h=471&rs=1&pid=ImgDetMain",
    nuevo: true,
    envioGratis: true,
  },
  {
    id: 6,
    marca: "PIONERS",
    nombre: "PANTALON DE HOMBRE CORTE SLIM-FIT EN JEAN",
    precio: 70.0,
    precioAnterior: null,
    descuento: null,
    imagen:
      "https://th.bing.com/th/id/OIP.qUQoYS4k6Jf-4Al9zAD0CwHaLE?rs=1&pid=ImgDetMain",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 7,
    marca: "PIONERS",
    nombre: "BERMUDA CARGO EN DRILL",
    precio: 59.99,
    precioAnterior: null,
    descuento: null,
    imagen: "img/hombres/00012.jpg",
    nuevo: false,
    envioGratis: true,
  },
  {
    id: 8,
    marca: "GAMS",
    nombre: "PANTALON DE VESTIR SLIM-FIT",
    precio: 119.9,
    precioAnterior: null,
    descuento: null,
    imagen: "img/hombres/00013.webp",
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
