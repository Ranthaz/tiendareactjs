import './StylesCartWidget.scss'
import imagen from './media/carrito.svg'


const CartWidget = () => {
    return (
        <div className="CarritoCont">
           <img className="carrito" src={imagen} alt="logo ad-reail"/>
        </div>
    )
}

export default CartWidget