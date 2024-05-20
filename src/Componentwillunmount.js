import React, { Component } from 'react'
import Students from './Students'

export default class Componentwillunmount extends Component {
constructor(){
    super();
    console.log("constructor")
    this.state={
        show:true
    }
}
  render() {
    return (
      <div>
        {/* thi.state.show agar true haito ? dikhaye :nhi to message dikhaye */}
        {
            this.state.show ? <Students/> : <h1>Student component removed</h1>
        }
        <h1>I am Component Will Unmount {this.state.show}</h1>
        <button onClick={()=>{this.setState({show:this.state.show})}}>Hide</button>
      </div>
    )
  }
}
