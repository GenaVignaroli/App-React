import React, { useContext } from 'react'
import { contexto } from "./CartContext"
import { firestore } from "../../firebase"

const Cart = () => {

    const {cart, removeItem, cartTotal} = useContext(contexto);

   /* const db = firestore
    const coleccion = db.collection("ordenes")

    const nuevaOrden ={
        buyer :{
            nombre : "Genaro",
            telefono : "2995165651",
            email : "email@email.com",
        },
        items : [],
        date : firestore.Timestamp.now(),
        total : 10
    }

    const consulta = coleccion.add(nuevaOrden)
    consulta
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    */
    
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