import Players from '../Players/Players';
import Search from '../Search/Search';
import AddPlayer from '../AddPlayer/AddPlayer';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import MatchStats from '../MatchStats/MatchStats';

function Navigation( ) {
  
  return (
    <div className='Navigation'>
        <p>
        <span><NavLink className='nav_links' to='/'>Home</NavLink> </span>
        <span><NavLink className='nav_links' to='/search'>Search</NavLink> </span>
        <span> <NavLink className='nav_links' to='/addPlayer'>Add Player Profile</NavLink> </span>
        <span><NavLink className='nav_links' to='/matchStats'>Match Stats</NavLink></span>
        </p>
      <Routes>
        <Route
          exact path="/"
          element={ <Home /> }
          />
        <Route
          exact path="/search"
          element={ <Search /> }
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

export default Navigation;
