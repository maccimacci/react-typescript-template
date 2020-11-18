import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import SideNav from './pages/Sidebar';
import Routes from './Routes'

import './App.scss';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
    return(
      <div className="App">
        <BrowserRouter>
          <Header/>
          <div className="main">
            <SideNav />
            <Routes />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    )
}

export default App