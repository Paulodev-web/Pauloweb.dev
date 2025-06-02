import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        {/* Temporarily suspended sections */}
        {/* <Portfolio /> */}
        {/* <Testimonials /> */}
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;