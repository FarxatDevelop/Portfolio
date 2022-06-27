import React from "react";
import Title from "../title/title";
import "./services.css";
import ServicesCard from "./servicesCard";

function Sevices() {
  return (
    <section className="sevices">
      <div className="container">
        <div className="sevices-body">
          <Title title="My Services" />
          <div className="sevices-cards">
            <ServicesCard price="75" class="fa-brands fa-facebook-f" name="Social" />
            <ServicesCard price="30" class="fa-solid fa-camera" name="Camera" />
            <ServicesCard price="48" class="fa-solid fa-chart-line" name="Cloud Charts" />
            <ServicesCard price="54" class="fa-brands fa-apple" name="Apple" />
            <ServicesCard price="36" class="fa-brands fa-windows" name="Window" />
            <ServicesCard price="24" class="fa-brands fa-dropbox" name="Dropbox" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sevices;