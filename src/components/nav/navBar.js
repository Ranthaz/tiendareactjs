import React from 'react'
import './styles.scss'

const Nav = () => {
    return (
        <div className="flexNav">
            <div>
                <img className="brandImage" src="./media/ad-retail.svg" alt="logo ad-reail"/>
            </div>

            <ul className="navCont ">
                <li className="item-li category">Remeras</li>
                <li className="item-li category">Joggins</li>
                <li className="item-li category">Camperas</li>
            </ul>

            <ul className="navCont">
                <li className="item-li">Inicio</li>
                <li className="item-li">Tienda</li>
                <li className="item-li">Nosotros</li>
            </ul>
        </div>
    )
}

export default Nav