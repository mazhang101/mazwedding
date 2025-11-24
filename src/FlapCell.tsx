import React from 'react';
import SplitFlapChar from './SplitFlapChar';
import './FlapCell.css';

interface FlapCellProps {
  text: string;
  isStatus?: boolean;
  status?: string;
  isFieldReady?: boolean;
}

const FlapCell: React.FC<FlapCellProps> = ({ text, isStatus = false, status = '', isFieldReady = true }) => {
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
          isFieldReady={isFieldReady}
          isStatusCell={isStatus}
          transientClass={getTransientClass()}
        />
      ))}
    </div>
  );
};

export default FlapCell;
