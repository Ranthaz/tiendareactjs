import './styleitemlistcont.scss'

const ItemListContainer = (props) => {
    return (
        <div className="itemLiCo">
            <p className="bienvenidaMsj">{props.mensaje}</p>
        </div>
    )
}

export default ItemListContainer