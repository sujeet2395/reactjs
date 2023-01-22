import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay]=useState(false)

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {
            display && <HookMouse/>
        }
    </div>
  )
}

export default MouseContainer