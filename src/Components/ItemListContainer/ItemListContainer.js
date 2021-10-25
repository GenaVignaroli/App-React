import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../../firebase"
import ItemList from "./ItemList"

const ItemListContainer = () => {    

    const [productosIniciales, setProductosIniciales] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if (id){
        const db = firestore
        const coleccion = db.collection("productos")
        let consulta = coleccion.where("Categoria", "==", id)
        consulta = consulta.get().then((res)=>{
                if (res.size === 0){
                    return;
                }
                setProductosIniciales(res.docs.map(doc => doc.data()));
                const productosParciales = res.docs.map((producto) => {
                    const productoParcial = {
                        id : producto.id,
                        ...producto.data()
                    }
                    return productoParcial
                });
                setProductosIniciales(productosParciales)
            })
        }else{
            const db = firestore
            const coleccion = db.collection("productos")
            const consulta = coleccion
    
            consulta.get()
                .then((resultado) => {
                    if (resultado.size === 0){
                        return;
                    }
                    setProductosIniciales(resultado.docs.map(doc => doc.data()));
                   const productosFinales = resultado.docs.map((producto) => {
                        const productoFinal = {
                            id: producto.id,
                            ...producto.data()
                        }
                        return productoFinal                   
                    });
                    setProductosIniciales(productosFinales)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        },[])
    

    if (productosIniciales.length > 0){
    return (
          <ItemList productos={productosIniciales} />
    );
    }else {
        return(
            <p>Cargando...</p>
        )
    }
}

export default ItemListContainer
