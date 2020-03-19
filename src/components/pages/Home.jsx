import React from "react";

export default function Home() {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Baptiste
        <br />
        <span className="text-secondary">de Montangon</span>
      </h1>
      <h2 className="sm-heading">Web Developer & Programmer</h2>
      <div className="icons">
        <a href="https://twitter.com/baptistemontan">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/baptiste.montan">
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/baptiste-d-15a0b0130">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/Baptistemontan">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </main>
  );
}
