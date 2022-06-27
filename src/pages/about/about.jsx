import React from "react";
import Title from "../title/title";
import "./about.css";
import PersonCard from "./person";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-body">
          <Title title="About Us"></Title>
          <div className="person">
            <PersonCard personImg="https://preview.colorlib.com/theme/photosen/images/xperson_1.jpg.pagespeed.ic.NzGotTzTEg.webp" />
            <PersonCard personImg="https://preview.colorlib.com/theme/photosen/images/xperson_2.jpg.pagespeed.ic.NzGotTzTEg.webp" />
            <PersonCard personImg="https://preview.colorlib.com/theme/photosen/images/xperson_3.jpg.pagespeed.ic.NzGotTzTEg.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;