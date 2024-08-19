
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

let closeAd = document.querySelector('#cerrar')
let ad = document.querySelector('.anuncio')


closeAd.addEventListener('click', function() {
    ad.style.display = 'none'
});


fetch(url)
.then(resp => resp.json())
.then(data => {
    // console.log(data)
    // console.log(data[0]);

})
.catch(err => console.error(err))

