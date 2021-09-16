import { BiCartAlt } from "react-icons/bi";
import "./CartWidget.css";

const CartWidget = ({cart}) => {
    return (
        <div className="cart-widget">
            <BiCartAlt className="icon"/>
            <span className="number">{cart}</span>
        </div>
    )
}

export default CartWidget