import React from 'react';

const pulseAnimation = `
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
`;

// On injecte l'animation dans la page
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = pulseAnimation;
document.head.appendChild(styleSheet);


function Accueil() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projets-freelance');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      data-aos="fade-up"
      style={{
        display: 'flex',
        flexDirection: 'row', // Image + Texte en ligne
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 0', // Espace en haut et bas
        minHeight: '80vh', // Prend 80% de la hauteur de l'écran
        overflow: 'hidden', // Empêche l'image de déborder
        background: 'linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)',

      }}
    >
      {/* Image côté gauche */}
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="/image_acceuil1.jpeg" 
          alt="Moi" 
          style={{ 
            width: '90%',   // Garde la taille de l'image raisonnable
            maxHeight: '500px', // Limite la hauteur de l'image
            objectFit: 'cover',
            borderRadius: '20px',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)' // Ajoute une ombre propre
          }}
          data-aos="fade-right"
        />
      </div>

      {/* Texte côté droit */}
      <div style={{ flex: '1', textAlign: 'center', padding: '20px' }} data-aos="fade-left">
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Bienvenue sur mon Portfolio</h1>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '400px', margin: '0 auto' }}>
          Je suis Sandrine, développeuse web passionnée, créative et ambitieuse !
        </p>

        <button 
          onClick={scrollToProjects}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '20px',
            animation: 'pulse 5s infinite' 
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#e64a19'}
          onMouseOut={e => e.target.style.backgroundColor = '#ff5722'}
        >
          Voir mon travail
        </button>
      </div>
    </section>
  );
}

export default Accueil;
