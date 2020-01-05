import React, { Component } from 'react';
import logo from './smilebots.png';
import './App.css';

class App extends Component {

  getEnvValues() {
    if (!process.env.CODERNAME || !process.env.PROJECTNAME) {
      throw new Error('Please define `CODERNAME` and `PROJECTNAME` in your .env file');
    }

    const coderName = process.env.CODERNAME
    const projectName = process.env.PROJECTNAME;

    return { coderName, projectName };
  }

  render() {

    const { coderName, projectName } = this.getEnvValues();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SmileBots</h2>
        </div>
        <p className="App-intro">
           <b> Your Name: { coderName } </b><br/><br/>
           <b> Project Name: { projectName } </b>
        </p>
      </div>
    );
  }
}

export default App;
