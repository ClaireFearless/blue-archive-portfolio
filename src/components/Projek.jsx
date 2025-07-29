// src/components/Projek.jsx
import React from 'react';

// Komponen Projek menerima stopPropagation sebagai prop
function Projek({ stopPropagation }) {
  return (
    <div className="content-panel" onClick={stopPropagation}>
      <h3>Projek Saya</h3>
      <div className="project-list">
        <div className="project-item">
          <h4>HONKAI : STAR RAIL CHARACTER</h4>
          <p>Proyek simple Showcase yang sedang saya kembangkan.</p>
          <a href="https://sparkle-profile.vercel.app" target="_blank" rel="noopener noreferrer">Lihat Projek</a>
        </div>
        <div className="project-item">
          <h4>LINKTREE</h4>
          <p>Cukup satu tautan menggantikan banyak link berbeda</p>
          <a href="https://linktreeclaire.netlify.app" target="_blank" rel="noopener noreferrer">Lihat Projek</a>
        </div>
        {/* Tambahkan daftar proyek Anda di sini */}
      </div>
    </div>
  );
}

export default Projek;
