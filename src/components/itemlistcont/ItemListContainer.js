import './StyleItemListCont.scss'
import '../ItemCount/ItemContador'
import ItemContador from '../ItemCount/ItemContador'

const ItemListContainer = (props) => {
    return (
        <div className="itemLiCo">
            <p className="bienvenidaMsj">{props.mensaje}</p>
            <ItemContador/>
        </div>
    )
}

export default ItemListContainer