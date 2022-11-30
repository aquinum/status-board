import React from 'react';
import AeroScoreBadge, { AeroScore } from './AeroScoreBadge/AeroScoreBadge';
import './App.scss';
import Calendar from './Calendar/Calendar';
import Title from './Title/Title';

function App() {
  return (
    <div className="App">
      <AeroScoreBadge aeroScore={AeroScore.E} height={5} width={4} x={1} y={1} />
      <Title title={'Bienvenue au Node'} height={1} subtitle={'Nous sommes le jeudi 10 novembre 2022'} width={6} x={5} y={1} />
      <Calendar height={4} width={4} x={11} y={1} />
    </div>
  );
}

export default App;
