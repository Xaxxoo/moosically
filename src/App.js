import React from 'react';
import './App.css';
import { Navbar } from './fragments/Navbar';
import Home from './pages/Home';

const  App = () => {
  
    
        return (
          <div className='App'>
            <Navbar />
                <Home />
            </div>
        );
  
}

export default App;
