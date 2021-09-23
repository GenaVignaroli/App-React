import { BiCartAlt } from "react-icons/bi";
import "./CartWidget.css";
import { Link } from "react-router-dom"

const CartWidget = ({cart}) => {
    return (
        <Link className="cart-widget" to="/cart">
            <BiCartAlt className="icon"/>
            <span className="number">{cart}</span>
        </Link>
    )
}

export default CartWidget