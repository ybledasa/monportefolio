import React, { useEffect } from 'react';

function ProjetsFreelance() {
  // Responsive styles injectés dynamiquement
  useEffect(() => {
    const responsiveStyles = `
      @media (max-width: 768px) {
        #projets-freelance {
          padding: 50px 15px !important;
        }

        #projets-freelance h2 {
          font-size: 24px !important;
          text-align: center !important;
        }

        .carte-projet {
          width: 100% !important;
        }

        .carte-projet img {
          height: 180px !important;
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = responsiveStyles;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <section 
      id="projets-freelance"
      data-aos="fade-up"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '80px 20px',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'left' }}>Projets Freelance</h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}>
          {renderProject(
            "/image/avisclient.png",
            "Site de recueil des avis des patients",
            "https://avis-au-client.netlify.app/"
          )}
          {renderProject(
            "/image/daenergie.png",
            "Site vitrine d'une entreprise de BTP",
            "En cours"
          )}
        </div>
      </div>
    </section>
  );
}

function renderProject(image, title, link) {
  const isEnCours = link === "En cours";

  return (
    <div
      className="carte-projet"
      data-aos="zoom-in"
      style={{ width: '300px', color: 'inherit' }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        cursor: isEnCours ? 'default' : 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '420px',
      }}
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img 
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
          textAlign: 'center',
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: '#333' }}>{isEnCours ? "Projet en cours de développement" : "Cliquez pour visiter le site"}</p>
          </div>

          <button
            style={{
              marginTop: '20px',
              padding: '8px 16px',
              backgroundColor: '#ff5722',
              color: 'white',
              border: 'none',
              borderRadius: '20px',
              fontSize: '14px',
              cursor: isEnCours ? 'not-allowed' : 'pointer',
              opacity: isEnCours ? 0.5 : 1,
            }}
            disabled={isEnCours}
            onClick={() => {
              if (!isEnCours) {
                window.open(link, '_blank');
              }
            }}
          >
            {isEnCours ? "À venir" : "Voir plus"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjetsFreelance;
