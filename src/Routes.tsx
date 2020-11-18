import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Notifications from './pages/Notifications';
import News from './pages/News';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';

import RouterPathEnum from './services/router'

function Routes() {
    return(
      <div className="Routes">
        <Switch>
            <Route exact={true} path={RouterPathEnum.HOME} component={Dashboard} />
            {/* { (!isLoggedIn) ? <Redirect to={RouterPathEnum.HOME} /> : '' } */}
            <Route path={RouterPathEnum.NOTIFICATIONS} component={Notifications}/>
            <Route path={RouterPathEnum.NEWS} component={News}/>
            <Route component={NoMatch} />
            {/* <Redirect to={RouterPathEnum.HOME} /> */}
        </Switch>
      </div>
    )
}

export default Routes