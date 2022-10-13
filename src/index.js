import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './sass/style.scss';
import App from './App';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import BlankPage from './pages/BlankPage';
import Questions from './pages/Questions';
import Contact from './pages/Contact';
import Abouts from './pages/Abouts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/blank" exact element={<BlankPage />} />
        <Route path="/about" exact element={<Abouts />} />
        <Route path="/questions" exact element={<Questions />} />
        <Route path="/contacts" exact element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
);
