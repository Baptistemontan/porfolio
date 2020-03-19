import React from "react";

const Projects = [
  {
    name: "MineSweeper",
    imageName: "minesweeper.png",
    link: "",
    github: "",
    description: ""
  },
  {
    name: "PathFinder",
    imageName: "pathfinder.png",
    link: "https://baptistemontan.github.io/pathfinder-react/",
    github: "https://github.com/Baptistemontan/pathfinder-react",
    description: ""
  }
];

export default function Work() {
  return (
    <main id="work">
      <h1 className="lg-heading">
        My<span class="text-secondary"> Work</span>
      </h1>
      <h2 className="sm-heading">here is some of my projects :</h2>
      <div className="projects">
        {Projects.map(projet => {
          const image = require("../../images/projects/" + projet.imageName);
          return (
            <div className="item" key={projet.name}>
              <a className="square" href={projet.link}>
                <img src={image} alt="project" />
                <div>
                  <div>
                    <p>{projet.description}</p>
                  </div>
                </div>
              </a>
              <a href={projet.link} className="btn-light">
                <i className="fas fa-eye"></i>
                {projet.name}
              </a>
              <a href={projet.github} className="btn-dark">
                <i className="fab fa-github"></i>GitHub
              </a>
            </div>
          );
        })}

        {/* <div className="item">
          <a className="square" href="minesweeper.html">
            <img src="images/projects/minesweeper.png" alt="project picture" />
            <div>
              <div>
                <p>description</p>
              </div>
            </div>
          </a>
          <a href="minesweeper.html" className="btn-light">
            <i className="fas fa-eye"></i>MineSweeper
          </a>
          <a href="#" className="btn-dark">
            <i className="fab fa-github"></i>GitHub
          </a>
        </div>
        <div className="item">
          <a
            className="square"
            href="https://baptistemontan.github.io/pathfinder-react/"
          >
            <img src="images/projects/pathfinder.png" alt="project picture" />
            <div>
              <div>
                <p>description</p>
              </div>
            </div>
          </a>
          <a
            href="https://baptistemontan.github.io/pathfinder-react/"
            className="btn-light"
          >
            <i className="fas fa-eye"></i>PathFinder
          </a>
          <a
            href="https://github.com/Baptistemontan/pathfinder-react"
            className="btn-dark"
          >
            <i className="fab fa-github"></i>GitHub
          </a>
        </div> */}
      </div>
    </main>
  );
}
