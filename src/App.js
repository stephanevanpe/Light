import Lamp from './light';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>Allumez les ampoules en cliquant dessus!</p>

    <div id='lightBulbWrapper'>
          <Lamp />
          <Lamp />
          <Lamp />
          <Lamp bulbOn={true}/>
      </div>
    </div>
  );
}

export default App;
