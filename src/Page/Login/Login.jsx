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
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(20, "Tối đa 10 kí tự"),
            matKhau: Yup.string().required("Mật khẩu không được để trống"),
        }),
        onSubmit: values => {
            dispatch(DangNhapAction(values))
            console.log("du lieu", values)
        },
    });
    return (
        <Fragment>
            <h1 className='title_login'>CHÀO MỪNG BẠN ĐẾN VỚI CINEMA MOVIE GROUP I</h1>
            <div className="login">
                <div className="login_left">
                </div>
                <div className='login_right'>
                    <div className="right_top">
                        <img src="./img/logomovie.png" alt="" />
                        <h1>NƠI THÕA SỨC ĐAM MÊ VỚI CÁC CỐT TRUYỆN LÔI CUỐN, HẤP DẪN</h1>
                    </div>
                    <h1 className='title_right'>Đăng Nhập Thành Viên</h1>
                    <form onSubmit={formik.handleSubmit} className='form_login'>
                        <div className="form-group">
                            <label htmlFor="taiKhoan">Tài Khoản</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.taiKhoan} type="text" className="form-control" id="taiKhoan" name='taiKhoan' placeholder="Nhập tài khoản" />
                            {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                <div className="text-danger">{formik.errors.taiKhoan}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="matKhau">Mật Khẩu</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.matKhau} type="text" className="form-control" id="matKhau" name='matKhau' placeholder="Nhập mật khẩu" />
                            {formik.touched.matKhau && formik.errors.matKhau ? (
                                <div className="text-danger">{formik.errors.matKhau}</div>
                            ) : null}
                        </div>
                        <div className='button_login'>

                            <button type='submit' className='btn btn-success'>Đăng Nhập</button>

                            <NavLink to="/register">
                                <button type='button' className='btn btn-success'>Đăng Ký tài khoản</button>
                            </NavLink>
                        </div>

                    </form>
                </div>
            </div>
            <FooterHome />
        </Fragment>
    )
}
