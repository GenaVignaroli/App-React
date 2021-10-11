import { BiCartAlt } from "react-icons/bi";
import "./CartWidget.css";
import { Link } from "react-router-dom"
import { useContext } from "react";
import contexto from "./CartContext";

const CartWidget = () => {

    const {getTotalQuantity} = useContext(contexto)

    return (
        <Link className="cart-widget" to="/cart">
            <BiCartAlt className="icon"/>
            <span className="number">{getTotalQuantity}</span>
        </Link>
    )
}

export default CartWidget