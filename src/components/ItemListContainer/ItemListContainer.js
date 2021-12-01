import './StyleItemListCont.scss'
import '../ItemContador/StyleItemContador.scss'
import '../ItemContador/ItemContador'
import ItemContador from '../ItemContador/ItemContador'

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