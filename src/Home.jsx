import React from "react";

import { MoreOutlined } from "@ant-design/icons";
import { BackTop, FloatButton, Button, Flex } from "antd";
import { MessageOutlined, DownloadOutlined } from "@ant-design/icons";

const Home = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        offset: -100,
      });
    }
  };
  const handleDownload = () => {
    // Replace "path/to/your/resume.pdf" with the actual path to your resume file
    const resumeFilePath = "./AnandakrishnanKB.pdf";
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.setAttribute("download", "AnandakrishnanKB-resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  return (
    <section className="home-sec">
      <div className="home-contents">
        <h1 className="home-title">HEY, I'M ANANDAKRISHNAN KB</h1>
        <p className="home-para">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web <br /> Applications that leads to the success of the overall
          product
        </p>
        <div className="button-container">
          <Button className="mobile-btn" type="primary" size="large" onClick={scrollToProjects}>
            PROJECTS
          </Button>
          <Button className="mobile-btn"
            icon={<DownloadOutlined />}
            onClick={handleDownload}
            type="primary"
            size="large"
          >
            RESUME
          </Button>
        </div>
      </div>

      <div className="home-hero-socials">
        <div className="home-hero-social">
          <a
            href="https://www.linkedin.com/in/anandakrishnan-kb-3116ab219/"
            className="home-hero-social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
              alt="AnandakrishnanKB Linkedin Profile"
              className="home-hero-social-icon"
            />
          </a>
        </div>
        <div className="home-hero-social">
          <a
            href="https://twitter.com/AnanduKB_"
            className="home-hero-social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg"
              alt="AnandakrishnanKB Twitter Profile"
              className="home-hero-social-icon"
            />
          </a>
        </div>

        <div className="home-hero-social">
          <a
            href="https://github.com/anandakrishnankb"
            className="home-hero-social-icon-link"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
              alt="AnandakrishnanKB Github Profile"
              className="home-hero-social-icon"
            />
          </a>
        </div>
      </div>

      <div className="home-right-buttons">
        <FloatButton.BackTop
          // tooltip={<div>Scroll Top</div>}
          visibilityHeight={0}
          
        />
      </div>
    </section>
  );
};

export default Home;
