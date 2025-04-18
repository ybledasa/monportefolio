import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) { // Si on descend de 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      backgroundColor: isScrolled ? '#333' : 'rgba(0, 0, 0, 0.2)', // Changement au scroll
      padding: isScrolled ? '20px 0' : '30px 0', // Plus large au départ
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backdropFilter: 'blur(5px)', // Effet flou
      transition: 'background-color 0.3s, padding 0.3s', // Animation douce
    }}>
      <ul style={styles.ul}>
        <li><a href="#accueil" style={styles.a}>Accueil</a></li>
        <li><a href="#apropos" style={styles.a}>À propos</a></li>
        <li><a href="#projets-freelance" style={styles.a}>Freelance</a></li>
        <li><a href="#projets-etude" style={styles.a}>Études</a></li>
        <li><a href="#contact" style={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
  },
};

export default Navbar;
