import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition=(e)=>{
        console.log('mouse event')
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }
    componentWillUnmount()
    {
      console.log('componentwillunmount is called');
      window.removeEventListener('mousemove',this.logMousePosition)
    }
  render() {
    return (
      <div>X: {this.state.x} Y: {this.state.y}</div>
    )
  }
}

export default ClassMouse