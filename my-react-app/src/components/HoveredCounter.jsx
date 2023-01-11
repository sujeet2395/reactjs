import React, { Component } from 'react'
import WithCounter from './WithCounter'

class HoveredCounter extends Component {
    
  render() {
    const {count, incrementCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Clickced {count} times</h1>
      </div>
    )
  }
}

export default WithCounter(HoveredCounter, 10)