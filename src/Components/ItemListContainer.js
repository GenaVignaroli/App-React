import { useEffect, useState } from "react"
import ItemList from "./ItemList/ItemList"
import ItemCount from "./ItemCount"

const productos = ([
    {id:1, titulo:"Guitarra Fender Jaguar", descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", precio: 420000, stock: 10, img:"https://www.pronorte.es/_files/product/18566/gallery1/guitarra-electrica-fender-american-pro-ii-jazzmaster-rw-3tsb-1.jpg"},
    {id:2, titulo:"Guitarra Fender Deluxe", descripcion:"Guitarra fender deluxe. Año 1992", precio: 300000, stock: 17, img:"https://www.falymusic.com/images/thumbnails/1000/1000/detailed/9/0144503500_gtr_frt_001_rr_opt__1_.jpg"},
    {id:3, titulo:"Guitarra Gibson Les Paul", descripcion:"Guitarra Gibson Les Paul. Modelo Coustom. Año 1967", precio: 390000, stock: 9, img:"https://d1aeri3ty3izns.cloudfront.net/media/25/256280/1200/preview_1.jpg"},
    {id:4, titulo:"Guitarra PRS", descripcion:"Guitarra PRS Americana. Año 2005. Doble Humbucker", precio: 270000, stock: 35, img:"https://mlstaticquic-a.akamaihd.net/guitarra-electrica-prs-se-custom-24-trampas-green-D_NQ_NP_606993-MLU32031294655_082019-F.jpg"},
])

const ItemListContainer = ({onSum, onSubstract, valor, onAdd}) => {    

    const [productosIniciales, setProductosIniciales] = useState([])


    useEffect(()=>{
    const mockAsync = new Promise((res)=>{
            setTimeout(()=>{
               res(productos) 
            }, 2000)
        })

        mockAsync
            .then((resultado)=>{
                setProductosIniciales(resultado)
            })
    })
      
    return (
        <>
          <ItemList productos={productosIniciales} />
          <ItemCount onSum={onSum} onSubstract={onSubstract} valor={valor} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer
