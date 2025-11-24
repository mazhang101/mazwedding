import React, { useState, useEffect } from 'react';
import './FlapCell.css';

interface FlapCellProps {
  text: string;
  isStatus?: boolean;
  status?: string;
}

const FlapCell: React.FC<FlapCellProps> = ({ text, isStatus = false, status = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setAnimating(true);
    setDisplayedText('');
    const timer = setTimeout(() => {
      text.split('').forEach((char, index) => {
        setTimeout(() => {
          setDisplayedText(prev => prev + char);
          if (index === text.length - 1) {
            setTimeout(() => setAnimating(false), 200);
          }
        }, index * 100); // 100ms delay per character
      });
    }, 500); // Initial delay

    return () => clearTimeout(timer);
  }, [text]);

  const getStatusColor = () => {
    if (!isStatus || !status) return '';
    if (status.toLowerCase().includes('now boarding') || status.toLowerCase().includes('gate open')) {
      return 'green';
    }
    if (status.toLowerCase().includes('delayed')) {
      return 'red';
    }
    return '';
  };

  return (
    <div className={`flap-cell ${animating ? 'animating' : ''} ${getStatusColor()}`}>
      {displayedText.split('').map((char, index) => (
        <span key={index} className="flap-char">{char}</span>
      ))}
    </div>
  );
};

export default FlapCell;
