// React
import React from "react";

// Styles
import "./skill-list.scss";

// Data
import { skills } from "../../data/skills";
import { SkillCategory } from "../../data/interface";

// Interfaces
import { SkillListProps } from "./interface";

const SkillList = ({ type }: SkillListProps) => {
  const {
    headerEmoji: emoji,
    headerText: header,
    skills: skillList,
  }: SkillCategory = skills[type];

  return (
    <section className="skills-section">
      <span className="skills-section__icon">{emoji}</span>
      <h3 className="skills-section__header">{header}</h3>
      <ul className={`skills-list skills-list--${type}`}>
        {skillList.map(
          (skill: string, index: number): JSX.Element => (
            <li className="skills-list__item" key={type + index.toString()}>
              {skill}
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default SkillList;
