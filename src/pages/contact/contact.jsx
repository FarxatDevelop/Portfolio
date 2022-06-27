import React from "react";
import Title from "../title/title";
import "./contact.css";
import Input from "./input";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
          <Title title="Contact" />
        <div className="contact-body">
          <div className="contact-left">
            <div className="name-input">
              <Input label="First Name" inputId="first" type="text" />
              <Input label="Last Name" inputId="last" type="text" />
            </div>
            <div className="email-input">
              <Input label="Email" inputId="Email" type="email" />
              <Input label="Subject" inputId="Subject" type="text" />
            </div>
            <div className="textarea">
              <label htmlFor="message">Message</label>
              <textarea name="" id="message" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="contact-right">
            <div className="address">
              <h4>Address</h4>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="address green">
              <h4>Phone</h4>
              <p>+998 93 614 27-27</p>
            </div>
            <div className="address green">
              <h4>Email Address</h4>
              <p>uzaqbaevfarxat3@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;