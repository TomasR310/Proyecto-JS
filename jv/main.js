
let url = `https://66a99e36613eced4eba5b96f.mockapi.io/Anuncios`

const productList = document.querySelector('.product-list')


const products = [
    { name: 'Aire Acondicionado', price: 1500, image: '././assets/Aire Acondicionado.jpg' },
    { name: 'TV', price: 3000, image: '././assets/pantalla-television-tv.jpg' },
    { name: 'Ventilador', price: 620, image: '././assets/Ventilador.jpg' }
]


products.forEach(product => {
    const productDiv = document.createElement('div')
    productDiv.classList.add('product')
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.image}" alt="${product.name}">
        <p>Precio: $${product.price}</p>
    `;
    productList.append(productDiv)
})


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