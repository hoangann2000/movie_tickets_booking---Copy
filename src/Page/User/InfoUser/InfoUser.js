import React from 'react'
import { useSelector } from 'react-redux'
// import "../infoUser.scss"
import "./InfoUser.scss"

export default function InfoUser(props) {
    // console.log(props.UserLogin, "lấy thành công")
    const { UserLogin } = useSelector(state => state.QLNDReducer)
    let { taiKhoan, maLoaiNguoiDung, hoTen, soDT, email } = UserLogin
    console.log('userLogin:::::::::::::', UserLogin)
    return (
        <div className='thongtintaikhoan'>
            <div className="thongtintaikhoan__content">
                <div className='thongtintaikhoan__item'>
                    <p className='item__title'>Tài Khoản</p>
                    <p className='item__content'>{taiKhoan}</p>
                </div>
                <div className='thongtintaikhoan__item'>
                    <p className='item__title'>Họ và Tên</p>
                    <p className='item__content'>{hoTen}</p>
                </div>
                <div className='thongtintaikhoan__item'>
                    <p className='item__title'>Số Điện Thoại</p>
                    <p className='item__content'>{soDT}</p>
                </div>
                <div className='thongtintaikhoan__item'>
                    <p className='item__title'>Email</p>
                    <p className='item__content'>{email}</p>
                </div>
            </div>
        </div>
    )
}
