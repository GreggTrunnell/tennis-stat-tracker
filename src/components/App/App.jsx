import './App.css';
import Players from '../Players/Players';

function App() {

  return (
    <div>
      <header>
        <h1>Tennis Stat Tracker</h1>
        <h3>
          "If you don't get it over the net it was never going in" 
          -Gregg Trunnell
        </h3>
      </header>
      <div className='players-container'>
      <Players name="Rybakina" />
      <Players name="Keys" />
      </div>
    </div>
  );
}

export default App;
