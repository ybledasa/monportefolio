import React, { useEffect } from 'react';

function Apropos() {
  // Injecte les styles responsive une seule fois
  useEffect(() => {
    const responsiveStyles = `
      @media (max-width: 768px) {
        #apropos {
          padding: 50px 15px !important;
        }

        #apropos img.photo-profil {
          width: 100px !important;
          height: 100px !important;
        }

        #apropos p {
          font-size: 15px !important;
          text-align: justify !important;
        }

        #apropos h3 {
          font-size: 22px !important;
        }

        .competence-box {
          width: 90px !important;
          height: 130px !important;
        }

        .competence-box img {
          width: 30px !important;
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
      id="apropos"
      data-aos="fade-up"
      style={{
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: '80px 20px',
      }}
    >
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        {/* PHOTO RONDE */}
        <img
          className="photo-profil"
          src="/image_acceuil.jpeg" 
          alt="Photo de Sandrine"
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)'
          }}
        />

        {/* TEXTE + TITRE */}
        <div style={{
          width: '100%',
          maxWidth: '800px',
          textAlign: 'left',
        }}>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#333', marginBottom: '50px' }}>
            J'ai commencé mon parcours en tant qu'étudiante en <strong>2ᵉ année de Génie Civil</strong>.<br /><br />
            Après avoir découvert le développement web lors d'une <strong>piscine intensive</strong> sur le langage <strong>Go</strong>,
            j'ai décidé de me lancer dans cette aventure passionnante.<br /><br />
            À la suite de cette expérience, j'ai suivi une formation intensive de <strong>1 an et 6 mois</strong> au sein de
            <strong> DigiFemmes Academy Côte d'Ivoire</strong>, en collaboration avec le système <strong>EDUC 01</strong>.<br /><br />
            Pendant cette période, j'ai travaillé sur de nombreux projets, participé à plusieurs <strong>hackathons</strong> et renforcé mes compétences en développement web et mobile.
          </p>

          <h3 style={{ fontSize: '28px', marginBottom: '40px', textAlign: 'center' }}>Mes compétences</h3>
        </div>

        {/* COMPÉTENCES */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
        }}>
          {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "HTML", 5)}
          {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", "CSS", 4)}
          {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "JavaScript", 4)}
          {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "React", 3)}
          {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", "Firebase", 3)}
          {renderSkill("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", "Go (bases)", 2)}
        </div>
      </div>
    </section>
  );
}

// Composant compétence individuel
function renderSkill(icon, title, stars) {
  return (
    <div
      className="competence-box"
      data-aos="fade-up"
      style={{
        width: '120px',
        height: '160px',
        background: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src={icon}
        alt={title}
        style={{ width: '40px', marginBottom: '10px' }}
      />
      <p style={{ fontSize: '15px', margin: '5px 0' }}>{title}</p>
      <div style={{ fontSize: '18px', color: '#f5a623' }}>
        {'⭐'.repeat(stars)}
      </div>
    </div>
  );
}

export default Apropos;
