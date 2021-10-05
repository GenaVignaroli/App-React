import React, { useContext, useState } from 'react'
import "../ItemDetailContainer/Container.css"
import ItemCount from '../ItemListContainer/ItemCount'
import CartContext from "../CartWidget/CartContext"

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext);
    
    const [mostrar, setMostrar] = useState(false)

    const onAdd = (info) => {
        addItem(info);
        setMostrar(!mostrar)
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
          {mostrar ? <p>Se agrego el item al carrito!</p>: null}
        </ul>
       </div>
   )
  
}

export default ItemDetail
