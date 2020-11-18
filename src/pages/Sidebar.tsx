import * as React from 'react';

import Routes from '../services/router';
import Menu from '../components/Menu';


function SideNav() {
    return (
        <div className="sidenav">
            <Menu />
        </div>
    )
}

export default SideNav;