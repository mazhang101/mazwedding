import React from 'react';
import FlapRow from './FlapRow';
import FlapCell from './FlapCell';
import { flights } from './flights';
import './FlapDisplay.css';
import './FlapCell.css';

function App() {
  return (
    <div className="flight-display">
      <h1 className="display-header">International Departures</h1>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Destination</th>
            <th>Flight No.</th>
            <th>Gate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <FlapRow key={index} flight={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
