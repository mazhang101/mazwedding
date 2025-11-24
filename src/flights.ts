export interface Flight {
  time: string;
  destination: string;
  flightNumber: string;
  gate: string;
  status: string;
}

export const flights: Flight[] = [
  { time: '08:00', destination: 'Tokyo', flightNumber: 'JL 530', gate: '13', status: 'On Time' },
  { time: '08:30', destination: 'Sydney', flightNumber: 'QA 922', gate: '01', status: 'Now boarding' },
  { time: '09:15', destination: 'London', flightNumber: 'BA 601', gate: '12', status: 'Gate open' },
  { time: '09:30', destination: 'Paris', flightNumber: 'CD 214', gate: '04', status: 'On Time' },
  { time: '09:30', destination: 'M&A WEDDING', flightNumber: 'IT 527', gate: '--', status: 'Delayed' },
];
