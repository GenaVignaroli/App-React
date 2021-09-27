import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({title, image, id}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" style={{width: "150px", height:"150px"}} src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={`/Productos/${id}`} className="btn btn-primary">Ver producto </Link>
        </div>
      </div>
    )
}

export default ItemDetail