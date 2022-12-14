import { Component } from "react";

class Students extends Component{
    constructor(){
        super()
        this.state={
            welcome:"hiiii welocome to all ",
            people:{
                fname:"divya",
                lname:"royal",
                email:"div@email"
            },
            user:["divi","taehyung"]
        }
    }
    render(){
        return <div>
            <h2>{this.state.welcome}</h2>
            <hr/>
            <ul>
                {Object.values(this.state.people).map((val,i)=>
                <li key={i}>{val}</li>
                )}
            </ul>
            <hr/>
            <ul>
                {this.state.user.map((val,i)=>
                <li key={i}>{val}</li>
                )}
            </ul>
        </div>
    }
}
export default Students