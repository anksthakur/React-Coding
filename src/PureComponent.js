import React, { PureComponent } from 'react'

export default class MyPureComponent extends PureComponent {
    constructor(){
        super()
        this.state = {
            count:1
        }
    }
  render() {
    console.log("check re-rending")
    return (
      <div>
        <h1>Pure Component : Count : {this.state.count}</h1>
        {/* state update nhi ho rhi hai fir bhi re render ho rha hai */}
        <button onClick={()=>{this.setState({count:1})}}>Update Count</button>
        {/* update krne pe re render ho rha hai */}
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button> */}
      </div>
    )
  }
}
