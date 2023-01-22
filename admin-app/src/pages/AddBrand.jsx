import React from 'react'
import CustomInput from '../components/CustomInput'

function AddBrand() {
  return (
    <div>
        <h3 className="mb-4">Add Brand</h3>
        <div>
            <form action="">
                <CustomInput type='text' label='Enter the brand'/>
                <button type='submit' className='btn btn-success mt-2'>Add Brand</button>
            </form>
        </div>
    </div>
  )
}

export default AddBrand