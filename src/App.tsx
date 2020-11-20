import * as React from 'react';

import SideNav from './pages/Sidebar';
import Routes from './Routes'
import Header from './pages/Header';
import Footer from './pages/Footer';

import './App.scss';

function App() {
    return(
      <div className="App">
          <Header/>
          <div className="main">
            <SideNav />
            <Routes />
          </div>
          <Footer />
      </div>
    )
}

export default App