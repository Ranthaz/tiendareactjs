
import React, {useState} from 'react'

const ItemContador = ({agregado, stock, initial}) => {

    const [contador, setContador] = useState(initial);
    const [fecha, setFecha] = useState("");

    const CuentaClickUp = () => {
        //let stock = 12;
        if (contador < stock){
            setContador(contador + 1);
            setFecha(new Date().toLocaleString());
        }else 
            if (contador === stock) {
                console.log(`No hay más de ${stock} unidades.`);
        }
    }

    const CuentaClickDown = () => {
        if (contador > 1) {
            setContador(contador - 1);
            setFecha(new Date().toLocaleString());
        }
    }
    
    return (
        <div className="itemContador">
            <h4>El último Click fue el: {fecha} </h4>
            <button onClick={CuentaClickUp}>Añadir</button>
            <button onClick={CuentaClickDown}>Quitar</button>
            <button onClick={agregado}>Agregar al carrito</button>
            <p>{contador}</p>
        </div>
    )
}

export default ItemContador;
