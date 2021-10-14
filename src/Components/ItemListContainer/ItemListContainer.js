import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../../firebase"
import ItemList from "./ItemList"

const ItemListContainer = ({}) => {    

    const [productosIniciales, setProductosIniciales] = useState([])
    const {id} = useParams()

    useEffect(() => {

        const db = firestore
        const coleccion = db.collection("productos")


       /* const consulta = coleccion.where("Categoria","==","Electrticas")
        .where("Categoria", "==", "Acusticas")*/
        const consulta = coleccion 

        consulta.get()
            .then((resultado) => {
               /* if (resultado.size === 0){
                    return;
                }
                setProductosIniciales(resultado.docs.map(doc => doc.data()));*/
               const productosFinales = resultado.docs.map((producto) => {
                    const productoFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    return productoFinal                   
                });
                setProductosIniciales(productosFinales)
            })
            .catch(() => {
            })

    },[])

    
    return (
        <>
          <ItemList productos={productosIniciales} />
        </>
    )
}

export default ItemListContainer
