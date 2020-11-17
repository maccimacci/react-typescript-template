import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideNav from './pages/sidebar';
import Routes from './Routes'

import './App.scss';

function App() {
    return(
      <div className="App">
        <BrowserRouter>
          <SideNav />
          <Routes />
        </BrowserRouter>
      </div>
    )
}

export default App