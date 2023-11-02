import React from 'react';
import Data from './Data';

import './App.css';
import MyBar from './MyBar';


function App() {
  return (
    <>
    <header class = "sticky top-0 z-50 py-2 bg-info-content">
    <div class="navbar bg-info-content">
    <MyBar/>
    </div>
    </header>
    <Data/>
      
    </>
    
  )
}

export default App;
