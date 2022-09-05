// React
import React from 'react';

// Components
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

// Data
import developerInfo from './data/developerInfo';

function App() {
  const { repository, socials, ...heroProps} = developerInfo

  return (
    <>
    <Hero {...heroProps} />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}

export default App;
