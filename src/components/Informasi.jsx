// src/components/Informasi.jsx
import React from 'react';


function Informasi({ stopPropagation }) {
  return (
    <div className="content-panel" onClick={stopPropagation}>
      <h3>Informasi Pribadi</h3>
      <p>Nama: Ony Juna | オニ・ジュナ </p>
      <p>Alamat: Sidoarjo, East Java, Indonesia</p>
      <p>Minat: Web Developer, Game Developer, Linux, UI/UX </p>
    </div>
  );
}

export default Informasi;
