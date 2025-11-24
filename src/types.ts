export interface FlightData {
  time: string;
  destination: string;
  flightNo: string;
  gate: string;
  status: string;
}

export interface SplitFlapCharProps {
  char: string;
  charIndex: number;
  isFieldReady: boolean;
  isStatusCell: boolean;
  transientClass?: string;
}
