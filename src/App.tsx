import FlapRow from './FlapRow';
import { FLIGHTS_DATA } from './constants';
import './FlapDisplay.css';
import './FlapCell.css';

function App() {
  return (
    <div className="board">
      <h1><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACGElEQVR4nO2ZPUsDQRCGV2ysrEQ7sbSwsrO5A7ESJBwigiLkF2gnaJEIQoIfRUBRBNn1A7NrKoUckkqxVKIYEbMbJY0gKFhZpIkrm1PRoPFy5k5G74UpD+ZlntnZnUPIly9fvv6EQrPpwkTkWK5sXErChCQ0N4IgKRI7PVAG5pfPSwYwE49kK9uOoGhmMdOrDITn0lYFSlUQGULyDQgsRkwFjyGoGBGFEuVPmOYCCCxGTPUDf1hPXLciuBgJFYeJhKxHEDEib5UQYQQVI2I1dBHHs92eJKIZybxumFI3kgM1xEhiKm5WtrJNyG1phkmUAc0w77v7dltqhdHLfDCllHXuZY8Q0gPJoFWBkomd2mH0EnE+6rKBvbZXA05QqoSRVQVewCzX6VEfVI/StxhZJnKbm6LR9T5wgpItjFipqdc96YPX6Bk0h1bZVQdhoh9TPkmoWMOM7xPKLwjld2rqVkrYTmAmHjETl4SJhR9hpvqgdzglg2OHcnz6SM4vZSSO/yy56oMXCeVBxya8TVZ8gRm//Z8GdOgI6dCbWCs7RnXD3Lb7bXTxLKCO0am5k987RrWyQdZlpJqrH2SZ3xlkOvSrhP6Rf9vo2MbH7cuc9u46XQ06tvDx4jqtQX/QOFVlfDx8UjpVJXxAPOpDkNcq0S/wAbPYinyCD6jVYgjycjf6GT6Q1uuRMnzA/eAIQf/F5MuXL1/IiZ4Bnxykc0Xre4kAAAAASUVORK5CYII=" className="airplane" alt="airplane" /> INTERNATIONAL DEPARTURES</h1>
      <div className="header-row">
        <div className="header-cell">Time</div>
        <div className="header-cell">Destination</div>
        <div className="header-cell">Flight No.</div>
        <div className="header-cell">Gate</div>
        <div className="header-cell">Status</div>
      </div>
      {FLIGHTS_DATA.map((flight, index) => (
        <FlapRow key={index} flight={flight} />
      ))}
    </div>
  );
}

export default App;
