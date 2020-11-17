import * as React from 'react';
// import { RouteComponentProps } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import Notificaciones from './pages/Notificaciones';
import Novedades from './pages/Novedades';
import Dashboard from './pages/Dashboard';

import RouterPathEnum from './services/router'

function Routes() {
    return(
      <div className="Routes">
        <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Dashboard} />
            {/* { (!isLoggedIn) ? <Redirect to={RouterPathEnum.HOME} /> : '' } */}
            <Route path={RouterPathEnum.NOTIFICATIONS} component={Notificaciones}/>
            <Route path={RouterPathEnum.NOVEDADES} component={Novedades}/>
            <Redirect to={RouterPathEnum.HOME} />
        </Switch>
      </div>
    )
}

export default Routes