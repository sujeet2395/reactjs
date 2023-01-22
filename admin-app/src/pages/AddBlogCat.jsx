import React from 'react'
import CustomInput from '../components/CustomInput'

function AddBlogCat() {
  return (
    <div>
        <h3 className="mb-4">Add Blog Category</h3>
        <div>
            <form action="">
                <CustomInput type='text' label='Enter the blog category'/>
                <button type='submit' className='btn btn-success mt-2'>Add Blog Category</button>
            </form>
        </div>
    </div>
  )
}

export default AddBlogCat