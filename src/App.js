import React from 'react';
import Batter from './components/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Count Rules: balls and strikes reset to 0 when a player reaches 3
      strikes or 4 balls, balls and strikes reset to 0 when a hit is recorded,
      a foul increase strikes up to 2 with no strikes, a foul makes it 1 strike,
      with 1 strike a foul makes it 2 strikes, with 2 strikes a foul has no effect count
      stays at 2 strikes */}
      <Batter />
    </div>
  );
}

export default App;
