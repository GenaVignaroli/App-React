import {useState} from "react"

/*const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(0)

    return(
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => { setContador(contador + 1) } }> + </button>
            <button onClick={() => { setContador(contador - 1) } }> - </button>
            <button> Confirmar </button>
        </>
    )
}*/  

const ItemCount = ({}) => {
    const [valor, setValor] = useState(0);

    const handleSum = () =>{
        setValor(valor+1)
    }

    const handleSubstract = () => {
        if(valor === 0){
            return;
        }
        setValor(valor-1)
    }

    return (
    <div className="btn-wrapper mt-3 justify">
        <a href="#" className="btn btn-dark me-3" onClick={handleSubstract}>-</a>
        <span>{valor}</span>
        <a href="#" className="btn btn-dark ms-3" onClick={handleSum}>+</a>
    </div>
    )
}

export default ItemCount