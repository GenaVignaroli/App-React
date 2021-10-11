import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../../firebase"
import ItemList from "./ItemList"


const productosDelServer = ([
    {id:1, Categoria: "Electricas", Titulo:"Guitarra Fender Jaguar", Descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", Precio: 420000, Stock: 10, Imagen:"https://www.pronorte.es/_files/product/18566/gallery1/guitarra-electrica-fender-american-pro-ii-jazzmaster-rw-3tsb-1.jpg"},
    {id:2, Categoria: "Electricas", Titulo:"Guitarra Fender Deluxe", Descripcion:"Guitarra fender deluxe. Año 1992", Precio: 300000, Stock: 17, Imagen:"https://www.falymusic.com/images/thumbnails/1000/1000/detailed/9/0144503500_gtr_frt_001_rr_opt__1_.jpg"},
    {id:3, Categoria: "Electricas", Titulo:"Guitarra Gibson Les Paul", Descripcion:"Guitarra Gibson Les Paul. Modelo Coustom. Año 1967", Precio: 390000, Stock: 9, Imagen:"https://d1aeri3ty3izns.cloudfront.net/media/25/256280/1200/preview_1.jpg"},
    {id:4, Categoria: "Electricas", Titulo:"Guitarra PRS", Descripcion:"Guitarra PRS Americana. Año 2005. Doble Humbucker", Precio: 270000, Stock: 35, Imagen:"https://mlstaticquic-a.akamaihd.net/guitarra-electrica-prs-se-custom-24-trampas-green-D_NQ_NP_606993-MLU32031294655_082019-F.jpg"},
    {id:5, Categoria: "Acusticas", Titulo:"Guitarra Taylor", Descripcion:"Guitarra taylor Americana. Madera de maple. Modelo electroacustica", Precio: 320000, Stock: 16, Imagen:"https://i.pinimg.com/originals/2f/d6/8b/2fd68ba957ae14144481cb6d8f5ca668.jpg"},
    {id:6, Categoria: "Acusticas", Titulo:"Guitarra Gibson Acustica", Descripcion:"Guitarra gibson acustica. año 1953. Madera de maple refinada", Precio: 500000, Stock: 8, Imagen:"https://tse4.mm.bing.net/th?id=OIP.8Au3aUvAn0haCdOZc7VvTwHaHb&pid=Api&P=0&w=300&h=300"},
    {id:7, Categoria: "Acusticas", Titulo:"Guitarra Martins", Descripcion:"Guitarra martin acustica. Modelo americano.", Precio: 450000, Stock: 12, Imagen:"https://http2.mlstatic.com/guitarra-electroacustica-martin-10000rs1-D_NQ_NP_687711-MLM20649000825_032016-F.jpg"},
    {id:8, Categoria: "Acusticas", Titulo:"Guitarra Gracia", Descripcion:"Guitarra gracias acustica. Producto nacional", Precio: 150000, Stock: 50, Imagen:"https://www.masmusica.com.ar/5165-large_default/guitarra-gracia-travel-tm-acustica-.jpghttp://www.masmusica.com.ar/img/p/es-default-large_default.jpg"}
])

const ItemListContainer = ({}) => {    

    const [productosIniciales, setProductosIniciales] = useState([])
    const {id} = useParams()


    useEffect(()=>{
    const mockAsync = new Promise((res)=>{
            setTimeout(()=>{
               res(productosDelServer) 
            }, )
        })

        if(id){
            mockAsync.then(data =>{
                setProductosIniciales(data.filter(item => item.Categoria === id))
            })
        }else{ 
            mockAsync
            .then((resultado)=>{
                setProductosIniciales(resultado)
            })
        }
       
    })

    //firebase

    useEffect(() => {

        const db = firestore

        const coleccion = db.collection("productos")

        const consulta = coleccion.get()

        
        consulta
            .then((resultado) => {
                console.log("Todo estuvo bien")


                resultado.docs.forEach(producto => {
                    const productoFinal = {
                        id: producto.id,
                        ...producto.data()
                    }
                    console.log(productoFinal)
                    
                });
            })
            .catch(() => {
                console.log("Algo salio mal")
            })

    })

    
    return (
        <>
          <ItemList productos={productosIniciales} />
        </>
    )
}

export default ItemListContainer
