import * as React from 'react';

import Routes from '../services/router';
import Menu from '../components/menu';


function SideNav() {
    return (
        <div className="sidenav">
            <div id="logo">logo</div>
            <Menu />
        </div>
    )
}

export default SideNav;