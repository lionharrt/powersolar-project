import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { PowerSolarHomePage } from './pages/PowerSolarHomePage';
import './App.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main className="scroll-snap-container h-screen overflow-y-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<PowerSolarHomePage />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;

