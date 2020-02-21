import React from 'react';
import './App.css';
import AvailableCarsContainer from './components/AvailableCars/AvailableCarsContainer';
import NavigationBarCars from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <NavigationBarCars />
      <AvailableCarsContainer />
    </div>
  );
}

export default App;
