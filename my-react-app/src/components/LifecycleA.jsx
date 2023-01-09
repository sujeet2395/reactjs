import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sujit'
        }
        console.log('Lifecycle A constructor');
    }
    
    static getDerivedStateFromProps()
    {
        console.log('Lifecycle A getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('Lifecycle A getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('Lifecycle A componentDidUpdate');
    }
    changeHandler=()=>{
        this.setState({
            name:'Codevolution'
        })
    }
    render() {
        console.log('Lifecycle A render');
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeHandler}>Click</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
