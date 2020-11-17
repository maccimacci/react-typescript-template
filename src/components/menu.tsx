import * as React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div id="menu">
            <ul>
                <li><Link to={"/notificaciones"}>Home</Link></li>
                <li><Link to={"/notificaciones"}>Notificaciones</Link></li>
                <li><Link to={"/novedades"}>Novedades</Link></li>
            </ul>
        </div>
    )
}

export default Menu;