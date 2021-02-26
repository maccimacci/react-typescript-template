import * as React from 'react';
import { Link } from 'react-router-dom'

type MenuItemProps = {
    text: string,
    route: string,
    active: boolean,
    icon: string,
    onclick() : void,
}

interface IProps {
    dataChanged(items: number, page: number): void,
    pageCount: number
}

function MenuItem({text,route, active,icon, onclick}:MenuItemProps) {

    function onClick() {
        // if (document.body.classList.contains('nav_is_visible'))
        //     document.body.className = 'home_is_visible';
        // else
        //     document.body.classList.toggle('nav_is_visible', true);

        onclick();
    }

    return (
        <li className="menuitem">
            <Link to={route} onClick={onClick}>
                {/* <i className={`fas fa-${icon}`}></i> */}
                <span>{text}</span>
            </Link>
        </li>
    )
}

export default MenuItem;