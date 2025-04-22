import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const responsiveFooter = `
      @media (max-width: 768px) {
        .footer-icon {
          margin: 10px !important;
        }
      }

      .footer-icon:hover svg {
        color: #ff5722 !important;
        transform: scale(1.2);
      }

      .footer-icon svg {
        transition: transform 0.3s, color 0.3s;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = responsiveFooter;
    document.head.appendChild(styleSheet);
  }, []);

  // Scroll fluide vers le haut (au clic sur l'icône flèche)
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={footerStyle} data-aos="fade-up">
      <div style={linkContainerStyle}>
        {/* Retour haut */}
        <a href="#accueil" className="footer-icon" title="Retour en haut" onClick={scrollToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </a>

        {/* Email */}
        <a href="mailto:sandrine@example.com" className="footer-icon" title="Envoyer un email">
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ton-lien" target="_blank" rel="noopener noreferrer" className="footer-icon" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c-1.657 0-3 1.343-3 3v5h3v-5c0-.552.448-1 1-1s1 .448 1 1v5h3v-5a4 4 0 00-4-4zM2 9h3v10H2zM3.5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        </a>
      </div>

      <p style={{ marginTop: '15px', fontSize: '14px', color: '#555' }}>
        © 2025 Sandrine. Fait avec ❤️. Tous droits réservés.
      </p>
    </footer>
  );
}

// STYLES
const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '40px 0',
  textAlign: 'center',
  marginTop: '60px',
};

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginBottom: '15px',
  flexWrap: 'wrap',
};

const iconStyle = {
  width: '30px',
  height: '30px',
  color: '#555',
};

export default Footer;
