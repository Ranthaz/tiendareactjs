
import React, {useState} from 'react'

const ItemContador = () => {

    const [contador, setContador] = useState(0);
    const [fecha, setFecha] = useState("");

    const CuentaClick = () => {
        setContador(contador + 1);
        setFecha(new Date().toLocaleString());
    }
    
    return (
        <div className="itemContador">
            <h4>El último Click fue el: {fecha} </h4>
            <button onClick={CuentaClick}>Añadir</button>
            <p>{contador}</p>
        </div>
    )
}

export default ItemContador
