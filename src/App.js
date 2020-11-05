import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Editor from './Editor';
import Main from './Main';
import "./bootstrap-4.5.3-dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" component={Main}/>
          <Route exact path = "/editor" component={Editor}/>
        </Switch>
      </div>
    );
  }
}

export default App;
