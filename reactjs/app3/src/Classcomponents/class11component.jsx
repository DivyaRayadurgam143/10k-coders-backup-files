import { Component } from "react";

class Students extends Component{
    constructor(){
        super()
        this.state={
            what:" hello world",
            why:{
                fname:"divya",
                lname:"royal",
                email:"divya@gmail",
                role:"developer"
            },
            who:["divya","jungkook","taehyung"]
        }
    }
    render(){
        return <div>
            <h2>{this.state.what}</h2>
            <hr/>
            <ul>
                {Object.values(this.state.why).map((val,i)=>
                <li key={i}>{val}</li>
                )}
            </ul>
            <hr/>
            <ul>
                {this.state.who.map((val,i)=>
                <li key={i}>{val}</li>
                )}
            </ul>
        </div>
    }
}
export default Students