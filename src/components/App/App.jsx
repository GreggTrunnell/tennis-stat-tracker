import './App.css';
import Players from '../Players/Players';
import StatsList from '../Search/Search';
import AddPlayer from '../AddPlayer/AddPlayer';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import MatchStats from '../MatchStats/MatchStats';

function App() {

  return (
    <div>
      <header>
        <h1>Tennis Stat Tracker</h1>
        <p><NavLink className='nav_links' to='/'>Home</NavLink>_
          <NavLink className='nav_links' to='/statsList'>Search</NavLink>_
          <NavLink className='nav_links' to='/addPlayer'>Add Player Profile</NavLink>_
          <NavLink className='nav_links' to='/matchStats'>Match Stats</NavLink></p>
      </header>
      <Routes>
        <Route
          exact path="/"
          element={ <Home /> }
          />
        <Route
          exact path="/statsList"
          element={ <StatsList /> }
          />
        <Route
          exact path="/addPlayer"
          element={ <AddPlayer /> }
          />
        <Route
          exact path="/players"
          element={ <Players /> }
          />
         <Route
          exact path="/matchStats"
          element={ <MatchStats /> }
          />
       </Routes>
    </div>
  );
}

export default App;
