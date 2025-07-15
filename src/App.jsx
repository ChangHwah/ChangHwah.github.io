// React Components
import { Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Page components
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// Function components
import Navbar from './components/common/Navbar';
import FooterComp from './components/common/Footer';
import CallButton from "./components/common/CallButton";


export default function App() {

  useEffect(() => {
  AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <CallButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComp />
    </>
  );
}