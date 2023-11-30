import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="footer-above">
        <div className="footer-above-left">
          <h2 className="footer-title">Anandakrishnan KB</h2>
          <p className="footer-desc">
            A Frontend focused Web Developer building the Frontend of Websites
            and <br /> Web Applications that leads to the success of the overall
            product
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-below">
        © Copyright
        <script>document.write(new Date().getFullYear())</script>2023. Made by
        <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">
          Anandakrishnan KB
        </a>
      </div>
    </div>
  );
};

export default Footer;
