import React from 'react';
import FlapCell from './FlapCell';
import type { Flight } from './flights';

interface FlapRowProps {
  flight: Flight;
}

const FlapRow: React.FC<FlapRowProps> = ({ flight }) => {
  return (
    <tr className="flap-row">
      <td><FlapCell text={flight.time} /></td>
      <td><FlapCell text={flight.destination} /></td>
      <td><FlapCell text={flight.flightNumber} /></td>
      <td><FlapCell text={flight.gate} /></td>
      <td><FlapCell text={flight.status} isStatus={true} status={flight.status} /></td>
    </tr>
  );
};

export default FlapRow;
