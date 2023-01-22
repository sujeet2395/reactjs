import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function AddProduct() {
  const [desc, setDesc] = useState('');
  const handleDesc = (event) => {
    setDesc(event)
  }
  return (
    <div>
      <h3 className="mb-4">Add Product</h3>
      <div>
        <form action="">
          <CustomInput type='text' label='Enter the product' />
          <p className='mb-0'>Enter the description</p>
          <ReactQuill theme="snow" value={desc} onChange={(e) => handleDesc(e)} />
          <CustomInput type='number' i_class='mt-4' label='Enter the price' />
          <CustomInput type='text' i_class='mt-4' label='Enter the brand' />
          <CustomInput type='text' i_class='mt-4' label='Enter the category' />
          <CustomInput type='text' i_class='mt-4' label='Enter the color' />
          <p className='mb-0'>Upload Image</p>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Dragger>
          <button type='submit' className='btn btn-success mt-4'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct