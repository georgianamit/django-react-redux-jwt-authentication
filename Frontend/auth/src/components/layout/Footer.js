import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <nav className="navbar fixed-bottom navbar-expand-lg navbar-light bg-light mt-4">
        <div className="container">
          <span className="text-center">
            <a href="https://www.spiderlabweb.com" target="_blank">
              SpiderLabWeb
            </a>
            &copy; . Made with &lt;&hearts;&gt; by{" "}
            <a href="https://wwww.facebook.com/imgeorgianamit/" target="_blank">
              GeorgianAmit
            </a>
          </span>
        </div>
      </nav>
    );
  }
}
