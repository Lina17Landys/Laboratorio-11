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
        image.id = "image" + this.#id;
        image.src = this.#image;
        image.classList.add("image")
        return image;
    }

    addClickListener() {
        const image = document.querySelector("#image" + this.#id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId=" + this.#id;
        })
    }
}