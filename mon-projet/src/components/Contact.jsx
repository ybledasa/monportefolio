import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nbtxija', 'Gmail', form.current, 'IMzwKg0kBZbFMIiDV')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage("✅ Message envoyé avec succès !");
      }, (error) => {
          console.log(error.text);
          setSuccessMessage("❌ Une erreur est survenue !");
      });
  };

  useEffect(() => {
    const responsiveStyles = `
      @media (max-width: 768px) {
        #contact {
          padding: 50px 15px !important;
        }

        #contact h2 {
          text-align: center !important;
          font-size: 22px !important;
        }

        #contact form, #contact .infos-contact {
          width: 100% !important;
        }

        #contact .contact-wrapper {
          flex-direction: column !important;
          align-items: stretch !important;
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
      id="contact"
      data-aos="fade-up"
      style={{
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: '60px 20px',
      }}
    >
      <div
        className="contact-wrapper"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          gap: '40px',
        }}
      >
        {/* Coordonnées à gauche */}
        <div
          className="infos-contact"
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <h2 style={{ fontSize: '26px', marginBottom: '20px' }}>Mes coordonnées</h2>

          <div style={infoItem}>
            <p><strong>Email :</strong> bledayolou@gmail.com</p>
          </div>

          <div style={infoItem}>
            <p><strong>Téléphone :</strong> +225 07 87 41 06 69</p>
          </div>

          <div style={infoItem}>
            <p>
              <strong>LinkedIn : </strong>
              <a
                href="https://www.linkedin.com/feed/?trk=help_me_menu"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#0077b5' }}
              >
                Voir mon profil
              </a>
            </p>
          </div>
        </div>

        {/* Formulaire à droite */}
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: '#ffffff',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
          }}
        >
          <h2 style={{ fontSize: '26px', marginBottom: '10px', textAlign: 'left' }}>Écrivez-moi</h2>

          <input
            type="text"
            name="user_name"
            placeholder="Votre nom"
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="user_email"
            placeholder="Votre email"
            required
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows="4"
            required
            style={{ ...inputStyle, resize: 'none' }}
          />

          <button type="submit" style={buttonStyle}>
            Envoyer
          </button>

          {/* Message de succès */}
          {successMessage && (
            <p style={{
              marginTop: '10px',
              color: successMessage.startsWith('✅') ? 'green' : 'red',
              fontSize: '16px',
              textAlign: 'center',
              transition: '0.4s ease-in-out',
            }}>
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

const infoItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const inputStyle = {
  padding: '12px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '16px',
  width: '100%',
};

const buttonStyle = {
  padding: '12px',
  backgroundColor: '#ff5722',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  fontSize: '18px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Contact;
