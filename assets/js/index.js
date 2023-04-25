import {traerTienda, Producto} from "./utils";

const render = async () => {
    const data = await traerTienda();
    console.log(data);
}

render();