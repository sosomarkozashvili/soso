import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Bcover from './components/Bcover/Bcover'
import Services from './components/Services/Services' 
import About from './components/About/About' 




function App() {
  return (
    <div className="App">
     <Navbar />
     <Bcover />
     <Services />
     <About />
    </div>
  );
}

export default App;