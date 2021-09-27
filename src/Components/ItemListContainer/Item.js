import React from 'react'
import ItemCount from './ItemCount'
export const Item = ({producto}) => {

    return (
            <div className="card mt-5 ms-5" style={{ width: "18rem" }}>
                <img src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <h5 className="card-title">{producto.precio}</h5>
                </div>
                    <ItemCount />
                </div>
    )
}

export default Item