// src/App.jsx
import React, { useState, useEffect } from 'react'; // Pastikan useEffect diimpor
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import TopRightInfoPanel from './components/TopRightInfoPanel';
import WelcomeMessage from './components/WelcomeMessage';
import Pendidikan from './components/Pendidikan';
import Informasi from './components/Informasi';
import SosialMedia from './components/SosialMedia';
import Projek from './components/Projek';
import Skills from './components/Skills';

// Impor semua gambar latar belakang yang Anda inginkan
// Pastikan nama file dan path sesuai dengan folder 'src/images/' Anda
import LobbyBackground1 from './images/lobby-background.png';
import LobbyBackground2 from './images/blue-archive.png'; // Ganti dengan nama file gambar Anda yang lain
import LobbyBackground3 from './images/yuuka.png';      // Ganti dengan nama file gambar Anda yang lain
// Tambahkan lebih banyak import jika Anda punya lebih banyak gambar, contoh:
// import LobbyBackground4 from './images/background4.png';

// Buat array dari gambar-gambar yang sudah diimpor
const backgroundImages = [
  LobbyBackground1,
  LobbyBackground2,
  LobbyBackground3,
  // Tambahkan variabel gambar lainnya di sini
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // State untuk memicu animasi pop up pada background
  const [animateBackground, setAnimateBackground] = useState(false);

  // Efek ini akan berjalan setiap kali currentBackgroundIndex berubah
  useEffect(() => {
    setAnimateBackground(true); // Tambahkan kelas untuk memicu animasi
    // Hapus kelas animasi setelah durasi animasi selesai agar bisa dipicu lagi
    const timer = setTimeout(() => {
      setAnimateBackground(false);
    }, 200); // Durasi ini harus sama dengan durasi animasi di CSS (0.2s)
    return () => clearTimeout(timer); // Cleanup timer saat komponen unmount atau efek dijalankan lagi
  }, [currentBackgroundIndex]); // Dependency array: efek akan re-run jika currentBackgroundIndex berubah

  // Mulai dari gambar pertama (indeks 0)
  const lobbyStyle = {
    backgroundImage: `url(${backgroundImages[currentBackgroundIndex]})`, // Gunakan gambar dari array berdasarkan indeks aktif
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
