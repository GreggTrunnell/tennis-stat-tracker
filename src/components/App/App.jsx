import './App.css';
import Navigation from '../Navigation/Navigation';
import Players from '../Players/Players';
import Search from '../Search/Search';
import AddPlayer from '../AddPlayer/AddPlayer';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import MatchStats from '../MatchStats/MatchStats';
import APIPractice from '../APIPractice/APIPractice';

function App() {

  return (
    <div className="container p-3">
      <header>
        <h1>Tennis Stat Tracker</h1>
    <Navigation />
      </header>
      <main>
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
          exact path="/add-players"
          element={ <AddPlayer /> }
          />
         <Route
          exact path="/match-stats"
          element={ <MatchStats /> }
          />
          <Route
          exact path="/apiPrac"
          element={ <APIPractice /> }
          />
       </Routes>
       </main>
    </div>
  );
}

export default App;
