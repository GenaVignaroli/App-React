import React from 'react'
//Solo presenta lo que recibe

export const Item = ({producto, onSubstract, onSum, onAdd, valor}) => {

    return (
            <div className="card mt-5 ms-5" style={{ width: "18rem" }}>
                <img src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.titulo}</h5>
                    <p className="card-text">{producto.descripcion}</p>
                    <h5 className="card-title">{producto.precio}</h5>
                    <a href="#" class="btn btn-primary" onClick={onAdd}>Agregar al carrito</a>
                </div>
                    <div className="btn-wrapper mt-2">
                    <a href="#" className="btn btn-dark me-3" onClick={onSubstract}>-</a>
                    <span>{valor}</span>
                    <a href="#" className="btn btn-dark ms-3" onClick={onSum}>+</a>
                </div>
            </div>
    )
}

export default Item