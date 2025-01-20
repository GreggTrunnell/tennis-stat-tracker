import './App.css';
import Players from '../Players/Players';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StatsList from '../StatsList/StatsList';
import Add_player_table from '../add_player_table/add_player_table';

//?working on getting the Add_player_table inputs portion to work

function App() {
console.log('in app')

  return (
    <div>
      <header>
        <h1>Tennis Stat Tracker</h1>
      </header>
      {/* <Add_player_table addPlayer={ addPlayer } setAddPlayer={ setAddPlayer } /> */}
      <StatsList />
      <div className='players-container'>
      <Players name="Rybakina" />
      <Players name="Keys" />
      </div>
    </div>
  );
}

export default App;
