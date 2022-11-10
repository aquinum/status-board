import React from 'react';
import AeroScoreBadge, { AeroScore } from './AeroScoreBadge';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AeroScoreBadge aeroScore={AeroScore.A} height={5} width={4}/>
    </div>
  );
}

export default App;
