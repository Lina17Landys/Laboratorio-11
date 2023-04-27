const traerTienda = async () => {
    console.log("Tienda");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
};

traerTienda();

class Product {
    #id = "";
    #image = "";


    constructor(id, image) {
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
        const image = document.querySelector("#image"+this.#id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId="+this.#id;
        })
    }
}