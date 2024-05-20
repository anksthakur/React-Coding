import React,{Component} from 'react';
class Render extends Component {
    // 2nd update state
    constructor(){
        super();
       this.state={
        email:"anup@gmail.com"
       }
    }
    render(){
        // phle render method call hoga frr name aayega , fir jab hum update krenge tab bhi render method call hoga frr update hoga
        // name ek baar he update hoga
        console.log("Render method called",this.props, this.state.email)
        return(
            <>
            <h1> I am render ...{this.props.name}</h1>
            <button onClick={()=>this.setState({email:"kanu@gmail.com"})}>Update Email</button>
            </> 
        )
    }
}
export default Render;