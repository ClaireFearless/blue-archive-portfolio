// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

const skillsData = [
  { category: 'Languages', items: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Python', 'SQL'] },
  { category: 'Frameworks & Libraries', items: ['CodeIgniter 4', 'Laravel', 'React Js', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Databases', items: ['MySQL', 'SQLite'] },
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Node.Js', 'Vite', 'Linux'] },
  { category: 'Other Skills', items: ['RESTful API', 'Responsive Design', 'Basic UI/UX Principles', 'Problem Solving'] },
];

function Skills({ stopPropagation }) {
  return (
    <div className="content-panel skills-panel" onClick={stopPropagation}>
      <h3>My Skills</h3>
      <p>Berikut adalah daftar keahlian teknis yang saya miliki:</p>

      <div className="skills-grid">
        {skillsData.map((categoryData, index) => (
          <div key={index} className="skill-category-card">
            <h4>{categoryData.category}</h4>
            <ul>
              {categoryData.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Anda bisa menambahkan bagian lain di sini, misalnya progress bar atau ikon */}
    </div>
  );
}

export default Skills;