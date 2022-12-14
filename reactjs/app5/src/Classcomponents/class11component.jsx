import { Component } from "react"

class Students extends Component{
    constructor(){
        super()
        this.state={
            welcome:"hello welcome to all",
            person:{
                fname:"divya",
                lname:"royal"
            },
            user:["div","roy"]
        }
    }
    render(){
        return <div>
            <h2>{this.state.welocme}</h2>
            <hr/>
            <ul>
                {Object.values(this.state.person).map((val,i)=>
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