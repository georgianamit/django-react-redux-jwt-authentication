import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
export class Header extends Component {
  logout = () => {
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            JWT Auth
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <Fragment>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      type="submit"
                      className="nav-link btn btn-danger btn-sm"
                      onClick={this.logout}
                    >
                      Logout
                    </button>
                  </li>
                </Fragment>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link to="/register" className="dropdown-item">
                      Register
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      Login
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    logoutUser
  }
)(Header);
