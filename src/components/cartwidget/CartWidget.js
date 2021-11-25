import './stylescarrito.scss'
import imagen from './media/carrito.svg'


const CartWidget = () => {
    return (
        <div className="carritocont">
           <img className="carrito" src={imagen} alt="logo ad-reail"/>
        </div>
    )
}

export default CartWidget