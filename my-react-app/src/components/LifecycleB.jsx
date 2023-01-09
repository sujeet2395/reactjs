import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sujit'
        }
        console.log('Lifecycle B constructor');
    }
    
    static getDerivedStateFromProps()
    {
        console.log('Lifecycle B getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Lifecycle B componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Lifecycle B getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('Lifecycle B componentDidUpdate');
    }
    render() {
        console.log('Lifecycle B render');
        return (
            <div>
                
            </div>
        )
    }
}

export default LifecycleB
