const traerTienda = async () => {
    console.log("Tienda");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

traerTienda();

class Producto {
    imagen = ""
    title = ""


    constructor(image, title) {
        this.imagen = image;
        this.title = title;
    }

    render() {
        const div = document.createElement('div')
        const jpg = document.createElement('img')
        const titulo = document.createElement('p')
        jpg.src = this.imagen;
        titulo.innerHTML = this.title;

        div.appendChild(jpg);
        div.appendChild(titulo);
        return div;
    }
}