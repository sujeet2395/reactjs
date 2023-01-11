import React, { Component } from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends Component {
  render() {
    const {count, incrementCount}=this.props
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Clicked {count} times</button>
        {this.props.name}
      </div>
    )
  }
}

export default WithCounter(ClickCounter, 5)