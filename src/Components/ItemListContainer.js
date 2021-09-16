//import { useState } from "react"
//import { useEffect } from "react"
//import ItemList from "./ItemList/ItemList"
//import ItemCount from "./ItemCount"

/*const productosIniciales =[
    {id:1, titulo:"Producto 1", stock: 35},
    {id:2, titulo:"Producto 2", stock: 44},
    {id:3, titulo:"Producto 3", stock: 54},
    {id:4, titulo:"Producto 4", stock: 65}
]*/

const ItemListContainer = ({onSum, onSubstract, valor, onAdd}) => {

    
    /*const [productos, setProductos] = useState([])

    useEffect(()=>{
        const simulacionDePedido = new Promise((res, rej)=>{
            setTimeout(()=>{
                res(productosIniciales)
            }, 2000)
        })
        simulacionDePedido
            .then(resultado=>{
                setProductos(productosIniciales)
            },[])  <ItemList productos={productos} />
    })*/

    
        
    return (
        <div>
            <div className="card mt-5 ms-5" style={{ width: "18rem" }}>
                <img src="https://www.pronorte.es/_files/product/18566/gallery1/guitarra-electrica-fender-american-pro-ii-jazzmaster-rw-3tsb-1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Guitarra Fender</h5>
                    <p className="card-text">Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana</p>
                    <h5 className="card-title">$200.000</h5>
                    <a href="#" class="btn btn-primary" onClick={onAdd}>Agregar al carrito</a>
                </div>
                 <div className="btn-wrapper mt-2">
                    <a href="#" className="btn btn-dark me-3" onClick={onSubstract}>-</a>
                    <span>{valor}</span>
                    <a href="#" className="btn btn-dark ms-3" onClick={onSum}>+</a>
                 </div>
            </div>
            
        </div>
    )
}

export default ItemListContainer
