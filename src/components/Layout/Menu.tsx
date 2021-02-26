import * as React from 'react';
import MenuItem from './MenuItem';
import { MenuItems } from '../../helpers/Router';

type MenuProps = {
    onclick() : void,
}

function Menu(props:MenuProps) {

    const clicked = () : void => {
        console.log('clicked on menu');
        props.onclick();
    }

    return (
        <div className="menu">
            <ul>
                {
                    MenuItems.map((item, index) => {
                        return <MenuItem
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            route={item.route}
                            active={false}
                            onclick={clicked} />
                    })
                }
            </ul>
        </div>
    )
}

export default Menu;