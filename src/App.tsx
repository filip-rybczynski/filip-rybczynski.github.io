// React
import React from "react";

// Components
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

// Data
import developerInfo from "./data/developerInfo";
import { PersonalInfo } from "./data/interface";

function App() {
  const { githubUsername, socials, ...heroProps }: PersonalInfo = developerInfo;

  return (
    <>
      <Hero {...heroProps} />
      <Skills />
      <Projects repoUrl={githubUsername} />
      <Contact socials={socials} email={heroProps.email}/>
    </>
  );
}

export default App;
