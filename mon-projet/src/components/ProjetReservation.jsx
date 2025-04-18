import React from 'react';

function ProjetReservation() {
  return (
    <section 
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left',
      }}
    >
      <div style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>Application de réservation en ligne</h1>

        <img 
          src="https://via.placeholder.com/800x400.png?text=Application+de+réservation"
          alt="Projet de réservation"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            marginBottom: '30px',
            objectFit: 'cover',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
          }}
        />

        <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '30px' }}>
          Cette application permet aux utilisateurs de réserver des services en ligne rapidement. 
          Elle comprend des fonctionnalités telles que l'inscription, la connexion, la sélection de créneaux horaires, et la gestion des réservations.
        </p>

        <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>Technologies utilisées</h3>
        <ul style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '30px' }}>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Firebase (Authentification et Base de données)</li>
        </ul>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a 
            href="#"
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff5722',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '18px'
            }}
          >
            Voir la démo
          </a>

          <a 
            href="#"
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '10px 20px',
              backgroundColor: '#333',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontSize: '18px'
            }}
          >
            Code source
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjetReservation;
