import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./modules/Main";

var PrettyError = require("pretty-error");

// instantiate PrettyError, which can then be used to render error objects
var pe = new PrettyError();
pe.start();

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Main />
  },
  {
    path: "/view/",
    exact: true,
    main:() => <div>Testing 123</div>
  }
];

class App extends Component {
  

  render() {
    return (
      <div>
      <Router>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Router>
      </div>
    );
  }
}

export default App;
