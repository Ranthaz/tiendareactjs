import './StyleItemListCont.scss'
import '../ItemContador/StyleItemContador.scss'
import '../ItemContador/ItemContador'
import ItemContador from '../ItemContador/ItemContador'
import ItemList from '../ItemList/ItemList'
import { useState } from 'react/cjs/react.development'
import { useEffect } from 'react'


const productos = [
    {
        "id": 1,
        "nombre": "Remera Lisa Fly",
        "precio": 700,
        "categoria": "Remeras",
        "imagen": "./media/remera_lisa.jpg"
    },
    {
        "id": 2,
        "nombre": "Jogging Algodón",
        "precio": 1200,
        "categoria": "joggings",
        "imagen": "./media/remera_lisa.jpg"
    },
    {
        "id": 3,
        "nombre": "Remera Clay",
        "precio": 750,
        "categoria": "Remeras",
        "imagen": "./media/remera_lisa.jpg"
    }
];

const getproductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

const ItemListContainer = (props) => {
    
    const agregado =(contador) => {
        console.log(contador)
        console.log(`${contador} Agregado al carrito`)  
    }

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const list = getproductos()
        list.then(list => {
            setProductos(list)
        })

        return(() => {
            setProductos([])
        })
    },[])
    
    return (
        <div className="itemLiCo">
            <p className="bienvenidaMsj">{props.mensaje}</p>
            <ItemList productos={productos}/>
            <ItemContador stock={12} initial={1} agregado = {agregado}/>
        </div>
    )
}

export default ItemListContainer