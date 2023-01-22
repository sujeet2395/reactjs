import React, { Component } from 'react'
import UserContext, { ChannelContext } from './UserContext'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        (username) => {
                            return (
                                <ChannelContext.Consumer>{
                                    (channel) => {
                                        return <h1>Hello {username} and channel is {channel}</h1>
                                    }}
                                </ChannelContext.Consumer>
                            )
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentF