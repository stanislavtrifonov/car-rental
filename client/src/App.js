import React from 'react';
import './App.css';
import NavigationBarCars from './components/Navbar/Navbar';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <NavigationBarCars />
      <AppRouter />
    </div>
  );
}

export default App;
