import { Component } from "react"

export  class MainClassComponent extends Component{
    render(){
       return <h2>Hello iam from the Mainclasscomponent</h2>
    }
}

export  default class ChildComponent extends Component{
    render(){
       return <h2>Hello Iam from the default component</h2>
    }
}