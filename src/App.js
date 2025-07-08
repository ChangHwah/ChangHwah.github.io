import { Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Foot from './components/foot';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {

  useEffect(() => {
  AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foot />
    </>
  );
}