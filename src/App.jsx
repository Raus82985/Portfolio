import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="">
      <Header />
      <Hero id="home" />
      <Aboutme id="about me" />
      <Skills id="skills" />
      <Experience id="Experience" />
      <Project id="projects" />
      <Contact id="contact" />
      <Footer id="footer"/>
    </div>
  );
};

export default App;