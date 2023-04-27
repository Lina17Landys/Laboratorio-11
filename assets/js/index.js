import {traerTienda, Product} from "./utils";

const render = async () => {
    const data = await traerTienda();
    console.log(data);
}

render();