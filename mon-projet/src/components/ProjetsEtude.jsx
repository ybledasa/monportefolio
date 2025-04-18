import React from 'react';

function ProjetsEtude() {
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
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'left' }}>Projets d'Étude</h2>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}>
          {renderProject(
            "/image/ascii.png", // Capture de ton projet Kaquiz (à mettre dans public/images)
            "ascii art web",
            "Un programme qui génere les lettres de façon styliser"
          )}
          {renderProject(
            "/image/Secure Messenger.png", // Ton portfolio HTML
            "Secure Messenger",
            "Secure Messenger est une application mobile de messagerie sécurisée permettant d’échanger des messages, images et vidéos en toute confidentialité. Elle intègre l’authentification biométrique et le chiffrement de bout en bout pour garantir la protection des données des utilisateurs."
          )}
          {renderProject(
            "/image/Groupie Trackers.png", // Capture du réseau social
            "Groupie Trackers",
            "Groupie Trackers est une application web interactive qui permet d’explorer les informations de groupes et artistes musicaux à partir d’une API RESTful. Elle affiche les membres, dates, lieux de concerts et détails clés via une interface élégante, avec un backend développé en Go."
          )}
      
        </div>
      </div>
    </section>
  );
}

function renderProject(image, title, description) {
  return (
    <div style={{ width: '300px', color: 'inherit' }}>
      <div style={{
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%', // prend toute la hauteur
        minHeight: '420px', // ajustable selon ta mise en page
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
          justifyContent: 'space-between', // ✅ répartit description + bouton
          textAlign: 'center',
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{title}</h3>
            <p style={{ fontSize: '14px', color: '#333' }}>{description}</p>
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
