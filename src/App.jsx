import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero id="home" />
      <Aboutme id="about me" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Testimonials id="experience" />
      <Contact id="contact" />
      <Footer id="footer"/>
    </div>
  );
};

export default App;