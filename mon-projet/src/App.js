import 'aos/dist/aos.css'; // Import du style
import AOS from 'aos';      // Import de AOS
import React from 'react';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import ProjetsFreelance from './components/ProjetsFreelance';
import ProjetsEtude from './components/ProjetsEtude';

import Contact from './components/Contact';
import FloatingButtonCV from './components/FloatingButtonCV';
import Footer from './components/Footer';


AOS.init(); // Initialisation de AOS
function App() {
  return (
    <div>
      <Navbar />
      <Accueil />
      <Apropos />
      <ProjetsFreelance />
      <ProjetsEtude />
     
      <Contact />
      <FloatingButtonCV />
      <Footer />
    </div>
  );
}

export default App;
