import { React, useHistory } from "react";
import { Button } from "antd";

import Meme from "./assets/meme.png";
import Face from "./assets/face.png";
import Portfolio from "./assets/portfolio.png";


const Projects = () => {
  return (
    <div id="Projects">
      <div className="contents">
        <h1 className="title">PROJECTS</h1>
        <div className="underline"></div>
        <p className="subtitle">
          Here you will find some of the personal and clients projects that I
          created with each project <br /> containing its own case study
        </p>
      </div>
      <div className="project-row">
        <div className="proj-img-container">
          <img src={Portfolio} alt="" />
        </div>
        <div className="project-desc">
          <h3 className="project-title">PORTFOLIO</h3>
          <p className="project-defenition">
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <a href="https://github.com/anandakrishnankb/MemeGenerator">
            <Button type="primary" size="large">
              VIEW
            </Button>
          </a>
        </div>
      </div>

      <div className="project-row">
        <div className="proj-img-container">
          <img src={Meme} alt="" />
        </div>
        <div className="project-desc">
          <h3 className="project-title">MEME GENERATOR</h3>
          <p className="project-defenition">
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <a href="https://github.com/anandakrishnankb/MemeGenerator">
            
            <Button type="primary" size="large">
              VIEW
            </Button>
          </a>
        </div>
      </div>

      <div className="project-row">
        <div className="proj-img-container">
          <img src={Face} alt="" />
        </div>
        <div className="project-desc">
          <h3 className="project-title">
            ATTENDANCE USING FACE RECOGNITION SYSTEM
          </h3>
          <p className="project-defenition">
            Dopefolio is a successful Open-Source project that I created which
            have been featured on some of the biggest tech sites like
            CSS-Tricks, Hostinger, etc & used by thousands of developers
            globally
          </p>
          <a
            href="https://github.com/anandakrishnankb/attendance-using-face-recognition-system"
            target="_blank"
          >
            <Button type="primary" size="large">
              VIEW
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
