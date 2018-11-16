import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './timer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
        <div className="grp-button d-flex flex-column align-items-center justify-content-center">
        <button type="button" className="btn btn-outline-primary  p-2 mb-4">Primary</button>
        <button type="button" className="btn btn-outline-danger">Danger</button></div>
      </div>
    );
  }
}

export default App;
