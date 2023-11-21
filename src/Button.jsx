import React, { Component } from 'react'
import './App.css';
export default class Button extends Component {
  constructor(props)
  {
    super(props);
    this.state={input: "Sunny"}
  }
  handlechange=()=>
  {
    this.setState((prevState)=>({input: prevState.input="Cloudy"}))
  }
  render() {
    return (
     
      <div className='divi'>
      <table className='tab'>
      
      <h1>City: Coimbatore</h1>
      <h1>Weather: {this.state.input}</h1>
<button onClick={this.handlechange} >Refresh weather</button>
      </table>
      </div>
    )
  }
}