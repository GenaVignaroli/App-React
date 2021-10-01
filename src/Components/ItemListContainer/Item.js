import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
export const Item = ({producto}) => {

    return (
            <div className="card mt-5 ms-5" style={{ width: "18rem" }}>
                <img src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <Link className="btn btn-primary me-3" to={`/item/${producto.id}`}>Ver detalle</Link>
                </div>
            </div>
    )
}

export default Item