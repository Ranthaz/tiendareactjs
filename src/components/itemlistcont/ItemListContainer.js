import './StyleItemListCont.scss'
import '../ItemCount/StyleItemCount.scss'
import '../ItemCount/ItemContador'
import ItemContador from '../ItemCount/ItemContador'

const ItemListContainer = (props) => {
    
    const agregado =() => {
        console.log("Agregado al carrito")
    }
    
    return (
        <div className="itemLiCo">
            <p className="bienvenidaMsj">{props.mensaje}</p>
            <ItemContador agregado = {agregado}/>
            <ItemContador agregado = {agregado}/>
            <ItemContador agregado = {agregado}/>
            <ItemContador agregado = {agregado}/>
            <ItemContador agregado = {agregado}/>
            <ItemContador agregado = {agregado}/>
        </div>
    )
}

export default ItemListContainer