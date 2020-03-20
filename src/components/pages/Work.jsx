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
          return (
            <div className="item" key={projet.name}>
              <a className="square" href={projet.link}>
                <img src={"./images/" + projet.imageName} alt="project" />
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
      </div>
    </main>
  );
}
