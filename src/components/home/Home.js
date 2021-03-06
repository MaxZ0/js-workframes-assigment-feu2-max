import React from "react";
import "../../styles/home.scss";
import img from "../../details/image/me.jpg";
function Home() {
  return (
    <div className="container-banner">
      <div>
        <h2 className="margin-banner">You</h2>
        <h3 className="margin-banner">NEED</h3>
        <h1 className="margin-banner">ME</h1>
        <h2 className="margin-banner">TO WORK</h2>
      </div>
      <img className="img-me" src={img} />
    </div>
  );
}

export default Home;
