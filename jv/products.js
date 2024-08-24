
let url = `https://66a99e36613eced4eba5b96f.mockapi.io/Anuncios`

const products = [
    { id: 1, name: 'Pava Electrica', description: 'Pava Eléctrica Smartlife 2200W 1,5Lts', price: 350.00, image: '../assets/Pava-Electrica.jpg' },
    { id: 2, name: 'Microondas', description: 'HORNO DE MICROONDAS AMANA RCS10TS', price: 400.00, image: '../assets/Microondas.jfif' },
    { id: 3, name: 'Heladera', description: 'Heladera GE Appliances PKPS5', price: 878.00, image: '../assets/Heladera.jfif' },
    { id: 4, name: 'Cocina', description: 'Estufa Koblenz Savona EK1121SA 30', price: 800.00, image: '../assets/Estufa SAVONA.jpg' },
    { id: 5, name: 'Mesa y Sillas', description: 'Mesa de comedor 120x90 4 sillas ante azul madera maciza', price: 780.00, image: '../assets/Conjunto de mesa y sillas.jpg' },
    { id: 6, name: 'Platos', description: 'Juego De Platos Vajilla 20 Piezas', price: 100.00, image: '../assets/Juego de Platos.jpg' },
    { id: 7, name: 'Kit Cubiertos', description: 'Set x24 Cubiertos Plástico, Acero Inoxidable', price: 59.99, image: '../assets/Set Cubiertos.jpg' },
    { id: 8, name: 'Vasos', description: 'Set Vasos De Vidrio', price: 200.00, image: '../assets/Conjunto de vasos.jpg' },
    { id: 9, name: 'Aspiradora', description: 'Aspiradora inteligente Viomi Robot Vacuum V2 Pro 33W', price: 989.99, image: '../assets/aspirator-inteligent-robot-.jpg' },
    { id: 10, name: 'Lampara', description: 'Lámpara de techo blanca SEVEN 3', price: 640.00, image: '../assets/lampara-de-techo-.jpg' },
    { id: 11, name: 'TV', description: 'Pantalla Television Tv Spectra Led 32 Hd Hdmi X2', price: 3000.00, image: '../assets/pantalla-television-tv.jpg' },
    { id: 12, name: 'Ventilador', description: 'Ventilador Metalico Pedestal Sfm-45 Airon', price: 620.00, image: '../assets/Ventilador.jpg' },
    { id: 13, name: 'Aire Acondicionado', description: 'AIRE ACONDICIONADO SPLIT FRIO CALOR CARRIER', price: 1500.00, image: '../assets/Aire Acondicionado.jpg' },
    { id: 14, name: 'Lavaropa', description: 'LAVADORA LG F4J5TN7S A+++', price: 2200.00, image: '../assets/lavadora-lg-inox.jpg' }
];


function generarProductosHTML(product) {
    return `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.name}')">Añadir al carrito</button>
        </div>
    `;
}


function addToCart(productName) {
    // alert(productName + ' añadido al carrito');
    Swal.fire({                
        icon: 'success',                
        title: 'Gracias por tu Compra',                
        text: `${productName} ha sido agregado a tu carrito`,                                
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
    });
}
 


function mostrarProductos() {
    const productList = document.querySelector('.product-list');
    products.forEach(product => {
        productList.innerHTML += generarProductosHTML(product);
    });
}

mostrarProductos();


let ad = document.querySelector('.anuncio')

fetch(url)
.then(resp => resp.json())
.then(data => {
    // console.log(data)
    // console.log(data[0]);
    let datos = `<img src="${data[0].ad}" alt="Comida en Venta">`
    // console.log(datos);
    ad.innerHTML = datos
})
.then(data => {
    const publicidad = document.createElement('p')
    publicidad.innerText = 'Disfruta las Mejor Comida Aqui!!'
    ad.append(publicidad)

    const closeAd = document.createElement('span')
    closeAd.classList.add('cerrar')
    closeAd.innerHTML = `<p>X</p>`
    ad.append(closeAd)

    closeAd.addEventListener('click', function() {
        ad.style.display = 'none'
    });
})
.catch(err => console.error(err))