// src/App.jsx
import React, { useState, useEffect } from 'react'; 
import './App.css';
import Header from './components/Header';
import NavBar from './components/Navbar';
import TopRightInfoPanel from './components/TopRightInfoPanel';
import WelcomeMessage from './components/WelcomeMessage';
import Pendidikan from './components/Pendidikan';
import Informasi from './components/Informasi';
import SosialMedia from './components/Sosialmedia';
import Projek from './components/Projek';
import Skills from './components/Skills';


import LobbyBackground1 from './images/lobby-background.png';
import LobbyBackground2 from './images/blue-archive.png'; 
import LobbyBackground3 from './images/yuuka.png';      




const backgroundImages = [
  LobbyBackground1,
  LobbyBackground2,
  LobbyBackground3,

];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);


  const [animateBackground, setAnimateBackground] = useState(false);


  useEffect(() => {
    setAnimateBackground(true); 
    const timer = setTimeout(() => {
      setAnimateBackground(false);
    }, 200); 
    return () => clearTimeout(timer);
  }, [currentBackgroundIndex]); 

  const lobbyStyle = {
    backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleMainContentClick = () => {
    if (activeSection !== 'home') {
      setActiveSection('home');
    }
  };

  // Fungsi untuk mengganti ke gambar latar belakang berikutnya
  const goToNextBackground = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex + 1) % backgroundImages.length // Loop kembali ke awal jika sudah di akhir
    );
  };

  // Fungsi untuk mengganti ke gambar latar belakang sebelumnya
  const goToPreviousBackground = () => {
    setCurrentBackgroundIndex((prevIndex) =>
      (prevIndex - 1 + backgroundImages.length) % backgroundImages.length // Loop kembali ke akhir jika sudah di awal
    );
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <WelcomeMessage stopPropagation={stopPropagation} />
        );
      case 'pendidikan':
        return (
          <Pendidikan stopPropagation={stopPropagation} />
        );
      case 'informasi':
        return (
          <Informasi stopPropagation={stopPropagation} />
        );
      case 'sosialmedia':
        return (
          <SosialMedia stopPropagation={stopPropagation} />
        );
      case 'projek':
        return (
          <Projek stopPropagation={stopPropagation} />
        );
      case 'skills':
        return (
          <Skills stopPropagation={stopPropagation} />
        );
      default:
        return null;
    }
  };

  return (
    // Tambahkan kelas dinamis 'pop-anim' jika animateBackground true
    <div className={`lobby-container ${animateBackground ? 'pop-anim' : ''}`} style={lobbyStyle}>

      <div className="background-animation-overlay"></div>

      <Header />
      <TopRightInfoPanel />

      {/* Tombol-tombol ini ditempatkan sebagai overlay di samping konten utama */}
      <div className="background-nav-buttons">
        <button onClick={goToPreviousBackground} className="bg-nav-button prev">‹</button>
        <button onClick={goToNextBackground} className="bg-nav-button next">›</button>
      </div>

      <main className="lobby-main-content" onClick={handleMainContentClick}>
        {renderContent()}
      </main>

      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
