import React from 'react';

function ProjetsFreelance() {
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

        {/* Cartes de projets */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}>
          {renderProject(
            "/image/avisclient.png",
            
            "Site de receuil des avis des patients",
            "https://avis-au-client.netlify.app/"
          )}
          {renderProject(
            "/image/daenergie.png",
            
            "Site vitrine d'une entreprise de btp En cours",
           
            "En cours"
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

export default ProjetsFreelance;
