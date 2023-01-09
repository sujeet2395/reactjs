import React from 'react'
import Person from './Person'

function NameList() {
    const names=[{
        id:"1",
        name:"Bruce",
        age:28,
        skill:"React"
    },{
        id:"2",
        name:"Clark",
        age:25,
        skill:"Angular"
    },{
        id:"3",
        name:"Diana",
        age:24,
        skill:"Vue"
    }]
    //const nameList=names.map((name)=><h3 key={name.id}>{name.name} {name.age} {name.skill}</h3>)
    const persons=names.map((person)=><Person key={person.id} person={person}/>)
    return (
        <div>
            {persons}
        </div>
    )
}

export default NameList
