import {useState} from "react"


const ItemCount = ({miCallback, onAdd}) => {
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
        <a className="btn btn-primary ms-3" onClick={handleClick} >Agregar al Carrito</a>
    </div>
    )
}

export default ItemCount

