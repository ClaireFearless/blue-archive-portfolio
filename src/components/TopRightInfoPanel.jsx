// src/components/TopRightInfoPanel.jsx
import React from 'react';

function TopRightInfoPanel() {
  return (
    <div className="top-right-info-panel">
      <div className="info-item">
        <span className="info-label">Highlight:</span>
        <span className="info-value">Latest Project</span>
      </div>
      <div className="info-item">
        <span className="info-label">Status:</span>
        <span className="info-value">Available for Work</span>
      </div>
      {/* Anda bisa menambahkan lebih banyak item di sini */}
    </div>
  );
}

export default TopRightInfoPanel;
