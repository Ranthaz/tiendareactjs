import './item.scss'

const Item = ({producto}) => {
    return (
        <div className="ProductoCard">
            <div className="ProductoContenido">
                <h2 className="ProductoTitulo">
                    {producto.nombre}
                </h2>
            </div>
            <img className="ProductoImg" src={producto.imagen} alt={producto.nombre}></img>
            <p className="datos">
                Categoría: {producto.categoria}
            </p>
            <p className="datos">
                Precio: {producto.precio}
            </p>
            <button>Mas detalles</button>
        </div>
    )
}

export default Item