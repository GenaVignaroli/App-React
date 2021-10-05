import { createContext, useState } from "react";

export const contexto = createContext();

const {Provider} = contexto

export const CustomProvider = ({children}) => {

    const [cart,setCart]= useState([]);

    const cartTotal = () => {
        let total = 0;
        cart.map(item => total += item.item.price*item.quantity)
        return total;
    }

    const getTotalQuantity = () => {
        if(cart.lenght === 0) {            
        }else{
            return cart.length
        }
    }

    const isInCart = () => {
        cart.find(item => item.item.id === item.id)
    }

    const addItem = (item) => {
        if(isInCart(item.id)){
            <h4>Ya existe este producto</h4>
            return false
        }
        setCart([...cart, item])
    }

    const removeItem = (itemId) => {
        const deleteItem = cart.filter((item)=>
        item.itemid !== itemId)
        setCart([...deleteItem]);
    }

    const clear = () => {
        setCart([])
    }

    return (
        <Provider value={{cart, addItem, removeItem, clear, cartTotal, isInCart, getTotalQuantity}}>
            {children}
        </Provider>
    )
}

export default contexto