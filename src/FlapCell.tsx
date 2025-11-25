import React, { useState, useEffect, useRef } from 'react';
import SplitFlapChar from './SplitFlapChar';
import './FlapCell.css';
import type { FlapCellProps } from './types';

const FlapCell: React.FC<FlapCellProps> = ({ text, isStatus = false, status = '', isFieldReady = true, startDelayOffset = 0, onFieldComplete }) => {
  const [isCellReady, setIsCellReady] = useState(startDelayOffset === 0);
  const completedCountRef = useRef(0);

  useEffect(() => {
    if (startDelayOffset > 0) {
      const timer = setTimeout(() => setIsCellReady(true), startDelayOffset);
      return () => clearTimeout(timer);
    }
  }, [startDelayOffset]);

  const handleCellComplete = () => {
    completedCountRef.current += 1;
    if (completedCountRef.current === text.length) {
      onFieldComplete?.();
    }
  };

  const getTransientClass = () => {
    if (!isStatus || !status) return '';
    if (status.toLowerCase().includes('boarding') || status.toLowerCase().includes('gate open')) {
      return 'status-boarding-or-open';
    }
    if (status.toLowerCase().includes('delayed')) {
      return 'status-delayed';
    }
    return '';
  };

  return (
    <div className="flight-cell">
      {text.split('').map((char, index) => (
        <SplitFlapChar
          key={index}
          char={char}
          charIndex={index}
          isFieldReady={isFieldReady && isCellReady}
          isStatusCell={isStatus}
          transientClass={getTransientClass()}
          onCellComplete={handleCellComplete}
        />
      ))}
    </div>
  );
};

export default FlapCell;
