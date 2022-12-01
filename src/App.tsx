import React from 'react';
import AeroScoreBadge, { AeroScore } from './modules/AeroScoreBadge/AeroScoreBadge';
import './App.scss';
import Calendar from './modules/Calendar/Calendar';
import Title from './modules/Title/Title';
import api from './api/api';

function App() {
  return (
    <div className="App">
      <AeroScoreBadge height={5} width={4} x={1} y={1} />
      <Title title={'Bienvenue au Node'} height={1} subtitle={'Nous sommes le jeudi 10 novembre 2022'} width={6} x={5} y={1} />
      <Calendar height={4} width={4} x={11} y={1} />
    </div>
  );
}

export default App;
