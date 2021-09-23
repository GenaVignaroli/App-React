import { useState } from "react";
import Nav from "./NavBar/Nav"
import ItemListContainer from "./ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Cart from "./CartWidget/Cart"


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
            <BrowserRouter>
                 <Nav cart={cart} />
                 <Switch>

                 <Route path="/Home" component={ItemListContainer} exact/>

                 <Route path="/guiitarras/:id" component={ItemListContainer}/>

                 <Route path="/cart" component={Cart}/>
                 
                 </Switch>

                 <ItemListContainer 
                 onSum={handleSum} 
                 onSubstract={handleSubstract} 
                 valor={valor} 
                 onAdd={handleAdd} />
                <ItemDetailContainer />
            </BrowserRouter>
        </div>
    )
}

export default App