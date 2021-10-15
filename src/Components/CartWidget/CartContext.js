import { createContext, useState } from "react";

export const contexto = createContext();

const {Provider} = contexto

export const CustomProvider = ({children}) => {

    const [cart,setCart]= useState([]);

    const cartTotal = () => {
        let total = 0;
        cart.map(producto => total += producto.producto.price*producto.info)
        return total;
    }
    
    const getTotalQuantity = () => {
        if(cart.lenght === 0) {            
        }else{
            return cart.length
        }
    }

    const isInCart = () => {
        cart.find(producto => producto.producto.id === producto.id)
    }


    const addItem = (producto) => {
            if(isInCart(producto.id)){
                    <h4>Ya existe el producto</h4>
                    return false
                }
                setCart([...cart, producto])
            }

    const removeItem = (id) => {
        const itemInCart= cart.find(element => element.id === id)
        let newCart = [...cart]
        newCart.splice(cart.indexOf(itemInCart), 1)
        setCart(newCart)
    }

    const clear = ()=> {
        setCart([])
    }


    return (
        <Provider value={{cart, addItem, removeItem, clear, isInCart, getTotalQuantity, setCart, cartTotal}}>
            {children}
        </Provider>
    )
}

export default contexto