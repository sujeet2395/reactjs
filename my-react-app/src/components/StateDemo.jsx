import React, { Component } from 'react'

class StateDemo extends Component{
    constructor(props){
        super(props)
        this.state={
            message:'Welcome Visitor'
        }
    }

    handleChange()
    {
        this.setState({
            message:"Thanks for subscribing."
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.handleChange()}>Subscribe</button>
            </div>
        )
    }
}

export default StateDemo;