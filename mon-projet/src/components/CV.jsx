import React from 'react';

function CV() {
  return (
<section id="cv" style={{ padding: '50px', textAlign: 'center' }} data-aos="fade-up">
<h2>Mon CV</h2>
      <p>Découvrez mon parcours académique et professionnel.</p>
      <a 
        href="/mon-cv.pdf" 
        download 
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#333',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px'
        }}
      >
        Télécharger mon CV
      </a>
    </section>
  );
}

export default CV;
