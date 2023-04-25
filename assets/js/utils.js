const traerTienda = async () => {
    console.log("Tienda");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

traerTienda();