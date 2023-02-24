import React, { Fragment } from 'react'
import FooterHome from '../Home/Footer/FooterHome'
import { useFormik } from 'formik';
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import "./Login.scss"
import { useDispatch, useSelector } from 'react-redux';
import { DangNhapAction } from '../../Redux/action/QLUserAction';
import { QLNDReducer } from '../../Redux/Reducers/NDReducers';

export default function Login() {
    const { UserLogin } = useSelector((state) => state.QLNDReducer)
    // console.log(UserLogin, "lấy thành công")
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            matKhau: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(50, "Tối đa 50 kí tự"),
            matKhau: Yup.string().required("Mật khẩu không được để trống"),
        }),
        onSubmit: values => {
            dispatch(DangNhapAction(values))
            console.log("du lieu", values)
        },
    });
    return (
        <Fragment>
            {/* <h1 className='title_login'>CHÀO MỪNG BẠN ĐẾN VỚI CINEMA MOVIE GROUP I</h1> */}
            <div className="login flex justify-center items-center">

                <div className='login_right'>
                    <div className="right_top">
                        <img src="./img/logomovie.png" alt="" />
                        {/* <h1>NƠI THÕA SỨC ĐAM MÊ VỚI CÁC CỐT TRUYỆN LÔI CUỐN, HẤP DẪN</h1> */}
                    </div>
                    <h1 className='title_right '>Đăng Nhập Thành Viên</h1>
                    <form onSubmit={formik.handleSubmit} className='form_login'>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.email} type="text" className="form-control" id="email" name='email' placeholder="Nhập Email" />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="matKhau">Mật Khẩu</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.matKhau} type="password" className="form-control" id="matKhau" name='matKhau' placeholder="Nhập mật khẩu" />
                            {formik.touched.matKhau && formik.errors.matKhau ? (
                                <div className="text-danger">{formik.errors.matKhau}</div>
                            ) : null}
                        </div>
                        <div className='button_login flex flex-col '>

                            <button type='submit' className='btn btn-succ'>Đăng Nhập</button>

                            <NavLink to="/register" className="flex items-center justify-center mt-4">
                                <span className='text-white'>Bạn chưa có tài khoản?</span>
                                <button type='button' className='btn btn-sc'>Đăng Ký tài khoản</button>
                            </NavLink>
                        </div>

                    </form>
                </div>
            </div>
            {/* <FooterHome /> */}
        </Fragment>
    )
}
