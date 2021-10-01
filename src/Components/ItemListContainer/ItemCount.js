import {useState} from "react"
import { Link } from "react-router-dom";

const ItemCount = ({miCallback}) => {
    const [valor, setValor] = useState(1);

    const handleSum = () =>{
        setValor(valor+1)
    }

    const handleSubstract = () => {
        if(valor === 0){
            return;
        }
        setValor(valor-1)
    }

    const info = (valor)

   const handleClick = () =>{
       miCallback(info)
   }

    return (
    <div className="btn-wrapper mt-3">
        <a className="btn btn-dark me-2" onClick={handleSubstract}>-</a>
        <span>{valor}</span>
        <a className="btn btn-dark ms-2" onClick={handleSum}>+</a>
        <Link className="btn btn-primary ms-3" onClick={handleClick} >Agregar al Carrito</Link>
    </div>
    )
}

export default ItemCount

