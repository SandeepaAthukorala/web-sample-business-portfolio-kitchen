import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioDetail from './pages/PortfolioDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
