import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)

    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    // const isEven=()=>{
    //     let i=0
    //     while(i<2000000000)
    //         i++
    //     return counterOne%2==0
    // }
    const isEven = useMemo(()=>{
        let i=0
        while(i<2000000000)
            i++
        return counterOne%2==0
    },[counterOne])
  return (
    <div>
        <div>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            {/* <span>{isEven()?'Even':'Odd'}</span> Due to function call of isEven and it delays the rendering the counters value */}
            <span>{isEven?'Even':'Odd'}</span>
        </div>
        <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
    </div>
  )
}

export default Counter