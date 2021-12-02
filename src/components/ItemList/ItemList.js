import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <ul>
            {productos.map(p =>
            <Item key={p.id} producto={productos}/>
            )}
        </ul>
    )
}

export default ItemList;