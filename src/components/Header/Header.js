import React from "react";
import NavBar from "./NavBar/NavBar";
import { TypeAnimation } from "react-type-animation";
import profile from "../.././assets/images/profile2.jpg";
import "./_header.scss";
import { Element } from "react-scroll";
function Header(props) {
  return (
    <div>
      <div id="ele"></div>
      <NavBar />
      <Element name="home" className="header" id="home">
        <div className="profile">
          <div className="details">
            <div className="name">
              <TypeAnimation
                sequence={["Hi,I'm Muthuvignesh", 1000]}
                speed={10}
                spy={true}
                repeat={Infinity}
                wrapper="div"
                className="text-animation"
              />
            </div>
            <div className="role">
              <h1>
                Proficient Software Development Engineer with hands-on
                experience in developing, testing, and maintaining high-quality
                software solutions, with a strong track record of collaborating
                effectively with stakeholders. Experienced with the latest
                cutting-edge development tools and methodologies. Able to
                effectively self-manage during independent projects as well as
                collaborate productively as part of a team
              </h1>
            </div>
          </div>
          <div className="picture">
            <div>
              <img src={profile} alt="profile" />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Header;
