import React, { Component } from "react";
import MSC from "./minesweeperCode";
import $ from "jquery";

export default class Minesweeper extends Component {
  componentDidMount() {
    MSC();
  }
  componentWillUnmount() {
    $("#minesweeper #pause").click();
  }
  render() {
    return (
      <main id="minesweeper-container">
        <h1 className="lg-heading">
          Mine<span className="text-secondary">Sweeper</span>
        </h1>
        <div id="minesweeper" className="noselect">
          <div id="board"></div>
          <div id="infos">
            <div id="flags" className="infos">
              <div>
                <i className="far fa-flag"></i>
              </div>
              <p>0/0</p>
            </div>
            <div id="time" className="infos">
              <i className="far fa-clock"></i>
              <p>00:00</p>
            </div>
            <div id="flag-toggle">
              <i className="far fa-flag"></i>
            </div>
          </div>
          <div id="buttons">
            <div id="buttons1" className="button-container">
              <div id="pause" className="button">
                <p>Pause Game</p>
              </div>
              <div id="difficulty" className="button">
                <p>Change difficulty</p>
              </div>
              <div id="newgame" className="button">
                <p>New Game</p>
              </div>
            </div>
            <div id="buttons2" className="button-container">
              <div id="diff0" className="button diff">
                <p>Easy</p>
              </div>
              <div id="diff1" className="button diff">
                <p>Normal</p>
              </div>
              <div id="diff2" className="button diff">
                <p>Hard</p>
              </div>
              <div id="diff3" className="button diff">
                <p>Harder</p>
              </div>
              <div id="back" className="button">
                <p>Return</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
