/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Showreel from './components/Showreel';
import Services from './components/Services';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <div className="relative selection:bg-brand-primary selection:text-black">
      <LoadingScreen />
      <CursorFollower />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Showreel />
        <Services />
        <Feedback />
        <Contact />
      </main>

      <Footer />
      
      {/* Dynamic video hover previews logic would go in individual components or a global state */}
      {/* Background ambient particles are handled in CSS/Section backgrounds */}
    </div>
  );
}

