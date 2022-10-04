
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DANG_XUAT } from '../../Redux/action/Type/TypeND';
// import InfoUser from './InfoUser/InfoUser';
import InfoUser from '../User/InfoUser/InfoUser';
import InfoTicketBooked from './InfoTicketBooked/InfoTicketBooked';
import "./ProFileUser.scss";
import UpdateUser from './UpdateUser/UpdateUser';
export default function ProFileUser(props) {
    const onChange = (key) => {
        console.log(key);
    };
    let { UserLogin } = props
    // console.log(UserLogin, "lay ok")
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='userlogin'>
            <div className='title_right'>Xin Chào : {UserLogin.taiKhoan}</div>
            <div className="dropdown">
                <img className="img_info dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg" alt="" />
                <div className="dropdown-menu">
                    <NavLink to='/info' onClick={() => {
                        setIsModalOpen(true)
                    }} className="dropdown-item" >Thông Tin Tài Khoản</NavLink>
                    <a className="dropdown-item" href="#">Chuyển Quyền Amin</a>
                    <a onClick={() => {
                        dispatch({
                            type: DANG_XUAT,
                            dataDX: null
                        })
                    }} className="dropdown-item" href="#">Đăng xuất</a>
                </div>
            </div>
        </div >
    )
}
