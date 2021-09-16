import { useState } from "react";
import Nav from "./NavBar/Nav"
import ItemListContainer from "./ItemListContainer"



const App = () => {

    const [valor, setValor] = useState(0);
    const [cart, setCart] = useState(0);

    const handleSum = () => {
        setValor(valor + 1)
    };

    const handleSubstract = () => {
        if (valor === 0) {
            return;
        }
        setValor(valor - 1)
    };

    const handleAdd = () => {
        setCart(cart + valor);
    };

    return (
        <div className="app">
            <Nav cart={cart} />
            <ItemListContainer 
            onSum={handleSum} 
            onSubstract={handleSubstract} 
            valor={valor} 
            onAdd={handleAdd} />
        </div>
    )
}

export default App