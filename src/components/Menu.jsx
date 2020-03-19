import React, { Component } from "react";

// export default function Menu({ onClick, names, current }) {
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  handleButton = () => {
    if (this.state.active) {
      this.setState({ active: false });
    } else {
      this.setState({ active: true });
    }
  };
  handleLink(name) {
    this.props.onClick(name);
    this.setState({ active: false });
  }
  render() {
    const { names, current } = this.props;
    const classShow = this.state.active ? " show" : "";
    const classBtnShow = this.state.active ? " close" : "";
    return (
      <header className="noselect">
        <div className={"menu-btn" + classBtnShow} onClick={this.handleButton}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className={"menu" + classShow}>
          <div className={"menu-branding" + classShow}>
            <div className="portrait"></div>
          </div>
          <div className={"menu-branding-background" + classShow}></div>
          <ul className={"menu-nav" + classShow}>
            {names.map(name => {
              const className =
                "nav-item" + (name === current ? " current" : "");
              return (
                <li className={className + classShow} key={name}>
                  <div
                    onClick={() => this.handleLink(name)}
                    className="nav-link"
                  >
                    {name}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
