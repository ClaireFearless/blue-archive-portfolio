// src/components/Header.jsx
import React, { useState } from 'react'; 
import NoticeModal from './NoticeModal'; 

function Header() {
  
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);

  
  const handleOpenNotice = () => {
    setIsNoticeModalOpen(true);
  };

  
  const handleCloseNotice = () => {
    setIsNoticeModalOpen(false);
  };

  return (
    <header className="lobby-header">
      <div className="header-left">
        <span className="player-level">MY PORTOFOLIO</span>
      </div>
      <div className="header-right">
        
        <button className="header-button" onClick={handleOpenNotice}>
          <img src="/icons/notice.svg" alt="Notice" className="header-icon" />
          Notice
        </button>
        
        <button className="header-button">
          <img src="/icons/guide.svg" alt="Guide Task" className="header-icon" />
          Guide Task
        </button>
      </div>

      
      
      <NoticeModal isOpen={isNoticeModalOpen} onClose={handleCloseNotice} />
    </header>
  );
}

export default Header;