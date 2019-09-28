import React from 'react';
import './scss/main.css';
import './App.css';
import Drumkit from './components/Drumkit/Drumkit';

function App() {
  return (
    <div id="drum-machine" className="App">
      <Drumkit />
    </div>
  );
}

export default App;
