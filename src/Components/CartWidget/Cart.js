import React, { useContext } from 'react'
import { contexto } from "./CartContext"

const Cart = () => {

    const {cart, removeItem, cartTotal} = useContext(contexto);
    
    return (
        <div>
            {cart.map(producto => 
                <div key={producto.producto.id}>
                    {producto.producto.Titulo} x {producto.info} - ${producto.producto.Precio * producto.info}
                    <button className="btn btn-danger" onClick={() => removeItem(producto.id)}>BORRAR</button>
                </div>
            )}
            <h2>Precio Final: {cartTotal}</h2>
        </div>
    )}

    export default Cart