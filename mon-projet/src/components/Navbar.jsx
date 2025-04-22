import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
        {isMobile && (
          <button style={styles.burger} onClick={toggleMenu}>☰</button>
        )}

        <ul style={{
          ...styles.ul,
          flexDirection: isMobile ? 'column' : 'row',
          display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
          position: isMobile ? 'absolute' : 'static',
          top: isMobile ? '70px' : 'auto',
          right: isMobile ? '10px' : 'auto',
          backgroundColor: isMobile ? '#444' : 'transparent',
          borderRadius: isMobile ? '10px' : '0px',
          boxShadow: isMobile ? '0 4px 10px rgba(0,0,0,0.4)' : 'none',
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
    background: 'transparent',
    border: 'none',
    fontSize: '30px',
    color: 'white',
    cursor: 'pointer'
  },
  ul: {
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px',
    display: 'block',
  }
};

export default Navbar;
