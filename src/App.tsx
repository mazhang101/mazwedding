import React from 'react';
import FlapRow from './FlapRow';
import FlapCell from './FlapCell';
import { FLIGHTS_DATA } from './constants';
import './FlapDisplay.css';
import './FlapCell.css';

function App() {
  return (
    <div className="board">
      <h1>INTERNATIONAL DEPARTURES</h1>
      <div className="header-row">
        <div className="header-cell">Time</div>
        <div className="header-cell">Destination</div>
        <div className="header-cell">Flight No.</div>
        <div className="header-cell">Gate</div>
        <div className="header-cell">Status</div>
      </div>
      {FLIGHTS_DATA.map((flight, index) => (
        <FlapRow key={index} flight={flight} />
      ))}
    </div>
  );
}

export default App;
