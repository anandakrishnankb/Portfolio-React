import  {React,  useRef,useState } from "react";
import emailjs from '@emailjs/browser';
import {Button} from "antd";

const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      form.current.reset();
      emailjs.sendForm('service_2hppe2q', 'template_z1otrif', form.current, 'idmMs4RBfhBCmYl_-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div id="Contact">
      <div className="contact-content-wrap">
        <div className="contact-title-contents contents">
          <h1 className="contact-title title">CONTACT</h1>
          <div className="underline"></div>
          <p className="contact-subtitle subtitle">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as <br /> possible
          </p>
        </div>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form" action="">
            <input type="hidden" name="form-name" value="form 1" />
            <div className="contact-form-fields">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="user_name"
                id="name"
                fdprocessedid="o0hwvm"
              ></input>
            </div>
            <div className="contact-form-fields">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="user_email"
                id="email"
                fdprocessedid="o0hwvm"
              />
            </div>
            <div className="contact-form-fields">
              <label className="contact__form-label" htmlFor="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <Button size="large" type="primary" htmlType="submit" >SUBMIT</Button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
