import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {};

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state.username, this.state.password);
  };

  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div
        className="col-md-4 m-auto"
        style={{ justifySelf: "center", alignSelf: "center" }}
      >
        <div className="card mt-4 p-4">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter Username"
                onChange={this.handleChange}
                value={username}
              />
              <small id="usernameHelp" className="form-text text-muted">
                Username mast be unique.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={password}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember-me"
                onChange={this.handleChange}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Login
            </button>
          </form>
          <div className="text-center">
            <small className="form-text text-muted">
              Don't have an account. <Link to="/register">Register Here</Link>
            </small>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {
  loginUser
})(Login);
