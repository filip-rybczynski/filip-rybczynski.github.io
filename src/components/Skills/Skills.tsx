// React
import React from "react";

// Components
import SkillList from "../SkillList/SkillList";

// Styles
import "./skills.scss";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__header">My skills</h2>
      <div className="skills__container">
        <SkillList type="work" />
        <SkillList type="something" />
        <SkillList type="learn" />
      </div>
    </section>
  );
}

export default Skills;
