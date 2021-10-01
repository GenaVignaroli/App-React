import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const productosDelServer = ([
    {id:1, categoria: "Electricas", titulo:"Guitarra Fender Jaguar", descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", precio: 420000, stock: 10, img:"https://www.pronorte.es/_files/product/18566/gallery1/guitarra-electrica-fender-american-pro-ii-jazzmaster-rw-3tsb-1.jpg"},
    {id:2, categoria: "Electricas", titulo:"Guitarra Fender Deluxe", descripcion:"Guitarra fender deluxe. Año 1992", precio: 300000, stock: 17, img:"https://www.falymusic.com/images/thumbnails/1000/1000/detailed/9/0144503500_gtr_frt_001_rr_opt__1_.jpg"},
    {id:3, categoria: "Electricas", titulo:"Guitarra Gibson Les Paul", descripcion:"Guitarra Gibson Les Paul. Modelo Coustom. Año 1967", precio: 390000, stock: 9, img:"https://d1aeri3ty3izns.cloudfront.net/media/25/256280/1200/preview_1.jpg"},
    {id:4, categoria: "Electricas", titulo:"Guitarra PRS", descripcion:"Guitarra PRS Americana. Año 2005. Doble Humbucker", precio: 270000, stock: 35, img:"https://mlstaticquic-a.akamaihd.net/guitarra-electrica-prs-se-custom-24-trampas-green-D_NQ_NP_606993-MLU32031294655_082019-F.jpg"},
    {id:5, categoria: "Acusticas", titulo:"Guitarra Taylor", descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", precio: 320000, stock: 16, img:"https://i.pinimg.com/originals/2f/d6/8b/2fd68ba957ae14144481cb6d8f5ca668.jpg"},
    {id:6, categoria: "Acusticas", titulo:"Guitarra Gibson Acustica", descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", precio: 500000, stock: 8, img:"https://tse4.mm.bing.net/th?id=OIP.8Au3aUvAn0haCdOZc7VvTwHaHb&pid=Api&P=0&w=300&h=300"},
    {id:7, categoria: "Acusticas", titulo:"Guitarra Martins", descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", precio: 450000, stock: 12, img:"https://http2.mlstatic.com/guitarra-electroacustica-martin-10000rs1-D_NQ_NP_687711-MLM20649000825_032016-F.jpg"},
    {id:8, categoria: "Acusticas", titulo:"Guitarra Gracia", descripcion:"Guitarra fender jaguar año 1960. Modelo deluxe. Madera americana", precio: 150000, stock: 50, img:"https://www.masmusica.com.ar/5165-large_default/guitarra-gracia-travel-tm-acustica-.jpghttp://www.masmusica.com.ar/img/p/es-default-large_default.jpg"}
])

export const ItemDetailContainer = () => {
    
    /*const [productos, setProductos] = useState([]);

    useEffect(() => {
    setTimeout (() =>{
        getProductos();
    }, 2000)
    }, []);

    console.log(productos)

    const getProductos = () =>{
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProductos(data));
    }*/

    const [producto, setProducto] = useState({})
    const {id} = useParams();


    useEffect(()=>{

        const mockAsync = new Promise((res)=>{
            setTimeout(()=>{
               res(productosDelServer) 
            }, 2000)
        })

        mockAsync
            .then(productos => {
                const producto = productos.find(producto => producto.id == id);
                setProducto(producto);
            })
           
    })

    return(
        <ItemDetail producto={producto} />
        )
        
}

export default ItemDetailContainer