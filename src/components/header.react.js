import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="sub-navbar sub-navbar__header-breadcrumbs">
          <div className="col-lg-12 sub-navbar-column">
            <div className="sub-navbar-header">
              <h3>Monitor</h3>
            </div>
            <ol className="breadcrumb navbar-text navbar-right no-bg">
              <li className="current-parent">
                <a className="current-parent" href="../index.html">
                  <i className="fa fa-fw fa-home"></i>
                </a>
              </li>
              <li>
                <a href="javascript: void(0)">
                  Start
                </a>
              </li>
              <li className="active">Monitor</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
