import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3 key={person.id}>{person.name} {person.age} {person.skill}</h3>
        </div>
    )
}

export default Person
