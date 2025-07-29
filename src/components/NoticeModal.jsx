// src/components/NoticeModal.jsx
import React from 'react';
import './NoticeModal.css';

function NoticeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        <h3>NOTICE: Website Updates!</h3>
        <div className="notice-body">
          <ul>
            {/* Updates terkait Portofolio ini (paling baru) */}
            <li>• [19 Juli 2025] Optimalisasi Responsivitas: Penyesuaian tampilan untuk pengalaman yang lebih baik di berbagai perangkat (termasuk fix scroll).</li>
            <li>• [18 Juli 2025] Fitur 'My Skills' telah ditambahkan! Jelajahi keahlian teknis saya secara terperinci.</li>
            <li>• [17 Juli 2025] Peningkatan Desain UI: Desain ulang komponen Header dan optimalisasi navigasi footer.</li>
            <li>• [15 Juli 2025] Integrasi Development Environment: Pindah ke Vite untuk proses pengembangan yang jauh lebih cepat.</li>
            <li>• [14 Juli 2025] Pembuatan Portofolio Web ini dimulai dengan React!</li>

            {/* Proyek Anime Showcase */}
            <li>• [05 Juli 2025] Deployment Proyek 'Showcase Character Anime': Berhasil menghosting aplikasi Full React bertema Honkai: Star Rail Sparkle.</li>
            <li>• [28 Juni 2025] Proyek 'Showcase Character Anime' (Full React): Pengembangan aplikasi interaktif bertema Honkai: Star Rail Sparkle dimulai.</li>

            {/* Setup Linux Mint */}
            <li>• [20 Juni 2025] Setup Lingkungan Kerja: Konfigurasi Linux Mint dengan visualisasi CLI dan UI yang lebih aesthetic untuk development.</li>

            {/* Proyek HIKARI STORE (Laravel) */}
            <li>• [10 Juni 2025] Pengembangan Fungsionalitas: Implementasi CRUD dan Validasi Login dasar pada proyek **HIKARI STORE**.</li>
            <li>• [05 Juni 2025] Optimalisasi Backend & Pengembangan Lanjutan Proyek **HIKARI STORE** menggunakan Laravel.</li>
            <li>• [25 Mei 2025] Fitur "DARK/LIGHT MODE" telah ditambahkan pada proyek web sebelumnya.</li>
            <li>• [20 Mei 2025] Desain Ulang Navbar untuk meningkatkan responsivitas.</li>
            <li>• [15 Mei 2025] Inisiasi Proyek **HIKARI STORE**: Memulai pengembangan web bisnis menggunakan Laravel.</li>

            <li>• [10 Mei 2025] Proyek 'SHOWCASE LOW PROFILE' dimulai (fokus pada optimasi layout).</li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default NoticeModal;