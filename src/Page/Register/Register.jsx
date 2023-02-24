import React, { Fragment } from 'react'
import FooterHome from '../Home/Footer/FooterHome'
import { useFormik } from 'formik';
import * as Yup from "yup";
import "./Register.scss"
import { GPOUP_ID } from '../../Util/setting';
import { useDispatch } from "react-redux";
import { DangKyAction } from '../../Redux/action/QLUserAction';
import { NavLink } from 'react-router-dom';

export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            // tai_khoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            // maNhom: GPOUP_ID,
        },
        validationSchema: Yup.object({
            // tai_khoan: Yup.string().required("Tài khoản không được để trống").min(2, "Tối thiểu đủ 2 kí tự").max(20, "Tối đa 10 kí tự").matches(/^[A-Z a-z]+$/, "Tài khoản không được có kí tự đặc biệt"),
            matKhau: Yup.string().required("Mật khẩu không được để trống"),
            email: Yup.string().required("Mật khẩu không để trống").email("Email không đúng format"),
            soDt: Yup.string().required("Số điện thoại không để trống"),
            hoTen: Yup.string().required("Họ tên không để trống")
            // .matches(/^[A-Z a-z]+$/, "Họ tên không hợp lệ")
        }),
        onSubmit: values => {
            console.log("du lieu", values)
            dispatch(DangKyAction(values))
        },
    });
    return (
        <Fragment>
            <div className="Rigister">
                <div className='Rigister_right'>
                    <div className="right_top">
                        <img src="./img/logomovie.png" alt="" />
                    </div>
                    <h1 className='title_right'>Đăng Ký tài Khoản Thành Viên</h1>
                    <form onSubmit={formik.handleSubmit} className='form_rigister'>
                        {/* <div className="form-group">
                            <label htmlFor="tai_khoan">Tài Khoản</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.tai_khoan} type="text" className="form-control" id="tai_khoan" name='tai_khoan' placeholder="Nhập tài khoản" />
                            {formik.touched.tai_khoan && formik.errors.tai_khoan ? (
                                <div className="text-danger">{formik.errors.tai_khoan}</div>
                            ) : null}
                        </div> */}
                        <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.email} type="email" className="form-control" id="email" name='email' placeholder="Nhập Email" />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-danger">{formik.errors.email}</div>
                            ) : null}
                        </div>
                            <label htmlFor="matKhau">Mật Khẩu</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.matKhau} type="password" className="form-control" id="matKhau" name='matKhau' placeholder="Nhập mật khẩu" />
                            {formik.touched.matKhau && formik.errors.matKhau ? (
                                <div className="text-danger">{formik.errors.matKhau}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="soDt">Số Điện Thoại</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.soDt} type="text" className="form-control" id="soDt" name='soDt' placeholder="Nhập số điện thoại" />
                            {formik.touched.soDt && formik.errors.soDt ? (
                                <div className="text-danger">{formik.errors.soDt}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="hoTen">Họ Tên</label>
                            <input onChange={formik.handleChange}
                                value={formik.values.hoTen} type="text" className="form-control" id="hoTen" name='hoTen' placeholder="Nhập họ và tên" />
                            {formik.touched.hoTen && formik.errors.hoTen ? (
                                <div className="text-danger">{formik.errors.hoTen}</div>
                            ) : null}
                        </div>
                        <div className='flex flex-col w-full'>
                        <button type='submit' className='btn btn-succ'>Đăng Ký</button>
                        <NavLink to="/login" className="flex items-center justify-center mt-4">
                            <span className='text-white'> Bạn đã có tài khoản?</span>
                            <button type='button' className='btn-sc'>Quay Lại Đăng Nhập</button>
                        </NavLink>
                        </div>
                    </form>
                </div>
            </div>
            {/* <FooterHome /> */}
        </Fragment>
    )
}
