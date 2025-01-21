import './App.css';
import Players from '../Players/Players';
import axios from 'axios';
import { useState, useEffect } from 'react';
import StatsList from '../StatsList/StatsList';
import AddPlayer from '../AddPlayer/AddPlayer';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

//?working on getting the Add_player_table inputs portion to work

function App() {
console.log('in app')


  return (
    <div>
      <header>
        <h1>Tennis Stat Tracker</h1>
        <p><NavLink to='/statsList'>Stats List</NavLink></p>
      </header>
      <Routes>
        <Route
          exact path="/statsList"
          element={ <StatsList /> }
          />
       </Routes>
      <AddPlayer />
      <div className='players-container'>
      <Players name="Rybakina" />
      <Players name="Keys" />
      </div>
    </div>
  );
}

export default App;
