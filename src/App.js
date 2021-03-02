import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-test">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              Home <span class="sr-only"></span>
            </a>
            <a class="nav-item nav-link" href="#">
              Portfolio
            </a>
            <a class="nav-item nav-link" href="#">
              About
            </a>
            <a class="nav-item nav-link" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
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
    </div>
  );
}

export default App;
