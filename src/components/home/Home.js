import React from "react";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="container-banner">
      <h2 className="margin-banner">You</h2>
      <h3 className="margin-banner">NEED</h3>
      <h1 className="margin-banner">ME</h1>
      <h2 className="margin-banner">TO WORK</h2>
      <div className="center">
        <a className="banner-button" href="#">
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Home;
