import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import TeamPage from './pages/Team';
import ResourcesPage from './pages/Resources';
import ContactPage from './pages/Contact';

// ScrollToTop component handles window scrolling on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Main Programs Directory */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/programs" element={<ServicesPage />} />
          
          {/* Dynamic Detail Page for individual programs */}
          <Route path="/programs/:id" element={<ServiceDetail />} />
          
          <Route path="/team" element={<TeamPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;