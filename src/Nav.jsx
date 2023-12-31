import {React,useState} from "react";
import logo from "./assets/logo.ico";
import { Link } from "react-scroll";

const Nav = () => {
  const [active,setActive] = useState("nav-links");
  const [toggleIcon,setToggleIcon] = useState("hamburger");
  const toggle = () =>{
    active ==="nav-links" ? setActive("nav-links hamburger-active") :setActive("nav-links")

    toggleIcon === "hamburger" ? setToggleIcon("hamburger toggle") : setToggleIcon("hamburger")
  }
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="" />
        <Link
          className="nav-name"
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
        >
          ANANDAKRISHNAN KB
        </Link>
      </div>
      <div className={active}>
        <Link
          className="nav-link-icons"
          activeClass="active"
          to="home-sec"
          spy={true}
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="nav-link-icons"
          activeClass="active"
          to="AboutMe"
          spy={true}
          smooth={true}
          offset={-100}
        >
          About
        </Link>
        <Link
          className="nav-link-icons"
          activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-100}
        >
          Projects
        </Link>
        <Link
          className="nav-link-icons"
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
        >
          Contact
        </Link>
      </div>
      <div onClick={toggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
};

export default Nav;
