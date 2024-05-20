import React,{Component} from 'react';
class Constructor extends Component {
    // constructor(){
    //     //super use krna he pdta hai class comp m constructor ko use krne ke ley aur parent structor jo hota hai uhsko call krne ke ley, super ko call krna pdta hai super javascript ka part hota hai
    //     super();
    //     console.log("constructor")
    // }
    // constructor component bnane se phle run karwane ke ley
    constructor(){
        super();
        this.state={
            data:"Anup"
        }
    } 
    render (){
        // console.log("Render")
        return(
            <h1>Hi I am a Constructor....{this.state.data}</h1>
        )
    }
}
export default Constructor;