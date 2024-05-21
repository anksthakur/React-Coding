import React, { Component, createRef } from 'react'

export default class Ref extends Component {
    constructor(){
        super()
        this.inputRef=createRef();
    }
    componentDidMount(){
        //console.log(this.inputRef.current.value = "7")
    }
    getVal(){
        // current value get krne ke ley
        console.log(this.inputRef.current.value)
        this.inputRef.current.style.backgroundColor = "blue";
    }
  render() {
    return (
      <div>
        <h1>Ref in React JS</h1>
        <input type='text' ref={this.inputRef} />
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    )
  }
}
