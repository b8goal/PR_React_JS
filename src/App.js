import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//property => props
class Subject extends Component {
  render(){
    return(
      <header>
        <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

class Toc extends Component {
  render() {

    var list = [];
    var i = 0;
    while(i<this.props.data.length){
      var data = this.props.data[i];
      list.push(<li key={data.id}><a href={data.id+'.html'}>{data.title}</a></li>)
      i=i+1;
    }
    return(
      <nav>
        <oi>
          {list}
        </oi>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <article>
        <h2>{this.props.title}</h2>
         {this.props.dsec}
      </article>
    );
  }
}
class App extends Component {
  state = {
    contents:[
      {id:1, title:'HTML', dsec:'HTML is for information'},
      {id:2, title:'CSS', dsec:'CSS is for design'},
      {id:3, title:'JavaScript', dsec:'JavaScript is for interaction'}
    ]
  }
  render() {
    return (
      <div className="App">
        <Subject title="Web" sub="World Wide Web"></Subject>
        <Toc data={this.state.contents}></Toc>
        <Content title="HTML" dsec="HTML is for info"></Content>
      </div>
    );
  }
}

export default App;
