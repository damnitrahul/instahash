import React from 'react';
import './Tabs.scss';
function Tabs(props) {
  const { handleStateChange, appState } = props;

  return (
    <main>
      <div className="tabs container">
        <div
          className={`tab ${appState === 'hash' && 'active'}`}
          name="hash"
          onClick={handleStateChange}
        >
          Hashtag Generator
        </div>
        <div
          className={`tab ${appState === 'download' && 'active'}`}
          name="download"
          onClick={handleStateChange}
        >
          DP Downloader
        </div>
      </div>
    </main>
  );
}

export default Tabs;
