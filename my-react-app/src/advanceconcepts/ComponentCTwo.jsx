import React, { useContext } from 'react'
import { UserContextTwo, ChannelContextTwo } from './UserContextTwo'

function ComponentCTwo() {
    const user=useContext(UserContextTwo)
    const channel=useContext(ChannelContextTwo)
  return (
    <div>ComponentCTwo {user} - {channel}</div>
  )
}

export default ComponentCTwo