fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    let html = '';
    data.forEach(product => {
      html += `
        <div class="product-container">
          <a class="product-link">
            <img src="${product.image}" alt="${product.title}" />
            <h2 class="productoTitulo">${product.title}</h2>
            <p>$${product.price}</p>
          </a>
        </div>
      `;
    });
    document.getElementById('container').innerHTML = html;

    const productLinks = document.querySelectorAll('.product-link');
    productLinks.forEach(link => {
      link.addEventListener('click', () => {
        renderProduct(data.find(product => product.title === link.querySelector('h2').innerText));
      });
    });
  })
  .catch(error => console.error(error));

  const renderProduct = (product) => {
    const container = document.getElementById('container');
    container.innerHTML = `
      <div class="container-1">
        <div class="info">
          <img id="imgProducto" src="${product.image}">
          <h1 class="product" id="nombreProducto">${product.title}</h1>
          <p class="price" id="precioProducto">$${product.price}</p>
          <p class="description" id="desProducto">${product.description}</p>
          <p class="category" id="cateProducto">${product.category}</p>
          <button>Buy now</button>
          <button>Add to cart</button>
        </div>
      </div>
    `;
  };
  
