import React, { Component } from "react";
import Menu from "./Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contacts from "./pages/Contacts";
import Minesweeper from "./pages/Minesweeper";
//nomrally I should use BrowserRouter but it does not work with gh-pages
//so I use HashRouter, it create a /#/ in front of every link for stability
import { Route, HashRouter as Router, Switch } from "react-router-dom";

//this array contain the names, url and component for each pages, so if I want to add a pages
//I just create a component and add it to this array and it will automaticly create
//a Route and add it to the menu
const Pages = [
  { name: "Home", url: "", component: Home },
  { name: "About Me", url: "about", component: About },
  { name: "My Work", url: "work", component: Work },
  { name: "Contacts", url: "contacts", component: Contacts },
];

export default class Index extends Component {
  constructor(props) {
    super(props);
    //I set the active page to the home page
    this.state = {
      currentPage: Pages[0].url,
    };
  }
  //this handle the click on a menu link
  //it change the state to the current active page
  handleMenuClick = (url) => {
    this.setState({ currentPage: url });
  };

  render() {
    return (
      <Router>
        {/* first we render the menu */}
        <Menu
          pages={Pages}
          current={this.state.currentPage}
          onClick={this.handleMenuClick}
        />
        {/* then we look at the different routes by mapping the pages array */}
        <Switch>
          {Pages.map((page) => (
            <Route
              exact
              path={"/" + page.url}
              component={page.component}
              key={page.url}
            />
          ))}
          <Route exact path={"/minesweeper"} component={Minesweeper} />
          {/* here we have the default route (to prevent 404 error) */}
          <Route component={Home} />
        </Switch>
        {/* and then the footer */}
        <footer id="main-footer">Copyright &copy; 2020</footer>
      </Router>
    );
  }
}
