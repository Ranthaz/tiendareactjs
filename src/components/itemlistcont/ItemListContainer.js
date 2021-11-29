import './StyleItemListCont.scss'
import '../ItemCount/StyleItemCount.scss'
import '../ItemCount/ItemContador'
import ItemContador from '../ItemCount/ItemContador'

const ItemListContainer = (props) => {
    
    const agregado =(contador) => {
        console.log(contador)  //Me tira object object y no idenfico porque
        console.log(`${contador} Agregado al carrito`)  
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