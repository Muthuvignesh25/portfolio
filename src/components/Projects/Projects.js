import React from "react";
import "./_projects.scss";
import Project from "../.././assets/images/image.jpg";
import { Element } from "react-scroll";
import { Link, scroller } from "react-scroll";
function Projects(props) {
  const projects = [
    {
      src: Project,
      name: "Portfolio",
      description:
        "Developed a personal portfolio using React, featuring a modern and responsive design with interactive UI components,and seamless navigation.",
    },
    // {
    //   src: Project,
    //   name: "Student Crud",
    //   description:
    //     "gvjjbn dhkvbbd dvkhb,d dkhgbjsbjksbs dkjbkdbjhkd jb.nb dhgkbjjjjdkkkkkjdn dkndnkkndkndnkdn dkndndnkjuj sn,",
    // },
    // {
    //   src: Project,
    //   name: "Student Crud",
    //   description:
    //     "gvjjbn dhkvbbd dvkhb,d dkhgbjsbjksbs dkdhk jbkdbjb.nb dhgkbjjjjjuj sn,",
    // },
  ];
  return (
    <Element name="projects-page" className="projects-page">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <div className="card" key={project.name}>
              <div className="project-image">
                <img src={project.src}></img>
              </div>
              <div className="project-details">
                <div className="project-name">
                  <h3>{project.name}</h3>
                </div>
                <div className="project-description">
                  <h5>{project.description}</h5>
                </div>
              </div>

              <div className="actions">
                <div>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={300}
                  >
                    <button className="btn-project">View Site</button>
                  </Link>
                  {/* <a href="#home">
                    <button className="btn-project">View Site</button>
                  </a> */}
                </div>
                <div>
                  <a
                    href="https://github.com/Muthuvignesh25/portfolio"
                    target="_blank"
                  >
                    <button className="btn-project">Source Code</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Element>
  );
}

export default Projects;
