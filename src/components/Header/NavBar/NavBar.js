import React from "react";
import { Link, scroller } from "react-scroll";
import "./_nav-bar.scss";
function NavBar(props) {
  const navItems = [
    { name: "Home", id: "home", offset: -90 },
    { name: "Skills", id: "skills-page", offset: -90 },
    { name: "Experience", id: "experience", offset: -50 },
    { name: "Projects", id: "projects-page", offset: -50 },
    // { name: "Contact", id: "contact" },
  ];
  return (
    <nav>
      <ul className="navbar" id="navbar">
        {navItems.map((navItem) => {
          return (
            <li className="nav-items" key={navItem.name}>
              <Link
                activeClass="active"
                to={navItem.id}
                spy={true}
                smooth={true}
                offset={navItem.offset}
                duration={300}
              >
                {navItem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
