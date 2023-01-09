import React from 'react'

function Welcome(props) {
    const {name,heroName}=props
    return(
        <div><h1>Welcome {name} a.k.a {heroName}</h1></div>
    )
}

export default Welcome;