import * as React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div id="menu">
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/notifications"}>Notificaciones</Link></li>
                <li><Link to={"/novidade"}>Novedades</Link></li>
            </ul>
        </div>
    )
}

export default Menu;