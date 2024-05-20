import React, { Component } from 'react'

export default class SholudCompUpda extends Component {
    constructor(){
        super();
        this.state ={
            count : 0
        }
        }
        //jab koi chij update krni ho tbhi chlta hai , isme hum condition lga skte hai ki koi state update pe koi doosra function call na ho
        shouldComponentUpdate(){
            console.log("shouldComponentUpdate",this.state.count);
            if(this.state.count>5 && this.state.count<10){
                return true;
            }
            // return true ; krne se ye state ko update krne dega , ByDefault ye rendering ko block rkhta hai
           // return true;
        }
        componentDidUpdate(){
            console.log("componentDidUpdate")
        }
        // shouldComponentUpdate phle call hota hai
  render() {
    return (
      <div>
        <h1>I am Should Component Update  {this.state.count}</h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
      </div>
    )
  }
}