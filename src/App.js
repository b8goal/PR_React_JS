import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//property => props
class Subject extends Component {
  render(){
    return(
      <header>
        <h1><a href="/" onClick={function(ev){
          ev.preventDefault();
          this.props.onClick();
        }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
      </header> 
    );
  }
}

class Toc extends Component {
  render(){
    var list=[];
    var i=0;
    while(i<this.props.data.length){
      var data = this.props.data[i];
      list.push(
        <li key={data.id}>
          <a href={data.id+'.html'} onClick={function(id, ev){
            ev.preventDefault();
            this.props.onSelect(id);
          }.bind(this, data.id)}>
            {data.title}
          </a>
        </li>
        );
      i = i + 1;
    }
    return(
      <nav>
        <ol>
          {list}
        </ol>
      </nav>
    );
  }
}

class Content extends Component {
  render(){
    return(
      <nav>
        <ol>
          <h1>{this.props.data.title}</h1>
            {this.props.data.desc}
        </ol>
      </nav>
    );
  }
}
class App extends Component {
  state = {
    mode:'read',
    selected_content_id:3,
    contents:[
      {id:1, title:'HTML', desc:'HTML is for Information'},
      {id:2, title:'CSS', desc:'CSS is for design'},
      {id:3, title:'JavaScript', desc:'JavaScript is for intersaction'}
    ]
  }
  getSelectedContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(this.state.selected_content_id === data.id){
        return data;
      }
      i = i + 1;
    }
  }
  getContentComponent(){
    if(this.state.mode === 'read'){
      return <Content data={this.getSelectedContent()}></Content>
    } else if(this.state.mode === 'welcome') {
      return <Content data={{
        title:'Welcome',
        desc:'Hello, React!!!'
      }}></Content>
    }
  }
  render() {
    var content = this.getSelectedContent();
    console.log(content);
    return (
      <div className="App">
        <Subject onClick={function(){
          this.setState({mode:'welcome'})
        }.bind(this)} title="WEB" sub="World Wide Web"></Subject>
        <Toc onSelect={function(id){
          // this.state.selected_content_id 의 값을 id으로 바꿔라!
          this.setState({
            selected_content_id:id,
            mode:'read'
          });
        }.bind(this)} data={this.state.contents}></Toc>
        {this.getContentComponent()}
      </div>
    );
  }
}

export default App;
