import React from "react";
import { Element } from "react-scroll";
import "./_skills.scss";
function Skills(props) {
  const languages = ["Java", "Javascript", "MySQL"];
  const frameworksAndLibraries = [
    "React.js",
    "Spring Framework",
    "Spring Boot",
    "Spring Jpa",
  ];
  const testing = ["Selenium", "Cucumber", "BDD"];
  const otherSkills = [
    "Data Structures and Algorithms",
    "Problem-solving",
    "OOPs",
    "Agile methodology",
    "Git",
    "Maven",
    "Linux",
    "AWS",
  ];

  return (
    <Element className="skills-page">
      <h1 className="h1">My Skills</h1>
      <div className="skills-container">
        <div className="skill-section">
          <h1>Languages</h1>
          <div className="skills">
            {languages.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
        <div className="skill-section">
          <h1>Frameworks and Libraries</h1>
          <div className="skills">
            {frameworksAndLibraries.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
        <div className="skill-section">
          <h1>Testing</h1>
          <div className="skills">
            {testing.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
        <div className="skill-section">
          <h1>Other Skills</h1>
          <div className="skills">
            {otherSkills.map((skill, i) => {
              return <li key={i}>{skill}</li>;
            })}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
