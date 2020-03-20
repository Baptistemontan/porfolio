import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    //I set the active state to true
    this.state = {
      active: false
    };
  }
  handleButton = () => {
    //this just toogle the active state
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  };
  //handle when a link is click, it pass the url to the onClick
  //and set the active state to false to close the menu
  handleLink(url) {
    this.props.onClick(url);
    this.setState({ active: false });
  }
  render() {
    //I retrieve the pages and the current page
    const { pages, current } = this.props;
    //this variable is for animation, I hide the menu if active state is false and otherwise I show it
    //and it transforme the hamburger button to a cross
    const classShow = this.state.active ? " show" : "";
    return (
      <header className="noselect">
        {/* thats the hamburger button */}
        <div className={"menu-btn" + classShow} onClick={this.handleButton}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className={"menu" + classShow}>
          {/* the picture */}
          <div className={"menu-branding" + classShow}>
            <div className="portrait"></div>
          </div>
          {/* the background of the picture */}
          <div className={"menu-branding-background" + classShow}></div>
          {/* and the list of link */}
          <ul className={"menu-nav" + classShow}>
            {/* I map the pages array */}
            {pages.map(page => {
              //this is for when the page is the current page, so its in an other color
              const className =
                "nav-item" + (page.url === current ? " current" : "");
              return (
                // this is just a list item with a link to the page
                <li className={className + classShow} key={page.url}>
                  <Link
                    to={"/" + page.url}
                    className="nav-link"
                    onClick={() => this.handleLink(page.url)}
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
