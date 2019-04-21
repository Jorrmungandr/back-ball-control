import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Key extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <button>{this.props.text}</button>
    );
  }
}

class Pad extends Component {
  render() {
    return (
      <div>
        <Key text={this.props.text.split(' ')[0]}/>
        <Key text={this.props.text.split(' ')[1]}/>
        <Key text={this.props.text.split(' ')[2]}/>
        <Key text={this.props.text.split(' ')[3]}/>
      </div>
    );
  }
}

class ControlKeyPad extends Component {
  render() {
    return(
      <Pad text="Up Down Right Left"/>
    );
  }
}

export default ControlKeyPad;
