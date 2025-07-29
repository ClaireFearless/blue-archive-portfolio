// src/components/Pendidikan.jsx
import React from 'react';

// Komponen Pendidikan menerima stopPropagation sebagai prop
function Pendidikan({ stopPropagation }) {
  return (
    <div className="content-panel" onClick={stopPropagation}>
      <h3>Pendidikan Saya</h3>
      <ul>
        <li>Anggota Himpunan Mahasiswa Teknik Informatika (HIMATIKA) </li>
        <li>UNIVERSITAS MUHAMMADIYAH SIDOARJO | TEKNIK INFORMATIKA | 2023 - SEKARANG</li>
        <li>SMK WALISONGO 2 GEMPOL PASURUAN | TEKNIK INSTALASI TENAGA LISTRIK | 2020 - 2023</li>
        {/* Tambahkan lebih banyak detail pendidikan Anda di sini */}
      </ul>
    </div>
  );
}

export default Pendidikan;
