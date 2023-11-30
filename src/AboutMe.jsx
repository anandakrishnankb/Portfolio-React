import React from "react";
import {Button} from 'antd';

const AboutMe = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        offset: -100
      });
    }
  };
  return (
    <div id="AboutMe">
      
      <div className="aboutme-title-contents contents">
        <h1 className="aboutme-title title">ABOUT ME</h1>
        <div className="aboutme-underline underline"></div>
        <p className="aboutme-subtitle subtitle">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br />
          of programming and technology
        </p>
      </div>
      <div className="aboutme-main-contents">
        <div className="get-to-know-me">
          <h3 className="get-to-know-me-title">Get To Know Me!</h3>
          <p className="get-to-know-me-para">
            I'm a <strong> Frontend Web Developer </strong>building the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the{" "}
            <strong> Projects </strong>section.
          </p>
          <p className="get-to-know-me-para">
            {" "}
            I also like sharing content related to the stuff that I have learned
            over the years in <strong>Web Development</strong> so it can help
            other people of the Dev Community. Feel free to Connect or Follow me
            on my{" "}
            <a href="https://www.linkedin.com/in/anandakrishnan-kb-3116ab219/">
              Linkedin
            </a>{" "}
            where I post useful content related to Web Development and
            Programming{" "}
          </p>
          <p className="get-to-know-me-para">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <strong> contact</strong> me.
          </p>
          <Button onClick={scrollToContact} type="primary" size="large" >CONTACT</Button>
        </div>
        <div className="my-skills">
          <h3 className="my-skill-title get-to-know-me-title">My Skills</h3>
          <div className="skill-wrapper">
            <div className="skills-div">HTML</div>
            <div className="skills-div">CSS</div>
            <div className="skills-div">JavaScript</div>
            <div className="skills-div">React JS</div>
            <div className="skills-div">Python</div>
            <div className="skills-div">GitHub</div>
            <div className="skills-div">Git</div>
            <div className="skills-div">Figma</div>
            <div className="skills-div">Framer</div>
            <div className="skills-div">Canva</div>
            <div className="skills-div">AntD</div>
            <div className="skills-div">Tailwind CSS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
