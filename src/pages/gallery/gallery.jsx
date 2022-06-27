import React from "react";
import Title from "../title/title";
import Card from "./card";
import "./gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery-body">
          <Title title="Portrait Gallery" />
        </div>
        <div className="gallery-cards">
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_1.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_2.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_3.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_4.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_5.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_6.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_7.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_8.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_9.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_5.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_2.jpg" />
          <Card img="https://preview.colorlib.com/theme/photosen/images/nature_small_1.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;