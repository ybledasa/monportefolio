import React from 'react';

function FloatingButtonCV() {
  return (
    <a 
      href="/CV_yolou_sandrine.pdf" 
      target="_blank" 
      rel="noopener noreferrer"
      style={floatingButtonStyle}
      className="floating-button-cv"
    >
      Voir mon CV
    </a>
  );
}

// Style de base du bouton
const floatingButtonStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#ff5722',
  color: 'white',
  padding: '15px 20px',
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
  transition: 'transform 0.3s, background-color 0.3s',
  zIndex: '1000',
};

export default FloatingButtonCV;
