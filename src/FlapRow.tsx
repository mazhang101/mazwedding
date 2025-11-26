import React, { useState } from 'react';
import FlapCell from './FlapCell';
import type { FlightData } from './types';
import { CHAR_STAGGER_DELAY, FLIP_DURATION_MS, FIELD_BUFFER_MS } from './constants';

interface FlapRowProps {
  flight: FlightData;
  onRowComplete?: () => void;
}

const FlapRow: React.FC<FlapRowProps> = ({ flight, onRowComplete }) => {
  const timeReady = true;
  const [destReady, setDestReady] = useState(false);
  const [flightReady, setFlightReady] = useState(false);
  const [gateReady, setGateReady] = useState(false);
  const [statusReady, setStatusReady] = useState(false);

  const statusDelay = flight.status === "DELAYED" ? (flight.destination.length - 1) * CHAR_STAGGER_DELAY + FLIP_DURATION_MS + FIELD_BUFFER_MS : 0;

  const handleRowComplete = () => {
    onRowComplete?.();
  };



  return (
    <div className="flight-row">
      <div className="flight-row-grid">
        <FlapCell text={flight.time} isFieldReady={timeReady} onFieldComplete={() => setDestReady(true)} />
        <FlapCell text={flight.destination} isFieldReady={destReady} onFieldComplete={() => setFlightReady(true)} />
        <FlapCell text={flight.flightNo} isFieldReady={flightReady} onFieldComplete={() => setGateReady(true)} />
        <FlapCell text={flight.gate} isFieldReady={gateReady} onFieldComplete={() => setStatusReady(true)} />
        <FlapCell
          text={flight.status}
          isStatus={true}
          status={flight.status}
          isFieldReady={statusReady}
          startDelayOffset={statusDelay}
          onFieldComplete={handleRowComplete}
        />
      </div>
    </div>
  );
};

export default FlapRow;
