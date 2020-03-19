import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contacts from "./pages/Contacts";

const MenuNames = ["Home", "About Me", "My Work", "Contacts"];

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: MenuNames[0]
    };
  }
  handleMenuClick = name => {
    console.log(this);
    this.setState({ currentPage: name });
  };

  changePage() {
    const current = this.state.currentPage;
    if (current === MenuNames[0]) {
      return <Home />;
    }
    if (current === MenuNames[1]) {
      return <About />;
    }
    if (current === MenuNames[2]) {
      return <Work />;
    }
    if (current === MenuNames[3]) {
      return <Contacts />;
    }
  }

  render() {
    return (
      <div>
        <Menu
          names={MenuNames}
          current={this.state.currentPage}
          onClick={this.handleMenuClick}
        />
        {this.changePage()}
        <footer id="main-footer">Copyright &copy; 2020</footer>
      </div>
    );
  }
}
