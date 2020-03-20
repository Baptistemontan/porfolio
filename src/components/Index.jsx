import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contacts from "./pages/Contacts";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const Pages = [
  { name: "Home", url: "", component: Home },
  { name: "About Me", url: "about", component: About },
  { name: "My Work", url: "work", component: Work },
  { name: "Contacts", url: "contacts", component: Contacts }
];

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: Pages[0].url
    };
  }
  handleMenuClick = name => {
    this.setState({ currentPage: name });
  };

  render() {
    return (
      <Router basename="/portfolio">
        <Menu
          pages={Pages}
          current={this.state.currentPage}
          onClick={this.handleMenuClick}
        />
        <Switch>
          {Pages.map(page => (
            <Route
              exact
              path={"/" + page.url}
              component={page.component}
              key={page.url}
            />
          ))}
          <Route component={Home} />
        </Switch>
        <footer id="main-footer">Copyright &copy; 2020</footer>
      </Router>
    );
  }
}
