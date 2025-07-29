// src/components/SosialMedia.jsx
import React from 'react';

// Komponen SosialMedia menerima stopPropagation sebagai prop
function SosialMedia({ stopPropagation }) {
  return (
    <div className="content-panel" onClick={stopPropagation}>
      <h3>Sosial Media & Kontak</h3>
      <ul>

        {/* Instagram */}
        <li>
          <a href="https://www.instagram.com/hi.onyyxz?igsh=MWNwYjgxejF6YWFwaA==" target="_blank" rel="noopener noreferrer">
            <img src="/icons/ig.svg" alt="Instagram" className="social-icon" /> {/* <--- Tambahkan ini */}
            Instagram
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a href="https://github.com/ClaireFearless" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="social-icon" /> {/* <--- Tambahkan ini */}
            GitHub
          </a>
        </li>

        {/* Fesnuk */}
        <li>
          <a href="https://www.facebook.com/onyyclaire" target="_blank" rel="noopener noreferrer">
            <img src="/icons/fesnuk.svg" alt="GitHub" className="social-icon" /> {/* <--- Tambahkan ini */}
            Facebook
          </a>
        </li>

        {/* Gmail */}
        <li>
          <a href="mailto:onyxnymcraft@gmail.com" target="_blank" rel="noopener noreferrer"> {/* Pastikan ini email Anda yang benar */}
            <img src="/icons/gmail.svg" alt="Gmail" className="social-icon" /> {/* <--- Tambahkan ini */}
            Gmail
          </a>
        </li>
        
        {/* Whatsapp */}
        <li>
          <a href="https://wa.me/6285648692935" target="_blank" rel="noopener noreferrer"> {/* Pastikan ini email Anda yang benar */}
            <img src="/icons/wa.svg" alt="Gmail" className="social-icon" /> {/* <--- Tambahkan ini */}
            WhatsApp
          </a>
        </li>

        {/* Discord (Username) */}
        <li className="discord-username-item">
          <img src="/icons/discord.svg" alt="Discord" className="social-icon" /> 
          <span>onyxz#8894</span>
        </li>

      </ul>
    </div>
  );
}

export default SosialMedia;