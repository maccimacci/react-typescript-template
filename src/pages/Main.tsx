import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';

import RouterPathEnum from '../helpers/Router'

function Main() {
    return(
      <main>
        <Switch>
            <Route exact={ true } path={ RouterPathEnum.HOME } component={ Dashboard } />
            <Route path={ RouterPathEnum.PAGE1 } component={ Page1 }/>
            <Route path={ RouterPathEnum.PAGE2 } component={ Page2 }/>
            <Route component={ NoMatch } />
        </Switch>
      </main>
    )
}

export default Main