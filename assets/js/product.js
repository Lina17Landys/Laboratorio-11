import {getProducts} from "./utils";

const urlParams = new URLSearchParams(window.location.search);
const nombreProducto = urlParams.get('title');
const ratingProducto = urlParams.get('rating');
const precioProducto = urlParams.get('price');
const desProducto = urlParams.get('description');
const cateProducto = urlParams.get('category');
const image = urlParams.get('image');

document.getElementById('imgProducto').src = image;
document.getElementById('nombreProducto').innerText = nombreProducto;
document.getElementById('precioProducto').innerText = `$${precioProducto}`;
document.getElementById('desProducto').innerText = desProducto;
document.getElementById('cateProducto').innerText = cateProducto;
