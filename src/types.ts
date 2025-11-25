export interface FlightData {
  time: string;
  destination: string;
  flightNo: string;
  gate: string;
  status: string;
}

export interface FlapCellProps {
  text: string;
  isStatus?: boolean;
  status?: string;
  isFieldReady?: boolean;
  startDelayOffset?: number;
  onFieldComplete?: () => void;
}

export interface SplitFlapCharProps {
  char: string;
  charIndex: number;
  isFieldReady: boolean;
  isStatusCell: boolean;
  transientClass?: string;
  onCellComplete?: () => void;
}
