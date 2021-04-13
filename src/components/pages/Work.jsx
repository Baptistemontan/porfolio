import React from "react";
import { Link } from "react-router-dom";

//same as contact page, I have an array of projects
//so I can modify the html of all project in one place and add/modify one very simply
const Projects = [
  {
    name: "MineSweeper",
    imageName: "minesweeper.png",
    link: "minesweeper",
    github: "",
    description: "This is a MineSweeper Game",
  },
  {
    name: "PathFinder",
    imageName: "pathfinder.png",
    link: "https://baptistemontan.github.io/pathfinder-react/",
    github: "https://github.com/Baptistemontan/pathfinder-react",
    description: "This is a Pathfinder Visualizer that I made under React",
  },
  {
    name: "WebApp",
    imageName:"",
    link: "https://baptistemontan.github.io/webapp/",
    github: "https://github.com/Baptistemontan/webapp",
    description: "This is a web application made for a truck monitoring project using Google Map API"
  }
];

export default function Work() {
  return (
    <main id="work">
      <h1 className="lg-heading">
        My<span className="text-secondary"> Work</span>
      </h1>
      <h2 className="sm-heading">Here is some of my projects :</h2>
      <div className="projects">
        {Projects.map((projet) => {
          return (
            <div className="item" key={projet.name}>
              <Link className="square" to={projet.link}>
                <img
                  src={"./portfolio/images/" + projet.imageName}
                  alt="project"
                />
                <div>
                  <div>
                    <p>{projet.description}</p>
                  </div>
                </div>
              </Link>
              <Link to={projet.link} className="btn-light">
                <i className="fas fa-eye"></i>
                {projet.name}
              </Link>
              <Link to={projet.github} className="btn-dark">
                <i className="fab fa-github"></i>GitHub
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
