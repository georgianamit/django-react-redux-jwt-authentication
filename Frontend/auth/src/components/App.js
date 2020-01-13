import React, { Fragment, Component } from "react";
import Header from "./layout/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./account/Login";
import Register from "./account/Register";
import Footer from "./layout/Footer";
import Profile from "./account/Profile";
import { Provider } from "react-redux";
import store from "../store";
import PrivateRoute from "./utils/PrivateRoute";
import { loadUser } from "../actions/auth";

export class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Router>
            <Header />
            <Switch>
              <PrivateRoute exact path="/" component={Profile} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
            <Footer />
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
