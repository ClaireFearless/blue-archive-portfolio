// src/components/Header.jsx
import React, { useState } from 'react'; // <-- Tambahkan useState
import NoticeModal from './NoticeModal'; // <-- IMPORT KOMPONEN MODAL

function Header() {
  // State untuk mengontrol apakah modal Notice terbuka atau tertutup
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  // Fungsi untuk membuka modal Notice
  const handleOpenNotice = () => {
    setIsNoticeModalOpen(true);
  };

  // Fungsi untuk menutup modal Notice
  const handleCloseNotice = () => {
    setIsNoticeModalOpen(false);
  };

  return (
    <header className="lobby-header">
      <div className="header-left">
        <span className="player-level">MY PORTOFOLIO</span>
      </div>
      <div className="header-right">
        {/* Tombol Notice - Tambahkan onClick handler */}
        <button className="header-button" onClick={handleOpenNotice}>
          <img src="/icons/notice.svg" alt="Notice" className="header-icon" />
          Notice
        </button>
        {/* Tombol Guide Task */}
        <button className="header-button">
          <img src="/icons/guide.svg" alt="Guide Task" className="header-icon" />
          Guide Task
        </button>
      </div>

      {/* Render komponen NoticeModal di sini */}
      {/* isOpen akan true/false sesuai state, onClose akan dipanggil saat modal ditutup */}
      <NoticeModal isOpen={isNoticeModalOpen} onClose={handleCloseNotice} />
    </header>
  );
}

export default Header;