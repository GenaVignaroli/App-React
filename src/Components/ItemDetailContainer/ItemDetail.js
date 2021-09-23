import React from 'react'

const ItemDetail = ({title, image, id, price}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" style={{width: "150px", height:"150px"}} src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{id}</p>
          <p className="card-text">{price}</p>
          <a href="#.." className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    )
}

export default ItemDetail
