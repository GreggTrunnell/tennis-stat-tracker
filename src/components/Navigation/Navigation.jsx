import { NavLink } from 'react-router-dom';

function Navigation( ) {
  
  return (
    <nav className="mb-3"> 
    <ul class="nav nav-pills">
      <li class="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink> 
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/search">Search</NavLink> 
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/match-stats">Match Stats</NavLink> 
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to="/add-players">Add Player</NavLink> 
      </li>
    </ul>
   </nav>
  );
  }

export default Navigation;
