import { NavLink } from 'react-router-dom';

function Navigation( ) {
  
  return (
    <nav className="mb-3"> 
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink> 
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/search">Search</NavLink> 
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/match-stats">Match Stats</NavLink> 
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/add-players">Add Player</NavLink> 
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/score">Score</NavLink> 
      </li>
    </ul>
   </nav>
  );
  }

export default Navigation;
