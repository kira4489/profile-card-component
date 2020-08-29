import React, { Component } from 'react';
import './App.css';
import "./Components/preview.css"
import Card from "./Components/Cards"


class App extends React.Component {
  constructor(){
    super();
    this.state = ({
      colors: ["purple","green","pink","red","orange"],
      color: ""
    });
    
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  componentDidMount() {
    this.handleColorChange();  
  }
  
  //Change the color of the App
  handleColorChange(){
    this.setState({
      color: this.state.colors[Math.floor(Math.random() * this.state.colors.length)]
    });
  }
  
  render() {
    return (
      <div id="app" className={this.state.color}>
        <Card changecolor={this.handleColorChange} />
      </div>
    );
  }
}

export default App;
