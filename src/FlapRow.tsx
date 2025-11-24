import React from 'react';
import FlapCell from './FlapCell';
import type { FlightData } from './types';

interface FlapRowProps {
  flight: FlightData;
}

const FlapRow: React.FC<FlapRowProps> = ({ flight }) => {
  return (
    <div className="flight-row">
      <div className="flight-row-grid">
        <FlapCell text={flight.time} />
        <FlapCell text={flight.destination} />
        <FlapCell text={flight.flightNo} />
        <FlapCell text={flight.gate} />
        <FlapCell text={flight.status} isStatus={true} status={flight.status} />
      </div>
    </div>
  );
};

export default FlapRow;
