import React, { Fragment } from 'react'
import { Button, Table } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { history } from '../../../App';
import { layDanhSachNguoiDungAction, xoaNguoiDungAction } from '../../../Redux/action/QLUserAction';

const { Search } = Input;

export default function Users() {

    const { arrUserDefault } = useSelector(state => state.QLNDReducer)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction())
    }, [])

    console.log(arrUserDefault)
    const columns = [
        {
            title: 'STT',
            key: 'index',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
        },
        {
            title: 'SĐT',
            dataIndex: 'soDT',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },

        {
            title: 'Loại người dùng',
            dataIndex: 'maLoaiNguoiDung',
        },
        {
            title: 'Hành động',
            dataIndex: 'taiKhoan',
            render: (text, user) => {
                return <Fragment>
                    <NavLink key={1} className="mr-2 text-2xl " to={`/admin/users/edituser/${user.taiKhoan}`}> <EditOutlined style={{ color: 'blue' }} /> </NavLink>
                    <span style={{ cursor: 'pointer' }} key={2} className="text-2xl" onClick={() => {

                        if (window.confirm('Bạn có chắc muốn xóa tài khoản ' + user.taiKhoan)) {
                            dispatch(xoaNguoiDungAction(user.taiKhoan))
                        }

                    }}><DeleteOutlined style={{ color: 'red' }} /></span>

                </Fragment>
            },
        },
    ];

    const data = arrUserDefault;

    const onSearch = value => {
        dispatch(layDanhSachNguoiDungAction(value))
    }

    return (
        <div className='container'>

            <h3 className='text-4xl text-center' style={{fontWeight: 700, lineHeight:1.3, letterSpacing:0.5, color: '#333333'}}>Quản lý người dùng</h3>
            <Button className='mb-5' onClick={() => {
                history.push(('/admin/users/adduser'))
            }}>Thêm người dùng</Button>

            <Search
                className="mb-5"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"

                onSearch={onSearch}
            ></Search>

            <Table columns={columns} dataSource={data} rowKey={"taiKhoan"} />
        </div>
    )
}
