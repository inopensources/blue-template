import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-white">
        <div className="container-fluid">
          <p className="text-gray">
            <strong>SKARLA Dashboard 1.0 </strong> <i className="m-r-1 text-gray-light">(HTML/JQuery Version)</i>
            <span className="text-gray">&#xA9; 2009 - 2016. Made by
            <i className="fa fa-fw fa-heart text-danger"></i> Fortaleza/Ceará, BR</span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
