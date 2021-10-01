import React from 'react'
import { Link } from 'react-router-dom'
import "../ItemDetailContainer/Container.css"
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ({producto}) => {


    const onAdd = (info) => {
        console.log("estoy en app y valgo: " + info)
    }

    return (
       <div className="detail-container">
         <img src={producto.img} className="card-img-top" style={{ width: "200px", height: "200px" }} alt="guitarra" />
         <ul>
           <h2>{producto.titulo}</h2>
           <h3>{producto.categoria}</h3>
         </ul>
         <p className="p">{producto.descripcion}</p>
       
         <ul>
           <h1 className="me-4">{producto.precio}</h1>
           <ItemCount className="me-5" miCallback ={onAdd} />
         </ul>
        </div>
    )
}

export default ItemDetail
