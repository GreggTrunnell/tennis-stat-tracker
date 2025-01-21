import './App.css';
import Players from '../Players/Players';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StatsList from '../StatsList/StatsList';
import AddPlayer from '../AddPlayer/AddPlayer';

//?working on getting the Add_player_table inputs portion to work

function App() {
console.log('in app')

  return (
    <div>
      <header>
        <h1>Tennis Stat Tracker</h1>
      </header>
      <AddPlayer />
      {/* <StatsList /> */}
      <div className='players-container'>
      <Players name="Rybakina" />
      <Players name="Keys" />
      </div>
    </div>
  );
}

export default App;
