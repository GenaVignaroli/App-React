import React, { useEffect, useState } from "react";
import "./Container.css";
import ItemDetail from "./ItemDetail";
import { ProductDetail } from "./ProductDetail";

export const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
    setTimeout (() =>{
        getProductos();
    }, 2000)
    }, []);

    console.log(productos)

    const getProductos = () =>{
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductos(data));
    }

    return(
        <div className="productos-container">
                {
                productos.map(productos => <ItemDetail 
                    key={productos.id}
                    id={productos.id} 
                    title={productos.title} 
                    image={productos.image}  />)
                }
        </div>
    )

}

export default ItemDetailContainer


/*{
    productos.map(productos => <ProductDetail 
        key={productos.id}
        id={productos.id} 
        title={productos.title} 
        image={productos.image} 
        price={productos.price} 
        description={productos.description}
        category={productos.category}/>)
    }*/
