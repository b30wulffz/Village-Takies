import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Main from './Main';
import './bootstrap-4.5.3-dist/css/bootstrap.css';
import Editor from './Editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Switch>
        <Route path='/editor' component={Editor}/> 
        <Route path='/' component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;
