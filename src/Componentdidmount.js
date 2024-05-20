import React,{Component} from 'react';
class Componentdidmount extends Component{
    constructor(){
        super();
        console.log("constructor")
        this.state={
            name:"Anup"
        }
    }
    // ye render hone ke baad chlta hai aur isme hum api call krte hai aur state ya props ke update hone se bhi nhi chlta hai ye tab chlta hai jab hmara pura html ready ho
    componentDidMount(){
        console.log("Component Did Mount")
    }
    render(){
        console.log("Render")
        return(
            <>
            <h1> I am Component Did Mount {this.state.name}</h1>
            <button onClick={()=>{this.setState({name:"Kanu"})}}>Update Name</button>
            </>
        )
    }
}
export default Componentdidmount;