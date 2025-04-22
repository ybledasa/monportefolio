import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={{
      backgroundColor: isScrolled ? '#333' : 'rgba(0, 0, 0, 0.2)',
      padding: isScrolled ? '15px' : '25px',
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
      backdropFilter: 'blur(5px)',
      transition: 'background-color 0.3s, padding 0.3s'
    }}>
      <div style={styles.container}>
        <button style={styles.burger} onClick={toggleMenu}>☰</button>

        <ul style={{
          ...styles.ul,
          maxHeight: menuOpen ? '500px' : '0px',
          padding: menuOpen ? '20px' : '0px',
          opacity: menuOpen ? 1 : 0,
        }}>
          <li><a href="#accueil" style={styles.a} onClick={closeMenu}>Accueil</a></li>
          <li><a href="#apropos" style={styles.a} onClick={closeMenu}>À propos</a></li>
          <li><a href="#projets-freelance" style={styles.a} onClick={closeMenu}>Freelance</a></li>
          <li><a href="#projets-etude" style={styles.a} onClick={closeMenu}>Études</a></li>
          <li><a href="#contact" style={styles.a} onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px'
  },
  burger: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    fontSize: '30px',
    color: 'white',
    cursor: 'pointer'
  },
  ul: {
    listStyle: 'none',
    flexDirection: 'column',
    backgroundColor: '#444',
    position: 'absolute',
    top: '70px',
    right: '10px',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'all 0.5s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 0',
    display: 'block',
  }
};

// Responsive JS
if (window.innerWidth <= 768) {
  styles.burger.display = 'block';
  styles.ul.flexDirection = 'column';
}

export default Navbar;
