import React, { Component } from 'react'

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={()=>this.props.greetParent('child')}>Click</button>
            </div>
        )
    }
}

export default ChildComponent
