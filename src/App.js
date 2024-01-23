// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [contractID, setContractID] = useState('');
  const [marketPrice, setMarketPrice] = useState('');

  const handleDownload = () => {
    const data = `ContractId MarketPrice\n${String(marketPrice)} ${String(contractID)}`;
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'trading_data.txt';
    link.click();
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={'./ion-group-trading-logo.png'} alt="ion group trading logo" className="logo" />
      </div>
      <div className="content">
      {/* <div className='content-box'> */}
        <div className="input-container">
        <h3>Contract ID:</h3>
          <input
            type="text"
            placeholder="Contract ID"
            value={contractID}
            onChange={(e) => setContractID(e.target.value)}
          />
          <h3>Market Price:</h3>
          <input
            type="text"
            placeholder="Market Price"
            value={marketPrice}
            onChange={(e) => setMarketPrice(e.target.value)}
          />
          
        </div>
        <button onClick={handleDownload}>Download</button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
