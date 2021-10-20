import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "../../firebase";


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const {id} = useParams();

    useEffect(() => {

        const db = firestore
        const coleccion = db.collection("productos")

        const consulta = coleccion.doc(id)

        consulta.get()
            .then((res) => {
                if(!res.exists){
                    return;
                }
                setProducto({ id: res.id, ...res.data()});
                }
            )},[])

    return(
        <ItemDetail producto={producto} />
        )
        
}

export default ItemDetailContainer