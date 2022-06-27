import React from "react";
import Card from "./card";
import "./home.css";
function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home-body">
          <div className="home-cards">
            <Card img="https://technext.github.io/photosen/images/img_1.jpg" photoTitle="Nature"/>
            <Card img="https://technext.github.io/photosen/images/img_2.jpg" photoTitle="Portrait"/>
            <Card img="https://technext.github.io/photosen/images/img_3.jpg" photoTitle="People"/>
            <Card img="https://technext.github.io/photosen/images/img_4.jpg" photoTitle="People"/>
            <Card img="https://technext.github.io/photosen/images/img_5.jpg" photoTitle="People"/>
            <Card img="https://technext.github.io/photosen/images/img_6.jpg" photoTitle="People"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;