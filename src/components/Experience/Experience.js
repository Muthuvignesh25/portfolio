import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./_experience.scss";
import { ReactComponent as Profile } from "../.././assets/images/ADP.svg";
import ADP from "./ADP";
import { Element } from "react-scroll";
// import ADP from "./ADP";
function Experience(props) {
  return (
    <Element name="experience" className="experience">
      <h2>Work Experience</h2>
      <VerticalTimeline lineColor="#000000" animate={true} className="timeline">
        <VerticalTimelineElement
          style={{ color: "black" }}
          date="Feb 2023 - Present"
          iconStyle={{ background: "#86367b", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">Software Engineer</h4>
          <h5
            className="vertical-timeline-element-subtitle"
            style={{ color: "red" }}
          >
            ADP
          </h5>
          <p style={{ paddingLeft: "15px" }}>
            <ul>
              <li>
                Served as a Full-Stack Developer, responsible for developing web
                applications using various web frameworks and libraries.
              </li>
              <li>
                Utilized the Redux framework to effectively manage and process
                data, enhancing application scalability and maintainability.
              </li>
              <li>
                Collaborated with the Media Service team to design and develop
                RESTful APIs for file uploads using Multer middleware, and
                implemented functionalities for comprehensive file-related
                operations.
              </li>
              <li>
                Created and maintained detailed documentation for the API,
                including usage instructions and technical specifications.
              </li>
              <li>
                Automated test cases with various testing frameworks,
                significantly reducing the need for repetitive manual testing
                and streamlining the testing process. Leveraged technologies
                like Java, Selenium, JUnit, and Cucumber to achieve up to 80%
                faster test execution, minimize human error by approximately
                90%, and accelerate feedback cycles. This automation improved
                test accuracy, facilitated consistent test data management, and
                enabled detailed reporting, leading to faster bug detection,
                resolution, and ultimately higher software quality and
                scalability.
              </li>
              <li>
                Mentored over 10 fresh graduates by leading and reviewing their
                capstone projects.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          style={{ color: "black" }}
          date="Nov 2022 - Feb 2023"
          iconStyle={{ background: "#86367b", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">
            Full Stack Java Developer Intern
          </h4>
          <h5
            className="vertical-timeline-element-subtitle"
            style={{ color: "red" }}
          >
            Cognizant
          </h5>
          <p style={{ paddingLeft: "15px" }}>
            <ul>
              <li>
                Designed and implemented RESTful APIs using the Spring Boot
                framework, facilitating seamless CRUD operations for multiple
                frontend applications.
              </li>
              <li>
                Developed reusable and scalable backend components with Spring
                Boot, ensuring efficient data processing and smooth integration
                with various databases and services.
              </li>
              <li>
                Worked independently and proactively, consistently delivering
                production-ready backend code with minimal guidance while
                adhering to best practices and industry standards.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Element>
  );
}

export default Experience;
