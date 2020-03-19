import React from "react";

export default function About() {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About<span className="text-secondary"> Me</span>
      </h1>
      <h2 className="sm-heading">
        Let me tell you a few things about myself :
      </h2>
      <div className="about-info">
        <div className="bio-image">
          <div className="portrait"></div>
        </div>
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            My name is Baptiste de Montangon, I am a first year engineering
            student at
            <a href="https://en.esiea.fr/">ESIEA</a> in Paris. Web developpement
            is one of my greatest passion and I want to be a full stack web
            developper in the future.
          </p>
        </div>
        <div className="job job-1">
          <h3>Web developpement :</h3>
          <p>
            I am interested in programming since I'm 15 years old, I have been
            looking into all sorts of programming languages but since I have
            learned the basic of web developpement I want to become a Full Stack
            Web developper.
          </p>
        </div>
        <div className="job job-2">
          <h3>Here is My CV :</h3>
          <p className="center">
            Click <a href="./MonCV.pdf">here</a> to see my french CV
          </p>
        </div>
        <div className="job job-3">
          <h3>Programming Languages :</h3>
          <h5>here are all the languages I know and am confortable with :</h5>
          <p>
            HTML/CSS/SCSS/JS
            <br />
            React/React-native/nodeJS
            <br />
            Python
          </p>
        </div>
      </div>
    </main>
  );
}
