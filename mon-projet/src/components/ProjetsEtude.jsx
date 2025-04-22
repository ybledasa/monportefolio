import React, { useEffect } from 'react';

function ProjetsEtude() {
  useEffect(() => {
    const responsiveStyles = `
      @media (max-width: 768px) {
        #projets-etude {
          padding: 50px 15px !important;
        }

        #projets-etude h2 {
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
      id="projets-etude"
      data-aos="fade-up"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: '80px 20px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'left' }}>Projets d'Étude</h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}>
          {renderProject(
            "/image/ascii.png",
            "Ascii Art Web",
            "Un programme qui génère des lettres stylisées à partir d'une saisie utilisateur."
          )}
          {renderProject(
            "/image/Secure Messenger.png",
            "Secure Messenger",
            "Application mobile sécurisée avec chiffrement de bout en bout, permettant d’échanger messages, images et vidéos. Intègre une authentification biométrique."
          )}
          {renderProject(
            "/image/Groupie Trackers.png",
            "Groupie Trackers",
            "Application web interactive connectée à une API RESTful pour explorer des groupes musicaux, leurs concerts et membres, avec backend en Go."
          )}
        </div>
      </div>
    </section>
  );
}

function renderProject(image, title, description) {
  return (
    <div
      className="carte-projet"
      data-aos="zoom-in-up"
      style={{ width: '300px', color: 'inherit' }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minHeight: '460px', // Plus haut pour les longues descriptions
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
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: '#333', textAlign: 'justify' }}>{description}</p>
          </div>
          <button style={{
            marginTop: '20px',
            padding: '8px 16px',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            fontSize: '14px',
            cursor: 'default',
          }}>
            Voir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjetsEtude;
