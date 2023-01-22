import React from 'react'
import CustomInput from '../components/CustomInput'

function AddCategory() {
  return (
    <div>
        <h3 className="mb-4">Add Category</h3>
        <div>
            <form action="">
                <CustomInput type='text' label='Enter the category'/>
                <button type='submit' className='btn btn-success mt-2'>Add Category</button>
            </form>
        </div>
    </div>
  )
}

export default AddCategory