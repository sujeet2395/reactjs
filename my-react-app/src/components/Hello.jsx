import React, { Component } from 'react'

class Hello extends Component{
    render(){
        const {name,heroName}=this.props
        //const {state1, state2}=this.state //destructuring
        return (
            <div>
                <h1>Hello {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}

export default Hello;