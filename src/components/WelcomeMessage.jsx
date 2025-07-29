// src/components/WelcomeMessage.jsx
import React from 'react';

// Komponen WelcomeMessage menerima stopPropagation sebagai prop
function WelcomeMessage({ stopPropagation }) {
  return (
    <div className="welcome-message" onClick={stopPropagation}>
      <h2>Yōkoso watashi no portofolio !</h2>
      <p>Silakan jelajahi bagian-bagian dengan Fitur yang tersdia di bawah.</p>
    </div>
  );
}

export default WelcomeMessage;
