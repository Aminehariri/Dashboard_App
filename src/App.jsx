import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Aside from './components/Aside.jsx';
import Accueil from './components/pages/Accueil.jsx';
import Presentation from './components/pages/Presentation.jsx';
import ServicesList from './components/pages/ServicesList.jsx';
import Galerie from './components/pages/Galerie.jsx';
import NewsLIst from '../src/components/pages/NewsList.jsx';
import LeadsList from './components/pages/LeadsList.jsx';
import Stats from './components/pages/Stats.jsx';
import Setting from './components/pages/Setting.jsx';
import Welcome from './components/Welcome.jsx'
import Profile from './components/pages/Profile.jsx';
import Lead from './components/pages/Lead.jsx';
import Service from './components/pages/Service.jsx';
import Login from './components/Login.jsx';
import { LogarithmicScale } from 'chart.js';
import Faq from './components/pages/Faq.jsx';
import Actualite from './components/pages/Actualite.jsx';



const App = () => {
  return (
    <>
      <Router>
    
        <Header />
        <Aside />
        <div className="content">
          <Routes>
            <Route path="/" element={<LeadsList />} />
            <Route path="/leadsList" element={<LeadsList />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/serviceslist" element={<ServicesList />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/newsLIst" element={<NewsLIst />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="/service" element={<Service />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/actualite" element={<Actualite />} />
             
          </Routes>
          

        </div>
    </Router>
    </>
    
  );
};

export default App;
