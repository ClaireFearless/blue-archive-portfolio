// src/components/NavBar.jsx
import React from 'react';

// Komponen NavBar menerima activeSection dan setActiveSection sebagai props
function NavBar({ activeSection, setActiveSection }) {
  return (
    <footer className="lobby-nav">
      {/* Tombol-tombol navigasi utama */}
      <button
        className={`nav-button ${activeSection === 'pendidikan' ? 'active' : ''}`}
        onClick={() => setActiveSection('pendidikan')}
      >
        <img src="/icons/lesson.svg" alt="Pendidikan" />
        <span>Pendidikan</span>
      </button>
      <button
        className={`nav-button ${activeSection === 'informasi' ? 'active' : ''}`}
        onClick={() => setActiveSection('informasi')}
      >
        <img src="/icons/information.svg" alt="Informasi" />
        <span>Informasi Saya</span>
      </button>

      {/* --- Tambahkan tombol "My Skills" di sini --- */}
      <button
        className={`nav-button ${activeSection === 'skills' ? 'active' : ''}`}
        onClick={() => setActiveSection('skills')}
      >

        <img src="/icons/skills.svg" alt="My Skills" /> 
        <span>My Skills</span>
      </button>


      <button
        className={`nav-button ${activeSection === 'sosialmedia' ? 'active' : ''}`}
        onClick={() => setActiveSection('sosialmedia')}
      >
        <img src="/icons/sosmed.svg" alt="Sosial Media" />
        <span>Sosial Media</span>
      </button>
      <button
        className={`nav-button ${activeSection === 'projek' ? 'active' : ''}`}
        onClick={() => setActiveSection('projek')}
      >
        <img src="/icons/project.svg" alt="Projek" />
        <span>Projek Saya</span>
      </button>
    </footer>
  );
}

export default NavBar;