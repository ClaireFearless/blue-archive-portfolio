// src/components/Pendidikan.jsx
import React from 'react';


function Pendidikan({ stopPropagation }) {
  return (
    <div className="content-panel" onClick={stopPropagation}>
      <h3>Pendidikan Saya</h3>
      <ul>
        <li>Anggota Himpunan Mahasiswa Teknik Informatika (HIMATIKA) </li>
        <li>UNIVERSITAS MUHAMMADIYAH SIDOARJO | TEKNIK INFORMATIKA | 2023 - SEKARANG</li>
        <li>SMK WALISONGO 2 GEMPOL PASURUAN | TEKNIK INSTALASI TENAGA LISTRIK | 2020 - 2023</li>
        
      </ul>
    </div>
  );
}

export default Pendidikan;
