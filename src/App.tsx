import * as React from 'react';
import Main from './pages/Main'
import Header from './components/Layout/Header';

import './App.scss';

function App() {

    return(
      <div className="app">
          <Header />
          <Main />
          <footer />
      </div>
    )
}

export default App