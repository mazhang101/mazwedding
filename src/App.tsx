import { useState, useEffect } from 'react';
import FlapRow from './FlapRow';
import { FLIGHTS_DATA } from './constants';
import './FlapDisplay.css';
import './FlapCell.css';

function App() {
  const [completedRows, setCompletedRows] = useState(0);
  const [showBanner, setShowBanner] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  const handleRowComplete = () => {
    setCompletedRows(prev => prev + 1);
  };

  useEffect(() => {
    if (completedRows === FLIGHTS_DATA.length) {
      // All rows completed, wait 5 seconds then show banner
      setTimeout(() => {
        setShowBanner(true);
      }, 3000);
    }
  }, [completedRows]);

  const closeBanner = () => {
    setShowBanner(false);
    setBannerDismissed(true);
  };

  const openBanner = () => {
    setShowBanner(true);
  };

  return (
    <div>
      <div className="board">
        <h1><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGElEQVR4nO2ZPUsDQRCGV2ysrEQ7sbSwsrO5A7ESJBwigiLkF2gnaJEIQoIfRUBRBNn1A7NrKoUckkqxVKIYEbMbJY0gKFhZpIkrm1PRoPFy5k5G74UpD+ZlntnZnUPIly9fvv6EQrPpwkTkWK5sXErChCQ0N4IgKRI7PVAG5pfPSwYwE49kK9uOoGhmMdOrDITn0lYFSlUQGULyDQgsRkwFjyGoGBGFEuVPmOYCCCxGTPUDf1hPXLciuBgJFYeJhKxHEDEib5UQYQQVI2I1dBHHs92eJKIZybxumFI3kgM1xEhiKm5WtrJNyG1phkmUAc0w77v7dltqhdHLfDCllHXuZY8Q0gPJoFWBkomd2mH0EnE+6rKBvbZXA05QqoSRVQVewCzX6VEfVI/StxhZJnKbm6LR9T5wgpItjFipqdc96YPX6Bk0h1bZVQdhoh9TPkmoWMOM7xPKLwjld2rqVkrYTmAmHjETl4SJhR9hpvqgdzglg2OHcnz6SM4vZSSO/yy56oMXCeVBxya8TVZ8gRm//Z8GdOgI6dCbWCs7RnXD3Lb7bXTxLKCO0am5k987RrWyQdZlpJqrH2SZ3xlkOvSrhP6Rf9vo2MbH7cuc9u46XQ06tvDx4jqtQX/QOFVlfDx8UjpVJXxAPOpDkNcq0S/wAbPYinyCD6jVYgjycjf6GT6Q1uuRMnzA/eAIQf/F5MuXL1/IiZ4Bnxykc0Xre4kAAAAASUVORK5CYII=" className="airplane" alt="airplane" /> INTERNATIONAL DEPARTURES</h1>
        <div className="header-row">
          <div className="header-cell">Time</div>
          <div className="header-cell">Destination</div>
          <div className="header-cell">Flight</div>
          <div className="header-cell">Gate</div>
          <div className="header-cell">  Status</div>
        </div>
        {FLIGHTS_DATA.map((flight, index) => (
          <FlapRow
            key={index}
            flight={flight}
            onRowComplete={handleRowComplete}
          />
        ))}

        <div className={`notification-banner ${showBanner ? 'show' : ''}`}>
          <button className="banner-close" onClick={closeBanner}>×</button>
          <div className="banner-title">
            Update on Flight No. MA27
          </div>
          <div className="banner-message">
          <p>We strongly regret to inform you that Flight MA27 to Michelle and Andrew's European Summer Wedding 2026, is now delayed due to overbooked flights.</p>
          <p><strong>Original Departure:</strong> European Summer 2026</p>
          <p><strong>New Estimated Departure:</strong> 2027</p>
          <p><strong>Destination:</strong> TBC mid-2026</p>
          </div>
        </div>
      </div>

      {bannerDismissed && !showBanner && (
        <div className="banner-link" onClick={openBanner}>
          See Updates for Flight No. MA27
        </div>
      )}
    </div>
  );
}

export default App;
