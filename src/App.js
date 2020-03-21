import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component {
  render(){
    return(
      <header>
        <h1>Web</h1>
        world wide web
      </header>
    );
  }
}

class Toc extends Component {
  render() {
    return(
      <nav>
        <li><a href="1.html">Web</a></li>
        <li><a href="2.html">CSS</a></li>
        <li><a href="3.html">JavaScript</a></li>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>Web</h2>
        World Wide Web
      </article>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Toc></Toc>
        <Content></Content>
      </div>
    );
  }
}

export default App;
