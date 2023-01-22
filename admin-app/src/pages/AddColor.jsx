import React from 'react'
import CustomInput from '../components/CustomInput'

function AddColor() {
  return (
    <div>
        <h3 className="mb-4">Add Color</h3>
        <div>
            <form action="">
                <CustomInput type='text' label='Enter the color'/>
                <button type='submit' className='btn btn-success mt-2'>Add Color</button>
            </form>
        </div>
    </div>
  )
}

export default AddColor