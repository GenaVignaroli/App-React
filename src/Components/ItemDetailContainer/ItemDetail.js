import React, { useContext, useState } from 'react'
import "../ItemDetailContainer/Container.css"
import ItemCount from '../ItemListContainer/ItemCount'
import CartContext from "../CartWidget/CartContext"

const ItemDetail = ({producto}) => {
    
    const [mostrar, setMostrar] = useState(false)

    const { addItem } = useContext(CartContext);

    const [unidades, setUnidades] = useState()


     const onAdd = (info) => {
        const itemAgregado = {
             producto : producto ,
             info : info
        }
        addItem(itemAgregado)
        setUnidades(itemAgregado)
        setMostrar(!mostrar)
    }
  

    return (
      <div className="detail-container">
        <img src={producto.Imagen} className="card-img-top" style={{ width: "200px", height: "200px" }} alt="guitarra" />
        <ul>
          <h2>{producto.Titulo}</h2>
          <h3>{producto.Categoria}</h3>
        </ul>
        <p className="p">{producto.Descripcion}</p>
      
        <ul>
          <h1 className="me-4">{producto.Precio}</h1>
          <ItemCount className="me-5" miCallback ={onAdd} />
          {mostrar ? <p>Se agrego el item al carrito!</p>: null}
        </ul>
       </div>
   )
  
}

export default ItemDetail
