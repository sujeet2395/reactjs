import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom'
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineBgColors } from 'react-icons/ai'
import { SiBrandfolder } from 'react-icons/si'
import { IoIosNotifications } from 'react-icons/io'
import { GiNotebook } from 'react-icons/gi'
import { FaClipboardList, FaBloggerB } from 'react-icons/fa'
import { BiCategory } from 'react-icons/bi'
import { ImBlog } from 'react-icons/im'
import { RiCustomerService2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;


const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >
                    <h5 className='text-white fs-5 text-center py-2 mb-0'>
                        <span className='sm-logo'>Hi L</span>
                        <span className='lg-logo'>Hi Learner</span>
                    </h5>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={({ key }) => {
                        if (key == 'signout') {

                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className="fs-5" />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <RiCustomerService2Line className="fs-5" />,
                            label: 'Customers',
                        },
                        {
                            key: 'products',
                            icon: <AiOutlineShoppingCart className="fs-5" />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'product',
                                    icon: <AiOutlineShoppingCart className="fs-5" />,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'product-list',
                                    icon: <AiOutlineShoppingCart className="fs-5" />,
                                    label: 'Product List',
                                },
                                {
                                    key: 'brand',
                                    icon: <SiBrandfolder className="fs-5" />,
                                    label: 'Brand',
                                },
                                {
                                    key: 'brand-list',
                                    icon: <SiBrandfolder className="fs-5" />,
                                    label: 'Brand List',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategory className="fs-5" />,
                                    label: 'Category',
                                },
                                {
                                    key: 'category-list',
                                    icon: <BiCategory className="fs-5" />,
                                    label: 'Category List',
                                },
                                {
                                    key: 'color',
                                    icon: <AiOutlineBgColors className="fs-5" />,
                                    label: 'Color',
                                },
                                {
                                    key: 'color-list',
                                    icon: <AiOutlineBgColors className="fs-5" />,
                                    label: 'Color List',
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <FaClipboardList className="fs-5" />,
                            label: 'Orders',
                        },
                        {
                            key: 'blogs',
                            icon: <FaBloggerB className="fs-5" />,
                            label: 'Blogs',
                            children: [
                                {
                                    key: 'blog',
                                    icon: <FaBloggerB className="fs-5" />,
                                    label: 'Add Blogs',
                                },
                                {
                                    key: 'blog-list',
                                    icon: <ImBlog className="fs-5" />,
                                    label: 'Blogs List',
                                },
                                {
                                    key: 'blog-category',
                                    icon: <FaBloggerB className="fs-5" />,
                                    label: 'Blogs Category',
                                },
                                {
                                    key: 'blog-category-list',
                                    icon: <ImBlog className="fs-5" />,
                                    label: 'Blogs Category List',
                                }
                            ]
                        },
                        {
                            key: 'enquiry',
                            icon: <GiNotebook className="fs-5" />,
                            label: 'Enquiries',
                        }
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className='d-flex justify-content-between ps-3 pe-5'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <div className='d-flex gap-2 align-items-center'>
                        <div className='position-relative'>
                            <IoIosNotifications className='fs-4' />
                            <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
                        </div>

                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" style={{ width: "40px", hight: "40px" }} alt="profile" />
                            </div>
                            <div className='dropdown'>
                                <div href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <h5 className='mb-0'>Sujit Kumar</h5>
                                    <p className='mb-0'>sujeet.sharma2395@gmail.com</p>
                                </div>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">View Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Signout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;