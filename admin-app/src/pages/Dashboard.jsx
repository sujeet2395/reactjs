import React from 'react'
import '../App.css'
import {BsArrowDownRight} from 'react-icons/bs'
import { Column } from '@ant-design/charts';
import { Table } from 'antd';

const columns = [
    {
      title: 'S.No.',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  const data1 = [];
  for (let i = 0; i < 46; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: Math.floor(Math.random()*10)+1,
      status: `London, Park Lane no. ${i}`,
    });
  }
function Dashboard() {
    const data = [
        {
          type: 'Jan',
          sales: 38,
        },
        {
          type: 'Feb',
          sales: 52,
        },
        {
          type: 'Mar',
          sales: 61,
        },
        {
          type: 'Apr',
          sales: 145,
        },
        {
          type: 'May',
          sales: 48,
        },
        {
          type: 'Jun',
          sales: 50,
        },
        {
          type: 'Jul',
          sales: 40,
        },
        {
          type: 'Aug',
          sales: 30,
        },
        {
            type: 'Sep',
            sales: 38,
        },
        {
            type: 'Oct',
            sales: 45,
        },
        {
            type: 'Nov',
            sales: 80,
          },
          {
            type: 'Dec',
            sales: 67,
          },
      ];

      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        color: ({ type }) => {
            return '#ffd333';
          },
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 1,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: 'Months',
          },
          sales: {
            alias: 'Income',
          },
        },
      };
  return (
    <div>
        <div className='mb-4'>
            <h3>Dashboard</h3>
            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 p-2 rounded-3' style={{'backgroundColor':'#f5f5f5'}}>
                    <div>
                        <p>Total</p><h5 className='mb-0'>$1100</h5>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6><BsArrowDownRight/>32%</h6>
                        <p className='mb-0'>Compare to April 2022</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 p-2 rounded-3' style={{'backgroundColor':'#f5f5f5'}}>
                    <div>
                        <p>Total</p><h5 className='mb-0'>$1100</h5>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='red'><BsArrowDownRight/>32%</h6>
                        <p className='mb-0'>Compare to April 2022</p>
                    </div>
                </div>
                <div className='d-flex justify-content-between align-items-end flex-grow-1 p-2 rounded-3' style={{'backgroundColor':'#f5f5f5'}}>
                    <div>
                        <p>Total</p><h5 className='mb-0'>$1100</h5>
                    </div>
                    <div className='d-flex flex-column align-items-end'>
                        <h6 className='green'><BsArrowDownRight/>32%</h6>
                        <p className='mb-0'>Compare to April 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <h3 className='mb-4'>Indian Statistics</h3>
            <Column {...config} />
        </div>
        <div className='mt-4'>
            <h3 className="mb-4">Recent Orders</h3>
            <div>
            <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    </div>
  )
}

export default Dashboard