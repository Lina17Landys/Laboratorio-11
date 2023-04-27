const traerTienda = async () => {
    console.log("Tienda");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

traerTienda();

class Producto {
    #id = ""
    #image = ""


    constructor(id, imagen) {
        this.#id = id;
        this.#image = image;
    }

    render() {
       const image = document.createElement("img");
       image.id = "div"+this.#id
       image.classList.add("image");
       image.src = this.#image;

       div.appendChild(image);
       return div;
    }

    addClickListener() {
        const div = document.querySelector("#div"+this.#id);
        div.addEventListener("click", () => {
         alert("click a"+this.#id);   
    })
    }
}