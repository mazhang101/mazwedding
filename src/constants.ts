import type { FlightData } from './types';

export const FLIGHTS_DATA: FlightData[] = [
    { time: "09:30", destination: "SYDNEY", flightNo: "CD 14", gate: "10", status: "DEPARTED" },
    { time: "10:15", destination: "PARIS", flightNo: "QF 021", gate: "12", status: "BOARDING" },
    { time: "10:35", destination: "LONDON", flightNo: "BA 21", gate: "07", status: "GATE OPEN" },
    { time: "11:15", destination: "TOKYO", flightNo: "JL 58", gate: "15", status: "ON TIME" },
    { time: "11:40", destination: "LISBON", flightNo: "IB 93", gate: "04", status: "ON TIME" },
    { time: "12:10", destination: "ROME", flightNo: "IT 55", gate: "01", status: "ON TIME" },
    { time: "14:00", destination: "M&A WEDDING", flightNo: "MA 27", gate: "--", status: "DELAYED" },
];

export const MAX_TIME_LENGTH = 4;
export const MAX_DEST_LENGTH = 13;
export const MAX_FLIGHT_NO_LENGTH = 7;
export const MAX_GATE_LENGTH = 5;
export const MAX_STATUS_LENGTH = 9;

// Animation timing constants
export const FLIP_DURATION_MS = 1000; // Duration of one half-flip
export const CHAR_STAGGER_DELAY = 500; // Delay between starting next character's flip
export const FIELD_BUFFER_MS = 200; // Small buffer after field completes before next field starts
export const ROW_ANIMATION_GAP = 500; // Gap before next row begins
