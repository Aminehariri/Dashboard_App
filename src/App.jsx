import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Aside from './components/Aside.jsx';
import Accueil from './components/pages/Accueil.jsx';
import Presentation from './components/pages/Presentation.jsx';
import Services from './components/pages/Services.jsx';
import Galerie from './components/pages/Galerie.jsx';
import Contact from './components/pages/Contact.jsx';
import Leads from './components/pages/Leads.jsx';
import Stats from './components/pages/Stats.jsx';
import Setting from './components/pages/Setting.jsx';
import Welcome from './components/Welcome.jsx'
import Profile from './components/pages/Profile.jsx';
import Lead from './components/pages/Lead.jsx';


const App = () => {
  return (
    <Router>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    </style>
    
        <Header />
        <Aside />
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/services" element={<Services />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/lead" element={<Lead />} />
             
          </Routes>
        </div>
    </Router>
  );
};

export default App;
