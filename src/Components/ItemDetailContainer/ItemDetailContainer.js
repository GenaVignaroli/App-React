import React, { useEffect, useState } from "react";
import "./Container.css";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    setTimeout = () =>
        getProductos();
    }, 2000, []);


    const getProductos = () =>{
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductos(data));
    }

    return(
        <div>
            <div className="productos-list">
                {
                    productos.map(productos => <ItemDetail title={productos.title} image={productos.image} id={productos.id} price={productos.price} />)
                }
            </div>
        </div>
    )

}

export default ItemDetailContainer
