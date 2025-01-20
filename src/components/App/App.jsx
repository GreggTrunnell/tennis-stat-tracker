import './App.css';
import Players from '../Players/Players';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StatsList from '../StatsList/StatsList';

function App() {

  return (
    <div>
      <header>
        <h1>Tennis Stat Tracker</h1>
      </header>
      <StatsList />
      <div className='players-container'>
      <Players name="Rybakina" />
      <Players name="Keys" />
      </div>
    </div>
  );
}

export default App;
