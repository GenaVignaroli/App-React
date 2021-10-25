import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { contexto } from "./CartContext"
import { firestore } from "../../firebase"

const Cart = () => {

    const {cart, removeItem, cartTotal, clear} = useContext(contexto);

    const [compra, setCompra] = useState()
    const [mostrar, setMostrar] = useState()

    useEffect(() =>{
    const db = firestore
    const coleccion = db.collection("confirmaciones")

    const nuevaOrden ={
        buyer :{
            nombre : "Genaro",
            telefono : "2995165651",
            email : "email@email.com",
        },
        items : [{
            id: cart.map(producto => producto.producto.id),
            titulo: cart.map(producto => producto.producto.Titulo),
            Precio: cart.map(producto => producto.producto.Precio)
        }],
        total : [{
            total: cart.map(producto => producto.info)
        }]
    }

    const consulta = coleccion.add(nuevaOrden)

    consulta
        .then(res=>{
            setCompra(res.id)
        })
        .catch( err=>{
            console.log(err)
        })
    },[])

    const final = () => {
        setMostrar(compra)
    }

    const listaDeTotales = [0];

    return(
        <div>
            <h1>Carrito</h1>
            <ul>
                {cart.map((producto)=>{
                    const total = producto.producto.Precio * producto.info
                    listaDeTotales.push(total)
                    return(
                        <li>
                            {producto.producto.Titulo} Cantidad: {producto.info} precio: {producto.producto.Precio * producto.info}
                            <button className="btn btn-danger" onClick={() => removeItem(producto.id)}>BORRAR</button>
                        </li>
                    )
                })}
            </ul>
            <h4>Total: $ {listaDeTotales.reduce((prev, next) => prev + next)}</h4>
            <h3><button className="btn btn-primary" onClick={final}>CONFIRMAR COMPRA</button> <button className="btn btn-danger" onClick={() => clear([])}>VACIAR CARRITO</button>
            {mostrar ? <h4>Su compra se ha realizado. Siguela con el siguitente número: {compra}</h4>: null}</h3>
        </div>
    )
    }

    export default Cart