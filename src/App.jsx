import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import Accessories from './pages/Accessories';
import BabyFootwear from './pages/BabyFootwear';
import Bag from './pages/Bag';
import Crown from './pages/Crown';
import Hairband from './pages/Hairband';
import Jewelry from './pages/Jewelry';
import KidsFashion from './pages/KidsFashion';
import KoreanClaw from './pages/KoreanClaw';
import Pins from './pages/Pins';
import ShippingPolicy from './pages/ShippingPolicy';
import SilkBow from './pages/SilkBow';
import SilkScrunchie from './pages/SilkScrunchie';
import Reviews from './pages/Reviews';
import HairTassel from './pages/HairTassel';

function PageObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('show');
        }
      });
    };

    setTimeout(handleScroll, 50);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <PageObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/babyfootwear" element={<BabyFootwear />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/crown" element={<Crown />} />
        <Route path="/hairband" element={<Hairband />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/hairtassel" element={<HairTassel />} />
        <Route path="/kids-fashion" element={<KidsFashion />} />
        <Route path="/koreanclaw" element={<KoreanClaw />} />
        <Route path="/pins" element={<Pins />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/silk-bow" element={<SilkBow />} />
        <Route path="/silk-scrunchie" element={<SilkScrunchie />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;