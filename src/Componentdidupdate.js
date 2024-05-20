import React,{Component} from 'react';
class Componentdidupdate extends Component{
    constructor(){
        super();
        console.log("constructor")
        this.state ={
            // name:"Anup"
            count:0
        }
    }
    // componentDidUpdate state ya props ke update hone pe he chlta hai
    componentDidUpdate(preProps,preState,snapShot){
        console.log("componentDidUpdate",preState.count,this.state.count)
        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
    }
    render(){
        console.log("render")
        return(
            <>
            <h1>I am Component Did Update  {this.state.count}</h1>
            {/* state update ke ley */}
            {/* <button onClick={()=>{this.setState({name:"Kanu"})}}>Update Name</button> */}
            {/* count update ke ley taki previousState mil ske */}
            <button onClick={()=>{this.setState({count:1})}}>Update Name</button>
            </>
        )
    }
}
export default Componentdidupdate;